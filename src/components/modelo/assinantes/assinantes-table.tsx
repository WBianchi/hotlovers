"use client";

import { Crown, Calendar, DollarSign, MoreVertical, CheckCircle, XCircle, Clock } from "lucide-react";

const mockAssinantes = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    plano: "Premium Mensal",
    valor: 49.90,
    status: "ativo",
    dataInicio: "01/09/2024",
    dataExpiracao: "01/10/2024",
    tipo: "mensal"
  },
  {
    id: 2,
    nome: "Carlos Lima",
    email: "carlos@email.com",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    plano: "VIP Anual",
    valor: 499.90,
    status: "ativo",
    dataInicio: "15/08/2024",
    dataExpiracao: "15/08/2025",
    tipo: "anual"
  },
  {
    id: 3,
    nome: "Pedro Costa",
    email: "pedro@email.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    plano: "Básico Mensal",
    valor: 29.90,
    status: "expirando",
    dataInicio: "20/08/2024",
    dataExpiracao: "20/09/2024",
    tipo: "mensal"
  },
  {
    id: 4,
    nome: "Rafael Oliveira",
    email: "rafael@email.com",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    plano: "Premium Mensal",
    valor: 49.90,
    status: "cancelado",
    dataInicio: "10/08/2024",
    dataExpiracao: "10/09/2024",
    tipo: "mensal"
  }
];

export function AssinantesTable() {
  const getStatusBadge = (status: string) => {
    if (status === "ativo") return { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600", icon: CheckCircle };
    if (status === "expirando") return { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-600", icon: Clock };
    return { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-600", icon: XCircle };
  };

  const getTipoBadge = (tipo: string) => {
    return tipo === "anual" 
      ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600" 
      : "bg-blue-100 dark:bg-blue-900/30 text-blue-600";
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Table Header */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Assinante
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Plano
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Valor
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Início
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Expiração
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {mockAssinantes.map((assinante) => {
              const statusInfo = getStatusBadge(assinante.status);
              
              return (
                <tr key={assinante.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={assinante.avatar}
                        alt={assinante.nome}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-gray-800 shadow"
                      />
                      <div>
                        <p className="font-bold text-gray-800 dark:text-gray-100">{assinante.nome}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{assinante.email}</p>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <p className="font-semibold text-gray-800 dark:text-gray-100">{assinante.plano}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold uppercase w-fit ${getTipoBadge(assinante.tipo)}`}>
                        {assinante.tipo}
                      </span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4 text-emerald-600" />
                      <span className="font-bold text-emerald-600">R$ {assinante.valor.toFixed(2)}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full w-fit ${statusInfo.bg}`}>
                      <statusInfo.icon className={`w-4 h-4 ${statusInfo.text}`} />
                      <span className={`text-xs font-bold uppercase ${statusInfo.text}`}>
                        {assinante.status}
                      </span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{assinante.dataInicio}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{assinante.dataExpiracao}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
