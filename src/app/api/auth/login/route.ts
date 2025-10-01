import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

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

    // Buscar usuário no banco (verificar admin, modelo e assinante)
    let user = null;
    let userType = null;
    let userId = null;
    let userName = null;
    let userFoto = null;

    // Verificar se é admin
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (admin) {
      const senhaValida = await bcrypt.compare(password, admin.senha);
      if (!senhaValida) {
        return NextResponse.json(
          { error: 'Email ou senha inválidos' },
          { status: 401 }
        );
      }
      user = admin;
      userType = 'admin';
      userId = admin.id;
      userName = admin.nome;
      userFoto = admin.foto;
    }

    // Verificar se é modelo
    if (!user) {
      const modelo = await prisma.modelo.findUnique({ 
        where: { email }
      });
      if (modelo) {
        const senhaValida = await bcrypt.compare(password, modelo.senha);
        if (!senhaValida) {
          return NextResponse.json(
            { error: 'Email ou senha inválidos' },
            { status: 401 }
          );
        }
        user = modelo;
        userType = 'modelo';
        userId = modelo.id;
        userName = modelo.nome;
        userFoto = modelo.foto;
      }
    }

    // Verificar se é assinante
    if (!user) {
      const assinante = await prisma.assinante.findUnique({ 
        where: { email }
      });
      if (assinante) {
        const senhaValida = await bcrypt.compare(password, assinante.senha);
        if (!senhaValida) {
          return NextResponse.json(
            { error: 'Email ou senha inválidos' },
            { status: 401 }
          );
        }
        user = assinante;
        userType = 'assinante';
        userId = assinante.id;
        userName = assinante.nome;
        userFoto = assinante.foto;
      }
    }

    // Se não encontrou nenhum usuário
    if (!user) {
      return NextResponse.json(
        { error: 'Email ou senha inválidos' },
        { status: 401 }
      );
    }

    // Criar token com o tipo correto do usuário
    const fakeToken = Buffer.from(JSON.stringify({
      userId: userId,
      email: email,
      tipo: userType,
      exp: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 dias
    })).toString('base64');

    // Determinar redirect baseado no tipo de usuário
    const redirectTo = userType === 'admin' ? '/admin/dashboard' 
                     : userType === 'modelo' ? '/modelo/dashboard'
                     : '/assinante/dashboard';

    // Criar resposta e setar cookie
    const response = NextResponse.json({
      success: true,
      message: 'Login realizado com sucesso!',
      user: {
        id: userId,
        nome: userName,
        email: email,
        foto: userFoto,
        tipo: userType
      },
      redirectTo: redirectTo
    });

    // Setar cookie de autenticação
    response.cookies.set('auth_token', fakeToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: remember ? 7 * 24 * 60 * 60 : 24 * 60 * 60, // 7 dias ou 1 dia
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Erro no login:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}