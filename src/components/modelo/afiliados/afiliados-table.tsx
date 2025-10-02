"use client";

import { Calendar, DollarSign, TrendingUp, MoreVertical, CheckCircle } from "lucide-react";

const mockAfiliados = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    vendas: 45,
    comissao: 890.00,
    taxa: 20,
    dataEntrada: "15/08/2024",
    status: "ativo"
  },
  {
    id: 2,
    nome: "Carlos Lima",
    email: "carlos@email.com",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    vendas: 32,
    comissao: 640.00,
    taxa: 20,
    dataEntrada: "20/08/2024",
    status: "ativo"
  },
  {
    id: 3,
    nome: "Pedro Costa",
    email: "pedro@email.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    vendas: 28,
    comissao: 560.00,
    taxa: 20,
    dataEntrada: "25/08/2024",
    status: "ativo"
  },
  {
    id: 4,
    nome: "Rafael Oliveira",
    email: "rafael@email.com",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    vendas: 15,
    comissao: 300.00,
    taxa: 20,
    dataEntrada: "01/09/2024",
    status: "ativo"
  }
];

export function AfiliadosTable() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-black text-gray-800 dark:text-gray-100">Lista de Afiliados</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Gerencie sua rede de parceiros</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Afiliado
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Vendas
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Comissão
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Taxa
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Data Entrada
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {mockAfiliados.map((afiliado) => (
              <tr key={afiliado.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={afiliado.avatar}
                      alt={afiliado.nome}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-gray-800 shadow"
                    />
                    <div>
                      <p className="font-bold text-gray-800 dark:text-gray-100">{afiliado.nome}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{afiliado.email}</p>
                    </div>
                  </div>
                </td>
                
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-gray-800 dark:text-gray-100">{afiliado.vendas}</span>
                  </div>
                </td>
                
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold text-emerald-600">R$ {afiliado.comissao.toFixed(2)}</span>
                  </div>
                </td>
                
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full text-xs font-bold">
                    {afiliado.taxa}%
                  </span>
                </td>
                
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span>{afiliado.dataEntrada}</span>
                  </div>
                </td>
                
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full w-fit bg-green-100 dark:bg-green-900/30">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-bold uppercase text-green-600">
                      {afiliado.status}
                    </span>
                  </div>
                </td>
                
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
