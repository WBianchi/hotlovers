"use client";

import { BarChart3, TrendingUp, Users, MousePointerClick, ShoppingCart, Eye, Calendar } from "lucide-react";
import { FaChartBar } from "react-icons/fa";

const estatisticasPorTipo = [
  { tipo: "Modelos", cliques: 456, vendas: 18, conversao: 3.9, comissao: 678.50 },
  { tipo: "Packs", cliques: 298, vendas: 12, conversao: 4.0, comissao: 456.80 },
  { tipo: "Vídeos", cliques: 189, vendas: 7, conversao: 3.7, comissao: 234.90 },
  { tipo: "Fotos", cliques: 134, vendas: 4, conversao: 3.0, comissao: 120.60 },
  { tipo: "Assinaturas", cliques: 342, vendas: 9, conversao: 2.6, comissao: 345.70 }
];

const desempenhoDiario = [
  { dia: "Seg", cliques: 145, vendas: 5, comissao: 189.50 },
  { dia: "Ter", cliques: 167, vendas: 6, comissao: 234.80 },
  { dia: "Qua", cliques: 189, vendas: 8, comissao: 298.90 },
  { dia: "Qui", cliques: 156, vendas: 4, comissao: 156.70 },
  { dia: "Sex", cliques: 198, vendas: 7, comissao: 267.40 },
  { dia: "Sáb", cliques: 134, vendas: 3, comissao: 98.50 },
  { dia: "Dom", cliques: 112, vendas: 2, comissao: 67.80 }
];

export function EstatisticasContent() {
  const maxCliques = Math.max(...desempenhoDiario.map(d => d.cliques));

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center space-x-3">
            <FaChartBar className="w-8 h-8 text-red-600" />
            <span>Estatísticas Detalhadas</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Análise completa do desempenho dos seus links
          </p>
        </div>

        {/* Período Selector */}
        <div className="flex items-center space-x-3 mb-8">
          <button className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold">
            Últimos 7 dias
          </button>
          <button className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-xl font-bold">
            Últimos 30 dias
          </button>
          <button className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-xl font-bold">
            Este mês
          </button>
          <button className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-xl font-bold">
            Personalizado
          </button>
        </div>

        {/* Desempenho Diário */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-black text-gray-900 dark:text-white mb-6">Desempenho Diário</h2>
          
          <div className="grid grid-cols-7 gap-4">
            {desempenhoDiario.map((dia) => (
              <div key={dia.dia} className="text-center">
                <div className="mb-3">
                  <div className="h-48 flex items-end justify-center">
                    <div
                      className="w-full bg-gradient-to-t from-red-600 to-red-500 rounded-t-lg relative group cursor-pointer hover:from-red-700 hover:to-red-600 transition-all"
                      style={{ height: `${(dia.cliques / maxCliques) * 100}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                        {dia.cliques} cliques
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-gray-900 dark:text-white mb-1">{dia.dia}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{dia.vendas} vendas</p>
                <p className="text-xs font-bold text-green-600">R$ {dia.comissao.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Estatísticas por Tipo */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-black text-gray-900 dark:text-white mb-6">Desempenho por Tipo de Conteúdo</h2>

          <div className="space-y-4">
            {estatisticasPorTipo.map((stat) => (
              <div key={stat.tipo} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 dark:text-white">{stat.tipo}</h3>
                  <span className="text-lg font-black text-green-600">R$ {stat.comissao.toFixed(2)}</span>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <MousePointerClick className="w-4 h-4 text-purple-600" />
                      <p className="text-xs text-gray-500 dark:text-gray-400">Cliques</p>
                    </div>
                    <p className="text-lg font-black text-gray-900 dark:text-white">{stat.cliques}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <ShoppingCart className="w-4 h-4 text-green-600" />
                      <p className="text-xs text-gray-500 dark:text-gray-400">Vendas</p>
                    </div>
                    <p className="text-lg font-black text-gray-900 dark:text-white">{stat.vendas}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      <p className="text-xs text-gray-500 dark:text-gray-400">Conversão</p>
                    </div>
                    <p className="text-lg font-black text-orange-600">{stat.conversao}%</p>
                  </div>
                  <div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-6">
                      <div
                        className="bg-red-600 h-2 rounded-full"
                        style={{ width: `${stat.conversao * 25}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
