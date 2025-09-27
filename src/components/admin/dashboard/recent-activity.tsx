"use client";

import { Activity, Users, DollarSign, Crown, Shield, Clock } from "lucide-react";

const activities = [
  {
    id: 1,
    type: 'user_signup',
    title: 'Nova modelo cadastrada',
    description: 'Isabella Santos se cadastrou como modelo',
    time: '2 min atrás',
    icon: Crown,
    color: 'text-hotlovers-red',
    bgColor: 'bg-red-100'
  },
  {
    id: 2,
    type: 'payment',
    title: 'Pagamento processado',
    description: 'Assinatura premium de João Silva - R$ 29,90',
    time: '15 min atrás',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    id: 3,
    type: 'user_join',
    title: 'Novo assinante',
    description: 'Carlos Mendes aderiu ao plano básico',
    time: '1 hora atrás',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    id: 4,
    type: 'security',
    title: 'Login suspeito bloqueado',
    description: 'Tentativa de acesso inválida foi bloqueada',
    time: '2 horas atrás',
    icon: Shield,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    id: 5,
    type: 'system',
    title: 'Backup concluído',
    description: 'Backup automático realizado com sucesso',
    time: '3 horas atrás',
    icon: Activity,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  }
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Atividade Recente</h3>
            <p className="text-gray-500 text-sm">Últimas ações no sistema</p>
          </div>
        </div>
        
        <button className="text-sm text-hotlovers-red hover:text-hotlovers-red/80 font-medium">
          Ver todas
        </button>
      </div>

      {/* Activities List */}
      <div className="space-y-4 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group cursor-pointer"
          >
            {/* Icon */}
            <div className={`w-10 h-10 rounded-xl ${activity.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
              <activity.icon className={`w-5 h-5 ${activity.color}`} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                {activity.title}
              </p>
              <p className="text-sm text-gray-600 mt-0.5 line-clamp-1">
                {activity.description}
              </p>
              
              <div className="flex items-center space-x-1 mt-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-500">
                  {activity.time}
                </span>
              </div>
            </div>

            {/* Status Dot */}
            <div className="w-2 h-2 bg-hotlovers-red rounded-full flex-shrink-0 animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">
            {activities.length} atividades hoje
          </span>
          <div className="flex items-center space-x-1 text-green-600">
            <Activity className="w-3 h-3" />
            <span className="font-medium">Sistema ativo</span>
          </div>
        </div>
      </div>
    </div>
  );
}