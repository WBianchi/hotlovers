"use client";

import { Filter, Calendar, MapPin, Star, DollarSign } from "lucide-react";
import { useState } from "react";

export function ModelosFilters() {
  const [activeTab, setActiveTab] = useState("todas");
  const [statusFilter, setStatusFilter] = useState("todos");
  const [locationFilter, setLocationFilter] = useState("todas");
  const [ratingFilter, setRatingFilter] = useState("todas");

  const tabs = [
    { id: "todas", label: "Todas", count: 89, color: "gray" },
    { id: "ativas", label: "Ativas", count: 67, color: "green" },
    { id: "pendentes", label: "Pendentes", count: 12, color: "yellow" },
    { id: "suspensas", label: "Suspensas", count: 10, color: "red" }
  ];

  const statusOptions = [
    { value: "todos", label: "Todos os status" },
    { value: "online", label: "Online agora" },
    { value: "offline", label: "Offline" },
    { value: "ausente", label: "Ausente" }
  ];

  const locationOptions = [
    { value: "todas", label: "Todas as cidades" },
    { value: "sao-paulo", label: "São Paulo" },
    { value: "rio-janeiro", label: "Rio de Janeiro" },
    { value: "belo-horizonte", label: "Belo Horizonte" },
    { value: "brasilia", label: "Brasília" },
    { value: "outras", label: "Outras cidades" }
  ];

  const ratingOptions = [
    { value: "todas", label: "Todas as avaliações" },
    { value: "5", label: "5 estrelas" },
    { value: "4+", label: "4+ estrelas" },
    { value: "3+", label: "3+ estrelas" },
    { value: "baixa", label: "Abaixo de 3" }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
          <Filter className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Filtros e Categorias</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Organize e filtre suas modelos</p>
        </div>
      </div>

      {/* Status Tabs */}
      <div className="flex items-center space-x-2 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? tab.color === 'green' ? 'bg-green-100 text-green-700 border border-green-200' :
                  tab.color === 'yellow' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                  tab.color === 'red' ? 'bg-red-100 text-red-700 border border-red-200' :
                  'bg-gray-100 text-gray-700 dark:text-gray-300 dark:text-gray-300 border border-gray-200'
                : 'bg-gray-50 text-gray-600 dark:text-gray-400 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:bg-gray-700'
            }`}
          >
            <span>{tab.label}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
              activeTab === tab.id
                ? 'bg-white/80'
                : 'bg-white/60'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Status Filter */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <div className="w-4 h-4 bg-green-100 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span>Status Online</span>
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red"
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>Localização</span>
          </label>
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red"
          >
            {locationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>Avaliação</span>
          </label>
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red"
          >
            {ratingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date Range */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Calendar className="w-4 h-4 text-purple-500" />
            <span>Período</span>
          </label>
          <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red">
            <option value="hoje">Hoje</option>
            <option value="7dias">Últimos 7 dias</option>
            <option value="30dias">Últimos 30 dias</option>
            <option value="3meses">Últimos 3 meses</option>
            <option value="todos">Todos os períodos</option>
          </select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">67</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Online agora</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">R$ 234K</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Receita total</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">4.8</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Rating médio</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">892K</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Visualizações</p>
          </div>
        </div>
      </div>
    </div>
  );
}