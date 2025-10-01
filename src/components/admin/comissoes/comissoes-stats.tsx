"use client";

import { DollarSign, CreditCard, Heart, Package, Image, Video, ArrowUpRight } from "lucide-react";

export function ComissoesStats() {
  const stats = [
    {
      label: "Total de Comissões",
      value: "R$ 45.890",
      change: "+18%",
      trend: "up",
      icon: DollarSign,
      bgGradient: "from-emerald-500 to-green-600",
      description: "Lucro total da plataforma"
    },
    {
      label: "De Assinaturas",
      value: "R$ 28.450",
      change: "+12%",
      trend: "up",
      icon: CreditCard,
      bgGradient: "from-blue-500 to-indigo-600",
      description: "Comissão de assinaturas"
    },
    {
      label: "De Gorjetas",
      value: "R$ 8.230",
      change: "+24%",
      trend: "up",
      icon: Heart,
      bgGradient: "from-pink-500 to-rose-600",
      description: "Comissão de gorjetas"
    },
    {
      label: "De Packs",
      value: "R$ 5.670",
      change: "+15%",
      trend: "up",
      icon: Package,
      bgGradient: "from-purple-500 to-indigo-600",
      description: "Comissão de packs"
    },
    {
      label: "De Fotos",
      value: "R$ 2.340",
      change: "+8%",
      trend: "up",
      icon: Image,
      bgGradient: "from-orange-500 to-red-600",
      description: "Comissão de fotos"
    },
    {
      label: "De Vídeos",
      value: "R$ 1.200",
      change: "+6%",
      trend: "up",
      icon: Video,
      bgGradient: "from-red-500 to-pink-600",
      description: "Comissão de vídeos"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden"
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
              <div className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                <ArrowUpRight className="w-3 h-3" />
                <span>{stat.change}</span>
              </div>
            </div>

            {/* Value */}
            <div className="mb-2">
              <h3 className="text-3xl font-black text-gray-800 dark:text-gray-100 group-hover:text-gray-900 transition-colors">
                {stat.value}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                {stat.label}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {stat.description}
            </p>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12 -translate-x-full group-hover:translate-x-full duration-700"></div>
        </div>
      ))}
    </div>
  );
}
