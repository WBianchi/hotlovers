"use client";

import { 
  DollarSign, Users, MousePointer, MoreHorizontal, 
  CheckCircle, Clock, Calendar, TrendingUp, Eye, Edit, Ban, Link
} from "lucide-react";
import { useState } from "react";

// Mock data - depois será da API
const afiliadosData = [
  {
    id: "1",
    nome: "João Marketing",
    username: "@joao_afiliado",
    email: "joao@exemplo.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    status: "ativo",
    dataEntrada: "2024-01-15",
    comissaoTotal: 12450,
    comissoesPendentes: 890,
    conversoes: 89,
    cliques: 8920,
    taxaConversao: 4.2,
    linkAfiliado: "https://hotlovers.com/ref/joao123",
    ultimaVenda: "2024-11-25",
    crescimento: 28
  },
  {
    id: "2", 
    nome: "Marketing Pro",
    username: "@marketing_pro",
    email: "pro@exemplo.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    status: "ativo",
    dataEntrada: "2024-02-08",
    comissaoTotal: 9830,
    comissoesPendentes: 1240,
    conversoes: 67,
    cliques: 7240,
    taxaConversao: 3.8,
    linkAfiliado: "https://hotlovers.com/ref/pro456",
    ultimaVenda: "2024-11-23",
    crescimento: 22
  },
  {
    id: "3",
    nome: "Digital Sales", 
    username: "@digital_sales",
    email: "digital@exemplo.com",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=60&h=60&fit=crop&crop=face",
    status: "pendente",
    dataEntrada: "2024-03-12",
    comissaoTotal: 8765,
    comissoesPendentes: 2100,
    conversoes: 54,
    cliques: 6890,
    taxaConversao: 3.9,
    linkAfiliado: "https://hotlovers.com/ref/digital789",
    ultimaVenda: "2024-11-20",
    crescimento: 18
  },
  {
    id: "4",
    nome: "Promo Expert",
    username: "@promo_expert", 
    email: "promo@exemplo.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    status: "suspenso",
    dataEntrada: "2024-04-05",
    comissaoTotal: 7420,
    comissoesPendentes: 0,
    conversoes: 43,
    cliques: 5670,
    taxaConversao: 3.2,
    linkAfiliado: "https://hotlovers.com/ref/promo001",
    ultimaVenda: "2024-11-15",
    crescimento: 15
  }
];

export function AfiliadosTable() {
  const [selectedAfiliados, setSelectedAfiliados] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("comissaoTotal");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativo": return "bg-green-500";
      case "pendente": return "bg-yellow-500";
      case "suspenso": return "bg-red-500";
      case "inativo": return "bg-gray-500";
      default: return "bg-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "ativo": return "Ativo";
      case "pendente": return "Pendente";
      case "suspenso": return "Suspenso";
      case "inativo": return "Inativo";
      default: return "Indefinido";
    }
  };

  const handleSelectAfiliado = (id: string) => {
    setSelectedAfiliados(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedAfiliados(prev => 
      prev.length === afiliadosData.length ? [] : afiliadosData.map(a => a.id)
    );
  };

  const copyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    // Aqui você pode adicionar uma notificação de sucesso
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Lista de Afiliados</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{afiliadosData.length} afiliados encontrados</p>
        </div>

        {/* Bulk Actions */}
        {selectedAfiliados.length > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {selectedAfiliados.length} selecionados
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
                  checked={selectedAfiliados.length === afiliadosData.length}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                />
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Afiliado</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Performance</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Comissões</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Link de Afiliado</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Última Venda</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Ações</th>
            </tr>
          </thead>
          <tbody>
            {afiliadosData.map((afiliado) => (
              <tr 
                key={afiliado.id} 
                className={`border-b border-gray-100 dark:border-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors ${
                  selectedAfiliados.includes(afiliado.id) ? 'bg-purple-50' : ''
                }`}
              >
                {/* Checkbox */}
                <td className="py-4 px-4">
                  <input
                    type="checkbox"
                    checked={selectedAfiliados.includes(afiliado.id)}
                    onChange={() => handleSelectAfiliado(afiliado.id)}
                    className="rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                  />
                </td>

                {/* Afiliado Info */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={afiliado.avatar}
                      alt={afiliado.nome}
                      className="w-12 h-12 rounded-xl object-cover ring-2 ring-white"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-100">{afiliado.nome}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{afiliado.username}</p>
                      <p className="text-xs text-gray-400">{afiliado.email}</p>
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(afiliado.status)} ${
                        afiliado.status === 'ativo' ? 'animate-pulse' : ''
                      }`}></div>
                      <span className={`text-sm font-medium ${
                        afiliado.status === 'ativo' ? 'text-green-700' : 
                        afiliado.status === 'pendente' ? 'text-yellow-700' : 
                        'text-gray-600'
                      }`}>
                        {getStatusText(afiliado.status)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Desde {new Date(afiliado.dataEntrada).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </td>

                {/* Performance */}
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-blue-500" />
                        <span className="font-medium">{afiliado.conversoes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MousePointer className="w-3 h-3 text-purple-500" />
                        <span>{(afiliado.cliques / 1000).toFixed(1)}K</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Taxa:</span>
                      <span className="text-xs font-semibold text-blue-600">{afiliado.taxaConversao}%</span>
                      <div className="flex items-center space-x-1 px-1 py-0.5 bg-green-100 rounded">
                        <TrendingUp className="w-2 h-2 text-green-600" />
                        <span className="text-xs text-green-700">+{afiliado.crescimento}%</span>
                      </div>
                    </div>
                  </div>
                </td>

                {/* Comissões */}
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="font-bold text-green-600">
                        R$ {(afiliado.comissaoTotal / 1000).toFixed(1)}K
                      </span>
                    </div>
                    {afiliado.comissoesPendentes > 0 && (
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3 text-yellow-500" />
                        <span className="text-xs text-yellow-600">
                          R$ {afiliado.comissoesPendentes.toFixed(2)} pendentes
                        </span>
                      </div>
                    )}
                  </div>
                </td>

                {/* Link de Afiliado */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => copyLink(afiliado.linkAfiliado)}
                      className="flex items-center space-x-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors group"
                    >
                      <Link className="w-3 h-3 text-gray-500 dark:text-gray-400 dark:text-gray-400 group-hover:text-gray-700" />
                      <span className="text-xs text-gray-600 dark:text-gray-400 dark:text-gray-400 font-mono truncate max-w-32">
                        .../{afiliado.linkAfiliado.split('/').pop()}
                      </span>
                    </button>
                  </div>
                </td>

                {/* Última Venda */}
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {new Date(afiliado.ultimaVenda).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {Math.floor((Date.now() - new Date(afiliado.ultimaVenda).getTime()) / (1000 * 60 * 60 * 24))} dias atrás
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
          Mostrando {afiliadosData.length} de {afiliadosData.length} afiliados
        </p>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors disabled:opacity-50">
            Anterior
          </button>
          <span className="px-3 py-2 bg-purple-500 text-white rounded-lg">1</span>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}