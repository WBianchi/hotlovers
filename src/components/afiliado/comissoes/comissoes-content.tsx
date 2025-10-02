"use client";

import { DollarSign, TrendingUp, Calendar, CheckCircle, Clock, Filter } from "lucide-react";
import { FaDollarSign } from "react-icons/fa";
import { useState } from "react";

const comissoes = [
  {
    id: "1",
    produto: "Assinatura Premium - Isabella Santos",
    cliente: "João Silva",
    valor: 49.90,
    comissao: 14.97,
    percentual: 30,
    data: "2024-01-22 14:32",
    status: "aprovada",
    tipo: "Assinatura"
  },
  {
    id: "2",
    produto: "Pack Lingerie - Amanda Silva",
    cliente: "Pedro Costa",
    valor: 89.90,
    comissao: 26.97,
    percentual: 30,
    data: "2024-01-22 12:15",
    status: "aprovada",
    tipo: "Pack"
  },
  {
    id: "3",
    produto: "Vídeo Premium - Juliana Costa",
    cliente: "Carlos Mendes",
    valor: 39.90,
    comissao: 11.97,
    percentual: 30,
    data: "2024-01-21 18:45",
    status: "pendente",
    tipo: "Vídeo"
  },
  {
    id: "4",
    produto: "Foto Ensaio Fashion - Camila",
    cliente: "Lucas Alves",
    valor: 29.90,
    comissao: 8.97,
    percentual: 30,
    data: "2024-01-21 16:20",
    status: "aprovada",
    tipo: "Foto"
  },
  {
    id: "5",
    produto: "Pack Exclusivo - Beatriz Lima",
    cliente: "Rafael Santos",
    valor: 149.90,
    comissao: 44.97,
    percentual: 30,
    data: "2024-01-20 10:30",
    status: "aprovada",
    tipo: "Pack"
  }
];

export function ComissoesContent() {
  const [filter, setFilter] = useState("todas");

  const totalAprovadas = comissoes
    .filter(c => c.status === "aprovada")
    .reduce((acc, c) => acc + c.comissao, 0);

  const totalPendentes = comissoes
    .filter(c => c.status === "pendente")
    .reduce((acc, c) => acc + c.comissao, 0);

  const filteredComissoes = filter === "todas" 
    ? comissoes 
    : comissoes.filter(c => c.status === filter);

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center space-x-3">
            <FaDollarSign className="w-8 h-8 text-red-600" />
            <span>Comissões</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Acompanhe todas as suas comissões e ganhos
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-bold text-green-600">+12.5%</span>
            </div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Comissões Aprovadas</h3>
            <p className="text-3xl font-black text-gray-900 dark:text-white">R$ {totalAprovadas.toFixed(2)}</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-sm font-bold text-yellow-600">Aguardando</span>
            </div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Comissões Pendentes</h3>
            <p className="text-3xl font-black text-gray-900 dark:text-white">R$ {totalPendentes.toFixed(2)}</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-bold text-blue-600">Este mês</span>
            </div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total do Mês</h3>
            <p className="text-3xl font-black text-gray-900 dark:text-white">R$ {(totalAprovadas + totalPendentes).toFixed(2)}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-3 mb-6">
          <button
            onClick={() => setFilter("todas")}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${
              filter === "todas"
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFilter("aprovada")}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${
              filter === "aprovada"
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            }`}
          >
            Aprovadas
          </button>
          <button
            onClick={() => setFilter("pendente")}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${
              filter === "pendente"
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            }`}
          >
            Pendentes
          </button>
        </div>

        {/* Comissões Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Produto</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Tipo</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Cliente</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Valor Venda</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Comissão</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">%</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Data</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredComissoes.map((comissao) => (
                  <tr key={comissao.id} className="border-t border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6">
                      <p className="font-bold text-gray-900 dark:text-white">{comissao.produto}</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded-full">
                        {comissao.tipo}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{comissao.cliente}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-gray-900 dark:text-white">R$ {comissao.valor.toFixed(2)}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-green-600">R$ {comissao.comissao.toFixed(2)}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-blue-600">{comissao.percentual}%</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{new Date(comissao.data).toLocaleString('pt-BR')}</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        comissao.status === "aprovada"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                      }`}>
                        {comissao.status === "aprovada" ? "Aprovada" : "Pendente"}
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
