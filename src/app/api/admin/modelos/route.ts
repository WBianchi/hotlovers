import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import jwt from 'jsonwebtoken';

// Função para verificar se é admin
async function verifyAdmin(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  
  if (!token) {
    return { error: 'Token não encontrado', status: 401 };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    
    if (decoded.tipo !== 'admin') {
      return { error: 'Acesso negado. Apenas administradores.', status: 403 };
    }

    return { userId: decoded.userId, email: decoded.email };
  } catch (error) {
    return { error: 'Token inválido', status: 401 };
  }
}

// GET - Buscar todas as modelos com filtros
export async function GET(request: NextRequest) {
  try {
    const adminCheck = await verifyAdmin(request);
    if ('error' in adminCheck) {
      return NextResponse.json({ error: adminCheck.error }, { status: adminCheck.status });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || '';
    const verificada = searchParams.get('verificada');
    const orderBy = searchParams.get('orderBy') || 'criadoEm';
    const order = searchParams.get('order') || 'desc';

    const skip = (page - 1) * limit;

    // Construir filtros
    const where: any = {
      tipo: 'modelo'
    };

    if (search) {
      where.OR = [
        { nome: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { username: { contains: search, mode: 'insensitive' } }
      ];
    }

    if (verificada !== null && verificada !== undefined) {
      where.verificada = verificada === 'true';
    }

    // Buscar modelos
    const [modelos, totalCount] = await Promise.all([
      prisma.usuario.findMany({
        where,
        select: {
          id: true,
          nome: true,
          email: true,
          username: true,
          avatar: true,
          verificada: true,
          ativa: true,
          criadoEm: true,
          atualizadoEm: true,
          ultimoLogin: true,
          bio: true,
          localizacao: true,
          // Incluir métricas calculadas
          transacoesRecebidas: {
            where: {
              status: 'concluida',
              criadoEm: {
                gte: new Date(new Date().setDate(new Date().getDate() - 30)) // últimos 30 dias
              }
            },
            select: {
              valor: true,
              tipo: true
            }
          },
          assinaturasRecebidas: {
            where: {
              status: 'ativa'
            },
            select: {
              id: true
            }
          },
          avaliacoes: {
            select: {
              nota: true
            }
          }
        },
        skip,
        take: limit,
        orderBy: {
          [orderBy]: order
        }
      }),
      prisma.usuario.count({ where })
    ]);

    // Calcular métricas para cada modelo
    const modelosComMetricas = modelos.map(modelo => {
      const receita = modelo.transacoesRecebidas.reduce((sum, t) => sum + t.valor, 0);
      const assinantes = modelo.assinaturasRecebidas.length;
      const avaliacoes = modelo.avaliacoes;
      const rating = avaliacoes.length > 0 
        ? avaliacoes.reduce((sum, a) => sum + a.nota, 0) / avaliacoes.length 
        : 0;

      // Simular outras métricas (implementar tracking real posteriormente)
      const visualizacoes = Math.floor(Math.random() * 20000) + 5000;
      const curtidas = Math.floor(Math.random() * 10000) + 2000;

      return {
        ...modelo,
        receita,
        assinantes,
        rating: Math.round(rating * 10) / 10,
        visualizacoes,
        curtidas,
        status: modelo.ultimoLogin && 
                new Date(modelo.ultimoLogin) > new Date(Date.now() - 15 * 60 * 1000) 
                ? 'online' : 'offline',
        ultimaAtividade: modelo.ultimoLogin 
          ? `${Math.floor((Date.now() - new Date(modelo.ultimoLogin).getTime()) / (1000 * 60))} min atrás`
          : 'Nunca',
        // Remove campos sensíveis
        transacoesRecebidas: undefined,
        assinaturasRecebidas: undefined,
        avaliacoes: undefined
      };
    });

    // Calcular estatísticas gerais
    const stats = {
      total: totalCount,
      ativas: modelos.filter(m => m.ativa).length,
      verificadas: modelos.filter(m => m.verificada).length,
      receitaTotal: modelosComMetricas.reduce((sum, m) => sum + m.receita, 0),
      ratingMedio: modelosComMetricas.reduce((sum, m) => sum + m.rating, 0) / modelosComMetricas.length || 0
    };

    return NextResponse.json({
      modelos: modelosComMetricas,
      pagination: {
        page,
        limit,
        total: totalCount,
        pages: Math.ceil(totalCount / limit)
      },
      stats
    });

  } catch (error) {
    console.error('Erro ao buscar modelos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// POST - Criar nova modelo (raramente usado pelo admin, mais comum pelo cadastro)
export async function POST(request: NextRequest) {
  try {
    const adminCheck = await verifyAdmin(request);
    if ('error' in adminCheck) {
      return NextResponse.json({ error: adminCheck.error }, { status: adminCheck.status });
    }

    const body = await request.json();
    const { nome, email, username, senha, bio, localizacao } = body;

    // Validações
    if (!nome || !email || !username || !senha) {
      return NextResponse.json(
        { error: 'Nome, email, username e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Verificar se já existe
    const existing = await prisma.usuario.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Email ou username já existe' },
        { status: 409 }
      );
    }

    // Criar modelo
    const bcrypt = require('bcryptjs');
    const senhaHash = await bcrypt.hash(senha, 12);

    const novaModelo = await prisma.usuario.create({
      data: {
        nome,
        email,
        username,
        senha: senhaHash,
        tipo: 'modelo',
        bio: bio || null,
        localizacao: localizacao || null,
        verificada: false,
        ativa: true
      },
      select: {
        id: true,
        nome: true,
        email: true,
        username: true,
        criadoEm: true
      }
    });

    return NextResponse.json({
      success: true,
      modelo: novaModelo,
      message: 'Modelo criada com sucesso'
    });

  } catch (error) {
    console.error('Erro ao criar modelo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// PUT - Atualizar múltiplas modelos (ações em lote)
export async function PUT(request: NextRequest) {
  try {
    const adminCheck = await verifyAdmin(request);
    if ('error' in adminCheck) {
      return NextResponse.json({ error: adminCheck.error }, { status: adminCheck.status });
    }

    const body = await request.json();
    const { modeloIds, action, data } = body;

    if (!modeloIds || !Array.isArray(modeloIds) || !action) {
      return NextResponse.json(
        { error: 'IDs das modelos e ação são obrigatórios' },
        { status: 400 }
      );
    }

    let updateData: any = {};

    switch (action) {
      case 'verify':
        updateData.verificada = true;
        break;
      case 'unverify':
        updateData.verificada = false;
        break;
      case 'activate':
        updateData.ativa = true;
        break;
      case 'deactivate':
        updateData.ativa = false;
        break;
      case 'update':
        updateData = data || {};
        break;
      default:
        return NextResponse.json(
          { error: 'Ação inválida' },
          { status: 400 }
        );
    }

    // Atualizar modelos
    const result = await prisma.usuario.updateMany({
      where: {
        id: { in: modeloIds },
        tipo: 'modelo'
      },
      data: updateData
    });

    return NextResponse.json({
      success: true,
      updated: result.count,
      message: `${result.count} modelos foram atualizadas`
    });

  } catch (error) {
    console.error('Erro ao atualizar modelos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}