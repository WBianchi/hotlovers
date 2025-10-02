"use client";

import { Crown, Users, DollarSign, TrendingUp, Zap, Star } from "lucide-react";

export function PlansComparison() {
  const plansData = [
    {
      name: "Básico",
      price: 19.90,
      subscribers: 456,
      revenue: 9080.40,
      churn: 8.2,
      retention: 91.8,
      avgLifetime: 12,
      color: "blue",
      bgGradient: "from-blue-500 to-indigo-600",
      icon: Users
    },
    {
      name: "Premium", 
      price: 39.90,
      subscribers: 578,
      revenue: 23066.20,
      churn: 4.8,
      retention: 95.2,
      avgLifetime: 18,
      color: "purple",
      bgGradient: "from-purple-500 to-indigo-600",
      icon: Zap
    },
    {
      name: "VIP",
      price: 79.90,
      subscribers: 90,
      revenue: 7191.00,
      churn: 2.1,
      retention: 97.9,
      avgLifetime: 24,
      color: "yellow",
      bgGradient: "from-yellow-500 to-orange-600",
      icon: Crown
    }
  ];

  const totalSubscribers = plansData.reduce((sum, plan) => sum + plan.subscribers, 0);
  const totalRevenue = plansData.reduce((sum, plan) => sum + plan.revenue, 0);
  const avgRetention = plansData.reduce((sum, plan) => sum + plan.retention, 0) / plansData.length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-hotlovers-red to-red-600 rounded-xl flex items-center justify-center">
            <Star className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Comparação de Planos</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Performance e métricas por plano</p>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-lg font-bold text-gray-800 dark:text-gray-100">{totalSubscribers}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total Assinantes</p>
        </div>
      </div>

      {/* Plans Comparison */}
      <div className="space-y-4">
        {plansData.map((plan, index) => (
          <div
            key={plan.name}
            className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 dark:border-gray-700 hover:border-gray-300 transition-all duration-300 hover:scale-[1.02] group"
          >
            <div className="flex items-center justify-between mb-3">
              {/* Plan Info */}
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.bgGradient} flex items-center justify-center shadow-lg`}>
                  <plan.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">{plan.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">R$ {plan.price.toFixed(2)}/mês</p>
                </div>
              </div>

              {/* Revenue */}
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="text-lg font-bold text-green-600">
                    R$ {(plan.revenue / 1000).toFixed(1)}K
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Receita mensal</p>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-4 gap-3">
              {/* Subscribers */}
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-900 dark:bg-gray-900 rounded-lg">
                <p className="text-lg font-bold text-gray-800 dark:text-gray-100">{plan.subscribers}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Assinantes</p>
              </div>

              {/* Retention */}
              <div className="text-center p-2 bg-green-50 rounded-lg">
                <p className="text-lg font-bold text-green-600">{plan.retention}%</p>
                <p className="text-xs text-green-700">Retenção</p>
              </div>

              {/* Churn */}
              <div className="text-center p-2 bg-red-50 rounded-lg">
                <p className="text-lg font-bold text-red-600">{plan.churn}%</p>
                <p className="text-xs text-red-700">Churn</p>
              </div>

              {/* Lifetime */}
              <div className="text-center p-2 bg-blue-50 rounded-lg">
                <p className="text-lg font-bold text-blue-600">{plan.avgLifetime}m</p>
                <p className="text-xs text-blue-700">Tempo Médio</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 dark:text-gray-400 mb-1">
                <span>Participação na receita</span>
                <span>{((plan.revenue / totalRevenue) * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${plan.bgGradient} transition-all duration-1000`}
                  style={{ width: `${(plan.revenue / totalRevenue) * 100}%` }}
                />
              </div>
            </div>

            {/* Growth Indicator */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-600 font-medium">
                  +{(Math.random() * 20 + 5).toFixed(1)}% crescimento
                </span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                LTV: R$ {(plan.price * plan.avgLifetime).toFixed(0)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-bold text-emerald-600">
              R$ {(totalRevenue / 1000).toFixed(1)}K
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Receita Total</p>
          </div>
          <div>
            <p className="text-lg font-bold text-blue-600">
              {avgRetention.toFixed(1)}%
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Retenção Média</p>
          </div>
          <div>
            <p className="text-lg font-bold text-purple-600">
              R$ {(totalRevenue / totalSubscribers).toFixed(0)}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">ARPU</p>
          </div>
        </div>
      </div>

      {/* Insight */}
      <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
        <p className="text-sm text-purple-700">
          <span className="font-semibold">💡 Insight:</span> Plano VIP tem maior retenção (97.9%) e LTV, 
          mas representa apenas {((plansData[2].subscribers / totalSubscribers) * 100).toFixed(1)}% da base.
        </p>
      </div>
    </div>
  );
}