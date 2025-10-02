"use client";

import { Crown, TrendingUp } from "lucide-react";

export function TopPerformers() {
  const performers = [
    {
      name: "Isabella Santos",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=50&h=50&fit=crop&crop=face",
      revenue: 8420,
      clicks: 15200,
      conversions: 89,
      growth: 23
    },
    {
      name: "Amanda Silva", 
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face",
      revenue: 7280,
      clicks: 12890,
      conversions: 76,
      growth: 18
    },
    {
      name: "Juliana Costa",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=50&h=50&fit=crop&crop=face", 
      revenue: 6830,
      clicks: 11450,
      conversions: 68,
      growth: 15
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
          <Crown className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Top Performers</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Modelos com melhor desempenho</p>
        </div>
      </div>

      <div className="space-y-4">
        {performers.map((performer, index) => (
          <div key={performer.name} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors">
            {/* Rank */}
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
              index === 0 ? 'bg-yellow-100 text-yellow-700' :
              index === 1 ? 'bg-gray-100 text-gray-700' :
              'bg-orange-100 text-orange-700'
            }`}>
              #{index + 1}
            </div>

            {/* Avatar */}
            <img
              src={performer.avatar}
              alt={performer.name}
              className="w-10 h-10 rounded-xl object-cover"
            />

            {/* Info */}
            <div className="flex-1">
              <p className="font-semibold text-gray-800 dark:text-gray-100">{performer.name}</p>
              <div className="flex items-center space-x-3 text-xs text-gray-600 dark:text-gray-400">
                <span>R$ {(performer.revenue / 1000).toFixed(1)}K</span>
                <span>•</span>
                <span>{(performer.clicks / 1000).toFixed(1)}K cliques</span>
                <span>•</span>
                <span>{performer.conversions} conversões</span>
              </div>
            </div>

            {/* Growth */}
            <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 rounded-full">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="text-xs font-semibold text-green-700">+{performer.growth}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}