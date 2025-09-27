"use client";

import { useState } from "react";
import { Eye, Heart, Lock, Crown, Download, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface ModeloGaleriaProps {
  modelo: {
    nome: string;
    fotos: number;
  };
  usuario: {
    assinante: boolean;
  };
  onAssinatura: () => void;
}

export function ModeloGaleria({ modelo, usuario, onAssinatura }: ModeloGaleriaProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [favoritas, setFavoritas] = useState<Set<number>>(new Set());

  // Mock das fotos
  const fotos = [
    { 
      id: 1, 
      url: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=600&h=800&fit=crop&crop=face",
      premium: false,
      likes: 1250,
      views: 15600
    },
    { 
      id: 2, 
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop&crop=face",
      premium: true,
      likes: 2100,
      views: 25300
    },
    { 
      id: 3, 
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop&crop=face",
      premium: false,
      likes: 890,
      views: 12400
    },
    { 
      id: 4, 
      url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=800&fit=crop&crop=face",
      premium: true,
      likes: 3200,
      views: 41200
    },
    { 
      id: 5, 
      url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop&crop=face",
      premium: true,
      likes: 2800,
      views: 32100
    },
    { 
      id: 6, 
      url: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=600&h=800&fit=crop&crop=face",
      premium: false,
      likes: 1560,
      views: 18900
    },
    { 
      id: 7, 
      url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=800&fit=crop&crop=face",
      premium: true,
      likes: 4200,
      views: 58700,
      special: true // Foto especial borrada
    }
  ];

  const fotosVisiveis = usuario.assinante 
    ? fotos 
    : [...fotos.filter(foto => !foto.premium).slice(0, 3), ...fotos.filter(foto => foto.special)]; // 3 fotos gratuitas + especial

  const handleImageClick = (index: number) => {
    const foto = fotosVisiveis[index];
    if (foto.premium && !usuario.assinante) {
      onAssinatura();
      return;
    }
    setSelectedImage(index);
    setImageIndex(index);
  };

  const handleFavoritar = (id: number) => {
    setFavoritas(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % fotosVisiveis.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + fotosVisiveis.length) % fotosVisiveis.length);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <section className="py-12 bg-background">
      <div className="w-full max-w-none mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-hotlovers-red/10 text-hotlovers-red rounded-full text-sm font-medium mb-3">
              Galeria Exclusiva
            </div>
            <h2 className="text-2xl font-black text-foreground mb-2">
              Fotos premium em alta resolução
            </h2>
            <p className="text-muted-foreground">
              {usuario.assinante 
                ? `${fotos.length} fotos disponíveis para você` 
                : `${fotosVisiveis.length} de ${fotos.length} fotos • Assine para desbloquear todas`
              }
            </p>
          </div>
          
          {!usuario.assinante && (
            <button
              onClick={onAssinatura}
              className="px-6 py-3 bg-hotlovers-gradient text-white font-bold rounded-xl hover:scale-105 transition-all"
            >
              Desbloquear Todas
            </button>
          )}
        </div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotosVisiveis.map((foto, index) => {
            const isLocked = foto.premium && !usuario.assinante;
            return (
              <div
                key={foto.id}
                className="group relative aspect-[3/4] bg-muted rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                {/* Imagem */}
                <img
                  src={foto.url}
                  alt={`Foto ${foto.id} de ${modelo.nome}`}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isLocked ? 'blur-lg scale-110' : 'group-hover:scale-105'
                  }`}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Lock overlay para fotos premium */}
                {isLocked && !foto.special && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Lock className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">Premium</p>
                    </div>
                  </div>
                )}

                {/* Foto especial com glass e coração */}
                {foto.special && !usuario.assinante && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-md">
                    <div className="text-center text-white p-6 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl">
                      <Heart className="w-12 h-12 text-hotlovers-red mx-auto mb-4 fill-current" />
                      <h3 className="text-xl font-bold mb-2">Conteúdo VIP</h3>
                      <p className="text-white/80 mb-4 text-sm">Foto exclusiva para assinantes</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAssinatura();
                        }}
                        className="px-4 py-2 bg-hotlovers-gradient text-white font-bold rounded-lg hover:scale-105 transition-all text-sm"
                      >
                        Desbloquear VIP
                      </button>
                    </div>
                  </div>
                )}

                {/* Premium badge */}
                {foto.premium && !foto.special && (
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center space-x-1 px-2 py-1 bg-hotlovers-red rounded-full text-xs text-white font-medium">
                      <Crown className="w-3 h-3" />
                      <span>Premium</span>
                    </div>
                  </div>
                )}

                {/* VIP badge para foto especial */}
                {foto.special && (
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs text-white font-bold shadow-lg">
                      <Heart className="w-3 h-3 fill-current" />
                      <span>VIP</span>
                    </div>
                  </div>
                )}

                {/* Stats overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center space-x-3 text-white text-sm">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{formatNumber(foto.likes)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{formatNumber(foto.views)}</span>
                    </div>
                  </div>

                  {!isLocked && (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFavoritar(foto.id);
                        }}
                        className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                      >
                        <Heart 
                          className={`w-4 h-4 ${
                            favoritas.has(foto.id) 
                              ? 'text-hotlovers-red fill-current' 
                              : 'text-white'
                          }`} 
                        />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(index);
                        }}
                        className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                      >
                        <Maximize2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Click overlay para premium */}
                {isLocked && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button
                        className="px-4 py-2 bg-hotlovers-gradient text-white font-bold rounded-lg hover:scale-105 transition-all"
                      >
                        Desbloquear
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Placeholder para fotos bloqueadas */}
          {!usuario.assinante && Array.from({ length: fotos.length - fotosVisiveis.length }).map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className="aspect-[3/4] bg-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/20 flex items-center justify-center cursor-pointer hover:border-hotlovers-red/50 transition-colors"
              onClick={onAssinatura}
            >
              <div className="text-center text-muted-foreground">
                <Lock className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Conteúdo Bloqueado</p>
                <p className="text-xs">Assine para desbloquear</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de visualização */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            {/* Controles */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navegação */}
            <button
              onClick={prevImage}
              className="absolute left-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Imagem */}
            <div className="max-w-4xl max-h-full">
              <img
                src={fotosVisiveis[imageIndex]?.url}
                alt={`Foto ${fotosVisiveis[imageIndex]?.id} de ${modelo.nome}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            {/* Info da imagem */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <span className="text-sm">{imageIndex + 1} de {fotosVisiveis.length}</span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{formatNumber(fotosVisiveis[imageIndex]?.likes || 0)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{formatNumber(fotosVisiveis[imageIndex]?.views || 0)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleFavoritar(fotosVisiveis[imageIndex].id)}
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        favoritas.has(fotosVisiveis[imageIndex].id) 
                          ? 'text-hotlovers-red fill-current' 
                          : 'text-white'
                      }`} 
                    />
                  </button>
                  {usuario.assinante && (
                    <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Download className="w-4 h-4 text-white" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ModeloGaleria;
