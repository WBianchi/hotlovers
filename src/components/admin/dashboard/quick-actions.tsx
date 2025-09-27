"use client";

import { Users, Crown, DollarSign, Settings, Plus, BarChart3, Shield, MessageCircle } from "lucide-react";

const actions = [
  {
    icon: Users,
    label: "Gerenciar Usuários",
    description: "Adicionar, editar ou remover usuários",
    href: "/admin/users",
    color: "from-blue-500 to-blue-600",
    iconColor: "text-blue-600"
  },
  {
    icon: Crown,
    label: "Aprovar Modelos",
    description: "Revisar solicitações pendentes",
    href: "/admin/modelos/pending",
    color: "from-hotlovers-red to-red-600",
    iconColor: "text-hotlovers-red",
    badge: "3"
  },
  {
    icon: DollarSign,
    label: "Relatório Financeiro",
    description: "Ver receitas e transações",
    href: "/admin/finance",
    color: "from-green-500 to-emerald-600",
    iconColor: "text-green-600"
  },
  {
    icon: BarChart3,
    label: "Analytics Detalhado",
    description: "Métricas e insights avançados",
    href: "/admin/analytics",
    color: "from-purple-500 to-indigo-600",
    iconColor: "text-purple-600"
  },
  {
    icon: MessageCircle,
    label: "Suporte ao Cliente",
    description: "Gerenciar tickets e conversas",
    href: "/admin/support",
    color: "from-cyan-500 to-blue-600",
    iconColor: "text-cyan-600",
    badge: "12"
  },
  {
    icon: Settings,
    label: "Configurações",
    description: "Ajustes do sistema e plataforma",
    href: "/admin/settings",
    color: "from-gray-500 to-gray-600",
    iconColor: "text-gray-600"
  }
];

export function QuickActions() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-hotlovers-red to-red-600 rounded-xl flex items-center justify-center">
            <Plus className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Ações Rápidas</h3>
            <p className="text-gray-500 text-sm">Tarefas mais utilizadas</p>
          </div>
        </div>
      </div>

      {/* Actions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <button
            key={action.label}
            className="group relative flex items-start space-x-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md text-left overflow-hidden"
          >
            {/* Background Gradient on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-xl`}></div>
            
            {/* Icon */}
            <div className="relative">
              <div className={`w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-gradient-to-br group-hover:${action.color} flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg`}>
                <action.icon className={`w-5 h-5 ${action.iconColor} group-hover:text-white transition-colors`} />
              </div>
              
              {/* Badge */}
              {action.badge && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-hotlovers-red rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{action.badge}</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 relative">
              <p className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                {action.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                {action.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 text-gray-400 group-hover:text-gray-600">
                →
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full py-2 text-sm text-hotlovers-red hover:text-hotlovers-red/80 font-medium transition-colors">
          Ver todas as ferramentas administrativas
        </button>
      </div>
    </div>
  );
}