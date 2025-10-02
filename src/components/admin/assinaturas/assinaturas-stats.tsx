"use client";

import { 
  CreditCard, DollarSign, TrendingUp, TrendingDown, Users, 
  ArrowUpRight, ArrowDownRight, Calendar, Percent, RotateCcw, AlertTriangle
} from "lucide-react";

export function AssinaturasStats() {
  const stats = [
    {
      label: "MRR (Receita Recorrente)",
      value: "R$ 89.2K",
      change: "+12.4%",
      trend: "up",
      icon: DollarSign,
      color: "emerald",
      bgGradient: "from-emerald-500 to-green-600",
      description: "Receita mensal recorrente"
    },
    {
      label: "Assinaturas Ativas", 
      value: "1,456",
      change: "+89",
      trend: "up",
      icon: CreditCard,
      color: "green",
      bgGradient: "from-green-500 to-emerald-600",
      description: "Assinaturas em dia"
    },
    {
      label: "Taxa de Retenção",
      value: "94.3%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      color: "blue",
      bgGradient: "from-blue-500 to-indigo-600",
      description: "Clientes que renovaram"
    },
    {
      label: "Churn Rate",
      value: "5.7%",
      change: "-1.2%",
      trend: "down", 
      icon: TrendingDown,
      color: "red",
      bgGradient: "from-red-500 to-pink-600",
      description: "Taxa de cancelamento"
    },
    {
      label: "Novas Assinaturas",
      value: "234",
      change: "+18.5%",
      trend: "up",
      icon: Users,
      color: "purple",
      bgGradient: "from-purple-500 to-indigo-600",
      description: "Este mês"
    },
    {
      label: "Expiram em 7 dias",
      value: "89",
      change: "+12",
      trend: "up",
      icon: AlertTriangle,
      color: "yellow",
      bgGradient: "from-yellow-500 to-orange-600", 
      description: "Necessitam atenção"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden"
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
                  : stat.trend === 'down'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : stat.trend === 'down' ? (
                  <ArrowDownRight className="w-3 h-3" />
                ) : (
                  <span className="w-3 h-3">-</span>
                )}
                <span>{stat.change}</span>
              </div>
            </div>

            {/* Value */}
            <div className="mb-2">
              <h3 className="text-3xl font-black text-gray-800 dark:text-gray-100 dark:text-gray-100 group-hover:text-gray-900 transition-colors">
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

            {/* Progress bar for percentage stats */}
            {(stat.label.includes('Taxa') || stat.label.includes('Churn')) && (
              <div className="mt-3">
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.bgGradient} transition-all duration-1000`}
                    style={{ 
                      width: stat.label.includes('Churn') 
                        ? `${Math.min(parseFloat(stat.value.replace('%', '')), 100)}%`
                        : `${Math.min(parseFloat(stat.value.replace('%', '')), 100)}%`
                    }}
                  />
                </div>
              </div>
            )}

            {/* Special indicators */}
            {stat.label.includes('MRR') && (
              <div className="mt-3 flex items-center space-x-2">
                <RotateCcw className="w-3 h-3 text-emerald-500" />
                <span className="text-xs text-emerald-600 font-medium">Recorrente</span>
              </div>
            )}

            {stat.label.includes('Expiram') && (
              <div className="mt-3 flex items-center space-x-2">
                <Calendar className="w-3 h-3 text-yellow-500" />
                <span className="text-xs text-yellow-600 font-medium">Ação necessária</span>
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