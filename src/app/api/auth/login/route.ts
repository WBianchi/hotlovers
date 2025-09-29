import { NextRequest, NextResponse } from 'next/server';

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

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Retornar sucesso temporário (implementação completa será feita depois)
    return NextResponse.json({
      success: true,
      message: 'Login realizado com sucesso! Funcionalidade será implementada em breve.',
      user: {
        id: '1',
        nome: 'Usuário Teste',
        email: email,
        foto: null,
        tipo: 'modelo'
      },
      redirectTo: '/modelo/dashboard'
    });

  } catch (error) {
    console.error('Erro no login:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}