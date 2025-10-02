"use client";

import { Heart, Star, Eye, MessageCircle, Crown, CheckCircle } from "lucide-react";
import { FaCrown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

// Mock data - em produção viria da API
const mockModelos = [
  {
    id: "1",
    nome: "Isabella Santos",
    foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=400&h=600&fit=crop&crop=face",
    categoria: "Fitness",
    online: true,
    premium: true,
    verificada: true,
    rating: 4.9,
    seguidores: "125K",
    fotos: 342,
    videos: 89,
    estado: "SP",
    cidade: "São Paulo"
  },
  {
    id: "2",
    nome: "Amanda Silva",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face",
    categoria: "Lingerie",
    online: false,
    premium: true,
    verificada: true,
    rating: 4.8,
    seguidores: "98K",
    fotos: 278,
    videos: 65,
    estado: "RJ",
    cidade: "Rio de Janeiro"
  },
  {
    id: "3",
    nome: "Juliana Costa",
    foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
    categoria: "Fashion",
    online: true,
    premium: true,
    verificada: true,
    rating: 5.0,
    seguidores: "156K",
    fotos: 412,
    videos: 102,
    estado: "MG",
    cidade: "Belo Horizonte"
  },
  {
    id: "4",
    nome: "Camila Rodrigues",
    foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&crop=face",
    categoria: "Fitness",
    online: true,
    premium: false,
    verificada: true,
    rating: 4.7,
    seguidores: "89K",
    fotos: 234,
    videos: 56,
    estado: "SP",
    cidade: "Campinas"
  },
  {
    id: "5",
    nome: "Mariana Oliveira",
    foto: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop&crop=face",
    categoria: "Fashion",
    online: false,
    premium: true,
    verificada: false,
    rating: 4.9,
    seguidores: "76K",
    fotos: 189,
    videos: 43,
    estado: "RS",
    cidade: "Porto Alegre"
  },
  {
    id: "6",
    nome: "Beatriz Lima",
    foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop&crop=face",
    categoria: "Lingerie",
    online: true,
    premium: true,
    verificada: true,
    rating: 4.8,
    seguidores: "112K",
    fotos: 356,
    videos: 78,
    estado: "BA",
    cidade: "Salvador"
  },
  {
    id: "7",
    nome: "Fernanda Souza",
    foto: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop&crop=face",
    categoria: "Sensual",
    online: true,
    premium: true,
    verificada: true,
    rating: 5.0,
    seguidores: "95K",
    fotos: 298,
    videos: 67,
    estado: "PR",
    cidade: "Curitiba"
  },
  {
    id: "8",
    nome: "Larissa Santos",
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face",
    categoria: "Premium",
    online: false,
    premium: true,
    verificada: true,
    rating: 4.6,
    seguidores: "68K",
    fotos: 167,
    videos: 39,
    estado: "SC",
    cidade: "Florianópolis"
  }
];

interface ModelosGridProps {
  searchQuery: string;
  filters: any;
}

export function ModelosGrid({ searchQuery, filters }: ModelosGridProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Filtrar modelos
  const filteredModelos = mockModelos.filter(modelo => {
    // Search query
    if (searchQuery && !modelo.nome.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !modelo.categoria.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !modelo.cidade.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Categoria
    if (filters.categoria !== "todas" && modelo.categoria.toLowerCase() !== filters.categoria) {
      return false;
    }

    // Status
    if (filters.status === "online" && !modelo.online) return false;
    if (filters.status === "offline" && modelo.online) return false;

    // Premium
    if (filters.premium && !modelo.premium) return false;

    // Verificadas
    if (filters.verificadas && !modelo.verificada) return false;

    // Top Rated
    if (filters.topRated && modelo.rating < 4.5) return false;

    return true;
  });

  return (
    <div>
      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          <span className="font-bold text-gray-900 dark:text-white">{filteredModelos.length}</span> modelos encontradas
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredModelos.map((modelo) => (
          <div
            key={modelo.id}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Foto */}
            <Link href={`/assinante/modelo/${modelo.id}`} className="block relative aspect-[3/4] overflow-hidden">
              <img
                src={modelo.foto}
                alt={modelo.nome}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Badges Top */}
              <div className="absolute top-3 left-3 flex flex-col space-y-2">
                {modelo.online && (
                  <div className="px-2 py-1 bg-green-500 rounded-full flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-white">ONLINE</span>
                  </div>
                )}
                {modelo.premium && (
                  <div className="px-2 py-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center space-x-1">
                    <FaCrown className="w-3 h-3 text-white" />
                    <span className="text-xs font-bold text-white">PREMIUM</span>
                  </div>
                )}
              </div>

              {/* Verificada Badge */}
              {modelo.verificada && (
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}

              {/* Favorite Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(modelo.id);
                }}
                className="absolute bottom-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
              >
                <Heart
                  className={`w-5 h-5 transition-all ${
                    favorites.includes(modelo.id)
                      ? "fill-red-600 text-red-600"
                      : "text-white"
                  }`}
                />
              </button>
            </Link>

            {/* Info */}
            <div className="p-5">
              <Link
                href={`/assinante/modelo/${modelo.id}`}
                className="block mb-2"
              >
                <h3 className="font-black text-lg text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors truncate">
                  {modelo.nome}
                </h3>
              </Link>

              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded">
                  {modelo.categoria}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  <span className="text-xs font-bold text-gray-900 dark:text-white">
                    {modelo.rating}
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                📍 {modelo.cidade}, {modelo.estado}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">{modelo.seguidores}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Seguidores</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">{modelo.fotos}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Fotos</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">{modelo.videos}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Vídeos</p>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href={`/assinante/modelo/${modelo.id}`}
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-xs text-center transition-all hover:scale-105"
                >
                  Ver Perfil
                </Link>
                <Link
                  href={`/assinante/chat/${modelo.id}`}
                  className="px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-bold text-xs text-center transition-all hover:scale-105 flex items-center justify-center space-x-1"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>Chat</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredModelos.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Eye className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Nenhuma modelo encontrada
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Tente ajustar os filtros ou a busca
          </p>
        </div>
      )}
    </div>
  );
}
