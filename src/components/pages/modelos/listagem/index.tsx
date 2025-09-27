"use client";

import { useState, useEffect } from "react";
import { CardModelo } from "../card-modelo";
import { Grid, List, ChevronLeft, ChevronRight } from "lucide-react";

// Mock data das modelos
const mockModelos = [
  {
    id: "1",
    nome: "Isabella Santos",
    idade: 23,
    localizacao: "São Paulo, BR",
    foto: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=400&h=500&fit=crop&crop=face",
    fotos: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop&crop=face"
    ],
    avaliacao: 4.8,
    totalAvaliacoes: 342,
    seguidores: 12500,
    preco: 29.90,
    status: 'online' as const,
    verificada: true,
    premium: true,
    categoria: "premium",
    bio: "Modelo profissional apaixonada por fotografia artística e lifestyle. Amo criar conteúdo exclusivo para meus fãs!",
    tags: ["Lifestyle", "Fashion", "Arte", "Fitness"]
  },
  {
    id: "2", 
    nome: "Amanda Silva",
    idade: 26,
    localizacao: "Rio de Janeiro, BR",
    foto: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop&crop=face",
    fotos: [
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop&crop=face"
    ],
    avaliacao: 4.6,
    totalAvaliacoes: 156,
    seguidores: 8900,
    preco: 24.90,
    status: 'ocupada' as const,
    verificada: true,
    premium: false,
    categoria: "verificadas",
    bio: "Carioca autêntica que ama praia, sol e diversão. Venha conhecer meu mundo!",
    tags: ["Praia", "Sol", "Diversão", "Brasil"]
  },
  {
    id: "3",
    nome: "Sophia Rodriguez", 
    idade: 22,
    localizacao: "Barcelona, ES",
    foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=face",
    fotos: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=400&h=500&fit=crop&crop=face"
    ],
    avaliacao: 4.9,
    totalAvaliacoes: 428,
    seguidores: 18200,
    preco: 34.90,
    status: 'online' as const,
    verificada: true,
    premium: true,
    categoria: "premium",
    bio: "Artista española apasionada por la danza y la fotografía. Contenido exclusivo y muy sensual.",
    tags: ["Dance", "Art", "Español", "Sensual", "Premium"]
  },
  {
    id: "4",
    nome: "Valentina Costa",
    idade: 24,
    localizacao: "Florianópolis, BR", 
    foto: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=400&h=500&fit=crop&crop=face",
    fotos: [
      "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&crop=face"
    ],
    avaliacao: 4.7,
    totalAvaliacoes: 289,
    seguidores: 15600,
    preco: 27.90,
    status: 'offline' as const,
    verificada: false,
    premium: false,
    categoria: "todos",
    bio: "Surfista e modelo de Floripa. Amo o mar e compartilho momentos únicos da ilha da magia!",
    tags: ["Surf", "Praia", "Floripa", "Mar", "Lifestyle"]
  },
  {
    id: "5",
    nome: "Mia Johnson",
    idade: 25,
    localizacao: "Los Angeles, US",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    fotos: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=500&fit=crop&crop=face"
    ],
    avaliacao: 4.5,
    totalAvaliacoes: 567,
    seguidores: 23400,
    preco: 39.90,
    status: 'online' as const,
    verificada: true,
    premium: true,
    categoria: "premium",
    bio: "Hollywood actress and model. Exclusive behind-the-scenes content and glamorous photoshoots.",
    tags: ["Hollywood", "Glamour", "Movies", "Fashion", "Exclusive"]
  },
  {
    id: "6",
    nome: "Luna Martinez",
    idade: 21,
    localizacao: "Miami, US",
    foto: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop&crop=face",
    fotos: [
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=400&h=500&fit=crop&crop=face"
    ],
    avaliacao: 4.4,
    totalAvaliacoes: 198,
    seguidores: 9800,
    preco: 22.90,
    status: 'online' as const,
    verificada: true,
    premium: false,
    categoria: "verificadas",
    bio: "Miami beach lover and fitness enthusiast. Join me for workout sessions and beach adventures!",
    tags: ["Beach", "Fitness", "Miami", "Workout", "Bikini"]
  }
];

interface ListagemProps {
  className?: string;
  filtros?: any;
}

export function Listagem({ className, filtros }: ListagemProps) {
  const [visualizacao, setVisualizacao] = useState<'grid' | 'list'>('grid');
  const [modelosFiltrados, setModelosFiltrados] = useState(mockModelos);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [carregando, setCarregando] = useState(false);
  const itensPorPagina = 12;

  // Filtrar modelos baseado nos filtros
  useEffect(() => {
    setCarregando(true);
    
    // Simular delay de carregamento
    setTimeout(() => {
      let resultado = [...mockModelos];

      if (filtros) {
        // Filtrar por categoria
        if (filtros.categoria !== 'todos') {
          resultado = resultado.filter(modelo => {
            switch (filtros.categoria) {
              case 'premium': return modelo.premium;
              case 'verificadas': return modelo.verificada;
              case 'online': return modelo.status === 'online';
              default: return true;
            }
          });
        }

        // Filtrar por status
        if (filtros.status !== 'todos') {
          resultado = resultado.filter(modelo => modelo.status === filtros.status);
        }

        // Ordenar
        switch (filtros.ordenar) {
          case 'popularidade':
            resultado.sort((a, b) => b.seguidores - a.seguidores);
            break;
          case 'recentes':
            // Simular ordenação por data
            resultado.reverse();
            break;
          case 'avaliacoes':
            resultado.sort((a, b) => b.avaliacao - a.avaliacao);
            break;
          case 'alfabetica':
            resultado.sort((a, b) => a.nome.localeCompare(b.nome));
            break;
        }
      }

      setModelosFiltrados(resultado);
      setPaginaAtual(1);
      setCarregando(false);
    }, 500);
  }, [filtros]);

  // Paginação 
  const totalPaginas = Math.ceil(modelosFiltrados.length / itensPorPagina);
  const indiceInicio = (paginaAtual - 1) * itensPorPagina;
  const indiceFim = indiceInicio + itensPorPagina;
  const modelosVisiveis = modelosFiltrados.slice(indiceInicio, indiceFim);

  const irParaPagina = (pagina: number) => {
    setPaginaAtual(pagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (carregando) {
    return (
      <div className={`${className || ""}`}>
        <div className="w-full max-w-none mx-auto px-6 lg:px-16 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-muted rounded-2xl aspect-[3/4] animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-background ${className || ""}`}>
      <div className="w-full max-w-none mx-auto px-6 lg:px-16 py-8">
        
        {/* Header com controles */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {modelosFiltrados.length} modelos encontradas
            </h2>
            <p className="text-muted-foreground">
              Mostrando {indiceInicio + 1}-{Math.min(indiceFim, modelosFiltrados.length)} de {modelosFiltrados.length}
            </p>
          </div>

          {/* Controles de visualização */}
          <div className="flex items-center space-x-2 bg-muted rounded-xl p-1">
            <button
              onClick={() => setVisualizacao('grid')}
              className={`p-2 rounded-lg transition-all ${
                visualizacao === 'grid'
                  ? 'bg-background shadow-sm text-hotlovers-red'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setVisualizacao('list')}
              className={`p-2 rounded-lg transition-all ${
                visualizacao === 'list'
                  ? 'bg-background shadow-sm text-hotlovers-red'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Grid de modelos */}
        <div className={`grid gap-6 ${
          visualizacao === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 lg:grid-cols-2'
        }`}>
          {modelosVisiveis.map((modelo) => (
            <CardModelo
              key={modelo.id}
              modelo={modelo}
              className={visualizacao === 'list' ? 'flex-row' : ''}
            />
          ))}
        </div>

        {/* Paginação */}
        {totalPaginas > 1 && (
          <div className="flex items-center justify-center space-x-2 mt-12">
            <button
              onClick={() => irParaPagina(paginaAtual - 1)}
              disabled={paginaAtual === 1}
              className="p-2 rounded-lg border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPaginas }, (_, index) => {
              const pagina = index + 1;
              const isAtiva = pagina === paginaAtual;
              
              // Mostrar apenas algumas páginas para não poluir
              const mostrarPagina = pagina === 1 || 
                                   pagina === totalPaginas || 
                                   (pagina >= paginaAtual - 1 && pagina <= paginaAtual + 1);

              if (!mostrarPagina) {
                if (pagina === paginaAtual - 2 || pagina === paginaAtual + 2) {
                  return <span key={pagina} className="px-3 py-2">...</span>;
                }
                return null;
              }

              return (
                <button
                  key={pagina}
                  onClick={() => irParaPagina(pagina)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    isAtiva
                      ? 'bg-hotlovers-red text-white'
                      : 'border border-border hover:bg-muted'
                  }`}
                >
                  {pagina}
                </button>
              );
            })}

            <button
              onClick={() => irParaPagina(paginaAtual + 1)}
              disabled={paginaAtual === totalPaginas}
              className="p-2 rounded-lg border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Mensagem se não houver resultados */}
        {modelosFiltrados.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Grid className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Nenhuma modelo encontrada
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros para ver mais resultados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Listagem;
