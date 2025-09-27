"use client";

import { TrendingUp, DollarSign, Calendar } from "lucide-react";

export function RevenueChart() {
  // Mock data para o gráfico
  const revenueData = [
    { month: 'Jan', value: 35000, growth: 8 },
    { month: 'Fev', value: 42000, growth: 12 }, 
    { month: 'Mar', value: 38000, growth: -3 },
    { month: 'Abr', value: 45000, growth: 15 },
    { month: 'Mai', value: 52000, growth: 18 },
    { month: 'Jun', value: 48000, growth: 5 }
  ];

  const currentMonth = revenueData[revenueData.length - 1];
  const maxValue = Math.max(...revenueData.map(d => d.value));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Receita Mensal</h3>
            <p className="text-gray-500 text-sm">Últimos 6 meses</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 rounded-xl">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-green-700">+{currentMonth.growth}%</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="space-y-4">
        {/* Current Value */}
        <div className="text-center py-4">
          <p className="text-3xl font-black text-gray-800">
            R$ {(currentMonth.value / 1000).toFixed(1)}K
          </p>
          <p className="text-gray-500">Receita atual</p>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end justify-between space-x-2 h-32">
          {revenueData.map((data, index) => (
            <div key={data.month} className="flex-1 flex flex-col items-center">
              {/* Bar */}
              <div 
                className={`w-full rounded-t-lg transition-all duration-500 hover:scale-105 ${
                  index === revenueData.length - 1 
                    ? 'bg-gradient-to-t from-hotlovers-red to-red-400' 
                    : 'bg-gradient-to-t from-gray-200 to-gray-300'
                }`}
                style={{ height: `${(data.value / maxValue) * 100}%` }}
              />
              
              {/* Label */}
              <p className="text-xs text-gray-600 mt-2 font-medium">
                {data.month}
              </p>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-hotlovers-red to-red-400 rounded-full"></div>
            <span className="text-sm text-gray-600">Mês atual</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full"></div>
            <span className="text-sm text-gray-600">Meses anteriores</span>
          </div>
        </div>
      </div>
    </div>
  );
}