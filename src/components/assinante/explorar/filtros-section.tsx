"use client";

import { Crown, CheckCircle, Star, MapPin } from "lucide-react";

interface FiltrosProps {
  filters: any;
  setFilters: (filters: any) => void;
}

export function FiltrosSection({ filters, setFilters }: FiltrosProps) {
  const categorias = [
    "Todas",
    "Fitness",
    "Lingerie",
    "Fashion",
    "Sensual",
    "Premium",
    "Exclusivo",
    "Ensaios",
    "Top Rated"
  ];

  const estados = [
    "Todos",
    "SP", "RJ", "MG", "RS", "PR", "SC", "BA", "PE", "CE", "DF", "GO", "ES", "PA", "AM", "MA"
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6">
        Filtros
      </h3>

      {/* Categoria */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
          Categoria
        </label>
        <div className="space-y-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilters({ ...filters, categoria: cat.toLowerCase() })}
              className={`w-full text-left px-4 py-2.5 rounded-lg font-medium transition-all ${
                filters.categoria === cat.toLowerCase()
                  ? "bg-red-600 text-white"
                  : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Status */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
          Status
        </label>
        <div className="space-y-2">
          <button
            onClick={() => setFilters({ ...filters, status: "todas" })}
            className={`w-full text-left px-4 py-2.5 rounded-lg font-medium transition-all ${
              filters.status === "todas"
                ? "bg-red-600 text-white"
                : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFilters({ ...filters, status: "online" })}
            className={`w-full text-left px-4 py-2.5 rounded-lg font-medium transition-all flex items-center space-x-2 ${
              filters.status === "online"
                ? "bg-red-600 text-white"
                : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Online Agora</span>
          </button>
          <button
            onClick={() => setFilters({ ...filters, status: "offline" })}
            className={`w-full text-left px-4 py-2.5 rounded-lg font-medium transition-all ${
              filters.status === "offline"
                ? "bg-red-600 text-white"
                : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            Offline
          </button>
        </div>
      </div>

      {/* Ordenação */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
          Ordenar por
        </label>
        <select
          value={filters.ordenacao}
          onChange={(e) => setFilters({ ...filters, ordenacao: e.target.value })}
          className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 font-medium focus:outline-none focus:ring-2 focus:ring-red-600/30"
        >
          <option value="popularidade">Mais Populares</option>
          <option value="recentes">Mais Recentes</option>
          <option value="rating">Melhor Avaliadas</option>
          <option value="seguidores">Mais Seguidas</option>
          <option value="conteudo">Mais Conteúdo</option>
        </select>
      </div>

      {/* Estado */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center space-x-2">
          <MapPin className="w-4 h-4" />
          <span>Estado</span>
        </label>
        <select
          value={filters.estado || "todos"}
          onChange={(e) => setFilters({ ...filters, estado: e.target.value })}
          className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 font-medium focus:outline-none focus:ring-2 focus:ring-red-600/30"
        >
          {estados.map((estado) => (
            <option key={estado} value={estado.toLowerCase()}>
              {estado}
            </option>
          ))}
        </select>
      </div>

      {/* Checkboxes */}
      <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700">
        <label className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.premium}
            onChange={(e) => setFilters({ ...filters, premium: e.target.checked })}
            className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-600"
          />
          <div className="flex items-center space-x-2">
            <Crown className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
              Apenas Premium
            </span>
          </div>
        </label>

        <label className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.verificadas}
            onChange={(e) => setFilters({ ...filters, verificadas: e.target.checked })}
            className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-600"
          />
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
              Apenas Verificadas
            </span>
          </div>
        </label>

        <label className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.topRated}
            onChange={(e) => setFilters({ ...filters, topRated: e.target.checked })}
            className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-600"
          />
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
              Top Rated (4.5+)
            </span>
          </div>
        </label>
      </div>

      {/* Limpar Filtros */}
      <button
        onClick={() => setFilters({
          categoria: "todas",
          status: "todas",
          ordenacao: "popularidade",
          premium: false,
          verificadas: false,
          topRated: false,
          estado: "todos"
        })}
        className="w-full mt-6 px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-bold transition-all"
      >
        Limpar Filtros
      </button>
    </div>
  );
}
