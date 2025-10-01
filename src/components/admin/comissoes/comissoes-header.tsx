"use client";

import { Percent, Download, Filter, Search, TrendingUp } from "lucide-react";
import { useState } from "react";

export function ComissoesHeader() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700/50 dark:border-gray-700/50">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        
        {/* Left Side */}
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          {/* Icon */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Percent className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
              <TrendingUp className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Text */}
          <div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-gray-100">
              Minhas Comissões
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Lucros da plataforma em todas as transações 💰
            </p>
            
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>R$ 45.890 total</span>
              </span>
              <span>•</span>
              <span>+18% este mês</span>
            </div>
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center space-x-3">
          {/* Search */}
          <div className="relative">
            <input
              type="search"
              placeholder="Buscar comissões..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 px-4 py-2 pl-10 bg-gray-100 dark:bg-gray-700 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-xl transition-all hover:scale-105">
            <Filter className="w-4 h-4" />
            <span className="font-medium">Filtros</span>
          </button>

          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-xl transition-all hover:scale-105">
            <Download className="w-4 h-4" />
            <span className="font-medium">Exportar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
