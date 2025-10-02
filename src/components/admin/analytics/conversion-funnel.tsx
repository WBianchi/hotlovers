"use client";

import { TrendingDown } from "lucide-react";

export function ConversionFunnel() {
  const funnelData = [
    { stage: "Visitantes", count: 45230, percentage: 100 },
    { stage: "Visualizaram Perfil", count: 23450, percentage: 52 },
    { stage: "Iniciaram Chat", count: 8920, percentage: 20 },
    { stage: "Fizeram Compra", count: 1540, percentage: 3.4 }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
          <TrendingDown className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Funil de Conversão</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Taxa de conversão por etapa</p>
        </div>
      </div>

      <div className="space-y-4">
        {funnelData.map((item, index) => (
          <div key={item.stage} className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">{item.stage}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {item.count.toLocaleString()}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ({item.percentage}%)
                </span>
              </div>
            </div>
            
            <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ${
                  index === 0 ? 'bg-green-500' :
                  index === 1 ? 'bg-blue-500' :
                  index === 2 ? 'bg-orange-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}