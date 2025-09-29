import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validações básicas
    if (!email) {
      return NextResponse.json(
        { error: 'Email é obrigatório' },
        { status: 400 }
      );
    }

    // Validação simples de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Por segurança, sempre retornar sucesso (mesmo que o email não exista)
    // Isso evita que atacantes descubram quais emails estão cadastrados
    return NextResponse.json({
      success: true,
      message: 'Se este email estiver cadastrado, você receberá as instruções para recuperar sua senha.'
    });

  } catch (error) {
    console.error('Erro na recuperação de senha:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}