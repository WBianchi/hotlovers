import { NextRequest, NextResponse } from 'next/server';

// GET - Buscar dados de analytics
export async function GET(request: NextRequest) {
  try {
    // Dados simulados de analytics
    const analyticsData = {
      overview: {
        totalUsuarios: 15420,
        totalModelos: 1250,
        totalAssinantes: 14170,
        totalTransacoes: 8945,
        receitaTotal: 245680,
        receitaAssinaturas: 189420,
        receitaGorjetas: 56260,
        modelosAtivos: 890,
        assinantesAtivos: 12340,
        crescimentoUsuarios: 18,
        crescimentoReceita: 24
      },
      topModelos: [
        {
          id: "1",
          nome: "Larissa Silva",
          nomeArtistico: "Lari Hot",
          foto: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=60&h=60&fit=crop&crop=face",
          receita: 12450
        },
        {
          id: "2", 
          nome: "Amanda Santos",
          nomeArtistico: "Amanda Fire",
          foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
          receita: 9830
        }
      ],
      revenueData: [
        { date: '2024-11-01', revenue: 8200, subscriptions: 5740, tips: 2460 },
        { date: '2024-11-02', revenue: 9100, subscriptions: 6370, tips: 2730 },
        { date: '2024-11-03', revenue: 7800, subscriptions: 5460, tips: 2340 }
      ],
      conversionMetrics: {
        visitorsToSignup: 3.2,
        signupToSubscription: 12.8,
        overallConversion: 0.41,
        averageSessionDuration: '8m 32s',
        bounceRate: 34.2
      }
    };

    return NextResponse.json(analyticsData);

  } catch (error) {
    console.error('Erro ao buscar analytics:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
