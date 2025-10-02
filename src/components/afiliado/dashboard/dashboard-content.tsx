"use client";

import { DollarSign, TrendingUp, Users, MousePointerClick, Eye, ShoppingCart, Calendar, Award } from "lucide-react";
import { FaChartLine } from "react-icons/fa";
import Link from "next/link";

const statsCards = [
  {
    title: "Comissões Totais",
    value: "R$ 1.245,80",
    change: "+12.5%",
    changeType: "positive",
    icon: DollarSign,
    color: "green"
  },
  {
    title: "Vendas Este Mês",
    value: "23",
    change: "+8 vendas",
    changeType: "positive",
    icon: ShoppingCart,
    color: "blue"
  },
  {
    title: "Cliques Totais",
    value: "1.847",
    change: "+234 hoje",
    changeType: "positive",
    icon: MousePointerClick,
    color: "purple"
  },
  {
    title: "Taxa de Conversão",
    value: "3.2%",
    change: "+0.5%",
    changeType: "positive",
    icon: TrendingUp,
    color: "orange"
  }
];

const topLinks = [
  {
    id: "1",
    tipo: "Modelo",
    nome: "Isabella Santos - Perfil",
    cliques: 342,
    vendas: 12,
    comissao: 456.80,
    conversao: 3.5
  },
  {
    id: "2",
    tipo: "Pack",
    nome: "Pack Exclusivo - Lingerie",
    cliques: 189,
    vendas: 8,
    comissao: 287.20,
    conversao: 4.2
  },
  {
    id: "3",
    tipo: "Vídeo",
    nome: "Ensaio Sensual Premium",
    cliques: 156,
    vendas: 5,
    comissao: 189.50,
    conversao: 3.2
  }
];

const recentSales = [
  {
    id: "1",
    produto: "Assinatura Premium - Isabella Santos",
    valor: 49.90,
    comissao: 14.97,
    data: "Hoje, 14:32",
    status: "aprovada"
  },
  {
    id: "2",
    produto: "Pack Lingerie - Amanda Silva",
    valor: 89.90,
    comissao: 26.97,
    data: "Hoje, 12:15",
    status: "aprovada"
  },
  {
    id: "3",
    produto: "Vídeo Premium - Juliana Costa",
    valor: 39.90,
    comissao: 11.97,
    data: "Ontem, 18:45",
    status: "pendente"
  }
];

export function DashboardContent() {
  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center space-x-3">
            <FaChartLine className="w-8 h-8 text-red-600" />
            <span>Visão Geral</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Acompanhe seu desempenho e ganhos como afiliado
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                  </div>
                  <span className={`text-sm font-bold ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.title}</h3>
                <p className="text-3xl font-black text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Top Links */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-gray-900 dark:text-white">Links com Melhor Desempenho</h2>
              <Link href="/afiliado/links" className="text-sm font-bold text-red-600 hover:underline">
                Ver Todos
              </Link>
            </div>

            <div className="space-y-4">
              {topLinks.map((link) => (
                <div
                  key={link.id}
                  className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded">
                          {link.tipo}
                        </span>
                        <h3 className="font-bold text-gray-900 dark:text-white">{link.nome}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black text-green-600">R$ {link.comissao.toFixed(2)}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">comissão</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Cliques</p>
                      <p className="font-bold text-gray-900 dark:text-white">{link.cliques}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Vendas</p>
                      <p className="font-bold text-gray-900 dark:text-white">{link.vendas}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Conversão</p>
                      <p className="font-bold text-gray-900 dark:text-white">{link.conversao}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">Ações Rápidas</h2>
              <div className="space-y-3">
                <Link
                  href="/afiliado/links"
                  className="block px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-center transition-all hover:scale-105"
                >
                  Gerar Novo Link
                </Link>
                <Link
                  href="/afiliado/saques"
                  className="block px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-center transition-all hover:scale-105"
                >
                  Solicitar Saque
                </Link>
                <Link
                  href="/afiliado/estatisticas"
                  className="block px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold text-center transition-all"
                >
                  Ver Estatísticas
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-black mb-2">Programa VIP</h3>
              <p className="text-sm opacity-90 mb-4">
                Alcance R$ 5.000 em comissões e ganhe 5% de bônus em todas as vendas!
              </p>
              <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                <div className="bg-white h-2 rounded-full" style={{ width: "24.9%" }}></div>
              </div>
              <p className="text-xs font-bold">R$ 1.245,80 / R$ 5.000</p>
            </div>
          </div>
        </div>

        {/* Recent Sales */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-gray-900 dark:text-white">Vendas Recentes</h2>
            <Link href="/afiliado/historico" className="text-sm font-bold text-red-600 hover:underline">
              Ver Histórico Completo
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-bold text-gray-600 dark:text-gray-400">Produto</th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-gray-600 dark:text-gray-400">Valor</th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-gray-600 dark:text-gray-400">Comissão</th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-gray-600 dark:text-gray-400">Data</th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-gray-600 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentSales.map((sale) => (
                  <tr key={sale.id} className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-bold text-gray-900 dark:text-white">{sale.produto}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-bold text-gray-900 dark:text-white">R$ {sale.valor.toFixed(2)}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-bold text-green-600">R$ {sale.comissao.toFixed(2)}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{sale.data}</p>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        sale.status === "aprovada"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                      }`}>
                        {sale.status === "aprovada" ? "Aprovada" : "Pendente"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
