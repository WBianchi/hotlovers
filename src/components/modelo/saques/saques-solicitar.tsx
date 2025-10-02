"use client";

import { Send, AlertCircle, DollarSign, Percent } from "lucide-react";
import { useState } from "react";

export function SaquesSolicitar() {
  const [valor, setValor] = useState("");
  const saldoDisponivel = 3245.80;
  const taxaPlataforma = 10; // 10%
  
  const valorNumerico = parseFloat(valor.replace(",", ".")) || 0;
  const taxaValor = valorNumerico * (taxaPlataforma / 100);
  const valorLiquido = valorNumerico - taxaValor;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10">
        <h2 className="text-xl font-black text-gray-800 dark:text-gray-100">Solicitar Saque</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Envie uma solicitação ao admin</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Saldo Disponível */}
        <div className="p-4 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-xl">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Saldo Disponível</p>
          <p className="text-3xl font-black text-emerald-600">R$ {saldoDisponivel.toFixed(2)}</p>
        </div>

        {/* Valor do Saque */}
        <div>
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
            Valor do Saque
          </label>
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="0,00"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-lg font-bold text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600/30 transition-all"
            />
          </div>
          <button 
            onClick={() => setValor(saldoDisponivel.toFixed(2))}
            className="mt-2 text-xs text-red-600 hover:underline font-semibold"
          >
            Sacar tudo disponível
          </button>
        </div>

        {/* Cálculos */}
        {valorNumerico > 0 && (
          <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Valor Solicitado</span>
              <span className="font-bold text-gray-800 dark:text-gray-100">R$ {valorNumerico.toFixed(2)}</span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1">
                <Percent className="w-3 h-3 text-red-600" />
                <span className="text-gray-600 dark:text-gray-400">Taxa Plataforma ({taxaPlataforma}%)</span>
              </div>
              <span className="font-bold text-red-600">- R$ {taxaValor.toFixed(2)}</span>
            </div>
            
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <span className="font-bold text-gray-800 dark:text-gray-100">Você Receberá</span>
              <span className="text-2xl font-black text-emerald-600">R$ {valorLiquido.toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Alerta */}
        <div className="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-blue-700 dark:text-blue-400">
            <p className="font-bold mb-1">Informações Importantes:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Saques são processados em até 48h úteis</li>
              <li>Taxa da plataforma: 10%</li>
              <li>Valor mínimo: R$ 50,00</li>
            </ul>
          </div>
        </div>

        {/* Método de Pagamento */}
        <div>
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
            Método de Pagamento
          </label>
          <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600/30 transition-all">
            <option>PIX</option>
            <option>Transferência Bancária</option>
          </select>
        </div>

        {/* Botão */}
        <button 
          disabled={valorNumerico < 50 || valorNumerico > saldoDisponivel}
          className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl transition-all hover:scale-105 shadow-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <Send className="w-5 h-5" />
          <span>Solicitar Saque</span>
        </button>
      </div>
    </div>
  );
}
