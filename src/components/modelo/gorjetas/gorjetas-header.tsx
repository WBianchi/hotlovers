"use client";

import { Heart, Download, TrendingUp } from "lucide-react";

export function GorjetasHeader() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-white fill-current" />
          </div>

          <div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-gray-100">
              Minhas Gorjetas
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Acompanhe todas as gorjetas recebidas 💰
            </p>
          </div>
        </div>

        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl transition-all hover:scale-105 shadow-lg font-semibold">
          <Download className="w-5 h-5" />
          <span>Exportar</span>
        </button>
      </div>
    </div>
  );
}
