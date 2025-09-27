"use client";

import { Crown, Plus, Download, Filter, Search } from "lucide-react";
import { useState } from "react";

export function ModelosHeader() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        
        {/* Left Side */}
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          {/* Icon */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-hotlovers-red to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Crown className="w-8 h-8 text-white" />
            </div>
            
            {/* Badge */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-xs font-bold text-white">89</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <h1 className="text-3xl font-black text-gray-800">
              Gestão de Modelos
            </h1>
            <p className="text-gray-500 text-lg">
              Controle completo das suas modelos 👑
            </p>
            
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>67 ativas</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>12 pendentes</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>10 suspensas</span>
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
              placeholder="Buscar modelos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 px-4 py-2 pl-10 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:bg-white transition-all"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Filter Button */}
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl transition-all hover:scale-105">
            <Filter className="w-4 h-4" />
            <span className="font-medium">Filtros</span>
          </button>

          {/* Export Button */}
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl transition-all hover:scale-105">
            <Download className="w-4 h-4" />
            <span className="font-medium">Exportar</span>
          </button>

          {/* Add Model Button */}
          <button className="flex items-center space-x-2 px-4 py-2 bg-hotlovers-gradient hover:opacity-90 text-white rounded-xl transition-all hover:scale-105 shadow-lg">
            <Plus className="w-4 h-4" />
            <span className="font-medium">Nova Modelo</span>
          </button>
        </div>
      </div>
    </div>
  );
}