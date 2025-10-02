"use client";

import { ShoppingBag, CreditCard, Calendar, Download, Eye, Package, Image as ImageIcon, Play } from "lucide-react";
import { FaShoppingBag, FaCrown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const compras = [
  {
    id: "c1",
    tipo: "pack",
    titulo: "Pack Exclusivo - Lingerie Collection",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop",
    modelo: {
      id: "2",
      nome: "Amanda Silva",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    valor: 89.90,
    dataCompra: "2024-01-22",
    itens: "45 fotos + 3 vídeos",
    status: "disponivel",
    downloads: 0
  },
  {
    id: "c2",
    tipo: "video",
    titulo: "Ensaio Sensual - Behind the Scenes",
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=600&h=400&fit=crop",
    modelo: {
      id: "1",
      nome: "Isabella Santos",
      foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=100&h=100&fit=crop&crop=face"
    },
    valor: 49.90,
    dataCompra: "2024-01-20",
    duracao: "15:32",
    status: "disponivel",
    downloads: 2
  },
  {
    id: "c3",
    tipo: "foto",
    titulo: "Ensaio Fashion Premium",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop",
    modelo: {
      id: "4",
      nome: "Camila Rodrigues",
      foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face"
    },
    valor: 29.90,
    dataCompra: "2024-01-18",
    itens: "28 fotos HD",
    status: "disponivel",
    downloads: 1
  },
  {
    id: "c4",
    tipo: "video",
    titulo: "Fitness & Sensualidade",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop",
    modelo: {
      id: "3",
      nome: "Juliana Costa",
      foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
    },
    valor: 39.90,
    dataCompra: "2024-01-15",
    duracao: "12:18",
    status: "disponivel",
    downloads: 3
  }
];

export function ComprasContent() {
  const [filter, setFilter] = useState<"todas" | "videos" | "fotos" | "packs">("todas");

  const totalGasto = compras.reduce((acc, compra) => acc + compra.valor, 0);
  const totalItens = compras.length;

  const filteredCompras = filter === "todas" 
    ? compras 
    : compras.filter(c => c.tipo === filter.slice(0, -1));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-3 flex items-center space-x-3">
            <FaShoppingBag className="w-10 h-10 text-red-600" />
            <span>Minhas Compras</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Acesse todo o conteúdo que você adquiriu
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-3xl font-black text-gray-900 dark:text-white">
                {totalItens}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Total de Compras</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Conteúdos adquiridos</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-3xl font-black text-gray-900 dark:text-white">
                R$ {totalGasto.toFixed(2)}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Total Investido</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Valor gasto</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-3xl font-black text-gray-900 dark:text-white">
                {compras.reduce((acc, c) => acc + c.downloads, 0)}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Downloads</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Realizados</p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex items-center space-x-3 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter("todas")}
            className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all ${
              filter === "todas"
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            }`}
          >
            Todas ({compras.length})
          </button>
          <button
            onClick={() => setFilter("videos")}
            className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all flex items-center space-x-2 ${
              filter === "videos"
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            }`}
          >
            <Play className="w-4 h-4" />
            <span>Vídeos ({compras.filter(c => c.tipo === "video").length})</span>
          </button>
          <button
            onClick={() => setFilter("fotos")}
            className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all flex items-center space-x-2 ${
              filter === "fotos"
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Fotos ({compras.filter(c => c.tipo === "foto").length})</span>
          </button>
          <button
            onClick={() => setFilter("packs")}
            className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all flex items-center space-x-2 ${
              filter === "packs"
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Packs ({compras.filter(c => c.tipo === "pack").length})</span>
          </button>
        </div>

        {/* Lista de Compras */}
        <div className="space-y-4">
          {filteredCompras.map((compra) => (
            <div
              key={compra.id}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Thumbnail */}
                <Link
                  href={`/assinante/conteudo/${compra.id}`}
                  className="relative w-full lg:w-80 h-48 rounded-xl overflow-hidden flex-shrink-0 group"
                >
                  <img
                    src={compra.thumbnail}
                    alt={compra.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Tipo Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-bold text-white uppercase flex items-center space-x-1">
                      {compra.tipo === "video" && <Play className="w-3 h-3" />}
                      {compra.tipo === "foto" && <ImageIcon className="w-3 h-3" />}
                      {compra.tipo === "pack" && <Package className="w-3 h-3" />}
                      <span>{compra.tipo}</span>
                    </span>
                  </div>

                  {compra.tipo === "video" && compra.duracao && (
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-white text-xs font-bold">
                      {compra.duracao}
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </Link>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <Link
                        href={`/assinante/conteudo/${compra.id}`}
                        className="text-2xl font-black text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors mb-2 block"
                      >
                        {compra.titulo}
                      </Link>
                      
                      <Link
                        href={`/assinante/modelo/${compra.modelo.id}`}
                        className="flex items-center space-x-2 mb-3 group/modelo"
                      >
                        <img
                          src={compra.modelo.foto}
                          alt={compra.modelo.nome}
                          className="w-8 h-8 rounded-lg object-cover"
                        />
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400 group-hover/modelo:text-red-600 dark:group-hover/modelo:text-red-500 transition-colors">
                          {compra.modelo.nome}
                        </span>
                      </Link>

                      {compra.itens && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          📦 {compra.itens}
                        </p>
                      )}
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-black text-red-600 mb-1">
                        R$ {compra.valor.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Comprado em
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {new Date(compra.dataCompra).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {compra.downloads} downloads
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Acesso vitalício
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-3">
                    <Link
                      href={`/assinante/conteudo/${compra.id}`}
                      className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-center transition-all hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-5 h-5" />
                      <span>Ver Conteúdo</span>
                    </Link>
                    <button className="px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold transition-all hover:scale-105 flex items-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCompras.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Nenhuma compra encontrada
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Explore o conteúdo das modelos e adquira seus favoritos
            </p>
            <Link
              href="/assinante/explorar"
              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all hover:scale-105"
            >
              Explorar Modelos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
