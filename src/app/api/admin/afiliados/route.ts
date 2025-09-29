import { NextRequest, NextResponse } from 'next/server';

// GET - Buscar afiliados com métricas
export async function GET(request: NextRequest) {
  try {
    // Dados simulados de afiliados
    const afiliadosSimulados = [
      {
        id: "af1",
        nome: "João Marketing",
        username: "@joao_afiliado",
        email: "joao@exemplo.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
        status: "ativo",
        dataEntrada: "2024-01-15",
        comissaoTotal: 12450,
        comissoesPendentes: 890,
        conversoes: 89,
        cliques: 8920,
        taxaConversao: 4.2,
        linkAfiliado: "https://hotlovers.com/ref/joao123",
        ultimaVenda: "2024-11-25",
        crescimento: 28,
        codigoAfiliado: "JOAO123"
      },
      {
        id: "af2",
        nome: "Marketing Pro",
        username: "@marketing_pro", 
        email: "pro@exemplo.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
        status: "ativo",
        dataEntrada: "2024-02-08",
        comissaoTotal: 9830,
        comissoesPendentes: 1240,
        conversoes: 67,
        cliques: 7240,
        taxaConversao: 3.8,
        linkAfiliado: "https://hotlovers.com/ref/pro456",
        ultimaVenda: "2024-11-23",
        crescimento: 22,
        codigoAfiliado: "PRO456"
      }
    ];

    // Calcular estatísticas gerais
    const stats = {
      total: afiliadosSimulados.length,
      ativos: afiliadosSimulados.filter(a => a.status === 'ativo').length,
      pendentes: afiliadosSimulados.filter(a => a.status === 'pendente').length,
      suspensos: afiliadosSimulados.filter(a => a.status === 'suspenso').length,
      comissaoTotalPaga: afiliadosSimulados.reduce((sum, a) => sum + a.comissaoTotal, 0),
      comissoesPendentes: afiliadosSimulados.reduce((sum, a) => sum + a.comissoesPendentes, 0),
      conversoes: afiliadosSimulados.reduce((sum, a) => sum + a.conversoes, 0),
      cliques: afiliadosSimulados.reduce((sum, a) => sum + a.cliques, 0),
      taxaConversaoMedia: afiliadosSimulados.reduce((sum, a) => sum + a.taxaConversao, 0) / afiliadosSimulados.length || 0
    };

    return NextResponse.json({
      afiliados: afiliadosSimulados,
      stats,
      topPerformers: afiliadosSimulados,
      commissionsData: [
        { month: 'Nov', total: 78000, paid: 71000, pending: 7000 },
        { month: 'Dez', total: 89000, paid: 82000, pending: 7000 }
      ]
    });

  } catch (error) {
    console.error('Erro ao buscar afiliados:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// POST - Criar novo afiliado
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email } = body;

    // Validações
    if (!nome || !email) {
      return NextResponse.json(
        { error: 'Nome e email são obrigatórios' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Afiliado criado com sucesso! Funcionalidade será implementada em breve.'
    });

  } catch (error) {
    console.error('Erro ao criar afiliado:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// PUT - Atualizar status de afiliados
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { afiliadoIds, action } = body;

    if (!afiliadoIds || !Array.isArray(afiliadoIds) || !action) {
      return NextResponse.json(
        { error: 'IDs dos afiliados e ação são obrigatórios' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      updated: afiliadoIds.length,
      message: `Ação ${action} executada com sucesso! Funcionalidade será implementada em breve.`
    });

  } catch (error) {
    console.error('Erro ao atualizar afiliados:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}