import { NextRequest, NextResponse } from 'next/server';
import AuthService from '@/lib/auth';
import DatabaseService from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Token não encontrado' },
        { status: 401 }
      );
    }

    // Verificar token
    const payload = AuthService.verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: 'Token inválido' },
        { status: 401 }
      );
    }

    // Buscar usuário no banco
    const user = await DatabaseService.findUserById(payload.userId);
    if (!user || !user.ativo) {
      return NextResponse.json(
        { error: 'Usuário não encontrado ou inativo' },
        { status: 401 }
      );
    }

    // Retornar dados do usuário (sem senha)
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        foto: user.foto,
        tipo: user.tipo,
        emailVerificado: user.emailVerificado
      }
    });

  } catch (error) {
    console.error('Erro ao verificar usuário:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}