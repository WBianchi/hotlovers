import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const destaque = searchParams.get('destaque');
    const limit = searchParams.get('limit');

    // Buscar modelos aprovadas e ativas
    const modelos = await prisma.modelo.findMany({
      where: {
        status: 'APROVADA',
        ativo: true,
        ...(destaque === 'true' && { destaque: true })
      },
      select: {
        id: true,
        nome: true,
        nomeArtistico: true,
        foto: true,
        biografia: true,
        precoMensal: true,
        verificada: true,
        destaque: true,
        cidade: true,
        estado: true,
        linkInstagram: true,
        linkTwitter: true,
        criadoEm: true
      },
      orderBy: {
        criadoEm: 'desc'
      },
      ...(limit && { take: parseInt(limit) })
    });

    return NextResponse.json({
      success: true,
      modelos
    });

  } catch (error) {
    console.error('Erro ao buscar modelos:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar modelos' },
      { status: 500 }
    );
  }
}
