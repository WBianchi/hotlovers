"use client";

import { Crown, TrendingUp, DollarSign, Users, MousePointer } from "lucide-react";

export function TopAffiliates() {
  const topAffiliates = [
    {
      name: "João Marketing",
      username: "@joao_afiliado",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      commission: 12450,
      conversions: 89,
      clicks: 8920,
      conversionRate: 4.2,
      growth: 28,
      joinDate: "2024-01-15"
    },
    {
      name: "Marketing Pro", 
      username: "@marketing_pro",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      commission: 9830,
      conversions: 67,
      clicks: 7240,
      conversionRate: 3.8,
      growth: 22,
      joinDate: "2024-02-08"
    },
    {
      name: "Digital Sales",
      username: "@digital_sales", 
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=50&h=50&fit=crop&crop=face",
      commission: 8765,
      conversions: 54,
      clicks: 6890,
      conversionRate: 3.9,
      growth: 18,
      joinDate: "2024-03-12"
    },
    {
      name: "Promo Expert",
      username: "@promo_expert",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
      commission: 7420,
      conversions: 43,
      clicks: 5670,
      conversionRate: 3.2,
      growth: 15,
      joinDate: "2024-04-05"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
          <Crown className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Top Afiliados</h3>
          <p className="text-gray-500 text-sm">Melhor performance este mês</p>
        </div>
      </div>

      {/* Top Affiliates List */}
      <div className="space-y-4">
        {topAffiliates.map((affiliate, index) => (
          <div key={affiliate.username} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
            {/* Rank Badge */}
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
              index === 0 ? 'bg-yellow-100 text-yellow-700' :
              index === 1 ? 'bg-gray-100 text-gray-700' :
              index === 2 ? 'bg-orange-100 text-orange-700' :
              'bg-blue-100 text-blue-700'
            }`}>
              #{index + 1}
            </div>

            {/* Avatar */}
            <div className="relative">
              <img
                src={affiliate.avatar}
                alt={affiliate.name}
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-white"
              />
              {index === 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Crown className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="font-semibold text-gray-800">{affiliate.name}</p>
                  <p className="text-sm text-gray-500">{affiliate.username}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="font-bold text-green-600">
                      R$ {(affiliate.commission / 1000).toFixed(1)}K
                    </span>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{affiliate.conversions} conversões</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MousePointer className="w-3 h-3" />
                    <span>{(affiliate.clicks / 1000).toFixed(1)}K cliques</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-blue-600 font-medium">{affiliate.conversionRate}%</span>
                  </div>
                </div>
                
                {/* Growth */}
                <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 rounded-full">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-green-700 font-medium">+{affiliate.growth}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-lg font-bold text-purple-600">
              R$ {(topAffiliates.reduce((sum, a) => sum + a.commission, 0) / 1000).toFixed(0)}K
            </p>
            <p className="text-xs text-gray-500">Comissões Top 4</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-blue-600">
              {topAffiliates.reduce((sum, a) => sum + a.conversions, 0)}
            </p>
            <p className="text-xs text-gray-500">Total Conversões</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-green-600">
              {(topAffiliates.reduce((sum, a) => sum + a.conversionRate, 0) / topAffiliates.length).toFixed(1)}%
            </p>
            <p className="text-xs text-gray-500">Taxa Média</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
        <p className="text-sm text-purple-700 text-center">
          <span className="font-semibold">💡 Dica:</span> Reconheça e recompense seus top afiliados para manter o alto desempenho!
        </p>
      </div>
    </div>
  );
}