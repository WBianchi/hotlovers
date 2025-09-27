"use client";

import { Users, DollarSign, Crown, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  {
    label: "Usuários Ativos",
    value: "1,234",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "blue",
    bgGradient: "from-blue-500 to-blue-600"
  },
  {
    label: "Receita Mensal", 
    value: "R$ 45.2K",
    change: "+8%",
    trend: "up",
    icon: DollarSign,
    color: "green",
    bgGradient: "from-green-500 to-emerald-600"
  },
  {
    label: "Modelos Ativas",
    value: "89",
    change: "+3",
    trend: "up", 
    icon: Crown,
    color: "red",
    bgGradient: "from-red-500 to-pink-600"
  },
  {
    label: "Taxa de Conversão",
    value: "3.2%",
    change: "-0.1%",
    trend: "down",
    icon: TrendingUp,
    color: "purple",
    bgGradient: "from-purple-500 to-indigo-600"
  }
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
              <p className="text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>

            {/* Footer */}
            <div className="text-xs text-gray-500">
              {stat.trend === 'up' ? '↗' : '↘'} vs mês anterior
            </div>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12 -translate-x-full group-hover:translate-x-full duration-700"></div>
        </div>
      ))}
    </div>
  );
}