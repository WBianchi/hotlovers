"use client";

import { useState } from "react";
import { Bell, DollarSign, TrendingUp, Users, Link2, Check, Trash2 } from "lucide-react";

const mockNotifications = [
  {
    id: 1,
    type: "sale",
    icon: DollarSign,
    title: "Nova Venda Realizada!",
    message: "Comissão de R$ 26,97 - Pack Lingerie",
    time: "2 minutos atrás",
    unread: true,
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 2,
    type: "commission",
    icon: DollarSign,
    title: "Comissão Aprovada",
    message: "R$ 44,97 disponível para saque",
    time: "15 minutos atrás",
    unread: true,
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 3,
    type: "click",
    icon: Link2,
    title: "Link com Alto Desempenho",
    message: "Seu link teve 50 cliques hoje!",
    time: "1 hora atrás",
    unread: true,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 4,
    type: "referral",
    icon: Users,
    title: "Novo Afiliado Referido",
    message: "Maria Silva se cadastrou pelo seu link",
    time: "2 horas atrás",
    unread: false,
    color: "from-purple-500 to-purple-600"
  }
];

export function NotificationsCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 group"
      >
        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-600 transition-colors" />
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
            {unreadCount}
          </div>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          
          <div className="absolute top-14 right-0 z-50 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-96 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-gray-900 dark:text-white">Notificações</h3>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-xs font-bold text-red-600 hover:underline flex items-center space-x-1"
                  >
                    <Check className="w-3 h-3" />
                    <span>Marcar todas como lidas</span>
                  </button>
                )}
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notif) => {
                const Icon = notif.icon;
                return (
                  <div
                    key={notif.id}
                    className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all ${
                      notif.unread ? 'bg-red-50/50 dark:bg-red-900/5' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${notif.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-bold text-sm text-gray-900 dark:text-white">{notif.title}</h4>
                          {notif.unread && (
                            <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{notif.message}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{notif.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <button className="w-full text-center text-sm font-bold text-red-600 hover:text-red-700 transition-colors">
                Ver Todas as Notificações
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
