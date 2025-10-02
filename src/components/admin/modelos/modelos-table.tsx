"use client";

import { 
  Star, Eye, Heart, DollarSign, MoreHorizontal, 
  Shield, Ban, CheckCircle, Clock, MapPin, Calendar
} from "lucide-react";
import { useState } from "react";

// Mock data - depois será da API
const modelosData = [
  {
    id: "1",
    nome: "Isabella Santos",
    username: "@isabella_hot",
    email: "isabella@exemplo.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=60&h=60&fit=crop&crop=face",
    status: "online",
    verificada: true,
    rating: 4.9,
    visualizacoes: 15420,
    curtidas: 8930,
    receita: 8420,
    assinantes: 234,
    localizacao: "São Paulo, SP",
    cadastro: "2024-01-15",
    ultimaAtividade: "2 min atrás"
  },
  {
    id: "2", 
    nome: "Amanda Silva",
    username: "@amanda_fire",
    email: "amanda@exemplo.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
    status: "offline",
    verificada: true,
    rating: 4.8,
    visualizacoes: 12890,
    curtidas: 7650,
    receita: 7280,
    assinantes: 189,
    localizacao: "Rio de Janeiro, RJ",
    cadastro: "2024-02-08",
    ultimaAtividade: "1 hora atrás"
  },
  {
    id: "3",
    nome: "Juliana Costa", 
    username: "@juli_delicia",
    email: "juliana@exemplo.com",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=60&h=60&fit=crop&crop=face",
    status: "online",
    verificada: false,
    rating: 4.7,
    visualizacoes: 9560,
    curtidas: 5430,
    receita: 5890,
    assinantes: 145,
    localizacao: "Belo Horizonte, MG",
    cadastro: "2024-03-12",
    ultimaAtividade: "15 min atrás"
  }
];

export function ModelosTable() {
  const [selectedModelos, setSelectedModelos] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("receita");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "offline": return "bg-gray-400";
      case "ausente": return "bg-yellow-500";
      default: return "bg-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online": return "Online";
      case "offline": return "Offline";
      case "ausente": return "Ausente";
      default: return "Indefinido";
    }
  };

  const handleSelectModelo = (id: string) => {
    setSelectedModelos(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedModelos(prev => 
      prev.length === modelosData.length ? [] : modelosData.map(m => m.id)
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Lista de Modelos</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{modelosData.length} modelos encontradas</p>
        </div>

        {/* Bulk Actions */}
        {selectedModelos.length > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {selectedModelos.length} selecionadas
            </span>
            <button className="px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
              <CheckCircle className="w-4 h-4" />
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
                  checked={selectedModelos.length === modelosData.length}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-hotlovers-red focus:ring-hotlovers-red"
                />
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Modelo</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Métricas</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Receita</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Localização</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Última Atividade</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Ações</th>
            </tr>
          </thead>
          <tbody>
            {modelosData.map((modelo) => (
              <tr 
                key={modelo.id} 
                className={`border-b border-gray-100 dark:border-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors ${
                  selectedModelos.includes(modelo.id) ? 'bg-hotlovers-red/5' : ''
                }`}
              >
                {/* Checkbox */}
                <td className="py-4 px-4">
                  <input
                    type="checkbox"
                    checked={selectedModelos.includes(modelo.id)}
                    onChange={() => handleSelectModelo(modelo.id)}
                    className="rounded border-gray-300 text-hotlovers-red focus:ring-hotlovers-red"
                  />
                </td>

                {/* Modelo Info */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={modelo.avatar}
                        alt={modelo.nome}
                        className="w-12 h-12 rounded-xl object-cover ring-2 ring-white"
                      />
                      {modelo.verificada && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-100">{modelo.nome}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{modelo.username}</p>
                      <p className="text-xs text-gray-400">{modelo.email}</p>
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(modelo.status)} ${
                      modelo.status === 'online' ? 'animate-pulse' : ''
                    }`}></div>
                    <span className={`text-sm font-medium ${
                      modelo.status === 'online' ? 'text-green-700' : 'text-gray-600'
                    }`}>
                      {getStatusText(modelo.status)}
                    </span>
                  </div>
                </td>

                {/* Métricas */}
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="text-sm font-medium">{modelo.rating}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">({modelo.assinantes} assinantes)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{(modelo.visualizacoes / 1000).toFixed(1)}K</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3 text-red-500" />
                        <span>{(modelo.curtidas / 1000).toFixed(1)}K</span>
                      </div>
                    </div>
                  </div>
                </td>

                {/* Receita */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="font-bold text-green-700">
                      R$ {(modelo.receita / 1000).toFixed(1)}K
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">este mês</p>
                </td>

                {/* Localização */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{modelo.localizacao}</span>
                  </div>
                </td>

                {/* Última Atividade */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{modelo.ultimaAtividade}</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Cadastro: {new Date(modelo.cadastro).toLocaleDateString('pt-BR')}
                  </p>
                </td>

                {/* Ações */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 rounded-lg bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors">
                      <Eye className="w-4 h-4 text-blue-600" />
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
          Mostrando {modelosData.length} de {modelosData.length} modelos
        </p>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors disabled:opacity-50">
            Anterior
          </button>
          <span className="px-3 py-2 bg-hotlovers-red text-white rounded-lg">1</span>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}