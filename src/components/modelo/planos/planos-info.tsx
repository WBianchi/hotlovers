"use client";

import { AlertCircle, Percent } from "lucide-react";

export function PlanosInfo() {
  return (
    <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 rounded-2xl p-6 border border-red-200 dark:border-red-800">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
          <Percent className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-black text-gray-800 dark:text-gray-100 mb-2">
            Taxa da Plataforma
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            A plataforma cobra <span className="font-bold text-red-600">10% sobre cada assinatura</span>. 
            Você define o valor que deseja receber e nós calculamos automaticamente o preço final para o assinante.
          </p>
          
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <AlertCircle className="w-4 h-4" />
            <span>Exemplo: Se você quer receber R$ 45, o assinante pagará R$ 50 (R$ 45 + R$ 5 de taxa)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
