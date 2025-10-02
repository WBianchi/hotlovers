"use client";

import { TrendingUp, DollarSign } from "lucide-react";

export function RevenueAnalytics() {
  const revenueData = [
    { month: 'Jan', total: 45000, gorjetas: 18000, assinaturas: 22000, afiliados: 5000 },
    { month: 'Fev', total: 52000, gorjetas: 21000, assinaturas: 24000, afiliados: 7000 },
    { month: 'Mar', total: 48000, gorjetas: 19000, assinaturas: 23000, afiliados: 6000 },
    { month: 'Abr', total: 67000, gorjetas: 28000, assinaturas: 30000, afiliados: 9000 },
    { month: 'Mai', total: 78000, gorjetas: 32000, assinaturas: 35000, afiliados: 11000 },
    { month: 'Jun', total: 89000, gorjetas: 38000, assinaturas: 39000, afiliados: 12000 }
  ];

  const maxValue = Math.max(...revenueData.map(d => d.total));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Análise de Receitas</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Receitas por categoria - últimos 6 meses</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 rounded-xl">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-green-700">+34.2%</span>
        </div>
      </div>

      {/* Chart */}
      <div className="space-y-4">
        {/* Current Total */}
        <div className="text-center py-4">
          <p className="text-3xl font-black text-gray-800 dark:text-gray-100">
            R$ {(revenueData[revenueData.length - 1].total / 1000).toFixed(1)}K
          </p>
          <p className="text-gray-500">Receita do mês atual</p>
        </div>

        {/* Stacked Bar Chart */}
        <div className="flex items-end justify-between space-x-2 h-40">
          {revenueData.map((data, index) => (
            <div key={data.month} className="flex-1 flex flex-col items-center">
              {/* Stacked Bar */}
              <div className="w-full flex flex-col-reverse" style={{ height: `${(data.total / maxValue) * 100}%` }}>
                {/* Afiliados */}
                <div 
                  className="w-full bg-purple-400 transition-all duration-500 hover:bg-purple-500"
                  style={{ height: `${(data.afiliados / data.total) * 100}%` }}
                  title={`Afiliados: R$ ${(data.afiliados / 1000).toFixed(1)}K`}
                />
                {/* Assinaturas */}
                <div 
                  className="w-full bg-blue-400 transition-all duration-500 hover:bg-blue-500"
                  style={{ height: `${(data.assinaturas / data.total) * 100}%` }}
                  title={`Assinaturas: R$ ${(data.assinaturas / 1000).toFixed(1)}K`}
                />
                {/* Gorjetas */}
                <div 
                  className="w-full bg-red-400 rounded-t-lg transition-all duration-500 hover:bg-red-500"
                  style={{ height: `${(data.gorjetas / data.total) * 100}%` }}
                  title={`Gorjetas: R$ ${(data.gorjetas / 1000).toFixed(1)}K`}
                />
              </div>
              
              {/* Label */}
              <p className="text-xs text-gray-600 dark:text-gray-400 dark:text-gray-400 mt-2 font-medium">
                {data.month}
              </p>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Gorjetas</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Assinaturas</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Afiliados</span>
          </div>
        </div>
      </div>
    </div>
  );
}