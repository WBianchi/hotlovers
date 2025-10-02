"use client";

import { Heart, Grid3x3, LayoutList, Play, Image as ImageIcon, Package, Trash2, Share2 } from "lucide-react";
import { FaHeart, FaPlay, FaCrown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const favoritosModelos = [
  {
    id: "1",
    tipo: "modelo",
    modelo: {
      id: "1",
      nome: "Isabella Santos",
      foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=400&h=600&fit=crop&crop=face",
      categoria: "Fitness",
      online: true
    },
    dataAdicionado: "2024-01-20"
  },
  {
    id: "2",
    tipo: "modelo",
    modelo: {
      id: "2",
      nome: "Amanda Silva",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face",
      categoria: "Lingerie",
      online: false
    },
    dataAdicionado: "2024-01-18"
  }
];

const favoritosConteudo = [
  {
    id: "v1",
    tipo: "video",
    titulo: "Ensaio Sensual - Behind the Scenes",
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=600&h=400&fit=crop",
    modelo: "Isabella Santos",
    duracao: "15:32",
    premium: true,
    dataAdicionado: "2024-01-22"
  },
  {
    id: "f1",
    tipo: "foto",
    titulo: "Ensaio Fashion Premium",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop",
    modelo: "Camila Rodrigues",
    itens: "28 fotos HD",
    dataAdicionado: "2024-01-21"
  },
  {
    id: "p1",
    tipo: "pack",
    titulo: "Pack Exclusivo - Lingerie Collection",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop",
    modelo: "Amanda Silva",
    itens: "45 fotos + 3 vídeos",
    premium: true,
    dataAdicionado: "2024-01-19"
  },
  {
    id: "v2",
    tipo: "video",
    titulo: "Fitness & Sensualidade",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop",
    modelo: "Juliana Costa",
    duracao: "12:18",
    premium: true,
    dataAdicionado: "2024-01-17"
  }
];

export function FavoritosContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeTab, setActiveTab] = useState<"modelos" | "conteudo">("modelos");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-3 flex items-center space-x-3">
            <FaHeart className="w-10 h-10 text-red-600" />
            <span>Meus Favoritos</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Seus conteúdos e modelos favoritos em um só lugar
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
            <button
              onClick={() => setActiveTab("modelos")}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === "modelos"
                  ? "bg-red-600 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Modelos ({favoritosModelos.length})
            </button>
            <button
              onClick={() => setActiveTab("conteudo")}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === "conteudo"
                  ? "bg-red-600 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Conteúdo ({favoritosConteudo.length})
            </button>
          </div>

          {/* View Mode */}
          {activeTab === "conteudo" && (
            <div className="flex items-center space-x-3">
              {selectedItems.length > 0 && (
                <button className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all flex items-center space-x-2">
                  <Trash2 className="w-4 h-4" />
                  <span>Remover ({selectedItems.length})</span>
                </button>
              )}
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
          )}
        </div>

        {/* Modelos Tab */}
        {activeTab === "modelos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoritosModelos.map((fav) => (
              <div
                key={fav.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <Link href={`/assinante/modelo/${fav.modelo.id}`} className="block relative aspect-[3/4] overflow-hidden">
                  <img
                    src={fav.modelo.foto}
                    alt={fav.modelo.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {fav.modelo.online && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-green-500 rounded-full flex items-center space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-white">ONLINE</span>
                    </div>
                  )}

                  <button className="absolute top-3 right-3 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </button>
                </Link>

                <div className="p-5">
                  <Link href={`/assinante/modelo/${fav.modelo.id}`}>
                    <h3 className="font-black text-lg text-gray-900 dark:text-white group-hover:text-red-600 transition-colors mb-2">
                      {fav.modelo.nome}
                    </h3>
                  </Link>
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded">
                    {fav.modelo.categoria}
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                    Adicionado em {new Date(fav.dataAdicionado).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Conteúdo Tab */}
        {activeTab === "conteudo" && (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
            {favoritosConteudo.map((item) => (
              <div
                key={item.id}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all ${
                  viewMode === "grid" ? "hover:-translate-y-2" : ""
                }`}
              >
                <div className={viewMode === "list" ? "flex" : ""}>
                  <Link
                    href={`/assinante/conteudo/${item.id}`}
                    className={`block relative overflow-hidden ${
                      viewMode === "grid" ? "aspect-video" : "w-48 h-32"
                    }`}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Tipo Badge */}
                    <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-bold text-white uppercase flex items-center space-x-1">
                        {item.tipo === "video" && <Play className="w-3 h-3" />}
                        {item.tipo === "foto" && <ImageIcon className="w-3 h-3" />}
                        {item.tipo === "pack" && <Package className="w-3 h-3" />}
                        <span>{item.tipo}</span>
                      </span>
                    </div>

                    {item.premium && (
                      <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full">
                        <FaCrown className="w-3 h-3 text-white" />
                      </div>
                    )}

                    {item.tipo === "video" && item.duracao && (
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-white text-xs font-bold">
                        {item.duracao}
                      </div>
                    )}

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </Link>

                  <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <Link href={`/assinante/conteudo/${item.id}`}>
                      <h3 className="font-black text-gray-900 dark:text-white group-hover:text-red-600 transition-colors mb-2 line-clamp-2">
                        {item.titulo}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Por {item.modelo}
                    </p>
                    {item.itens && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {item.itens}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Adicionado em {new Date(item.dataAdicionado).toLocaleDateString('pt-BR')}
                    </p>

                    {viewMode === "list" && (
                      <div className="flex items-center space-x-2 mt-4">
                        <button className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-xs transition-all">
                          Ver Agora
                        </button>
                        <button className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-all">
                          <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>
                        <button className="p-2 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-lg transition-all">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
