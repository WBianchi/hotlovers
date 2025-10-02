"use client";

import { Heart, Star, Eye, MessageCircle, Crown, CheckCircle, MapPin } from "lucide-react";
import { FaCrown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

// Mesmos dados mock do grid
const mockModelos = [
  {
    id: "1",
    nome: "Isabella Santos",
    foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=400&h=600&fit=crop&crop=face",
    capa: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=400&fit=crop",
    categoria: "Fitness",
    online: true,
    premium: true,
    verificada: true,
    rating: 4.9,
    seguidores: "125K",
    fotos: 342,
    videos: 89,
    estado: "SP",
    cidade: "São Paulo",
    bio: "Modelo fitness e criadora de conteúdo exclusivo 🔥"
  },
  {
    id: "2",
    nome: "Amanda Silva",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face",
    capa: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=400&fit=crop",
    categoria: "Lingerie",
    online: false,
    premium: true,
    verificada: true,
    rating: 4.8,
    seguidores: "98K",
    fotos: 278,
    videos: 65,
    estado: "RJ",
    cidade: "Rio de Janeiro",
    bio: "Ensaios sensuais e conteúdo premium exclusivo 💋"
  }
];

interface ModelosListProps {
  searchQuery: string;
  filters: any;
}

export function ModelosList({ searchQuery, filters }: ModelosListProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {mockModelos.map((modelo) => (
        <div
          key={modelo.id}
          className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row">
            {/* Imagem */}
            <Link
              href={`/assinante/modelo/${modelo.id}`}
              className="relative w-full md:w-80 h-64 md:h-auto overflow-hidden flex-shrink-0"
            >
              <img
                src={modelo.capa}
                alt={modelo.nome}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              
              {/* Foto de Perfil */}
              <div className="absolute bottom-4 left-4">
                <img
                  src={modelo.foto}
                  alt={modelo.nome}
                  className="w-20 h-20 rounded-xl object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                />
                {modelo.online && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                )}
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
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
            </Link>

            {/* Content */}
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Link
                      href={`/assinante/modelo/${modelo.id}`}
                      className="text-2xl font-black text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors"
                    >
                      {modelo.nome}
                    </Link>
                    {modelo.verificada && (
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold rounded-full">
                      {modelo.categoria}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {modelo.rating}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{modelo.cidade}, {modelo.estado}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {modelo.bio}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 mb-4">
                    <div>
                      <p className="text-lg font-black text-gray-900 dark:text-white">{modelo.seguidores}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Seguidores</p>
                    </div>
                    <div>
                      <p className="text-lg font-black text-gray-900 dark:text-white">{modelo.fotos}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Fotos</p>
                    </div>
                    <div>
                      <p className="text-lg font-black text-gray-900 dark:text-white">{modelo.videos}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Vídeos</p>
                    </div>
                  </div>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(modelo.id)}
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                >
                  <Heart
                    className={`w-6 h-6 transition-all ${
                      favorites.includes(modelo.id)
                        ? "fill-red-600 text-red-600"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3">
                <Link
                  href={`/assinante/modelo/${modelo.id}`}
                  className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-center transition-all hover:scale-105"
                >
                  Ver Perfil Completo
                </Link>
                <Link
                  href={`/assinante/chat/${modelo.id}`}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold transition-all hover:scale-105 flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
