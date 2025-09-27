import { NextRequest, NextResponse } from 'next/server';
import AuthService from '@/lib/auth';
import DatabaseService from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    const { email, password, remember } = await request.json();

    // Validações básicas
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 }
      );
    }

    if (!AuthService.isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Buscar usuário no banco
    const user = await DatabaseService.findUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { error: 'Email ou senha incorretos' },
        { status: 401 }
      );
    }

    // Verificar se a conta está ativa
    if (!user.ativo) {
      return NextResponse.json(
        { error: 'Conta desativada. Entre em contato com o suporte.' },
        { status: 403 }
      );
    }

    // Verificar senha
    const isPasswordValid = await AuthService.verifyPassword(password, user.senha);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Email ou senha incorretos' },
        { status: 401 }
      );
    }

    // Gerar tokens JWT
    const payload = {
      userId: user.id,
      email: user.email,
      tipo: user.tipo
    };

    const token = AuthService.generateToken(payload);
    const refreshToken = AuthService.generateRefreshToken(payload);

    // Definir cookies
    const response = NextResponse.json({
      success: true,
      message: 'Login realizado com sucesso',
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        foto: user.foto,
        tipo: user.tipo,
        emailVerificado: user.emailVerificado
      },
      redirectTo: AuthService.getRedirectPath(user.tipo)
    });

    // Configurar cookies seguros
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      maxAge: remember ? 7 * 24 * 60 * 60 : 24 * 60 * 60, // 7 dias ou 24 horas
      path: '/'
    };

    response.cookies.set('auth_token', token, cookieOptions);
    response.cookies.set('refresh_token', refreshToken, {
      ...cookieOptions,
      maxAge: 7 * 24 * 60 * 60 // 7 dias para refresh token
    });

    console.log('✅ Login API - Cookie definido para usuário:', user.email, user.tipo); // DEBUG
    console.log('✅ Login API - Token gerado:', token.substring(0, 20) + '...'); // DEBUG

    return response;

  } catch (error) {
    console.error('Erro no login:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}