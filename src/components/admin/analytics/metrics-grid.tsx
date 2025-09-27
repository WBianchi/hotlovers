"use client";

import { 
  DollarSign, Heart, Users2, Crown, TrendingUp, 
  ArrowUpRight, ArrowDownRight, Percent, Zap
} from "lucide-react";

export function MetricsGrid() {
  const metrics = [
    {
      category: "Receitas",
      items: [
        {
          label: "Total de Receitas",
          value: "R$ 127.4K",
          change: "+18.2%",
          trend: "up",
          icon: DollarSign,
          color: "green",
          description: "Receita total do período"
        },
        {
          label: "Receita de Gorjetas",
          value: "R$ 45.8K", 
          change: "+23.1%",
          trend: "up",
          icon: Heart,
          color: "red",
          description: "Gorjetas e doações"
        },
        {
          label: "Receita de Assinaturas",
          value: "R$ 67.2K",
          change: "+12.8%", 
          trend: "up",
          icon: Users2,
          color: "blue",
          description: "Planos e assinaturas"
        },
        {
          label: "Receita de Afiliados",
          value: "R$ 14.4K",
          change: "+45.3%",
          trend: "up", 
          icon: Zap,
          color: "purple",
          description: "Comissões de afiliados"
        }
      ]
    },
    {
      category: "Engajamento",
      items: [
        {
          label: "Cliques Totais",
          value: "89.2K",
          change: "+15.7%",
          trend: "up",
          icon: TrendingUp,
          color: "indigo",
          description: "Cliques em perfis e conteúdo"
        },
        {
          label: "Taxa de Conversão",
          value: "3.4%",
          change: "+0.8%",
          trend: "up",
          icon: Percent,
          color: "emerald",
          description: "Visitantes que viraram clientes"
        },
        {
          label: "Modelos Ativas",
          value: "127",
          change: "+8",
          trend: "up",
          icon: Crown,
          color: "yellow",
          description: "Modelos com atividade recente"
        },
        {
          label: "Ticket Médio",
          value: "R$ 89.50",
          change: "-2.1%",
          trend: "down",
          icon: DollarSign,
          color: "orange",
          description: "Valor médio por transação"
        }
      ]
    }
  ];

  const getColorClasses = (color: string, trend: string) => {
    const colors = {
      green: trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-green-50 text-green-600',
      red: trend === 'up' ? 'bg-red-100 text-red-700' : 'bg-red-50 text-red-600', 
      blue: trend === 'up' ? 'bg-blue-100 text-blue-700' : 'bg-blue-50 text-blue-600',
      purple: trend === 'up' ? 'bg-purple-100 text-purple-700' : 'bg-purple-50 text-purple-600',
      indigo: trend === 'up' ? 'bg-indigo-100 text-indigo-700' : 'bg-indigo-50 text-indigo-600',
      emerald: trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-50 text-emerald-600',
      yellow: trend === 'up' ? 'bg-yellow-100 text-yellow-700' : 'bg-yellow-50 text-yellow-600',
      orange: trend === 'up' ? 'bg-orange-100 text-orange-700' : 'bg-orange-50 text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <div className="space-y-6">
      {metrics.map((category) => (
        <div key={category.category} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
          {/* Category Header */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
            <p className="text-gray-500">Métricas principais de {category.category.toLowerCase()}</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.items.map((metric, index) => (
              <div
                key={metric.label}
                className="p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105 group cursor-pointer relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${getColorClasses(metric.color, 'up')} opacity-5 rounded-full -translate-y-10 translate-x-10 group-hover:opacity-10 transition-opacity`}></div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${getColorClasses(metric.color, 'up')} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <metric.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Trend */}
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                    metric.trend === 'up' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {metric.trend === 'up' ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3" />
                    )}
                    <span>{metric.change}</span>
                  </div>
                </div>

                {/* Value */}
                <div className="mb-3">
                  <h4 className="text-3xl font-black text-gray-800 group-hover:text-gray-900 transition-colors">
                    {metric.value}
                  </h4>
                  <p className="text-gray-700 font-semibold">
                    {metric.label}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-500">
                  {metric.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12 -translate-x-full group-hover:translate-x-full duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}