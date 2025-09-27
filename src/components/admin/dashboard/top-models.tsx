"use client";

import { Crown, Star, TrendingUp, Eye, Heart } from "lucide-react";

const topModels = [
  {
    id: 1,
    name: "Isabella Santos",
    username: "@lari_hot",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=100&h=100&fit=crop&crop=face",
    revenue: "R$ 8.4K",
    growth: "+18%",
    subscribers: "15.2K",
    rating: 4.9,
    status: "online"
  },
  {
    id: 2,
    name: "Amanda Silva",
    username: "@amanda_fire",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    revenue: "R$ 7.2K", 
    growth: "+12%",
    subscribers: "12.8K",
    rating: 4.8,
    status: "online"
  },
  {
    id: 3,
    name: "Juliana Costa",
    username: "@juli_delicia", 
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
    revenue: "R$ 6.8K",
    growth: "+8%",
    subscribers: "10.5K", 
    rating: 4.7,
    status: "offline"
  }
];

export function TopModels() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-hotlovers-red to-red-600 rounded-xl flex items-center justify-center">
            <Crown className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Top Modelos</h3>
            <p className="text-gray-500 text-sm">Maiores receitas do mês</p>
          </div>
        </div>
        
        <button className="text-sm text-hotlovers-red hover:text-hotlovers-red/80 font-medium">
          Ver ranking
        </button>
      </div>

      {/* Models List */}
      <div className="space-y-4">
        {topModels.map((model, index) => (
          <div
            key={model.id}
            className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group cursor-pointer"
          >
            {/* Rank */}
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
              index === 0 ? 'bg-yellow-100 text-yellow-700' :
              index === 1 ? 'bg-gray-100 text-gray-700' :
              'bg-orange-100 text-orange-700'
            }`}>
              #{index + 1}
            </div>

            {/* Avatar */}
            <div className="relative">
              <img
                src={model.avatar}
                alt={model.name}
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-white group-hover:ring-hotlovers-red/30 transition-all"
              />
              
              {/* Status */}
              <div className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white ${
                model.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
              }`}>
                {model.status === 'online' && (
                  <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
                )}
              </div>

              {/* Crown for #1 */}
              {index === 0 && (
                <div className="absolute -top-1 -left-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Crown className="w-3 h-3 text-yellow-800" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <p className="font-semibold text-gray-800 group-hover:text-hotlovers-red transition-colors truncate">
                  {model.name}
                </p>
                <div className="flex items-center space-x-0.5">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs text-gray-600">{model.rating}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500">{model.username}</p>
              
              <div className="flex items-center space-x-3 mt-1">
                <div className="flex items-center space-x-1">
                  <Heart className="w-3 h-3 text-red-500" />
                  <span className="text-xs text-gray-600">{model.subscribers}</span>
                </div>
                
                <div className={`flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                  model.growth.startsWith('+') 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  <TrendingUp className="w-3 h-3" />
                  <span>{model.growth}</span>
                </div>
              </div>
            </div>

            {/* Revenue */}
            <div className="text-right">
              <p className="font-bold text-gray-800">{model.revenue}</p>
              <p className="text-xs text-gray-500">este mês</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-500">
          Total de <span className="font-semibold text-hotlovers-red">89 modelos ativas</span>
        </p>
      </div>
    </div>
  );
}