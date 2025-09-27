"use client";

import { DollarSign, TrendingUp } from "lucide-react";

export function ComissionsChart() {
  const commissionsData = [
    { month: 'Jul', total: 45000, paid: 38000, pending: 7000 },
    { month: 'Ago', total: 52000, paid: 48000, pending: 4000 },
    { month: 'Set', total: 48000, paid: 45000, pending: 3000 },
    { month: 'Out', total: 67000, paid: 62000, pending: 5000 },
    { month: 'Nov', total: 78000, paid: 71000, pending: 7000 },
    { month: 'Dez', total: 89000, paid: 82000, pending: 7000 }
  ];

  const maxValue = Math.max(...commissionsData.map(d => d.total));
  const totalPaid = commissionsData.reduce((sum, d) => sum + d.paid, 0);
  const totalPending = commissionsData.reduce((sum, d) => sum + d.pending, 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Comissões por Mês</h3>
            <p className="text-gray-500 text-sm">Pagas vs Pendentes - últimos 6 meses</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 rounded-xl">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-green-700">+28.4%</span>
        </div>
      </div>

      {/* Current Totals */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-4 bg-green-50 rounded-xl">
          <p className="text-2xl font-black text-green-600">
            R$ {(totalPaid / 1000).toFixed(0)}K
          </p>
          <p className="text-sm text-green-700 font-medium">Comissões Pagas</p>
        </div>
        <div className="text-center p-4 bg-yellow-50 rounded-xl">
          <p className="text-2xl font-black text-yellow-600">
            R$ {(totalPending / 1000).toFixed(0)}K
          </p>
          <p className="text-sm text-yellow-700 font-medium">Comissões Pendentes</p>
        </div>
      </div>

      {/* Stacked Bar Chart */}
      <div className="flex items-end justify-between space-x-2 h-40 mb-4">
        {commissionsData.map((data, index) => (
          <div key={data.month} className="flex-1 flex flex-col items-center">
            {/* Stacked Bar */}
            <div className="w-full flex flex-col-reverse" style={{ height: `${(data.total / maxValue) * 100}%` }}>
              {/* Pending */}
              <div 
                className="w-full bg-yellow-400 transition-all duration-500 hover:bg-yellow-500"
                style={{ height: `${(data.pending / data.total) * 100}%` }}
                title={`Pendentes: R$ ${(data.pending / 1000).toFixed(1)}K`}
              />
              {/* Paid */}
              <div 
                className="w-full bg-green-400 rounded-t-lg transition-all duration-500 hover:bg-green-500"
                style={{ height: `${(data.paid / data.total) * 100}%` }}
                title={`Pagas: R$ ${(data.paid / 1000).toFixed(1)}K`}
              />
            </div>
            
            {/* Label */}
            <p className="text-xs text-gray-600 mt-2 font-medium">
              {data.month}
            </p>
            <p className="text-xs text-gray-400">
              R$ {(data.total / 1000).toFixed(0)}K
            </p>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-sm text-gray-600">Comissões Pagas</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <span className="text-sm text-gray-600">Comissões Pendentes</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-4 p-3 bg-purple-50 rounded-lg">
        <p className="text-sm text-purple-700">
          <span className="font-semibold">Resumo:</span> Total de R$ {((totalPaid + totalPending) / 1000).toFixed(0)}K em comissões nos últimos 6 meses, 
          com {((totalPaid / (totalPaid + totalPending)) * 100).toFixed(1)}% já pagas aos afiliados.
        </p>
      </div>
    </div>
  );
}