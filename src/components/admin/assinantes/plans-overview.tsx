"use client";

import { Crown, Users, DollarSign, TrendingUp, Zap } from "lucide-react";

export function PlansOverview() {
  const plans = [
    {
      name: "Básico",
      price: "R$ 19,90",
      subscribers: 456,
      revenue: 9080.40,
      growth: 12.5,
      color: "blue",
      bgGradient: "from-blue-500 to-indigo-600",
      features: ["Chat básico", "Fotos em HD", "5 modelos/mês"]
    },
    {
      name: "Premium",
      price: "R$ 39,90", 
      subscribers: 578,
      revenue: 23066.20,
      growth: 18.3,
      color: "purple",
      bgGradient: "from-purple-500 to-indigo-600",
      features: ["Chat ilimitado", "Videos HD", "Modelos ilimitadas", "Conteúdo exclusivo"]
    },
    {
      name: "VIP",
      price: "R$ 79,90",
      subscribers: 90,
      revenue: 7191.00,
      growth: 25.7,
      color: "yellow",
      bgGradient: "from-yellow-500 to-orange-600",
      features: ["Tudo do Premium", "Chat 1:1", "Conteúdo antes de todos", "Pedidos personalizados"]
    }
  ];

  const totalSubscribers = plans.reduce((sum, plan) => sum + plan.subscribers, 0);
  const totalRevenue = plans.reduce((sum, plan) => sum + plan.revenue, 0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-hotlovers-red to-red-600 rounded-xl flex items-center justify-center">
            <Crown className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Visão Geral dos Planos</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Performance dos planos de assinatura</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">{totalSubscribers}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Total Assinantes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">R$ {(totalRevenue / 1000).toFixed(1)}K</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Receita Total</p>
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className="relative p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 dark:border-gray-700 hover:border-gray-300 transition-all duration-300 hover:scale-105 group overflow-hidden"
          >
            {/* Background Gradient */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${plan.bgGradient} opacity-10 rounded-full -translate-y-10 translate-x-10 group-hover:opacity-20 transition-opacity`}></div>
            
            {/* Plan Header */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.bgGradient} flex items-center justify-center shadow-lg`}>
                  {index === 0 && <Users className="w-5 h-5 text-white" />}
                  {index === 1 && <Zap className="w-5 h-5 text-white" />}
                  {index === 2 && <Crown className="w-5 h-5 text-white" />}
                </div>
                
                <div className="text-right">
                  <p className="text-2xl font-black text-gray-800 dark:text-gray-100">{plan.price}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">/mês</p>
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 dark:text-gray-100 mb-2">{plan.name}</h4>

              {/* Stats */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Assinantes</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">{plan.subscribers}</span>
                    <div className="flex items-center space-x-1 px-2 py-0.5 bg-green-100 rounded-full">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-xs font-medium text-green-700">+{plan.growth}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Receita</span>
                  <span className="font-semibold text-green-600">
                    R$ {(plan.revenue / 1000).toFixed(1)}K
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">% do Total</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    {((plan.subscribers / totalSubscribers) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${plan.bgGradient} transition-all duration-1000`}
                    style={{ width: `${(plan.subscribers / totalSubscribers) * 100}%` }}
                  />
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 dark:text-gray-400 uppercase tracking-wide">Recursos</p>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${plan.bgGradient}`}></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12 -translate-x-full group-hover:translate-x-full duration-700"></div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-lg font-bold text-blue-600">{plans[0].subscribers}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Básico</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-purple-600">{plans[1].subscribers}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Premium</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-yellow-600">{plans[2].subscribers}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">VIP</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-green-600">
              {(plans.reduce((sum, p) => sum + p.growth, 0) / plans.length).toFixed(1)}%
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Crescimento Médio</p>
          </div>
        </div>
      </div>
    </div>
  );
}