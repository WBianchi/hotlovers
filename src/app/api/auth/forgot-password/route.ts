import { NextRequest, NextResponse } from 'next/server';
import AuthService from '@/lib/auth';
import DatabaseService from '@/lib/database';
import EmailService from '@/lib/email';

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

    if (!AuthService.isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Buscar usuário no banco
    const user = await DatabaseService.findUserByEmail(email);
    
    // Por segurança, sempre retornar sucesso (mesmo que o email não exista)
    // Isso evita que atacantes descubram quais emails estão cadastrados
    const response = NextResponse.json({
      success: true,
      message: 'Se este email estiver cadastrado, você receberá as instruções para recuperar sua senha.'
    });

    // Se o usuário existe, enviar email de recuperação
    if (user && user.ativo) {
      try {
        // Gerar código de reset
        const resetCode = AuthService.generateResetCode();
        
        // Salvar token no banco (expira em 1 hora)
        await DatabaseService.setPasswordResetToken(email, resetCode);
        
        // Enviar email
        await EmailService.sendPasswordResetEmail(user.email, user.nome, resetCode);
        
      } catch (emailError) {
        console.error('Erro ao enviar email de recuperação:', emailError);
        // Não revelar erro para o usuário por segurança
      }
    }

    return response;

  } catch (error) {
    console.error('Erro na recuperação de senha:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}