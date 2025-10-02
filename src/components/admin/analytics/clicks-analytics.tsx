"use client";

import { MousePointer, Eye } from "lucide-react";

export function ClicksAnalytics() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
          <MousePointer className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Cliques & Engajamento</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Análise de cliques por fonte</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="text-center py-4">
          <p className="text-3xl font-black text-gray-800 dark:text-gray-100">89.2K</p>
          <p className="text-gray-500">Cliques totais</p>
        </div>
        
        {/* Fonte de cliques */}
        <div className="space-y-3">
          {[
            { source: "Perfis de Modelos", clicks: 34200, percentage: 38 },
            { source: "Chat Privado", clicks: 28900, percentage: 32 },
            { source: "Packs & Produtos", clicks: 16100, percentage: 18 },
            { source: "Afiliados", clicks: 10000, percentage: 12 }
          ].map((item) => (
            <div key={item.source} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 dark:bg-gray-900 rounded-lg">
              <span className="font-medium text-gray-700 dark:text-gray-300">{item.source}</span>
              <div className="flex items-center space-x-3">
                <div className="w-24 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 dark:text-gray-400 w-12 text-right">
                  {(item.clicks / 1000).toFixed(1)}K
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}