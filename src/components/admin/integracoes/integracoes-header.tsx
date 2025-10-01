"use client";

import { Zap, Activity } from "lucide-react";

export function IntegracoesHeader() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700/50 dark:border-gray-700/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
              <Activity className="w-3 h-3 text-white" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-gray-100">
              Integrações
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Conecte serviços externos à plataforma ⚡
            </p>
            
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>5 ativas</span>
              </span>
              <span>•</span>
              <span>3 disponíveis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
