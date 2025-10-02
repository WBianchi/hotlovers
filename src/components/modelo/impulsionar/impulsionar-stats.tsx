"use client";

import { Eye, Users, MousePointerClick, TrendingUp } from "lucide-react";

export function ImpulsionarStats() {
  const stats = [
    {
      label: "Visualizações",
      value: "12.4K",
      change: "+890 hoje",
      icon: Eye,
      color: "from-blue-600 to-blue-700",
      textColor: "text-blue-600"
    },
    {
      label: "Novos Seguidores",
      value: "+245",
      change: "Últimos 7 dias",
      icon: Users,
      color: "from-purple-600 to-purple-700",
      textColor: "text-purple-600"
    },
    {
      label: "Taxa de Cliques",
      value: "8.5%",
      change: "+2.3% vs média",
      icon: MousePointerClick,
      color: "from-emerald-600 to-emerald-700",
      textColor: "text-emerald-600"
    },
    {
      label: "ROI",
      value: "320%",
      change: "Retorno sobre investimento",
      icon: TrendingUp,
      color: "from-red-600 to-red-700",
      textColor: "text-red-600"
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
