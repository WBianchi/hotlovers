"use client";

import { Image as ImageIcon, Grid3x3, LayoutList, Heart, Download, Eye, Filter } from "lucide-react";
import { FaImage } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const fotos = [
  {
    id: "f1",
    titulo: "Ensaio Fashion Premium",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop",
    modelo: {
      id: "4",
      nome: "Camila Rodrigues",
      foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face"
    },
    categoria: "Fashion",
    views: "15.2K",
    likes: "2.3K",
    premium: false,
    dataPublicacao: "2024-01-22"
  },
  {
    id: "f2",
    titulo: "Lingerie Collection",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
    modelo: {
      id: "2",
      nome: "Amanda Silva",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    categoria: "Lingerie",
    views: "23.5K",
    likes: "4.1K",
    premium: true,
    dataPublicacao: "2024-01-21"
  },
  {
    id: "f3",
    titulo: "Fitness Motivation",
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=600&h=800&fit=crop",
    modelo: {
      id: "1",
      nome: "Isabella Santos",
      foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=100&h=100&fit=crop&crop=face"
    },
    categoria: "Fitness",
    views: "18.7K",
    likes: "3.2K",
    premium: true,
    dataPublicacao: "2024-01-20"
  },
  {
    id: "f4",
    titulo: "Ensaio Sensual",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop",
    modelo: {
      id: "3",
      nome: "Juliana Costa",
      foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
    },
    categoria: "Sensual",
    views: "31.2K",
    likes: "5.8K",
    premium: true,
    dataPublicacao: "2024-01-19"
  },
  {
    id: "f5",
    titulo: "Beach Vibes",
    thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop",
    modelo: {
      id: "6",
      nome: "Beatriz Lima",
      foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face"
    },
    categoria: "Fashion",
    views: "12.4K",
    likes: "1.9K",
    premium: false,
    dataPublicacao: "2024-01-18"
  },
  {
    id: "f6",
    titulo: "Studio Session",
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop",
    modelo: {
      id: "5",
      nome: "Mariana Oliveira",
      foto: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face"
    },
    categoria: "Premium",
    views: "27.8K",
    likes: "4.5K",
    premium: true,
    dataPublicacao: "2024-01-17"
  }
];

export function FotosContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState("todas");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const filteredFotos = filter === "todas"
    ? fotos
    : filter === "premium"
    ? fotos.filter(f => f.premium)
    : fotos.filter(f => f.categoria.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-[1920px] mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-3 flex items-center space-x-3">
            <FaImage className="w-10 h-10 text-red-600" />
            <span>Fotos</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore as melhores fotos das modelos mais sensuais
          </p>
        </div>

        {/* Filters & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          {/* Filters */}
          <div className="flex items-center space-x-3 overflow-x-auto pb-2">
            <button
              onClick={() => setFilter("todas")}
              className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all ${
                filter === "todas"
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter("premium")}
              className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all ${
                filter === "premium"
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Premium
            </button>
            <button
              onClick={() => setFilter("fitness")}
              className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all ${
                filter === "fitness"
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Fitness
            </button>
            <button
              onClick={() => setFilter("lingerie")}
              className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all ${
                filter === "lingerie"
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Lingerie
            </button>
            <button
              onClick={() => setFilter("fashion")}
              className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all ${
                filter === "fashion"
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Fashion
            </button>
          </div>

          {/* View Mode */}
          <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-3 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-red-600 text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-3 rounded-lg transition-all ${
                viewMode === "list"
                  ? "bg-red-600 text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              <LayoutList className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-bold text-gray-900 dark:text-white">{filteredFotos.length}</span> fotos encontradas
          </p>
        </div>

        {/* Grid */}
        <div className={viewMode === "grid" ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" : "space-y-4"}>
          {filteredFotos.map((foto) => (
            <div
              key={foto.id}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all ${
                viewMode === "grid" ? "hover:-translate-y-2" : ""
              }`}
            >
              <div className={viewMode === "list" ? "flex" : ""}>
                <Link
                  href={`/assinante/foto/${foto.id}`}
                  className={`block relative overflow-hidden ${
                    viewMode === "grid" ? "aspect-[3/4]" : "w-48 h-32"
                  }`}
                >
                  <img
                    src={foto.thumbnail}
                    alt={foto.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {foto.premium && (
                    <div className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full">
                      <span className="text-xs font-bold text-white">PREMIUM</span>
                    </div>
                  )}

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(foto.id);
                    }}
                    className="absolute top-2 right-2 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all ${
                        favorites.includes(foto.id)
                          ? "fill-red-600 text-red-600"
                          : "text-white"
                      }`}
                    />
                  </button>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </Link>

                <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <Link href={`/assinante/foto/${foto.id}`}>
                    <h3 className="font-black text-gray-900 dark:text-white group-hover:text-red-600 transition-colors mb-2 line-clamp-2">
                      {foto.titulo}
                    </h3>
                  </Link>
                  
                  <Link
                    href={`/assinante/modelo/${foto.modelo.id}`}
                    className="flex items-center space-x-2 mb-3 group/modelo"
                  >
                    <img
                      src={foto.modelo.foto}
                      alt={foto.modelo.nome}
                      className="w-6 h-6 rounded-lg object-cover"
                    />
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-400 group-hover/modelo:text-red-600 transition-colors">
                      {foto.modelo.nome}
                    </span>
                  </Link>

                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{foto.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{foto.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
