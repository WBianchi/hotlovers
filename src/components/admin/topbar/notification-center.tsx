"use client";

import { useState } from "react";
import { Bell, X, Eye, Trash2, Settings, DollarSign, Users, AlertTriangle, CheckCircle } from "lucide-react";

const notifications = [
  {
    id: '1',
    type: 'payment',
    title: 'Novo pagamento recebido',
    message: 'Assinatura premium de João Silva - R$ 29,90',
    time: '2 min atrás',
    icon: DollarSign,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    unread: true
  },
  {
    id: '2', 
    type: 'user',
    title: 'Nova modelo cadastrada',
    message: 'Isabella Santos aguarda aprovação',
    time: '15 min atrás',
    icon: Users,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    unread: true
  },
  {
    id: '3',
    type: 'warning',
    title: 'Conteúdo reportado',
    message: 'Vídeo de Amanda Fire foi reportado por usuário',
    time: '1 hora atrás',
    icon: AlertTriangle,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    unread: false
  },
  {
    id: '4',
    type: 'success',
    title: 'Backup realizado',
    message: 'Backup automático concluído com sucesso',
    time: '3 horas atrás',
    icon: CheckCircle,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    unread: false
  }
];

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationList, setNotificationList] = useState(notifications);
  
  const unreadCount = notificationList.filter(n => n.unread).length;

  const markAsRead = (id: string) => {
    setNotificationList(prev => 
      prev.map(n => n.id === id ? { ...n, unread: false } : n)
    );
  };

  const markAllAsRead = () => {
    setNotificationList(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const deleteNotification = (id: string) => {
    setNotificationList(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-all duration-200 hover:scale-105 group relative"
      >
        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-hotlovers-red transition-colors" />
        
        {/* Badge */}
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-hotlovers-red rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xs font-bold text-white">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          </div>
        )}

        {/* Ring Animation */}
        {unreadCount > 0 && (
          <div className="absolute inset-0 bg-hotlovers-red/20 rounded-xl animate-ping"></div>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div className="absolute top-12 right-0 z-20 bg-white dark:bg-gray-800 dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 w-96 backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4 text-hotlovers-red" />
                <h3 className="font-semibold text-gray-800">Notificações</h3>
                {unreadCount > 0 && (
                  <span className="text-xs bg-hotlovers-red text-white px-2 py-0.5 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-1">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-xs text-hotlovers-red hover:text-hotlovers-red/80 font-medium"
                  >
                    Marcar todas como lidas
                  </button>
                )}
                <button className="w-6 h-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center">
                  <Settings className="w-3 h-3 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              {notificationList.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Bell className="w-12 h-12 text-gray-300 mb-2" />
                  <p className="text-gray-500 text-sm">Nenhuma notificação</p>
                </div>
              ) : (
                <div className="p-2">
                  {notificationList.map((notification) => (
                    <div
                      key={notification.id}
                      className={`group relative flex items-start space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 ${
                        notification.unread ? 'bg-hotlovers-red/5' : ''
                      }`}
                    >
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl ${notification.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <notification.icon className={`w-5 h-5 ${notification.color}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <p className={`font-medium text-sm ${notification.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                            {notification.title}
                          </p>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-hotlovers-red rounded-full flex-shrink-0 mt-1"></div>
                          )}
                        </div>
                        
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                          {notification.message}
                        </p>
                        
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {notification.unread && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="w-6 h-6 rounded-lg hover:bg-blue-100 flex items-center justify-center"
                            title="Marcar como lida"
                          >
                            <Eye className="w-3 h-3 text-blue-500" />
                          </button>
                        )}
                        
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="w-6 h-6 rounded-lg hover:bg-red-100 flex items-center justify-center"
                          title="Excluir"
                        >
                          <Trash2 className="w-3 h-3 text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {notificationList.length > 0 && (
              <div className="px-4 py-3 border-t border-gray-100">
                <button className="w-full text-center text-sm text-hotlovers-red hover:text-hotlovers-red/80 font-medium">
                  Ver todas as notificações
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}