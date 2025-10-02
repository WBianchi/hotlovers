"use client";

import { Eye, Calendar, TrendingUp, Pause, Play } from "lucide-react";

const campanhasAtivas = [
  {
    id: 1,
    conteudo: "Pack Premium Exclusivo",
    tipo: "Pack",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    investido: 150.00,
    visualizacoes: 18500,
    cliques: 1245,
    dataInicio: "15/09/2024",
    dataFim: "18/09/2024",
    status: "ativa"
  },
  {
    id: 2,
    conteudo: "Fotos Sensuais HD",
    tipo: "Foto",
    thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop",
    investido: 50.00,
    visualizacoes: 8900,
    cliques: 567,
    dataInicio: "18/09/2024",
    dataFim: "19/09/2024",
    status: "ativa"
  }
];

export function ImpulsionarAtivas() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-black text-gray-800 dark:text-gray-100">Campanhas Ativas</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Acompanhe o desempenho em tempo real</p>
      </div>

      <div className="p-6 space-y-4">
        {campanhasAtivas.map((campanha) => (
          <div
            key={campanha.id}
            className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
          >
            <div className="flex items-center space-x-4">
              {/* Thumbnail */}
              <img
                src={campanha.thumbnail}
                alt={campanha.conteudo}
                className="w-20 h-20 rounded-xl object-cover shadow-md"
              />

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-100">{campanha.conteudo}</h3>
                    <span className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full font-bold">
                      {campanha.tipo}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <Pause className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Investido</p>
                    <p className="text-sm font-black text-red-600">R$ {campanha.investido.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Visualizações</p>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3 text-blue-600" />
                      <p className="text-sm font-black text-blue-600">{campanha.visualizacoes.toLocaleString()}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Cliques</p>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-emerald-600" />
                      <p className="text-sm font-black text-emerald-600">{campanha.cliques}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Período</p>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                      <p className="text-xs text-gray-600 dark:text-gray-400">{campanha.dataInicio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
