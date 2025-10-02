"use client";

import { 
  Crown, Calendar, CreditCard, MoreHorizontal, 
  CheckCircle, AlertTriangle, Clock, X, Eye, Edit, Ban
} from "lucide-react";
import { useState } from "react";

// Mock data - depois será da API
const assinantesData = [
  {
    id: "1",
    nome: "João Silva",
    email: "joao@exemplo.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    plano: "Premium",
    preco: 39.90,
    status: "ativo",
    inicioAssinatura: "2024-01-15",
    proximaCobranca: "2024-12-15",
    diasRestantes: 18,
    modeloFavorita: "Isabella Santos",
    metodoPagamento: "Cartão ****1234",
    valorPago: 39.90,
    renovacaoAutomatica: true
  },
  {
    id: "2", 
    nome: "Carlos Mendes",
    email: "carlos@exemplo.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    plano: "VIP",
    preco: 79.90,
    status: "ativo",
    inicioAssinatura: "2024-02-08",
    proximaCobranca: "2024-12-08",
    diasRestantes: 11,
    modeloFavorita: "Amanda Silva",
    metodoPagamento: "PIX",
    valorPago: 79.90,
    renovacaoAutomatica: true
  },
  {
    id: "3",
    nome: "Pedro Santos", 
    email: "pedro@exemplo.com",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=60&h=60&fit=crop&crop=face",
    plano: "Básico",
    preco: 19.90,
    status: "pendente",
    inicioAssinatura: "2024-03-12",
    proximaCobranca: "2024-12-12",
    diasRestantes: 15,
    modeloFavorita: "Juliana Costa",
    metodoPagamento: "Cartão ****5678",
    valorPago: 19.90,
    renovacaoAutomatica: false
  },
  {
    id: "4",
    nome: "Rafael Lima",
    email: "rafael@exemplo.com", 
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    plano: "Premium",
    preco: 39.90,
    status: "expirado",
    inicioAssinatura: "2024-01-20",
    proximaCobranca: "2024-11-20",
    diasRestantes: -7,
    modeloFavorita: "Isabella Santos",
    metodoPagamento: "Cartão ****9012",
    valorPago: 39.90,
    renovacaoAutomatica: false
  }
];

export function AssinantesTable() {
  const [selectedAssinantes, setSelectedAssinantes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("proximaCobranca");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativo": return "bg-green-500";
      case "pendente": return "bg-yellow-500";
      case "cancelado": return "bg-red-500";
      case "expirado": return "bg-gray-500";
      default: return "bg-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "ativo": return "Ativo";
      case "pendente": return "Pendente";
      case "cancelado": return "Cancelado";
      case "expirado": return "Expirado";
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

  const getDaysColor = (days: number) => {
    if (days < 0) return "text-red-600";
    if (days <= 7) return "text-yellow-600";
    if (days <= 30) return "text-blue-600";
    return "text-green-600";
  };

  const handleSelectAssinante = (id: string) => {
    setSelectedAssinantes(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedAssinantes(prev => 
      prev.length === assinantesData.length ? [] : assinantesData.map(a => a.id)
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Lista de Assinantes</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{assinantesData.length} assinantes encontrados</p>
        </div>

        {/* Bulk Actions */}
        {selectedAssinantes.length > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {selectedAssinantes.length} selecionados
            </span>
            <button className="px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
              <CheckCircle className="w-4 h-4" />
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
                  checked={selectedAssinantes.length === assinantesData.length}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                />
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Assinante</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Plano</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Próxima Cobrança</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Modelo Favorita</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Pagamento</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Ações</th>
            </tr>
          </thead>
          <tbody>
            {assinantesData.map((assinante) => (
              <tr 
                key={assinante.id} 
                className={`border-b border-gray-100 dark:border-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors ${
                  selectedAssinantes.includes(assinante.id) ? 'bg-blue-50' : ''
                }`}
              >
                {/* Checkbox */}
                <td className="py-4 px-4">
                  <input
                    type="checkbox"
                    checked={selectedAssinantes.includes(assinante.id)}
                    onChange={() => handleSelectAssinante(assinante.id)}
                    className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                  />
                </td>

                {/* Assinante Info */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={assinante.avatar}
                      alt={assinante.nome}
                      className="w-12 h-12 rounded-xl object-cover ring-2 ring-white"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-100">{assinante.nome}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{assinante.email}</p>
                      <p className="text-xs text-gray-400">
                        Desde {new Date(assinante.inicioAssinatura).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Plano */}
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPlanColor(assinante.plano)}`}>
                      <Crown className="w-3 h-3 mr-1" />
                      {assinante.plano}
                    </span>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">R$ {assinante.preco.toFixed(2)}</p>
                    {assinante.renovacaoAutomatica && (
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600">Auto renovação</span>
                      </div>
                    )}
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(assinante.status)} ${
                      assinante.status === 'ativo' ? 'animate-pulse' : ''
                    }`}></div>
                    <span className={`text-sm font-medium ${
                      assinante.status === 'ativo' ? 'text-green-700' : 
                      assinante.status === 'pendente' ? 'text-yellow-700' : 
                      'text-gray-600'
                    }`}>
                      {getStatusText(assinante.status)}
                    </span>
                  </div>
                </td>

                {/* Próxima Cobrança */}
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {new Date(assinante.proximaCobranca).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <p className={`text-xs font-medium ${getDaysColor(assinante.diasRestantes)}`}>
                      {assinante.diasRestantes < 0 
                        ? `Vencido há ${Math.abs(assinante.diasRestantes)} dias`
                        : assinante.diasRestantes === 0
                        ? 'Vence hoje'
                        : `${assinante.diasRestantes} dias restantes`
                      }
                    </p>
                  </div>
                </td>

                {/* Modelo Favorita */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <Crown className="w-3 h-3 text-hotlovers-red" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{assinante.modeloFavorita}</span>
                  </div>
                </td>

                {/* Pagamento */}
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-3 h-3 text-blue-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{assinante.metodoPagamento}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Último: R$ {assinante.valorPago.toFixed(2)}
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
          Mostrando {assinantesData.length} de {assinantesData.length} assinantes
        </p>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors disabled:opacity-50">
            Anterior
          </button>
          <span className="px-3 py-2 bg-blue-500 text-white rounded-lg">1</span>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}