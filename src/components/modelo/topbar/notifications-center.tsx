"use client";

import { useState } from "react";
import { Bell, DollarSign, Heart, MessageCircle, Users, TrendingUp, Check, Trash2, Settings as SettingsIcon } from "lucide-react";

const mockNotifications = [
  {
    id: 1,
    type: "payment",
    icon: DollarSign,
    title: "Novo Pagamento Recebido!",
    message: "R$ 450,00 em gorjetas de João Silva",
    time: "2 minutos atrás",
    unread: true,
    color: "from-emerald-500 to-green-600"
  },
  {
    id: 2,
    type: "tip",
    icon: Heart,
    title: "Gorjeta Generosa! 💰",
    message: "Carlos Lima enviou R$ 200,00",
    time: "5 minutos atrás",
    unread: true,
    color: "from-red-600 to-red-700"
  },
  {
    id: 3,
    type: "message",
    icon: MessageCircle,
    title: "5 Mensagens VIP",
    message: "Assinantes premium aguardando resposta",
    time: "10 minutos atrás",
    unread: true,
    color: "from-red-600 to-red-700"
  },
  {
    id: 4,
    type: "subscriber",
    icon: Users,
    title: "Nova Assinatura Premium",
    message: "Pedro Costa se tornou seu assinante VIP",
    time: "15 minutos atrás",
    unread: false,
    color: "from-red-600 to-red-700"
  },
  {
    id: 5,
    type: "milestone",
    icon: TrendingUp,
    title: "Meta Atingida! 🎉",
    message: "Você alcançou R$ 10.000 este mês!",
    time: "1 hora atrás",
    unread: false,
    color: "from-red-600 to-red-700"
  }
];

export function NotificationsCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
      >
        <Bell className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
        
        {/* Unread Badge */}
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse shadow-lg">
            {unreadCount}
          </div>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-14 right-0 z-50 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 w-96 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 overflow-hidden">
            
            {/* Header */}
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-hotlovers-red/5 to-pink-500/5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg relative">
                    <Bell className="w-5 h-5 text-white" />
                    {unreadCount > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-red-600">{unreadCount}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-100">Notificações</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {unreadCount > 0 ? `${unreadCount} não lidas` : 'Tudo em dia!'}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="p-2 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors"
                      title="Marcar todas como lidas"
                    >
                      <Check className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  )}
                  <button
                    className="p-2 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors"
                    title="Configurações"
                  >
                    <SettingsIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
              {notifications.length === 0 ? (
                <div className="p-8 text-center">
                  <Bell className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">Nenhuma notificação</p>
                </div>
              ) : (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all group ${
                      notif.unread ? 'bg-hotlovers-red/5 dark:bg-hotlovers-red/10' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${notif.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <notif.icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className={`text-sm font-bold mb-1 ${
                              notif.unread 
                                ? 'text-gray-900 dark:text-gray-100' 
                                : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {notif.title}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                              {notif.message}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">
                              {notif.time}
                            </p>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {notif.unread && (
                              <button
                                onClick={() => markAsRead(notif.id)}
                                className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                                title="Marcar como lida"
                              >
                                <Check className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                              </button>
                            )}
                            <button
                              onClick={() => deleteNotification(notif.id)}
                              className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                              title="Excluir"
                            >
                              <Trash2 className="w-3 h-3 text-red-500" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <button className="w-full text-center text-sm font-semibold text-red-600 dark:text-red-400 hover:underline">
                Ver todas as notificações
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
