"use client";

import { Play, Grid3x3, LayoutList, Heart, Eye, Clock } from "lucide-react";
import { FaPlay, FaCrown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const videos = [
  {
    id: "v1",
    titulo: "Ensaio Sensual - Behind the Scenes",
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=600&h=400&fit=crop",
    modelo: { id: "1", nome: "Isabella Santos", foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=100&h=100&fit=crop&crop=face" },
    duracao: "15:32",
    views: "234K",
    likes: "12.5K",
    premium: true,
    categoria: "Sensual"
  },
  {
    id: "v2",
    titulo: "Fitness & Sensualidade",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop",
    modelo: { id: "3", nome: "Juliana Costa", foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face" },
    duracao: "12:18",
    views: "312K",
    likes: "18.2K",
    premium: true,
    categoria: "Fitness"
  },
  {
    id: "v3",
    titulo: "Sessão Exclusiva VIP",
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop",
    modelo: { id: "5", nome: "Mariana Oliveira", foto: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face" },
    duracao: "18:45",
    views: "278K",
    likes: "15.3K",
    premium: true,
    categoria: "Premium"
  }
];

export function VideosContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState("todos");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-[1920px] mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-3 flex items-center space-x-3">
            <FaPlay className="w-10 h-10 text-red-600" />
            <span>Vídeos</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Assista aos vídeos mais quentes e exclusivos
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-3">
            <button onClick={() => setFilter("todos")} className={`px-6 py-3 rounded-xl font-bold ${filter === "todos" ? "bg-red-600 text-white" : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"}`}>
              Todos
            </button>
            <button onClick={() => setFilter("premium")} className={`px-6 py-3 rounded-xl font-bold ${filter === "premium" ? "bg-red-600 text-white" : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"}`}>
              Premium
            </button>
          </div>
          <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
            <button onClick={() => setViewMode("grid")} className={`p-3 rounded-lg ${viewMode === "grid" ? "bg-red-600 text-white" : "text-gray-600 dark:text-gray-400"}`}>
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button onClick={() => setViewMode("list")} className={`p-3 rounded-lg ${viewMode === "list" ? "bg-red-600 text-white" : "text-gray-600 dark:text-gray-400"}`}>
              <LayoutList className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
          {videos.map((video) => (
            <div key={video.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Link href={`/assinante/video/${video.id}`} className="block relative aspect-video overflow-hidden">
                <img src={video.thumbnail} alt={video.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                {video.premium && (
                  <div className="absolute top-3 left-3 px-2 py-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center space-x-1">
                    <FaCrown className="w-3 h-3 text-white" />
                    <span className="text-xs font-bold text-white">PREMIUM</span>
                  </div>
                )}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">{video.duracao}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <Play className="w-7 h-7 text-white ml-1" />
                  </div>
                </div>
              </Link>
              <div className="p-4">
                <h3 className="font-black text-gray-900 dark:text-white mb-2 line-clamp-2">{video.titulo}</h3>
                <Link href={`/assinante/modelo/${video.modelo.id}`} className="flex items-center space-x-2 mb-3">
                  <img src={video.modelo.foto} alt={video.modelo.nome} className="w-6 h-6 rounded-lg" />
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400">{video.modelo.nome}</span>
                </Link>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex space-x-3">
                    <div className="flex items-center space-x-1"><Eye className="w-3 h-3" /><span>{video.views}</span></div>
                    <div className="flex items-center space-x-1"><Heart className="w-3 h-3" /><span>{video.likes}</span></div>
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
