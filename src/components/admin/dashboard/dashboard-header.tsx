"use client";

import { Crown, Activity, Calendar, TrendingUp } from "lucide-react";

export function DashboardHeader() {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric', 
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        
        {/* Left Side */}
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          {/* Icon */}
          <div className="relative">
            <div className="w-16 h-16 bg-hotlovers-gradient rounded-2xl flex items-center justify-center shadow-lg">
              <Crown className="w-8 h-8 text-white" />
            </div>
            
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-hotlovers-gradient rounded-2xl opacity-75 animate-ping"></div>
            
            {/* Status Badge */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
              <Activity className="w-3 h-3 text-white animate-pulse" />
            </div>
          </div>

          {/* Text */}
          <div>
            <h1 className="text-3xl font-black text-gray-800">
              Dashboard Admin
            </h1>
            <p className="text-gray-500 text-lg">
              Bem-vindo de volta! 👋
            </p>
            
            <div className="flex items-center space-x-2 mt-1">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600 capitalize">
                {currentDate}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Quick Stats */}
        <div className="flex items-center space-x-4">
          {/* Online Status */}
          <div className="flex items-center space-x-3 px-4 py-3 bg-green-50 border border-green-200 rounded-xl">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm font-semibold text-green-700">Sistema Online</p>
              <p className="text-xs text-green-600">99.9% Uptime</p>
            </div>
          </div>

          {/* Performance */}
          <div className="flex items-center space-x-3 px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm font-semibold text-blue-700">Performance</p>
              <p className="text-xs text-blue-600">Excelente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}