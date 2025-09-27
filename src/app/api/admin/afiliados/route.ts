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

// GET - Buscar afiliados com métricas
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
    const orderBy = searchParams.get('orderBy') || 'criadoEm';
    const order = searchParams.get('order') || 'desc';

    const skip = (page - 1) * limit;

    // Construir filtros - por enquanto usar tabela Usuario com tipo afiliado
    // TODO: Criar tabela Afiliado específica no schema
    const where: any = {
      // Para este exemplo, vamos simular que afiliados são usuários com um campo específico
      // Na implementação real, você deve criar uma tabela separada para afiliados
    };

    if (search) {
      where.OR = [
        { nome: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } }
      ];
    }

    // Dados simulados de afiliados (implementar com tabela real)
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
      },
      {
        id: "af3",
        nome: "Digital Sales",
        username: "@digital_sales",
        email: "digital@exemplo.com",
        avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=60&h=60&fit=crop&crop=face",
        status: "pendente",
        dataEntrada: "2024-03-12",
        comissaoTotal: 8765,
        comissoesPendentes: 2100,
        conversoes: 54,
        cliques: 6890,
        taxaConversao: 3.9,
        linkAfiliado: "https://hotlovers.com/ref/digital789",
        ultimaVenda: "2024-11-20",
        crescimento: 18,
        codigoAfiliado: "DIGITAL789"
      }
    ];

    // Aplicar filtros nos dados simulados
    let afiliados = afiliadosSimulados;
    
    if (search) {
      afiliados = afiliados.filter(a => 
        a.nome.toLowerCase().includes(search.toLowerCase()) ||
        a.email.toLowerCase().includes(search.toLowerCase()) ||
        a.username.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status) {
      afiliados = afiliados.filter(a => a.status === status);
    }

    // Calcular estatísticas gerais
    const stats = {
      total: afiliados.length,
      ativos: afiliados.filter(a => a.status === 'ativo').length,
      pendentes: afiliados.filter(a => a.status === 'pendente').length,
      suspensos: afiliados.filter(a => a.status === 'suspenso').length,
      comissaoTotalPaga: afiliados.reduce((sum, a) => sum + a.comissaoTotal, 0),
      comissoesPendentes: afiliados.reduce((sum, a) => sum + a.comissoesPendentes, 0),
      conversoes: afiliados.reduce((sum, a) => sum + a.conversoes, 0),
      cliques: afiliados.reduce((sum, a) => sum + a.cliques, 0),
      taxaConversaoMedia: afiliados.reduce((sum, a) => sum + a.taxaConversao, 0) / afiliados.length || 0
    };

    // Top performers
    const topPerformers = [...afiliados]
      .sort((a, b) => b.comissaoTotal - a.comissaoTotal)
      .slice(0, 5);

    // Dados de comissões por mês (simulado)
    const commissionsData = [
      { month: 'Jul', total: 45000, paid: 38000, pending: 7000 },
      { month: 'Ago', total: 52000, paid: 48000, pending: 4000 },
      { month: 'Set', total: 48000, paid: 45000, pending: 3000 },
      { month: 'Out', total: 67000, paid: 62000, pending: 5000 },
      { month: 'Nov', total: 78000, paid: 71000, pending: 7000 },
      { month: 'Dez', total: 89000, paid: 82000, pending: 7000 }
    ];

    return NextResponse.json({
      afiliados: afiliados.slice(skip, skip + limit),
      pagination: {
        page,
        limit,
        total: afiliados.length,
        pages: Math.ceil(afiliados.length / limit)
      },
      stats,
      topPerformers,
      commissionsData
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
    const adminCheck = await verifyAdmin(request);
    if ('error' in adminCheck) {
      return NextResponse.json({ error: adminCheck.error }, { status: adminCheck.status });
    }

    const body = await request.json();
    const { nome, email, telefone, documento, banco, agencia, conta, pix } = body;

    // Validações
    if (!nome || !email) {
      return NextResponse.json(
        { error: 'Nome e email são obrigatórios' },
        { status: 400 }
      );
    }

    // Verificar se já existe
    const existing = await prisma.usuario.findUnique({
      where: { email }
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Email já está em uso' },
        { status: 409 }
      );
    }

    // Gerar código único do afiliado
    const codigoAfiliado = nome.toUpperCase().replace(/\s+/g, '').substring(0, 6) + 
                          Math.random().toString(36).substring(2, 5).toUpperCase();

    // Por enquanto, criar como usuário normal
    // TODO: Implementar tabela Afiliado específica
    const novoAfiliado = await prisma.usuario.create({
      data: {
        nome,
        email,
        tipo: 'usuario', // Temporário - criar tipo 'afiliado'
        ativa: false // Pendente de aprovação
      },
      select: {
        id: true,
        nome: true,
        email: true,
        criadoEm: true
      }
    });

    return NextResponse.json({
      success: true,
      afiliado: {
        ...novoAfiliado,
        codigoAfiliado,
        linkAfiliado: `https://hotlovers.com/ref/${codigoAfiliado.toLowerCase()}`,
        status: 'pendente'
      },
      message: 'Afiliado criado com sucesso e aguarda aprovação'
    });

  } catch (error) {
    console.error('Erro ao criar afiliado:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// PUT - Atualizar status de afiliados (ações em lote)
export async function PUT(request: NextRequest) {
  try {
    const adminCheck = await verifyAdmin(request);
    if ('error' in adminCheck) {
      return NextResponse.json({ error: adminCheck.error }, { status: adminCheck.status });
    }

    const body = await request.json();
    const { afiliadoIds, action, data } = body;

    if (!afiliadoIds || !Array.isArray(afiliadoIds) || !action) {
      return NextResponse.json(
        { error: 'IDs dos afiliados e ação são obrigatórios' },
        { status: 400 }
      );
    }

    // Por enquanto, simular as ações
    // TODO: Implementar com tabela real de afiliados
    let message = '';
    
    switch (action) {
      case 'approve':
        message = `${afiliadoIds.length} afiliados foram aprovados`;
        break;
      case 'suspend':
        message = `${afiliadoIds.length} afiliados foram suspensos`;
        break;
      case 'activate':
        message = `${afiliadoIds.length} afiliados foram ativados`;
        break;
      case 'pay_commissions':
        message = `Comissões pagas para ${afiliadoIds.length} afiliados`;
        break;
      default:
        return NextResponse.json(
          { error: 'Ação inválida' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      updated: afiliadoIds.length,
      message
    });

  } catch (error) {
    console.error('Erro ao atualizar afiliados:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}