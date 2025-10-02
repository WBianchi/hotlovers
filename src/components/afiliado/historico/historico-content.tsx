"use client";

import { FileText, Calendar, Filter, Download } from "lucide-react";
import { FaHistory } from "react-icons/fa";
import { useState } from "react";

const historico = [
  {
    id: "1",
    tipo: "Venda",
    descricao: "Assinatura Premium - Isabella Santos",
    cliente: "João Silva",
    valor: 49.90,
    comissao: 14.97,
    data: "2024-01-22 14:32:15",
    status: "aprovada"
  },
  {
    id: "2",
    tipo: "Venda",
    descricao: "Pack Lingerie - Amanda Silva",
    cliente: "Pedro Costa",
    valor: 89.90,
    comissao: 26.97,
    data: "2024-01-22 12:15:42",
    status: "aprovada"
  },
  {
    id: "3",
    tipo: "Saque",
    descricao: "Saque via PIX",
    valor: 500.00,
    data: "2024-01-20 10:30:00",
    status: "pago"
  },
  {
    id: "4",
    tipo: "Venda",
    descricao: "Vídeo Premium - Juliana Costa",
    cliente: "Carlos Mendes",
    valor: 39.90,
    comissao: 11.97,
    data: "2024-01-21 18:45:30",
    status: "pendente"
  },
  {
    id: "5",
    tipo: "Clique",
    descricao: "Link: Isabella Santos - Perfil",
    ip: "192.168.1.100",
    data: "2024-01-22 16:20:10",
    status: "registrado"
  }
];

export function HistoricoContent() {
  const [filter, setFilter] = useState("todos");

  const filteredHistorico = filter === "todos" 
    ? historico 
    : historico.filter(h => h.tipo.toLowerCase() === filter);

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center space-x-3">
            <FaHistory className="w-8 h-8 text-red-600" />
            <span>Histórico Completo</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Todas as atividades e transações da sua conta
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setFilter("todos")}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                filter === "todos"
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter("venda")}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                filter === "venda"
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Vendas
            </button>
            <button
              onClick={() => setFilter("saque")}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                filter === "saque"
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Saques
            </button>
            <button
              onClick={() => setFilter("clique")}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                filter === "clique"
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Cliques
            </button>
          </div>

          <button className="px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold transition-all flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Exportar</span>
          </button>
        </div>

        {/* Histórico List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Tipo</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Descrição</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Detalhes</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Valor</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Data/Hora</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredHistorico.map((item) => (
                  <tr key={item.id} className="border-t border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.tipo === "Venda"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          : item.tipo === "Saque"
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          : "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                      }`}>
                        {item.tipo}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-gray-900 dark:text-white">{item.descricao}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.cliente || item.ip || "-"}
                      </p>
                    </td>
                    <td className="py-4 px-6">
                      {item.valor ? (
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white">R$ {item.valor.toFixed(2)}</p>
                          {item.comissao && (
                            <p className="text-xs text-green-600">Comissão: R$ {item.comissao.toFixed(2)}</p>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(item.data).toLocaleString('pt-BR')}
                      </p>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.status === "aprovada" || item.status === "pago" || item.status === "registrado"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                      }`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
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
