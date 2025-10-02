"use client";

import { FileText, Download, Calendar } from "lucide-react";

export function RelatoriosHeader() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 dark:border-gray-700/50 dark:border-gray-700/50">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-gray-100 dark:text-gray-100">
              Relatórios
            </h1>
            <p className="text-gray-500 dark:text-gray-400 dark:text-gray-400 text-lg">
              Análise completa de acessos, cadastros e vendas 📊
            </p>
            
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-400 dark:text-gray-400">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Últimos 30 dias</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 dark:text-gray-300 rounded-xl transition-all hover:scale-105">
            <Calendar className="w-4 h-4" />
            <span className="font-medium">Período</span>
          </button>

          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all hover:scale-105">
            <Download className="w-4 h-4" />
            <span className="font-medium">Exportar PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
