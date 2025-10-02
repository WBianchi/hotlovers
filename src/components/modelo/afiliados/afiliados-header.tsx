"use client";

import { Handshake, Copy, Share2 } from "lucide-react";

export function AfiliadosHeader() {
  const linkAfiliado = "https://hotlovers.com/ref/bella_hot";

  const copiarLink = () => {
    navigator.clipboard.writeText(linkAfiliado);
    // TODO: Adicionar toast de sucesso
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
            <Handshake className="w-8 h-8 text-white" />
          </div>

          <div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-gray-100">
              Meus Afiliados
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Gerencie sua rede de afiliados 🤝
            </p>
          </div>
        </div>
      </div>

      {/* Link de Afiliado */}
      <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 rounded-xl border border-red-200 dark:border-red-800">
        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Seu Link de Afiliado</p>
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={linkAfiliado}
            readOnly
            className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-800 dark:text-gray-100"
          />
          <button
            onClick={copiarLink}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl transition-all hover:scale-105 shadow-lg font-semibold"
          >
            <Copy className="w-5 h-5" />
            <span>Copiar</span>
          </button>
          <button className="p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl transition-all">
            <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
