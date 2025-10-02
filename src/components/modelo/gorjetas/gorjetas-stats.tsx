"use client";

import { Heart, DollarSign, TrendingUp, Award } from "lucide-react";

export function GorjetasStats() {
  const stats = [
    {
      label: "Total Gorjetas",
      value: "R$ 4.890",
      change: "+R$ 890 este mês",
      icon: Heart,
      color: "from-red-600 to-red-700",
      textColor: "text-red-600"
    },
    {
      label: "Média por Gorjeta",
      value: "R$ 45,20",
      change: "Baseado em 108 gorjetas",
      icon: DollarSign,
      color: "from-emerald-600 to-emerald-700",
      textColor: "text-emerald-600"
    },
    {
      label: "Maior Gorjeta",
      value: "R$ 500",
      change: "João Silva • 15/09",
      icon: Award,
      color: "from-yellow-600 to-yellow-700",
      textColor: "text-yellow-600"
    },
    {
      label: "Crescimento",
      value: "+32%",
      change: "vs mês anterior",
      icon: TrendingUp,
      color: "from-purple-600 to-purple-700",
      textColor: "text-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
            <p className={`text-3xl font-black ${stat.textColor} mb-2`}>{stat.value}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">{stat.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
