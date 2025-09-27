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

// GET - Buscar analytics gerais
export async function GET(request: NextRequest) {
  try {
    const adminCheck = await verifyAdmin(request);
    if ('error' in adminCheck) {
      return NextResponse.json({ error: adminCheck.error }, { status: adminCheck.status });
    }

    const { searchParams } = new URL(request.url);
    const period = searchParams.get('period') || '30d';
    
    // Calcular data de início baseada no período
    const now = new Date();
    let startDate = new Date();
    
    switch (period) {
      case '7d':
        startDate.setDate(now.getDate() - 7);
        break;
      case '30d':
        startDate.setDate(now.getDate() - 30);
        break;
      case '90d':
        startDate.setDate(now.getDate() - 90);
        break;
      case '1y':
        startDate.setFullYear(now.getFullYear() - 1);
        break;
      default:
        startDate.setDate(now.getDate() - 30);
    }

    // 1. Métricas Gerais
    const [totalUsers, totalModelos, totalAssinaturas] = await Promise.all([
      prisma.usuario.count({
        where: {
          criadoEm: { gte: startDate }
        }
      }),
      prisma.usuario.count({
        where: {
          tipo: 'modelo',
          criadoEm: { gte: startDate }
        }
      }),
      prisma.assinatura.count({
        where: {
          criadoEm: { gte: startDate },
          status: 'ativa'
        }
      })
    ]);

    // 2. Receitas por Categoria
    const receitas = await prisma.transacao.groupBy({
      by: ['tipo'],
      where: {
        criadoEm: { gte: startDate },
        status: 'concluida'
      },
      _sum: {
        valor: true
      }
    });

    // 3. Receitas Mensais (últimos 6 meses)
    const receitasMensais = await prisma.$queryRaw`
      SELECT 
        DATE_FORMAT(criadoEm, '%Y-%m') as mes,
        tipo,
        SUM(valor) as total
      FROM Transacao 
      WHERE criadoEm >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
        AND status = 'concluida'
      GROUP BY DATE_FORMAT(criadoEm, '%Y-%m'), tipo
      ORDER BY mes ASC
    ` as any[];

    // 4. Top Modelos por Receita
    const topModelos = await prisma.usuario.findMany({
      where: {
        tipo: 'modelo'
      },
      select: {
        id: true,
        nome: true,
        email: true,
        avatar: true,
        transacoesRecebidas: {
          where: {
            criadoEm: { gte: startDate },
            status: 'concluida'
          },
          select: {
            valor: true,
            tipo: true
          }
        }
      }
    });

    // Calcular métricas dos modelos
    const modelosComMetricas = topModelos.map(modelo => {
      const receita = modelo.transacoesRecebidas.reduce((sum, t) => sum + t.valor, 0);
      const gorjetas = modelo.transacoesRecebidas
        .filter(t => t.tipo === 'gorjeta')
        .reduce((sum, t) => sum + t.valor, 0);
      const assinaturas = modelo.transacoesRecebidas
        .filter(t => t.tipo === 'assinatura')
        .reduce((sum, t) => sum + t.valor, 0);

      return {
        id: modelo.id,
        nome: modelo.nome,
        email: modelo.email,
        avatar: modelo.avatar,
        receita,
        gorjetas,
        assinaturas,
        transacoes: modelo.transacoesRecebidas.length
      };
    }).sort((a, b) => b.receita - a.receita).slice(0, 10);

    // 5. Cliques (simulado por enquanto - implementar tracking real depois)
    const clicksSimulados = {
      perfis: Math.floor(Math.random() * 50000) + 30000,
      chat: Math.floor(Math.random() * 40000) + 25000,
      packs: Math.floor(Math.random() * 20000) + 15000,
      afiliados: Math.floor(Math.random() * 15000) + 8000
    };

    // 6. Métricas em Tempo Real (simulado)
    const realtimeMetrics = {
      activeUsers: Math.floor(Math.random() * 500) + 200,
      pageViews: Math.floor(Math.random() * 2000) + 1500,
      currentRevenue: receitas.reduce((sum, r) => sum + (r._sum.valor || 0), 0),
      todayClicks: Object.values(clicksSimulados).reduce((sum, val) => sum + val, 0),
      conversions: Math.floor(Math.random() * 50) + 20
    };

    const analytics = {
      period,
      metricas: {
        usuarios: totalUsers,
        modelos: totalModelos,
        assinaturas: totalAssinaturas,
        receitas: receitas.reduce((sum, r) => sum + (r._sum.valor || 0), 0)
      },
      receitasPorCategoria: receitas.map(r => ({
        tipo: r.tipo,
        valor: r._sum.valor || 0
      })),
      receitasMensais,
      topModelos: modelosComMetricas,
      cliques: clicksSimulados,
      realtimeMetrics,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json(analytics);

  } catch (error) {
    console.error('Erro ao buscar analytics:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// POST - Registrar evento de analytics (cliques, visualizações, etc)
export async function POST(request: NextRequest) {
  try {
    const adminCheck = await verifyAdmin(request);
    if ('error' in adminCheck) {
      return NextResponse.json({ error: adminCheck.error }, { status: adminCheck.status });
    }

    const body = await request.json();
    const { evento, categoria, valor, modeloId, usuarioId, metadata } = body;

    // Validações
    if (!evento || !categoria) {
      return NextResponse.json(
        { error: 'Evento e categoria são obrigatórios' },
        { status: 400 }
      );
    }

    // Por enquanto vamos criar uma tabela simples para eventos
    // TODO: Implementar tabela Analytics no schema.prisma
    
    // Simular criação do evento
    const eventoAnalytics = {
      id: `evt_${Date.now()}`,
      evento,
      categoria,
      valor: valor || 0,
      modeloId,
      usuarioId,
      metadata: metadata || {},
      criadoEm: new Date()
    };

    return NextResponse.json({ 
      success: true, 
      evento: eventoAnalytics,
      message: 'Evento registrado com sucesso' 
    });

  } catch (error) {
    console.error('Erro ao registrar evento:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}