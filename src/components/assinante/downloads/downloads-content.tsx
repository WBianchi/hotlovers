"use client";

import { Download, HardDrive, Calendar, Trash2, FolderOpen, Play, Image as ImageIcon, Package, CheckCircle } from "lucide-react";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const downloads = [
  {
    id: "d1",
    tipo: "video",
    titulo: "Ensaio Sensual - Behind the Scenes",
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=600&h=400&fit=crop",
    modelo: {
      id: "1",
      nome: "Isabella Santos"
    },
    tamanho: "1.2 GB",
    duracao: "15:32",
    dataDownload: "2024-01-22",
    formato: "MP4",
    qualidade: "1080p"
  },
  {
    id: "d2",
    tipo: "pack",
    titulo: "Pack Exclusivo - Lingerie Collection",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop",
    modelo: {
      id: "2",
      nome: "Amanda Silva"
    },
    tamanho: "856 MB",
    itens: "45 fotos + 3 vídeos",
    dataDownload: "2024-01-20",
    formato: "ZIP",
    qualidade: "HD"
  },
  {
    id: "d3",
    tipo: "foto",
    titulo: "Ensaio Fashion Premium",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop",
    modelo: {
      id: "4",
      nome: "Camila Rodrigues"
    },
    tamanho: "342 MB",
    itens: "28 fotos",
    dataDownload: "2024-01-18",
    formato: "ZIP",
    qualidade: "4K"
  },
  {
    id: "d4",
    tipo: "video",
    titulo: "Fitness & Sensualidade",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop",
    modelo: {
      id: "3",
      nome: "Juliana Costa"
    },
    tamanho: "987 MB",
    duracao: "12:18",
    dataDownload: "2024-01-15",
    formato: "MP4",
    qualidade: "1080p"
  }
];

export function DownloadsContent() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const totalSize = downloads.reduce((acc, d) => {
    const size = parseFloat(d.tamanho);
    const unit = d.tamanho.includes("GB") ? 1024 : 1;
    return acc + (size * unit);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-3 flex items-center space-x-3">
            <FaDownload className="w-10 h-10 text-red-600" />
            <span>Meus Downloads</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Gerencie todos os seus downloads e arquivos salvos
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-3xl font-black text-gray-900 dark:text-white">
                {downloads.length}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Total de Downloads</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Arquivos baixados</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <HardDrive className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-3xl font-black text-gray-900 dark:text-white">
                {(totalSize / 1024).toFixed(1)} GB
              </span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Espaço Utilizado</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total em disco</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-3xl font-black text-gray-900 dark:text-white">
                {downloads.filter(d => d.tipo === "video").length}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Vídeos</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Disponíveis</p>
          </div>
        </div>

        {/* Actions Bar */}
        {selectedItems.length > 0 && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center justify-between">
            <p className="font-bold text-red-600 dark:text-red-400">
              {selectedItems.length} {selectedItems.length === 1 ? "item selecionado" : "itens selecionados"}
            </p>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-all flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Baixar Novamente</span>
              </button>
              <button className="px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg font-bold transition-all flex items-center space-x-2">
                <Trash2 className="w-4 h-4" />
                <span>Remover</span>
              </button>
            </div>
          </div>
        )}

        {/* Downloads List */}
        <div className="space-y-4">
          {downloads.map((download) => (
            <div
              key={download.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl border transition-all ${
                selectedItems.includes(download.id)
                  ? "border-red-600 shadow-lg"
                  : "border-gray-200 dark:border-gray-700 hover:shadow-lg"
              }`}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(download.id)}
                    onChange={() => toggleSelect(download.id)}
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-600"
                  />

                  {/* Thumbnail */}
                  <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={download.thumbnail}
                      alt={download.titulo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      {download.tipo === "video" && <Play className="w-6 h-6 text-white" />}
                      {download.tipo === "foto" && <ImageIcon className="w-6 h-6 text-white" />}
                      {download.tipo === "pack" && <Package className="w-6 h-6 text-white" />}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0 pr-4">
                        <h3 className="font-black text-lg text-gray-900 dark:text-white mb-1 truncate">
                          {download.titulo}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Por {download.modelo.nome}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center space-x-1">
                            <HardDrive className="w-3 h-3" />
                            <span>{download.tamanho}</span>
                          </span>
                          {download.duracao && (
                            <span className="flex items-center space-x-1">
                              <Play className="w-3 h-3" />
                              <span>{download.duracao}</span>
                            </span>
                          )}
                          {download.itens && (
                            <span className="flex items-center space-x-1">
                              <FolderOpen className="w-3 h-3" />
                              <span>{download.itens}</span>
                            </span>
                          )}
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(download.dataDownload).toLocaleDateString('pt-BR')}</span>
                          </span>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-col items-end space-y-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">
                          {download.formato}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold rounded-full">
                          {download.qualidade}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 mt-4">
                      <button className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-sm transition-all hover:scale-105 flex items-center justify-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Baixar Novamente</span>
                      </button>
                      <Link
                        href={`/assinante/conteudo/${download.id}`}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-bold text-sm transition-all"
                      >
                        Ver Online
                      </Link>
                      <button className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 rounded-lg transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {downloads.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Nenhum download ainda
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Comece a baixar conteúdos para acessá-los offline
            </p>
            <Link
              href="/assinante/compras"
              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all hover:scale-105"
            >
              Ver Minhas Compras
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
