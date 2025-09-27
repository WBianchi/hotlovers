"use client";

import { Filter, Calendar, CreditCard, Crown, AlertTriangle } from "lucide-react";
import { useState } from "react";

export function AssinantesFilters() {
  const [activeTab, setActiveTab] = useState("todos");
  const [planFilter, setPlanFilter] = useState("todos");
  const [statusFilter, setStatusFilter] = useState("todos");
  const [expirationFilter, setExpirationFilter] = useState("todos");

  const tabs = [
    { id: "todos", label: "Todos", count: 1258, color: "gray" },
    { id: "ativos", label: "Ativos", count: 1124, color: "green" },
    { id: "expiram", label: "Expiram em breve", count: 89, color: "yellow" },
    { id: "cancelados", label: "Cancelados", count: 45, color: "red" }
  ];

  const planOptions = [
    { value: "todos", label: "Todos os planos" },
    { value: "basico", label: "Básico (R$ 19,90)" },
    { value: "premium", label: "Premium (R$ 39,90)" },
    { value: "vip", label: "VIP (R$ 79,90)" }
  ];

  const statusOptions = [
    { value: "todos", label: "Todos os status" },
    { value: "ativo", label: "Ativo" },
    { value: "pendente", label: "Pagamento Pendente" },
    { value: "cancelado", label: "Cancelado" },
    { value: "suspenso", label: "Suspenso" }
  ];

  const expirationOptions = [
    { value: "todos", label: "Todas as expirações" },
    { value: "hoje", label: "Hoje" },
    { value: "7dias", label: "Próximos 7 dias" },
    { value: "30dias", label: "Próximos 30 dias" },
    { value: "vencidas", label: "Já vencidas" }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Filter className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Filtros de Assinantes</h3>
          <p className="text-gray-500 text-sm">Organize por status, plano e expiração</p>
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
                  'bg-gray-100 text-gray-700 border border-gray-200'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
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
        {/* Plan Filter */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
            <Crown className="w-4 h-4 text-hotlovers-red" />
            <span>Plano</span>
          </label>
          <select
            value={planFilter}
            onChange={(e) => setPlanFilter(e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          >
            {planOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
            <CreditCard className="w-4 h-4 text-green-500" />
            <span>Status do Pagamento</span>
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Expiration Filter */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
            <AlertTriangle className="w-4 h-4 text-yellow-500" />
            <span>Expiração</span>
          </label>
          <select
            value={expirationFilter}
            onChange={(e) => setExpirationFilter(e.target.value)}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          >
            {expirationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date Range */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4 text-purple-500" />
            <span>Período de Cadastro</span>
          </label>
          <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
            <option value="hoje">Hoje</option>
            <option value="7dias">Últimos 7 dias</option>
            <option value="30dias">Últimos 30 dias</option>
            <option value="3meses">Últimos 3 meses</option>
            <option value="todos">Todos os períodos</option>
          </select>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700">Filtros Avançados</p>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
              <span className="text-sm text-gray-600">Apenas renovações automáticas</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
              <span className="text-sm text-gray-600">Apenas modelos favoritas</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
              <span className="text-sm text-gray-600">Pagamentos em atraso</span>
            </label>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">1,124</p>
            <p className="text-xs text-gray-500">Ativos</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">89</p>
            <p className="text-xs text-gray-500">Expiram em breve</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">R$ 67.8K</p>
            <p className="text-xs text-gray-500">MRR</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">89.3%</p>
            <p className="text-xs text-gray-500">Retenção</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">45</p>
            <p className="text-xs text-gray-500">Cancelados</p>
          </div>
        </div>
      </div>
    </div>
  );
}