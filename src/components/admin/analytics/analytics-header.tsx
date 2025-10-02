"use client";

import { BarChart3, TrendingUp, Calendar, Download, RefreshCw } from "lucide-react";
import { useState } from "react";

export function AnalyticsHeader() {
  const [period, setPeriod] = useState("30d");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const periods = [
    { value: "7d", label: "7 dias" },
    { value: "30d", label: "30 dias" },
    { value: "90d", label: "90 dias" },
    { value: "1y", label: "1 ano" }
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        
        {/* Left Side */}
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          {/* Icon */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            
            {/* Analytics Badge */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
              <TrendingUp className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Text */}
          <div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-gray-100">
              Analytics Avançado
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Insights em tempo real e métricas detalhadas 📊
            </p>
            
            <div className="flex items-center space-x-2 mt-1">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Última atualização: há 2 minutos
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Controls */}
        <div className="flex items-center space-x-3">
          {/* Period Selector */}
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 dark:bg-gray-700 rounded-xl p-1">
            {periods.map((p) => (
              <button
                key={p.value}
                onClick={() => setPeriod(p.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  period === p.value
                    ? 'bg-white text-hotlovers-red shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all hover:scale-105"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="font-medium">Atualizar</span>
          </button>

          {/* Export Button */}
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 dark:text-gray-300 rounded-xl transition-all hover:scale-105">
            <Download className="w-4 h-4" />
            <span className="font-medium">Exportar</span>
          </button>
        </div>
      </div>
    </div>
  );
}