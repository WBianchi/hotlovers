"use client";

import { TrendingUp, DollarSign, Calendar } from "lucide-react";

export function RevenueFlow() {
  const revenueData = [
    { month: 'Jul', mrr: 45000, newSubs: 189, churn: 23, netGrowth: 8.2 },
    { month: 'Ago', mrr: 52000, newSubs: 234, churn: 19, netGrowth: 15.6 },
    { month: 'Set', mrr: 58000, newSubs: 198, churn: 28, netGrowth: 11.5 },
    { month: 'Out', mrr: 67000, newSubs: 267, churn: 31, netGrowth: 15.5 },
    { month: 'Nov', mrr: 78000, newSubs: 289, churn: 24, netGrowth: 16.4 },
    { month: 'Dez', mrr: 89200, newSubs: 298, churn: 27, netGrowth: 14.4 }
  ];

  const maxMrr = Math.max(...revenueData.map(d => d.mrr));
  const currentMrr = revenueData[revenueData.length - 1].mrr;
  const previousMrr = revenueData[revenueData.length - 2].mrr;
  const growth = ((currentMrr - previousMrr) / previousMrr * 100).toFixed(1);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Fluxo de Receita Recorrente</h3>
            <p className="text-gray-500 text-sm">MRR e crescimento - últimos 6 meses</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 rounded-xl">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-green-700">+{growth}%</span>
        </div>
      </div>

      {/* Current MRR */}
      <div className="text-center py-4 mb-6 bg-emerald-50 rounded-xl">
        <p className="text-4xl font-black text-emerald-600">
          R$ {(currentMrr / 1000).toFixed(1)}K
        </p>
        <p className="text-emerald-700 font-medium">MRR Atual</p>
        <p className="text-sm text-emerald-600">
          +R$ {((currentMrr - previousMrr) / 1000).toFixed(1)}K vs mês anterior
        </p>
      </div>

      {/* MRR Chart */}
      <div className="space-y-4">
        <div className="flex items-end justify-between space-x-2 h-32">
          {revenueData.map((data, index) => (
            <div key={data.month} className="flex-1 flex flex-col items-center">
              {/* MRR Bar */}
              <div className="w-full flex flex-col justify-end" style={{ height: '100%' }}>
                <div 
                  className="w-full bg-gradient-to-t from-emerald-400 to-emerald-500 rounded-t-lg transition-all duration-500 hover:from-emerald-500 hover:to-emerald-600 relative group"
                  style={{ height: `${(data.mrr / maxMrr) * 100}%` }}
                >
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    R$ {(data.mrr / 1000).toFixed(1)}K
                  </div>
                </div>
              </div>
              
              {/* Label */}
              <p className="text-xs text-gray-600 mt-2 font-medium">
                {data.month}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-lg font-bold text-blue-600">
              {revenueData[revenueData.length - 1].newSubs}
            </p>
            <p className="text-xs text-blue-700">Novas Assinaturas</p>
          </div>
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <p className="text-lg font-bold text-red-600">
              {revenueData[revenueData.length - 1].churn}
            </p>
            <p className="text-xs text-red-700">Cancelamentos</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-lg font-bold text-green-600">
              +{revenueData[revenueData.length - 1].netGrowth}%
            </p>
            <p className="text-xs text-green-700">Crescimento Líquido</p>
          </div>
        </div>

        {/* Growth Trend */}
        <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Projeção para Janeiro</span>
            </div>
            <span className="text-sm font-bold text-emerald-600">
              R$ {((currentMrr * 1.144) / 1000).toFixed(1)}K
            </span>
          </div>
          <p className="text-xs text-emerald-600 mt-1">
            Baseado na média de crescimento dos últimos 6 meses (+14.4%)
          </p>
        </div>
      </div>
    </div>
  );
}