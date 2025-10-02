"use client";

import { Users, Download, Filter } from "lucide-react";

export function AssinantesHeader() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>

          <div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-gray-100">
              Meus Assinantes
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Gerencie sua base de assinantes 👥
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all font-semibold text-gray-700 dark:text-gray-300">
            <Filter className="w-4 h-4" />
            <span>Filtrar</span>
          </button>
          
          <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl transition-all hover:scale-105 shadow-lg font-semibold">
            <Download className="w-5 h-5" />
            <span>Exportar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
