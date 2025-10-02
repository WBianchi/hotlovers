"use client";

import { Crown, Calendar, CreditCard, AlertCircle, CheckCircle, X } from "lucide-react";
import { FaCrown, FaFire } from "react-icons/fa";
import Link from "next/link";

const assinaturasAtivas = [
  {
    id: "1",
    modelo: {
      id: "1",
      nome: "Isabella Santos",
      foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=100&h=100&fit=crop&crop=face",
      categoria: "Fitness"
    },
    plano: "Premium Mensal",
    valor: 49.90,
    dataInicio: "2024-01-15",
    proximaCobranca: "2024-02-15",
    status: "ativa",
    renovacaoAutomatica: true,
    beneficios: ["Acesso total ao conteúdo", "Chat prioritário", "Conteúdo exclusivo"]
  },
  {
    id: "2",
    modelo: {
      id: "2",
      nome: "Amanda Silva",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      categoria: "Lingerie"
    },
    plano: "VIP Trimestral",
    valor: 129.90,
    dataInicio: "2024-01-01",
    proximaCobranca: "2024-04-01",
    status: "ativa",
    renovacaoAutomatica: true,
    beneficios: ["Acesso VIP", "Desconto em packs", "Vídeos exclusivos"]
  },
  {
    id: "3",
    modelo: {
      id: "3",
      nome: "Juliana Costa",
      foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      categoria: "Fashion"
    },
    plano: "Premium Anual",
    valor: 399.90,
    dataInicio: "2023-12-01",
    proximaCobranca: "2024-12-01",
    status: "ativa",
    renovacaoAutomatica: false,
    beneficios: ["Acesso anual", "Maior economia", "Conteúdo premium"]
  }
];

const assinaturasExpiradas = [
  {
    id: "4",
    modelo: {
      id: "4",
      nome: "Camila Rodrigues",
      foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face",
      categoria: "Fitness"
    },
    plano: "Premium Mensal",
    valor: 49.90,
    dataInicio: "2023-11-15",
    dataExpiracao: "2023-12-15",
    status: "expirada"
  }
];

export function AssinaturasContent() {
  const totalGasto = assinaturasAtivas.reduce((acc, sub) => acc + sub.valor, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-3 flex items-center space-x-3">
            <FaCrown className="w-10 h-10 text-red-600" />
            <span>Minhas Assinaturas</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Gerencie suas assinaturas e acesso ao conteúdo exclusivo
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-3xl font-black text-gray-900 dark:text-white">
                {assinaturasAtivas.length}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Assinaturas Ativas</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Acesso liberado</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-3xl font-black text-gray-900 dark:text-white">
                R$ {totalGasto.toFixed(2)}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Gasto Mensal</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total investido</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <FaFire className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-3xl font-black text-gray-900 dark:text-white">
                {assinaturasExpiradas.length}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Expiradas</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Renovar acesso</p>
          </div>
        </div>

        {/* Assinaturas Ativas */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">
            Assinaturas Ativas
          </h2>
          <div className="space-y-4">
            {assinaturasAtivas.map((sub) => (
              <div
                key={sub.id}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Modelo Info */}
                  <div className="flex items-center space-x-4">
                    <Link href={`/assinante/modelo/${sub.modelo.id}`}>
                      <img
                        src={sub.modelo.foto}
                        alt={sub.modelo.nome}
                        className="w-20 h-20 rounded-xl object-cover hover:scale-105 transition-transform"
                      />
                    </Link>
                    <div>
                      <Link
                        href={`/assinante/modelo/${sub.modelo.id}`}
                        className="text-xl font-black text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors"
                      >
                        {sub.modelo.nome}
                      </Link>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {sub.modelo.categoria}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold rounded-full flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3" />
                          <span>Ativa</span>
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold rounded-full">
                          {sub.plano}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Plano Details */}
                  <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Valor</p>
                      <p className="text-lg font-black text-gray-900 dark:text-white">
                        R$ {sub.valor.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Início</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {new Date(sub.dataInicio).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Próxima Cobrança</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {new Date(sub.proximaCobranca).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col space-y-2">
                    <Link
                      href={`/assinante/modelo/${sub.modelo.id}`}
                      className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-center transition-all hover:scale-105"
                    >
                      Ver Perfil
                    </Link>
                    <button className="px-6 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold transition-all">
                      Gerenciar
                    </button>
                  </div>
                </div>

                {/* Benefícios */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">BENEFÍCIOS</p>
                  <div className="flex flex-wrap gap-2">
                    {sub.beneficios.map((beneficio, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg"
                      >
                        ✓ {beneficio}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Renovação Automática */}
                {sub.renovacaoAutomatica && (
                  <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      Renovação automática ativada
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Assinaturas Expiradas */}
        {assinaturasExpiradas.length > 0 && (
          <div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">
              Assinaturas Expiradas
            </h2>
            <div className="space-y-4">
              {assinaturasExpiradas.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 opacity-75"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={sub.modelo.foto}
                        alt={sub.modelo.nome}
                        className="w-16 h-16 rounded-xl object-cover grayscale"
                      />
                      <div>
                        <p className="text-lg font-black text-gray-900 dark:text-white">
                          {sub.modelo.nome}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {sub.plano} - Expirou em {new Date(sub.dataExpiracao).toLocaleDateString('pt-BR')}
                        </p>
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded-full">
                          Expirada
                        </span>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all hover:scale-105">
                      Renovar Agora
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
