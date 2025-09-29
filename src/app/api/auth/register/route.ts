import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { nome, email, dataNascimento, password, confirmPassword, tipo, termos } = await request.json();

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

    // Validar tipo de usuário
    if (!['modelo', 'assinante'].includes(tipo)) {
      return NextResponse.json(
        { error: 'Tipo de usuário inválido' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Validar senha
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Senha deve ter pelo menos 8 caracteres' },
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
    const birthDate = new Date(dataNascimento);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
      return NextResponse.json(
        { error: 'Você deve ter pelo menos 18 anos para se cadastrar' },
        { status: 400 }
      );
    }

    // Retornar sucesso (implementação completa será feita depois)
    return NextResponse.json({
      success: true,
      message: 'Cadastro realizado com sucesso! Funcionalidade será implementada em breve.',
      redirectTo: tipo === 'modelo' ? '/modelo/dashboard' : '/assinante/dashboard'
    });

  } catch (error) {
    console.error('Erro no cadastro:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}