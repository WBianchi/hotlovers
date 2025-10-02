"use client";

import { DollarSign, TrendingUp } from "lucide-react";
import Link from "next/link";

export function EarningsDisplay() {
  const saldoDisponivel = 3245.80;
  const crescimento = "+12%";

  return (
    <Link 
      href="/modelo/saques"
      className="relative p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 group"
    >
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
          <DollarSign className="w-3 h-3 text-white" />
        </div>
        
        <div className="hidden xl:flex xl:flex-col">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight">Saldo</p>
          <div className="flex items-center space-x-1">
            <p className="text-xs font-black text-gray-800 dark:text-gray-100">R$ {saldoDisponivel.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
