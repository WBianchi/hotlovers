"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Heart, Crown } from "lucide-react";

interface CarrosselProps {
  className?: string;
}

// Mock data dos vídeos
const videosDestaque = [
  {
    id: 1,
    titulo: "Lara Hot - Exclusive",
    modelo: "Lara Sensual",
    thumbnail: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?w=400&h=600&fit=crop",
    duracao: "12:34",
    views: "2.3M",
    premium: true
  },
  {
    id: 2,
    titulo: "Amanda Fire Show",
    modelo: "Amanda Fire", 
    thumbnail: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400&h=600&fit=crop",
    duracao: "8:45",
    views: "1.8M",
    premium: true
  },
  {
    id: 3,
    titulo: "Bianca Premium Content",
    modelo: "Bianca Sexy",
    thumbnail: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=400&h=600&fit=crop",
    duracao: "15:22",
    views: "3.1M",
    premium: true
  },
  {
    id: 4,
    titulo: "Camila Exclusive",
    modelo: "Camila Hot",
    thumbnail: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?w=400&h=600&fit=crop",
    duracao: "9:18",
    views: "1.5M",
    premium: false
  },
  {
    id: 5,
    titulo: "Jessica Private",
    modelo: "Jessica Fire",
    thumbnail: "https://images.pexels.com/photos/1006227/pexels-photo-1006227.jpeg?w=400&h=600&fit=crop",
    duracao: "11:07",
    views: "2.7M",
    premium: true
  },
  {
    id: 6,
    titulo: "Leticia Sensual",
    modelo: "Leticia Hot",
    thumbnail: "https://images.pexels.com/photos/1850629/pexels-photo-1850629.jpeg?w=400&h=600&fit=crop",
    duracao: "7:33",
    views: "1.2M",
    premium: false
  },
  {
    id: 7,
    titulo: "Mariana Premium",
    modelo: "Mariana Sexy",
    thumbnail: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?w=400&h=600&fit=crop",
    duracao: "13:41",
    views: "2.9M",
    premium: true
  }
];

export function Carrossel({ className }: CarrosselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll infinito
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videosDestaque.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Scroll suave para o item atual
  useEffect(() => {
    if (scrollRef.current) {
      const itemWidth = 320; // largura base do item
      const scrollPosition = currentIndex * itemWidth;
      scrollRef.current.scrollTo({
        left: scrollPosition - window.innerWidth / 2 + itemWidth / 2,
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  const getItemScale = (index: number) => {
    const distance = Math.abs(index - currentIndex);
    if (distance === 0) return "scale-125"; // Item central - maior
    if (distance === 1) return "scale-110"; // Adjacentes - grandes
    if (distance === 2) return "scale-100"; // Próximos - normais
    return "scale-90"; // Distantes - menores
  };

  const getItemOpacity = (index: number) => {
    const distance = Math.abs(index - currentIndex);
    if (distance === 0) return "opacity-100";
    if (distance === 1) return "opacity-90";
    if (distance === 2) return "opacity-75";
    return "opacity-50";
  };

  return (
    <section className={`relative py-20 bg-background overflow-hidden ${className || ""}`}>
      {/* Header */}
      <div className="w-full max-w-none mx-auto px-6 lg:px-16 mb-12">
        <div className="space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20">
            <Crown className="w-4 h-4 text-hotlovers-red" />
            <span className="text-sm font-semibold text-hotlovers-red">
              Conteúdo Premium em Destaque
            </span>
            <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
          </div>

          {/* Título */}
          <h2 className="text-4xl lg:text-5xl font-black text-foreground">
            Hot Vídeos
            <span className="text-hotlovers-red ml-3">Exclusivos</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Descubra os vídeos mais quentes e exclusivos das nossas modelos premium. 
            Conteúdo atualizado diariamente.
          </p>
        </div>
      </div>

      {/* Carrossel Container */}
      <div className="relative">
        {/* Gradient Overlays - Efeito Vidro Borrado */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>

        {/* Carrossel Scrollável */}
        <div
          ref={scrollRef}
          className="flex space-x-6 px-16 overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Duplicar array para efeito infinito */}
          {[...videosDestaque, ...videosDestaque].map((video, index) => (
            <div
              key={`${video.id}-${index}`}
              className={`
                relative group cursor-pointer transition-all duration-500
                ${getItemScale(index % videosDestaque.length)}
                ${getItemOpacity(index % videosDestaque.length)}
                hover:scale-130 hover:z-20
              `}
              onClick={() => setCurrentIndex(index % videosDestaque.length)}
            >
              {/* Card do Vídeo */}
              <div className="relative w-80 h-[450px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={video.thumbnail}
                  alt={video.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Premium Badge */}
                {video.premium && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-hotlovers-gradient text-white text-xs font-bold rounded-full">
                    👑 PREMIUM
                  </div>
                )}

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-hotlovers-gradient rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>

                {/* Info Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs bg-black/50 px-2 py-1 rounded">{video.duracao}</span>
                    <span className="text-xs bg-black/50 px-2 py-1 rounded">{video.views} views</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{video.titulo}</h3>
                  <p className="text-sm opacity-90">{video.modelo}</p>
                </div>

                {/* Heart Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-6 h-6 text-white hover:text-hotlovers-red hover:fill-current transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + videosDestaque.length) % videosDestaque.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-20"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % videosDestaque.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-20"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {videosDestaque.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentIndex 
                ? "bg-hotlovers-red scale-125" 
                : "bg-gray-300 hover:bg-gray-400"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}

export default Carrossel;
