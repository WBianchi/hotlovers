"use client";

import { 
  Users, DollarSign, TrendingUp, Target, MousePointer, Percent,
  ArrowUpRight, ArrowDownRight, Handshake, Activity, Crown
} from "lucide-react";

export function AfiliadosStats() {
  const stats = [
    {
      label: "Total de Afiliados",
      value: "234",
      change: "+18",
      trend: "up",
      icon: Handshake,
      color: "purple",
      bgGradient: "from-purple-500 to-indigo-600",
      description: "Afiliados cadastrados"
    },
    {
      label: "Afiliados Ativos", 
      value: "189",
      change: "+12",
      trend: "up",
      icon: Activity,
      color: "green",
      bgGradient: "from-green-500 to-emerald-600",
      description: "Com vendas nos últimos 30 dias"
    },
    {
      label: "Comissões Pagas",
      value: "R$ 89.2K",
      change: "+24.5%",
      trend: "up",
      icon: DollarSign,
      color: "emerald",
      bgGradient: "from-emerald-500 to-green-600",
      description: "Total pago este mês"
    },
    {
      label: "Taxa de Conversão",
      value: "3.8%",
      change: "+0.5%",
      trend: "up", 
      icon: Target,
      color: "blue",
      bgGradient: "from-blue-500 to-indigo-600",
      description: "Conversão média"
    },
    {
      label: "Cliques Gerados",
      value: "45.8K",
      change: "+18.3%",
      trend: "up",
      icon: MousePointer,
      color: "orange",
      bgGradient: "from-orange-500 to-red-600",
      description: "Cliques via links de afiliados"
    },
    {
      label: "Comissão Média",
      value: "12.5%",
      change: "+1.2%",
      trend: "up",
      icon: Percent,
      color: "indigo",
      bgGradient: "from-indigo-500 to-purple-600", 
      description: "Percentual médio pago"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden"
        >
          {/* Background Gradient */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.bgGradient} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:opacity-10 transition-opacity`}></div>
          
          {/* Content */}
          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.bgGradient} shadow-lg group-hover:shadow-xl transition-all`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Trend */}
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                stat.trend === 'up' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                <span>{stat.change}</span>
              </div>
            </div>

            {/* Value */}
            <div className="mb-2">
              <h3 className="text-3xl font-black text-gray-800 group-hover:text-gray-900 transition-colors">
                {stat.value}
              </h3>
              <p className="text-gray-700 font-semibold">
                {stat.label}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500">
              {stat.description}
            </p>

            {/* Progress bar for percentage stats */}
            {(stat.label.includes('Taxa') || stat.label.includes('Comissão Média')) && (
              <div className="mt-3">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.bgGradient} transition-all duration-1000`}
                    style={{ width: stat.value.replace('%', '') + '%' }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12 -translate-x-full group-hover:translate-x-full duration-700"></div>
        </div>
      ))}
    </div>
  );
}