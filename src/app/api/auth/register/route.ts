import { NextRequest, NextResponse } from 'next/server';
import AuthService from '@/lib/auth';
import DatabaseService from '@/lib/database';
import EmailService from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { nome, email, dataNascimento, password, confirmPassword, tipo, termos, newsletter } = await request.json();

    // Validações básicas
    if (!nome || !email || !dataNascimento || !password || !confirmPassword || !tipo) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }

    if (!termos) {
      return NextResponse.json(
        { error: 'Você deve aceitar os termos de uso' },
        { status: 400 }
      );
    }

    // Validar tipo de usuário (só permite modelo e assinante no cadastro público)
    if (!['modelo', 'assinante'].includes(tipo)) {
      return NextResponse.json(
        { error: 'Tipo de usuário inválido' },
        { status: 400 }
      );
    }

    // Validar email
    if (!AuthService.isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Validar senha
    if (!AuthService.isValidPassword(password)) {
      return NextResponse.json(
        { error: 'Senha deve ter pelo menos 8 caracteres e conter pelo menos 1 número' },
        { status: 400 }
      );
    }

    // Validar confirmação de senha
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: 'Senhas não coincidem' },
        { status: 400 }
      );
    }

    // Validar idade (18+)
    if (!AuthService.isValidAge(dataNascimento)) {
      return NextResponse.json(
        { error: 'Você deve ter pelo menos 18 anos para se cadastrar' },
        { status: 400 }
      );
    }

    // Verificar se o email já existe
    const existingUser = await DatabaseService.findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'Este email já está em uso' },
        { status: 409 }
      );
    }

    // Hash da senha
    const hashedPassword = await AuthService.hashPassword(password);

    // Gerar token de verificação de email
    const verificationToken = AuthService.generateVerificationCode();

    // Criar usuário no banco
    const newUser = await DatabaseService.createUser({
      nome,
      email,
      senha: hashedPassword,
      dataNascimento,
      tipo,
      ativo: true,
      emailVerificado: false, // Precisa verificar email para modelos
      verificationToken
    });

    // Enviar email de boas-vindas
    try {
      await EmailService.sendWelcomeEmail(email, nome, tipo);
      
      // Para modelos, também enviar email de verificação
      if (tipo === 'modelo') {
        await EmailService.sendEmailVerification(email, nome, verificationToken);
      }
    } catch (emailError) {
      console.error('Erro ao enviar email:', emailError);
      // Não falhar o cadastro por erro de email
    }

    // Gerar tokens JWT (fazer login automático)
    const payload = {
      userId: newUser.id,
      email: newUser.email,
      tipo: newUser.tipo
    };

    const token = AuthService.generateToken(payload);
    const refreshToken = AuthService.generateRefreshToken(payload);

    const response = NextResponse.json({
      success: true,
      message: tipo === 'modelo' 
        ? 'Cadastro realizado! Verifique seu email para ativar todas as funcionalidades.'
        : 'Cadastro realizado com sucesso!',
      user: {
        id: newUser.id,
        nome: newUser.nome,
        email: newUser.email,
        foto: newUser.foto,
        tipo: newUser.tipo,
        emailVerificado: newUser.emailVerificado
      },
      redirectTo: AuthService.getRedirectPath(newUser.tipo),
      needsEmailVerification: tipo === 'modelo' && !newUser.emailVerificado
    });

    // Configurar cookies seguros
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      maxAge: 24 * 60 * 60, // 24 horas
      path: '/'
    };

    response.cookies.set('auth_token', token, cookieOptions);
    response.cookies.set('refresh_token', refreshToken, {
      ...cookieOptions,
      maxAge: 7 * 24 * 60 * 60 // 7 dias para refresh token
    });

    return response;

  } catch (error) {
    console.error('Erro no cadastro:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}