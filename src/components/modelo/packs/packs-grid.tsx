"use client";

import { Image, Video, Edit, Trash2, Eye, DollarSign, Calendar } from "lucide-react";

const mockPacks = [
  {
    id: 1,
    titulo: "Pack Premium Exclusivo",
    tipo: "misto",
    fotos: 15,
    videos: 3,
    valor: 89.90,
    vendas: 45,
    visualizacoes: 234,
    dataCriacao: "15/09/2024",
    status: "ativo",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    titulo: "Fotos Sensuais HD",
    tipo: "fotos",
    fotos: 25,
    videos: 0,
    valor: 49.90,
    vendas: 78,
    visualizacoes: 456,
    dataCriacao: "10/09/2024",
    status: "ativo",
    thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    titulo: "Vídeos Exclusivos 4K",
    tipo: "videos",
    fotos: 0,
    videos: 8,
    valor: 129.90,
    vendas: 23,
    visualizacoes: 189,
    dataCriacao: "05/09/2024",
    status: "ativo",
    thumbnail: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    titulo: "Pack Iniciante",
    tipo: "fotos",
    fotos: 10,
    videos: 0,
    valor: 29.90,
    vendas: 112,
    visualizacoes: 678,
    dataCriacao: "01/09/2024",
    status: "pausado",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
  }
];

export function PacksGrid() {
  const getTipoIcon = (tipo: string) => {
    if (tipo === "fotos") return <Image className="w-4 h-4" />;
    if (tipo === "videos") return <Video className="w-4 h-4" />;
    return (
      <>
        <Image className="w-3 h-3" />
        <Video className="w-3 h-3" />
      </>
    );
  };

  const getTipoColor = (tipo: string) => {
    if (tipo === "fotos") return "bg-blue-100 dark:bg-blue-900/30 text-blue-600";
    if (tipo === "videos") return "bg-purple-100 dark:bg-purple-900/30 text-purple-600";
    return "bg-red-100 dark:bg-red-900/30 text-red-600";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {mockPacks.map((pack) => (
        <div
          key={pack.id}
          className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
        >
          {/* Thumbnail */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={pack.thumbnail}
              alt={pack.titulo}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Status Badge */}
            <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
              pack.status === "ativo" 
                ? "bg-green-500 text-white" 
                : "bg-gray-500 text-white"
            }`}>
              {pack.status === "ativo" ? "Ativo" : "Pausado"}
            </div>

            {/* Tipo Badge */}
            <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 ${getTipoColor(pack.tipo)}`}>
              {getTipoIcon(pack.tipo)}
              <span className="capitalize">{pack.tipo}</span>
            </div>

            {/* Price */}
            <div className="absolute bottom-3 left-3 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400">Valor</p>
              <p className="text-xl font-black text-red-600">R$ {pack.valor.toFixed(2)}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3 line-clamp-1">
              {pack.titulo}
            </h3>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center space-x-2 text-sm">
                <Image className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">{pack.fotos} fotos</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Video className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">{pack.videos} vídeos</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <DollarSign className="w-4 h-4 text-emerald-500" />
                <span className="text-gray-600 dark:text-gray-400">{pack.vendas} vendas</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Eye className="w-4 h-4 text-blue-500" />
                <span className="text-gray-600 dark:text-gray-400">{pack.visualizacoes}</span>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center space-x-2 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Calendar className="w-3 h-3" />
              <span>Criado em {pack.dataCriacao}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all font-semibold text-gray-700 dark:text-gray-300">
                <Edit className="w-4 h-4" />
                <span>Editar</span>
              </button>
              <button className="p-2 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-xl transition-all">
                <Trash2 className="w-4 h-4 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
