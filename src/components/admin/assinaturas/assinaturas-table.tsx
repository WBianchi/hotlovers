"use client";

import { 
  Crown, Calendar, CreditCard, MoreHorizontal, AlertTriangle,
  CheckCircle, Clock, X, Eye, Edit, Ban, Users, RefreshCw
} from "lucide-react";
import { useState } from "react";

// Mock data - depois será da API
const assinaturasData = [
  {
    id: "sub_001",
    assinante: {
      nome: "João Silva",
      email: "joao@exemplo.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    plano: "Premium",
    preco: 39.90,
    status: "ativa",
    inicioAssinatura: "2024-01-15",
    proximaCobranca: "2024-12-15",
    diasRestantes: 18,
    modeloAssinada: "Isabella Santos",
    metodoPagamento: "Cartão ****1234",
    valorPago: 39.90,
    renovacaoAutomatica: true,
    pagamentosRealizados: 11,
    valorTotalPago: 438.90
  },
  {
    id: "sub_002", 
    assinante: {
      nome: "Carlos Mendes",
      email: "carlos@exemplo.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    plano: "VIP",
    preco: 79.90,
    status: "ativa",
    inicioAssinatura: "2024-02-08",
    proximaCobranca: "2024-12-08",
    diasRestantes: 11,
    modeloAssinada: "Amanda Silva",
    metodoPagamento: "PIX",
    valorPago: 79.90,
    renovacaoAutomatica: true,
    pagamentosRealizados: 10,
    valorTotalPago: 799.00
  },
  {
    id: "sub_003",
    assinante: {
      nome: "Pedro Santos", 
      email: "pedro@exemplo.com",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=60&h=60&fit=crop&crop=face"
    },
    plano: "Básico",
    preco: 19.90,
    status: "expira_hoje",
    inicioAssinatura: "2024-03-12",
    proximaCobranca: "2024-11-27",
    diasRestantes: 0,
    modeloAssinada: "Juliana Costa",
    metodoPagamento: "Cartão ****5678",
    valorPago: 19.90,
    renovacaoAutomatica: false,
    pagamentosRealizados: 8,
    valorTotalPago: 159.20
  },
  {
    id: "sub_004",
    assinante: {
      nome: "Rafael Lima",
      email: "rafael@exemplo.com", 
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
    },
    plano: "Premium",
    preco: 39.90,
    status: "cancelada",
    inicioAssinatura: "2024-01-20",
    proximaCobranca: null,
    diasRestantes: -7,
    modeloAssinada: "Isabella Santos",
    metodoPagamento: "Cartão ****9012",
    valorPago: 39.90,
    renovacaoAutomatica: false,
    pagamentosRealizados: 10,
    valorTotalPago: 399.00
  }
];

export function AssinaturasTable() {
  const [selectedAssinaturas, setSelectedAssinaturas] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("proximaCobranca");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativa": return "bg-green-500";
      case "expira_hoje": return "bg-yellow-500";
      case "cancelada": return "bg-red-500";
      case "suspensa": return "bg-orange-500";
      case "pendente": return "bg-blue-500";
      default: return "bg-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "ativa": return "Ativa";
      case "expira_hoje": return "Expira Hoje";
      case "cancelada": return "Cancelada";
      case "suspensa": return "Suspensa";
      case "pendente": return "Pendente";
      default: return "Indefinido";
    }
  };

  const getPlanColor = (plano: string) => {
    switch (plano) {
      case "Básico": return "text-blue-600 bg-blue-100";
      case "Premium": return "text-purple-600 bg-purple-100";
      case "VIP": return "text-yellow-600 bg-yellow-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getDaysColor = (days: number, status: string) => {
    if (status === 'cancelada') return "text-gray-500";
    if (days < 0) return "text-red-600";
    if (days === 0) return "text-orange-600";
    if (days <= 7) return "text-yellow-600";
    if (days <= 30) return "text-blue-600";
    return "text-green-600";
  };

  const handleSelectAssinatura = (id: string) => {
    setSelectedAssinaturas(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedAssinaturas(prev => 
      prev.length === assinaturasData.length ? [] : assinaturasData.map(a => a.id)
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Todas as Assinaturas</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{assinaturasData.length} assinaturas encontradas</p>
        </div>

        {/* Bulk Actions */}
        {selectedAssinaturas.length > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {selectedAssinaturas.length} selecionadas
            </span>
            <button className="px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
              <RefreshCw className="w-4 h-4" />
            </button>
            <button className="px-3 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors">
              <Clock className="w-4 h-4" />
            </button>
            <button className="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
              <Ban className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4">
                <input
                  type="checkbox"
                  checked={selectedAssinaturas.length === assinaturasData.length}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                />
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Assinante</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Plano & Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Cobrança</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Modelo</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Histórico</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Ações</th>
            </tr>
          </thead>
          <tbody>
            {assinaturasData.map((assinatura) => (
              <tr 
                key={assinatura.id} 
                className={`border-b border-gray-100 dark:border-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors ${
                  selectedAssinaturas.includes(assinatura.id) ? 'bg-emerald-50' : ''
                }`}
              >
                {/* Checkbox */}
                <td className="py-4 px-4">
                  <input
                    type="checkbox"
                    checked={selectedAssinaturas.includes(assinatura.id)}
                    onChange={() => handleSelectAssinatura(assinatura.id)}
                    className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                  />
                </td>

                {/* Assinante Info */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={assinatura.assinante.avatar}
                      alt={assinatura.assinante.nome}
                      className="w-12 h-12 rounded-xl object-cover ring-2 ring-white"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-100">{assinatura.assinante.nome}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{assinatura.assinante.email}</p>
                      <p className="text-xs text-gray-400">
                        Cliente desde {new Date(assinatura.inicioAssinatura).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Plano & Status */}
                <td className="py-4 px-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPlanColor(assinatura.plano)}`}>
                        <Crown className="w-3 h-3 mr-1" />
                        {assinatura.plano}
                      </span>
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                        R$ {assinatura.preco.toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(assinatura.status)} ${
                        assinatura.status === 'ativa' ? 'animate-pulse' : ''
                      }`}></div>
                      <span className={`text-sm font-medium ${
                        assinatura.status === 'ativa' ? 'text-green-700' : 
                        assinatura.status === 'expira_hoje' ? 'text-yellow-700' : 
                        'text-gray-600'
                      }`}>
                        {getStatusText(assinatura.status)}
                      </span>
                    </div>

                    {assinatura.renovacaoAutomatica && assinatura.status === 'ativa' && (
                      <div className="flex items-center space-x-1">
                        <RefreshCw className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-green-600">Auto renovação</span>
                      </div>
                    )}
                  </div>
                </td>

                {/* Cobrança */}
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    {assinatura.proximaCobranca ? (
                      <>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {new Date(assinatura.proximaCobranca).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                        <p className={`text-xs font-medium ${getDaysColor(assinatura.diasRestantes, assinatura.status)}`}>
                          {assinatura.diasRestantes < 0 
                            ? `Vencido há ${Math.abs(assinatura.diasRestantes)} dias`
                            : assinatura.diasRestantes === 0
                            ? 'Vence hoje!'
                            : `${assinatura.diasRestantes} dias restantes`
                          }
                        </p>
                      </>
                    ) : (
                      <span className="text-sm text-gray-500 dark:text-gray-400">Cancelada</span>
                    )}
                    
                    <div className="flex items-center space-x-2 mt-1">
                      <CreditCard className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">{assinatura.metodoPagamento}</span>
                    </div>
                  </div>
                </td>

                {/* Modelo */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <Crown className="w-3 h-3 text-hotlovers-red" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{assinatura.modeloAssinada}</span>
                  </div>
                </td>

                {/* Histórico */}
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Users className="w-3 h-3 text-blue-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{assinatura.pagamentosRealizados} pagamentos</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Total: R$ {assinatura.valorTotalPago.toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      LTV: R$ {(assinatura.valorTotalPago + (assinatura.preco * 6)).toFixed(2)}
                    </p>
                  </div>
                </td>

                {/* Ações */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 rounded-lg bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors">
                      <Eye className="w-4 h-4 text-blue-600" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors">
                      <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Mostrando {assinaturasData.length} de {assinaturasData.length} assinaturas
        </p>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors disabled:opacity-50">
            Anterior
          </button>
          <span className="px-3 py-2 bg-emerald-500 text-white rounded-lg">1</span>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}