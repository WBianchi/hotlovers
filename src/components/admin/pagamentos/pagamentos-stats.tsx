"use client";

import { DollarSign, CreditCard, Heart, Package, CheckCircle, Clock } from "lucide-react";

export function PagamentosStats() {
  const stats = [
    {
      icon: DollarSign,
      label: "Total Processado",
      value: "R$ 189.450,00",
      change: "+22%",
      trend: "up",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      icon: CreditCard,
      label: "Assinaturas",
      value: "R$ 142.250,00",
      change: "+18%",
      trend: "up",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: Package,
      label: "Packs Vendidos",
      value: "R$ 28.350,00",
      change: "+15%",
      trend: "up",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      icon: Heart,
      label: "Gorjetas",
      value: "R$ 18.850,00",
      change: "+28%",
      trend: "up",
      color: "text-pink-600",
      bgColor: "bg-pink-100 dark:bg-pink-900/30"
    },
    {
      icon: CheckCircle,
      label: "Pagamentos OK",
      value: "1.847",
      change: "+12%",
      trend: "up",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
      icon: Clock,
      label: "Pendentes",
      value: "23",
      change: "-8%",
      trend: "down",
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              stat.trend === "up" 
                ? "bg-green-100 text-green-600 dark:bg-green-900/30" 
                : "bg-red-100 text-red-600 dark:bg-red-900/30"
            }`}>
              {stat.change}
            </span>
          </div>
          
          <p className="text-2xl font-bold text-foreground mb-1">
            {stat.value}
          </p>
          <p className="text-xs text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
