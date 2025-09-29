import { NextRequest, NextResponse } from 'next/server';

// GET - Buscar modelos
export async function GET(request: NextRequest) {
  try {
    // Dados simulados de modelos
    const modelosSimulados = [
      {
        id: "1",
        nome: "Larissa Silva",
        nomeArtistico: "Lari Hot",
        email: "lari@hotlovers.com",
        foto: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=60&h=60&fit=crop&crop=face",
        status: "APROVADA",
        ativo: true,
        receita: 12450,
        assinantes: 890,
        criadoEm: "2024-01-15"
      },
      {
        id: "2",
        nome: "Amanda Santos", 
        nomeArtistico: "Amanda Fire",
        email: "amanda@hotlovers.com",
        foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        status: "APROVADA",
        ativo: true,
        receita: 9830,
        assinantes: 670,
        criadoEm: "2024-02-08"
      }
    ];

    return NextResponse.json({
      modelos: modelosSimulados,
      stats: {
        total: modelosSimulados.length,
        aprovadas: modelosSimulados.filter(m => m.status === 'APROVADA').length,
        pendentes: 0,
        rejeitadas: 0,
        receitaTotal: modelosSimulados.reduce((sum, m) => sum + m.receita, 0)
      }
    });

  } catch (error) {
    console.error('Erro ao buscar modelos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// POST - Criar nova modelo
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email } = body;

    if (!nome || !email) {
      return NextResponse.json(
        { error: 'Nome e email são obrigatórios' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Modelo criada com sucesso! Funcionalidade será implementada em breve.'
    });

  } catch (error) {
    console.error('Erro ao criar modelo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// PUT - Atualizar status de modelos
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { modeloIds, action } = body;

    if (!modeloIds || !Array.isArray(modeloIds) || !action) {
      return NextResponse.json(
        { error: 'IDs das modelos e ação são obrigatórios' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      updated: modeloIds.length,
      message: `Ação ${action} executada com sucesso! Funcionalidade será implementada em breve.`
    });

  } catch (error) {
    console.error('Erro ao atualizar modelos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
