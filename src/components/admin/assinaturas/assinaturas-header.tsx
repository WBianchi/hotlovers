"use client";

import { CreditCard, Plus, Download, Filter, Search, TrendingUp, RefreshCw } from "lucide-react";
import { useState } from "react";

export function AssinaturasHeader() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        
        {/* Left Side */}
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          {/* Icon */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            
            {/* Badge */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
              <TrendingUp className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Text */}
          <div>
            <h1 className="text-3xl font-black text-gray-800">
              Gestão de Assinaturas
            </h1>
            <p className="text-gray-500 text-lg">
              Controle completo do seu negócio recorrente 💳
            </p>
            
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>1,456 ativas</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>R$ 89.2K MRR</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>94.3% retenção</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center space-x-3">
          {/* Search */}
          <div className="relative">
            <input
              type="search"
              placeholder="Buscar assinaturas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 px-4 py-2 pl-10 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Filter Button */}
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl transition-all hover:scale-105">
            <Filter className="w-4 h-4" />
            <span className="font-medium">Filtros</span>
          </button>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all hover:scale-105"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="font-medium">Sync</span>
          </button>

          {/* Export Button */}
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl transition-all hover:scale-105">
            <Download className="w-4 h-4" />
            <span className="font-medium">Relatório</span>
          </button>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">1,456</p>
            <p className="text-xs text-gray-500">Assinaturas Ativas</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">89</p>
            <p className="text-xs text-gray-500">Expiram Hoje</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">67</p>
            <p className="text-xs text-gray-500">Canceladas</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">R$ 89.2K</p>
            <p className="text-xs text-gray-500">MRR Atual</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">+12.4%</p>
            <p className="text-xs text-gray-500">Crescimento</p>
          </div>
        </div>
      </div>
    </div>
  );
}