import { NextRequest, NextResponse } from 'next/server';
import AuthService from '@/lib/auth';
import DatabaseService from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    const { token, password, confirmPassword } = await request.json();

    // Validações básicas
    if (!token || !password || !confirmPassword) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
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

    // Buscar usuário pelo token de reset
    const user = await DatabaseService.findUserByResetToken(token);
    if (!user) {
      return NextResponse.json(
        { error: 'Token inválido ou expirado' },
        { status: 400 }
      );
    }

    // Hash da nova senha
    const hashedPassword = await AuthService.hashPassword(password);

    // Atualizar senha no banco
    await DatabaseService.updatePassword(user.id, hashedPassword);

    // Limpar token de reset
    await DatabaseService.clearPasswordResetToken(user.id);

    return NextResponse.json({
      success: true,
      message: 'Senha alterada com sucesso! Você já pode fazer login.'
    });

  } catch (error) {
    console.error('Erro ao redefinir senha:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}