"use client";

import { Play, Heart, Eye, Clock, Crown, Flame } from "lucide-react";
import { FaFire, FaCrown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const trendingContent = [
  {
    id: "1",
    tipo: "video",
    titulo: "Ensaio Sensual - Behind the Scenes",
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=600&h=400&fit=crop",
    modelo: {
      id: "1",
      nome: "Isabella Santos",
      foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=100&h=100&fit=crop&crop=face"
    },
    duracao: "15:32",
    views: "234K",
    likes: "12.5K",
    premium: true,
    trending: true
  },
  {
    id: "2",
    tipo: "pack",
    titulo: "Pack Exclusivo - Lingerie Collection",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop",
    modelo: {
      id: "2",
      nome: "Amanda Silva",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    itens: "45 fotos + 3 vídeos",
    views: "189K",
    likes: "9.8K",
    premium: true,
    trending: true
  },
  {
    id: "3",
    tipo: "video",
    titulo: "Fitness & Sensualidade",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop",
    modelo: {
      id: "3",
      nome: "Juliana Costa",
      foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
    },
    duracao: "12:18",
    views: "312K",
    likes: "18.2K",
    premium: true,
    trending: true
  },
  {
    id: "4",
    tipo: "foto",
    titulo: "Ensaio Fashion Premium",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop",
    modelo: {
      id: "4",
      nome: "Camila Rodrigues",
      foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face"
    },
    itens: "28 fotos HD",
    views: "156K",
    likes: "8.9K",
    premium: false,
    trending: true
  },
  {
    id: "5",
    tipo: "video",
    titulo: "Sessão Exclusiva VIP",
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop",
    modelo: {
      id: "5",
      nome: "Mariana Oliveira",
      foto: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face"
    },
    duracao: "18:45",
    views: "278K",
    likes: "15.3K",
    premium: true,
    trending: true
  },
  {
    id: "6",
    tipo: "pack",
    titulo: "Mega Pack - Edição Especial",
    thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop",
    modelo: {
      id: "6",
      nome: "Beatriz Lima",
      foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face"
    },
    itens: "120 fotos + 8 vídeos",
    views: "421K",
    likes: "24.7K",
    premium: true,
    trending: true
  }
];

export function TrendingContent() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-4xl font-black text-gray-900 dark:text-white flex items-center space-x-3 mb-2">
          <Flame className="w-8 h-8 text-red-600" />
          <span>Conteúdo em Alta</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Os conteúdos mais visualizados e curtidos nas últimas 24 horas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingContent.map((content) => (
          <div
            key={content.id}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Thumbnail */}
            <Link href={`/assinante/conteudo/${content.id}`} className="block relative aspect-video overflow-hidden">
              <img
                src={content.thumbnail}
                alt={content.titulo}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex items-center space-x-2">
                {content.premium && (
                  <div className="px-2 py-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center space-x-1">
                    <FaCrown className="w-3 h-3 text-white" />
                    <span className="text-xs font-bold text-white">PREMIUM</span>
                  </div>
                )}
                {content.trending && (
                  <div className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center space-x-1">
                    <FaFire className="w-3 h-3 text-white" />
                    <span className="text-xs font-bold text-white">TRENDING</span>
                  </div>
                )}
              </div>

              {/* Tipo Badge */}
              <div className="absolute top-3 right-3">
                <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-bold text-white uppercase">
                    {content.tipo}
                  </span>
                </div>
              </div>

              {/* Duração/Itens */}
              <div className="absolute bottom-3 left-3">
                <div className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded-lg flex items-center space-x-1">
                  {content.tipo === "video" ? (
                    <>
                      <Clock className="w-3 h-3 text-white" />
                      <span className="text-xs font-bold text-white">{content.duracao}</span>
                    </>
                  ) : (
                    <span className="text-xs font-bold text-white">{content.itens}</span>
                  )}
                </div>
              </div>

              {/* Favorite Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(content.id);
                }}
                className="absolute bottom-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Heart
                  className={`w-5 h-5 transition-all ${
                    favorites.includes(content.id)
                      ? "fill-red-600 text-red-600"
                      : "text-white"
                  }`}
                />
              </button>

              {/* Play Overlay */}
              {content.tipo === "video" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="w-7 h-7 text-white ml-1" />
                  </div>
                </div>
              )}
            </Link>

            {/* Content Info */}
            <div className="p-5">
              {/* Modelo Info */}
              <Link
                href={`/assinante/modelo/${content.modelo.id}`}
                className="flex items-center space-x-2 mb-3 group/modelo"
              >
                <img
                  src={content.modelo.foto}
                  alt={content.modelo.nome}
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <span className="text-sm font-bold text-gray-600 dark:text-gray-400 group-hover/modelo:text-red-600 dark:group-hover/modelo:text-red-500 transition-colors">
                  {content.modelo.nome}
                </span>
              </Link>

              {/* Título */}
              <Link
                href={`/assinante/conteudo/${content.id}`}
                className="block mb-3"
              >
                <h3 className="font-black text-lg text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2">
                  {content.titulo}
                </h3>
              </Link>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span className="font-medium">{content.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span className="font-medium">{content.likes}</span>
                  </div>
                </div>
                <Link
                  href={`/assinante/conteudo/${content.id}`}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-xs transition-all hover:scale-105"
                >
                  Ver Agora
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ver Mais */}
      <div className="mt-8 text-center">
        <Link
          href="/assinante/trending"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-black text-lg transition-all hover:scale-105 shadow-lg"
        >
          <FaFire className="w-5 h-5" />
          <span>Ver Mais Conteúdo em Alta</span>
        </Link>
      </div>
    </section>
  );
}
