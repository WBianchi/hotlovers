"use client";

import { useState } from "react";
import { Play, Lock, Crown, Heart, Eye, Download, Volume2, VolumeX, Maximize2, X } from "lucide-react";

interface ModeloVideosProps {
  modelo: {
    nome: string;
    videos: number;
  };
  usuario: {
    assinante: boolean;
  };
  onAssinatura: () => void;
}

export function ModeloVideos({ modelo, usuario, onAssinatura }: ModeloVideosProps) {
  const [videoSelecionado, setVideoSelecionado] = useState<number | null>(null);
  const [muted, setMuted] = useState(true);
  const [favoritos, setFavoritos] = useState<Set<number>>(new Set());

  // Mock dos vídeos
  const videos = [
    {
      id: 1,
      titulo: "Morning Routine ☀️",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=600&h=400&fit=crop&crop=face",
      duracao: "03:45",
      premium: false,
      likes: 2840,
      views: 45200,
      tipo: "lifestyle"
    },
    {
      id: 2,
      titulo: "Ensaio Sensual 🔥",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop&crop=face",
      duracao: "08:32",
      premium: true,
      likes: 8950,
      views: 125300,
      tipo: "sensual"
    },
    {
      id: 3,
      titulo: "Behind the Scenes",
      thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop&crop=face",
      duracao: "05:12",
      premium: false,
      likes: 3200,
      views: 38900,
      tipo: "backstage"
    },
    {
      id: 4,
      titulo: "Private Show 💕",
      thumbnail: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=400&fit=crop&crop=face",
      duracao: "12:45",
      premium: true,
      likes: 15600,
      views: 245800,
      tipo: "premium"
    },
    {
      id: 5,
      titulo: "Workout Session 💪",
      thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop&crop=face",
      duracao: "06:28",
      premium: true,
      likes: 5420,
      views: 67800,
      tipo: "fitness"
    },
    {
      id: 6,
      titulo: "Q&A with Fans",
      thumbnail: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=600&h=400&fit=crop&crop=face",
      duracao: "15:30",
      premium: false,
      likes: 4100,
      views: 52300,
      tipo: "casual"
    }
  ];

  const videosVisiveis = usuario.assinante 
    ? videos 
    : videos.filter(video => !video.premium).slice(0, 2); // Só 2 vídeos gratuitos

  const handleVideoClick = (index: number) => {
    const video = videosVisiveis[index];
    if (video.premium && !usuario.assinante) {
      onAssinatura();
      return;
    }
    setVideoSelecionado(index);
  };

  const handleFavoritar = (id: number) => {
    setFavoritos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'sensual': return 'bg-hotlovers-red';
      case 'premium': return 'bg-purple-500';
      case 'fitness': return 'bg-green-500';
      case 'lifestyle': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-12 bg-muted/20">
      <div className="w-full max-w-none mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-hotlovers-red/10 text-hotlovers-red rounded-full text-sm font-medium mb-3">
              Vídeos Exclusivos
            </div>
            <h2 className="text-2xl font-black text-foreground mb-2">
              Conteúdo premium em vídeo
            </h2>
            <p className="text-muted-foreground">
              {usuario.assinante 
                ? `${videos.length} vídeos disponíveis para você` 
                : `${videosVisiveis.length} de ${videos.length} vídeos • Assine para desbloquear todos`
              }
            </p>
          </div>
          
          {!usuario.assinante && (
            <button
              onClick={onAssinatura}
              className="px-6 py-3 bg-hotlovers-gradient text-white font-bold rounded-xl hover:scale-105 transition-all"
            >
              Desbloquear Todos
            </button>
          )}
        </div>

        {/* Grid de vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videosVisiveis.map((video, index) => {
            const isLocked = video.premium && !usuario.assinante;
            return (
              <div
                key={video.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleVideoClick(index)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.titulo}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isLocked ? 'blur-lg scale-110' : ''
                    }`}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>

                  {/* Lock overlay */}
                  {isLocked && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-md">
                      <div className="text-center text-white p-6 bg-white/10 rounded-xl backdrop-blur-xl border border-white/20">
                        <Lock className="w-8 h-8 mx-auto mb-3" />
                        <p className="text-sm font-medium mb-1">Conteúdo Premium</p>
                        <p className="text-xs opacity-80">Assine para assistir</p>
                      </div>
                    </div>
                  )}

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs font-medium rounded">
                    {video.duracao}
                  </div>

                  {/* Premium badge */}
                  {video.premium && (
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center space-x-1 px-2 py-1 bg-hotlovers-red rounded-full text-xs text-white font-medium">
                        <Crown className="w-3 h-3" />
                        <span>Premium</span>
                      </div>
                    </div>
                  )}

                  {/* Type badge */}
                  <div className="absolute top-3 right-3">
                    <div className={`px-2 py-1 ${getTipoColor(video.tipo)} rounded-full text-xs text-white font-medium capitalize`}>
                      {video.tipo}
                    </div>
                  </div>

                  {/* Info overlay bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-2">{video.titulo}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{formatNumber(video.views)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{formatNumber(video.likes)}</span>
                        </div>
                      </div>

                      {!isLocked && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFavoritar(video.id);
                          }}
                          className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                        >
                          <Heart 
                            className={`w-4 h-4 ${
                              favoritos.has(video.id) 
                                ? 'text-hotlovers-red fill-current' 
                                : 'text-white'
                            }`} 
                          />
                        </button>
                      )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center space-x-2 mt-3">
                      {isLocked ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAssinatura();
                          }}
                          className="flex-1 py-2 bg-hotlovers-gradient text-white font-medium rounded-lg hover:scale-105 transition-all text-sm"
                        >
                          Desbloquear
                        </button>
                      ) : (
                        <>
                          <button className="flex-1 py-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all text-sm font-medium">
                            Assistir
                          </button>
                          <button className="px-4 py-2 bg-hotlovers-gradient rounded-lg hover:scale-105 transition-all text-sm font-medium">
                            Chat
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Placeholders para vídeos bloqueados */}
          {!usuario.assinante && Array.from({ length: videos.length - videosVisiveis.length }).map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className="bg-background border-2 border-dashed border-muted-foreground/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-64 cursor-pointer hover:border-hotlovers-red/50 transition-colors"
              onClick={onAssinatura}
            >
              <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Vídeo Bloqueado</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Conteúdo premium disponível para assinantes
              </p>
              <button className="px-4 py-2 bg-hotlovers-gradient text-white font-medium rounded-lg hover:scale-105 transition-all text-sm">
                Desbloquear
              </button>
            </div>
          ))}
        </div>

        {/* Modal de vídeo */}
        {videoSelecionado !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            {/* Controles */}
            <button
              onClick={() => setVideoSelecionado(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Player de vídeo simulado */}
            <div className="max-w-4xl w-full">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <img
                  src={videosVisiveis[videoSelecionado]?.thumbnail}
                  alt={videosVisiveis[videoSelecionado]?.titulo}
                  className="w-full h-full object-cover"
                />
                
                {/* Controls overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                    <p className="text-lg font-semibold">Player de Vídeo (Demo)</p>
                    <p className="text-sm opacity-80">Clique para reproduzir</p>
                  </div>
                </div>

                {/* Controls bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-4">
                      <button className="hover:text-hotlovers-red transition-colors">
                        <Play className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setMuted(!muted)}
                        className="hover:text-hotlovers-red transition-colors"
                      >
                        {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <span className="text-sm">0:00 / {videosVisiveis[videoSelecionado]?.duracao}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleFavoritar(videosVisiveis[videoSelecionado].id)}
                        className="hover:text-hotlovers-red transition-colors"
                      >
                        <Heart 
                          className={`w-5 h-5 ${
                            favoritos.has(videosVisiveis[videoSelecionado].id) 
                              ? 'text-hotlovers-red fill-current' 
                              : 'text-white'
                          }`} 
                        />
                      </button>
                      {usuario.assinante && (
                        <button className="hover:text-hotlovers-red transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      )}
                      <button className="hover:text-hotlovers-red transition-colors">
                        <Maximize2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video info */}
              <div className="mt-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {videosVisiveis[videoSelecionado]?.titulo}
                </h3>
                <div className="flex items-center space-x-6 text-sm text-white/80">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{formatNumber(videosVisiveis[videoSelecionado]?.views || 0)} visualizações</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{formatNumber(videosVisiveis[videoSelecionado]?.likes || 0)} likes</span>
                  </div>
                  <div className="capitalize">
                    {videosVisiveis[videoSelecionado]?.tipo}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ModeloVideos;
