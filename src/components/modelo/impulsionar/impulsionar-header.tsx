"use client";

import { Zap, TrendingUp } from "lucide-react";

export function ImpulsionarHeader() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>

          <div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-gray-100">
              Impulsionar Conteúdo
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Aumente seu alcance com tráfego pago ⚡
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Investido Este Mês</p>
            <p className="text-2xl font-black text-purple-600">R$ 450,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
