"use client";

import { Heart, Eye, Star, Play } from "lucide-react";
import { FaFire } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const recommendedModels = [
  {
    id: "4",
    nome: "Camila Rodrigues",
    foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=400&fit=crop&crop=face",
    categoria: "Fitness",
    online: true,
    views: "89K",
    rating: 4.7,
    novosConteudos: 5
  },
  {
    id: "5",
    nome: "Mariana Oliveira",
    foto: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=400&fit=crop&crop=face",
    categoria: "Fashion",
    online: false,
    views: "76K",
    rating: 4.9,
    novosConteudos: 3
  },
  {
    id: "6",
    nome: "Beatriz Lima",
    foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=400&fit=crop&crop=face",
    categoria: "Lingerie",
    online: true,
    views: "112K",
    rating: 4.8,
    novosConteudos: 8
  },
  {
    id: "7",
    nome: "Fernanda Souza",
    foto: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=400&fit=crop&crop=face",
    categoria: "Sensual",
    online: true,
    views: "95K",
    rating: 5.0,
    novosConteudos: 12
  },
  {
    id: "8",
    nome: "Larissa Santos",
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop&crop=face",
    categoria: "Premium",
    online: false,
    views: "68K",
    rating: 4.6,
    novosConteudos: 2
  },
  {
    id: "9",
    nome: "Gabriela Costa",
    foto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop&crop=face",
    categoria: "Ensaios",
    online: true,
    views: "103K",
    rating: 4.9,
    novosConteudos: 6
  }
];

export function RecommendedModels() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white flex items-center space-x-3">
            <FaFire className="w-8 h-8 text-red-600" />
            <span>Recomendadas para Você</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Baseado nas suas preferências e histórico de visualização
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {recommendedModels.map((model) => (
          <div
            key={model.id}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Foto */}
            <Link href={`/assinante/modelo/${model.id}`} className="block relative aspect-[3/4] overflow-hidden">
              <img
                src={model.foto}
                alt={model.nome}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Online Badge */}
              {model.online && (
                <div className="absolute top-3 left-3 px-2 py-1 bg-green-500 rounded-full flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-white">ONLINE</span>
                </div>
              )}

              {/* Novos Conteúdos Badge */}
              {model.novosConteudos > 0 && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-red-600 rounded-full">
                  <span className="text-xs font-bold text-white">+{model.novosConteudos} novos</span>
                </div>
              )}

              {/* Favorite Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(model.id);
                }}
                className="absolute bottom-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
              >
                <Heart
                  className={`w-5 h-5 transition-all ${
                    favorites.includes(model.id)
                      ? "fill-red-600 text-red-600"
                      : "text-white"
                  }`}
                />
              </button>

              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            </Link>

            {/* Info */}
            <div className="p-4">
              <Link
                href={`/assinante/modelo/${model.id}`}
                className="block mb-2"
              >
                <h3 className="font-black text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors truncate">
                  {model.nome}
                </h3>
              </Link>

              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded">
                  {model.categoria}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  <span className="text-xs font-bold text-gray-900 dark:text-white">
                    {model.rating}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{model.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-3 h-3" />
                  <span>Seguir</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
