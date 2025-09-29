import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Token não encontrado' },
        { status: 401 }
      );
    }

    // Retornar dados mockados temporariamente
    return NextResponse.json({
      success: true,
      user: {
        id: '1',
        nome: 'Usuário Teste',
        email: 'teste@hotlovers.com',
        foto: null,
        tipo: 'modelo',
        emailVerificado: true,
        premium: false
      }
    });

  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}