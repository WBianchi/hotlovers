"use client";

import { Settings, Save } from "lucide-react";

export function ConfiguracoesHeader() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700/50 dark:border-gray-700/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg">
              <Settings className="w-8 h-8 text-white" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-gray-100">
              Configurações
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Configure taxas, comissões e parâmetros da plataforma ⚙️
            </p>
          </div>
        </div>

        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-hotlovers-red to-pink-600 text-white rounded-xl transition-all hover:scale-105 shadow-lg font-semibold">
          <Save className="w-5 h-5" />
          <span>Salvar Todas</span>
        </button>
      </div>
    </div>
  );
}
