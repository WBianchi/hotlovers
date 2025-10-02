"use client";

import { Crown, Heart, MessageCircle, Eye, Star } from "lucide-react";
import { FaFire, FaCrown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const featuredModels = [
  {
    id: "1",
    nome: "Isabella Santos",
    foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=400&h=600&fit=crop&crop=face",
    capa: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=400&fit=crop",
    categoria: "Fitness",
    online: true,
    premium: true,
    seguidores: "125K",
    fotos: 342,
    videos: 89,
    rating: 4.9,
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
    seguidores: "98K",
    fotos: 278,
    videos: 65,
    rating: 4.8,
    bio: "Ensaios sensuais e conteúdo premium exclusivo 💋"
  },
  {
    id: "3",
    nome: "Juliana Costa",
    foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
    capa: "https://images.unsplash.com/photo-1557683304-673a23048d34?w=800&h=400&fit=crop",
    categoria: "Fashion",
    online: true,
    premium: true,
    seguidores: "156K",
    fotos: 412,
    videos: 102,
    rating: 5.0,
    bio: "Top model e influenciadora digital ✨"
  }
];

export function FeaturedModels() {
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
            <FaCrown className="w-8 h-8 text-red-600" />
            <span>Modelos em Destaque</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            As modelos mais populares e com melhor avaliação da plataforma
          </p>
        </div>
        <Link
          href="/assinante/explorar"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg"
        >
          Ver Todas
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredModels.map((model) => (
          <div
            key={model.id}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Capa */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={model.capa}
                alt={model.nome}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                {model.premium && (
                  <div className="px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center space-x-1">
                    <FaCrown className="w-3 h-3 text-white" />
                    <span className="text-xs font-bold text-white">PREMIUM</span>
                  </div>
                )}
                {model.online && (
                  <div className="px-3 py-1 bg-green-500 rounded-full flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-white">ONLINE</span>
                  </div>
                )}
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(model.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Heart
                  className={`w-5 h-5 transition-all ${
                    favorites.includes(model.id)
                      ? "fill-red-600 text-red-600"
                      : "text-white"
                  }`}
                />
              </button>

              {/* Foto de Perfil */}
              <div className="absolute -bottom-12 left-6">
                <div className="relative">
                  <img
                    src={model.foto}
                    alt={model.nome}
                    className="w-24 h-24 rounded-2xl object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                  />
                  {model.online && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-16">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <Link
                    href={`/assinante/modelo/${model.id}`}
                    className="text-xl font-black text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors"
                  >
                    {model.nome}
                  </Link>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded">
                      {model.categoria}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {model.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {model.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-lg font-black text-gray-900 dark:text-white">
                    {model.seguidores}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Seguidores</p>
                </div>
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-lg font-black text-gray-900 dark:text-white">
                    {model.fotos}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Fotos</p>
                </div>
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-lg font-black text-gray-900 dark:text-white">
                    {model.videos}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Vídeos</p>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href={`/assinante/modelo/${model.id}`}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-center transition-all hover:scale-105"
                >
                  Ver Perfil
                </Link>
                <Link
                  href={`/assinante/chat/${model.id}`}
                  className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold text-center transition-all hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
