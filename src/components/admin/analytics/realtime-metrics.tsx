"use client";

import { Eye, Users, DollarSign, MousePointer, Activity } from "lucide-react";
import { useState, useEffect } from "react";

export function RealtimeMetrics() {
  const [metrics, setMetrics] = useState({
    activeUsers: 234,
    pageViews: 1847,
    revenue: 892.50,
    clicks: 567,
    conversions: 23
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5) - 2,
        pageViews: prev.pageViews + Math.floor(Math.random() * 10),
        revenue: prev.revenue + (Math.random() * 20),
        clicks: prev.clicks + Math.floor(Math.random() * 8),
        conversions: prev.conversions + (Math.random() > 0.8 ? 1 : 0)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const realtimeCards = [
    {
      label: "Usuários Online",
      value: metrics.activeUsers,
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-100",
      suffix: ""
    },
    {
      label: "Visualizações",
      value: metrics.pageViews,
      icon: Eye,
      color: "text-blue-500", 
      bgColor: "bg-blue-100",
      suffix: ""
    },
    {
      label: "Receita em Tempo Real",
      value: metrics.revenue,
      icon: DollarSign,
      color: "text-emerald-500",
      bgColor: "bg-emerald-100",
      suffix: "",
      format: "currency"
    },
    {
      label: "Cliques",
      value: metrics.clicks,
      icon: MousePointer,
      color: "text-purple-500",
      bgColor: "bg-purple-100", 
      suffix: ""
    },
    {
      label: "Conversões",
      value: metrics.conversions,
      icon: Activity,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      suffix: ""
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Métricas em Tempo Real</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Atualizações a cada 5 segundos</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-600 font-medium">AO VIVO</span>
        </div>
      </div>

      {/* Realtime Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {realtimeCards.map((card, index) => (
          <div
            key={card.label}
            className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 group cursor-pointer relative overflow-hidden"
          >
            {/* Pulse Animation */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-white to-gray-100 opacity-50 rounded-full -translate-y-6 translate-x-6 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Icon */}
            <div className={`w-10 h-10 rounded-lg ${card.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <card.icon className={`w-5 h-5 ${card.color}`} />
            </div>

            {/* Value */}
            <div className="space-y-1">
              <p className="text-2xl font-black text-gray-800 dark:text-gray-100 dark:text-gray-100 group-hover:text-gray-900 transition-colors">
                {card.format === 'currency' 
                  ? `R$ ${card.value.toFixed(2)}` 
                  : card.value.toLocaleString()}
                {card.suffix}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 dark:text-gray-400 font-medium">
                {card.label}
              </p>
            </div>

            {/* Live Indicator */}
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">
            Dados coletados dos últimos 5 minutos
          </span>
          <div className="flex items-center space-x-1 text-green-600">
            <Activity className="w-3 h-3 animate-pulse" />
            <span className="font-medium">Sistema ativo</span>
          </div>
        </div>
      </div>
    </div>
  );
}