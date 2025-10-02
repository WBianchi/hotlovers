"use client";

import { Wallet, TrendingUp } from "lucide-react";

export function SaquesHeader() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
            <Wallet className="w-8 h-8 text-white" />
          </div>

          <div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-gray-100">
              Meus Saques
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Gerencie seus ganhos e solicite saques 💰
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-xl">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Saldo Disponível</p>
            <p className="text-2xl font-black text-emerald-600">R$ 3.245,80</p>
          </div>
        </div>
      </div>
    </div>
  );
}
