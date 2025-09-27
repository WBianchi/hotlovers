"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Menu, Bell, Settings, LogOut, User, Search, 
  MessageCircle, DollarSign, Moon, Sun, Globe, X
} from "lucide-react";
import { FaFire, FaCrown } from "react-icons/fa";
import { useTheme } from "../../../contexts/theme-context";
import { useLanguage } from "../../../contexts/language-context";
import { useSidebar } from "../../../contexts/sidebar-context";

export function ModeloTopbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { toggleSidebar } = useSidebar();

  // Mock data - depois vem da API
  const modeloData = {
    nome: "Isabella Santos",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=40&h=40&fit=crop&crop=face",
    status: "online",
    verificada: true,
    ganhosMes: 8420,
    rating: 4.9
  };

  const notifications = [
    {
      id: 1,
      type: "payment",
      message: "Novo pagamento recebido",
      detail: "R$ 450,00 em gorjetas",
      time: "2 min",
      unread: true
    },
    {
      id: 2,
      type: "message",
      message: "5 mensagens VIP",
      detail: "Assinantes premium",
      time: "5 min",
      unread: true
    },
    {
      id: 3,
      type: "like",
      message: "234 novas curtidas",
      detail: "Último post publicado",
      time: "1 hora",
      unread: false
    }
  ];

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  // Close dropdowns when clicking outside
  const closeAllDropdowns = () => {
    setShowNotifications(false);
    setShowProfile(false);
    setShowLanguage(false);
  };

  return (
    <>
      {/* Overlay para fechar dropdowns */}
      {(showNotifications || showProfile || showLanguage) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeAllDropdowns}
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
        <div className="flex items-center justify-between px-6 h-16">
          
          {/* Left Side */}
          <div className="flex items-center space-x-6">
            {/* Menu Button */}
            <button
              onClick={toggleSidebar}
              className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-all"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo & Brand */}
            <Link href="/modelo/dashboard" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                <FaFire className="w-4 h-4 text-white dark:text-black" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-black">
                  <span className="text-hotlovers-red">Hot</span>
                  <span className="text-black dark:text-white">Lovers</span>
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Modelo</p>
              </div>
            </Link>

            {/* Search - Desktop Only */}
            <div className="hidden xl:block relative">
              <input
                type="search"
                placeholder="Buscar..."
                className="w-80 px-4 py-2 pl-10 bg-gray-50 dark:bg-gray-800 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:bg-white dark:focus:bg-gray-700 transition-all text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            
            {/* Quick Stats - Desktop Only */}
            <div className="hidden xl:flex items-center space-x-4 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-center">
                <p className="text-sm font-bold text-black dark:text-white">R$ {(modeloData.ganhosMes / 1000).toFixed(1)}K</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t('month')}</p>
              </div>
              <div className="w-px h-8 bg-gray-200 dark:bg-gray-600"></div>
              <div className="text-center">
                <p className="text-sm font-bold text-black dark:text-white">{modeloData.rating}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t('rating')}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="hidden md:flex items-center space-x-2">
              <Link 
                href="/modelo/chat-ao-vivo"
                className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors"
                title={t('chat')}
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link 
                href="/modelo/receitas"
                className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors"
                title={t('earnings')}
              >
                <DollarSign className="w-5 h-5" />
              </Link>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setShowLanguage(!showLanguage);
                }}
                className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors"
                title={t('language')}
              >
                <Globe className="w-5 h-5" />
              </button>

              {/* Language Dropdown */}
              {showLanguage && (
                <div className="absolute top-12 right-0 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 p-2 z-50">
                  <div className="p-2 border-b border-gray-100 dark:border-gray-700 mb-2">
                    <h3 className="font-medium text-black dark:text-white text-sm">{t('language')}</h3>
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setShowLanguage(false);
                      }}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left ${
                        language === lang.code ? 'bg-hotlovers-red/10 text-hotlovers-red' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                      {language === lang.code && (
                        <div className="ml-auto w-2 h-2 bg-hotlovers-red rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors"
              title={t('theme')}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setShowNotifications(!showNotifications);
                }}
                className="relative w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-hotlovers-red rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{unreadCount}</span>
                  </div>
                )}
              </button>

              {/* Ultra Sophisticated Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute top-12 right-0 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 z-50">
                  <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-black dark:text-white">{t('notifications')}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-hotlovers-red rounded-full text-xs font-bold text-white">
                          {unreadCount}
                        </span>
                        <button 
                          onClick={() => setShowNotifications(false)}
                          className="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
                        >
                          <X className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className={`p-4 border-b border-gray-50 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                        notification.unread ? 'bg-hotlovers-red/5 dark:bg-hotlovers-red/10' : ''
                      }`}>
                        <div className="flex items-start space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            notification.type === 'payment' ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                            notification.type === 'message' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' :
                            'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                          }`}>
                            {notification.type === 'payment' && <DollarSign className="w-5 h-5" />}
                            {notification.type === 'message' && <MessageCircle className="w-5 h-5" />}
                            {notification.type === 'like' && <FaCrown className="w-5 h-5" />}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-black dark:text-white">{notification.message}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{notification.detail}</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time} atrás</p>
                          </div>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-hotlovers-red rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                    <button className="w-full py-2 text-center text-sm font-medium text-hotlovers-red hover:bg-hotlovers-red/5 dark:hover:bg-hotlovers-red/10 rounded-lg transition-colors">
                      Ver todas as notificações
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Ultra Sophisticated Profile */}
            <div className="relative">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setShowProfile(!showProfile);
                }}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="relative">
                  <img
                    src={modeloData.avatar}
                    alt={modeloData.nome}
                    className="w-8 h-8 rounded-lg object-cover"
                  />
                  {modeloData.verificada && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-hotlovers-red rounded-full flex items-center justify-center">
                      <FaCrown className="w-2 h-2 text-white" />
                    </div>
                  )}
                  <div className={`absolute -top-1 -left-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 ${
                    modeloData.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-black dark:text-white">{modeloData.nome}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Modelo VIP</p>
                </div>
              </button>

              {/* Ultra Sophisticated Profile Dropdown */}
              {showProfile && (
                <div className="absolute top-12 right-0 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 z-50">
                  <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                      <img
                        src={modeloData.avatar}
                        alt={modeloData.nome}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div>
                        <p className="font-bold text-black dark:text-white">{modeloData.nome}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="px-2 py-1 bg-hotlovers-red/10 text-hotlovers-red rounded-full text-xs font-medium">
                            VIP
                          </span>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{t('online')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="space-y-2">
                      <Link href="/modelo/perfil" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="font-medium text-black dark:text-white">{t('profile')}</span>
                      </Link>
                      <Link href="/modelo/configuracoes" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="font-medium text-black dark:text-white">{t('settings')}</span>
                      </Link>
                    </div>
                  </div>

                  <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                    <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full text-left">
                      <LogOut className="w-5 h-5 text-red-600 dark:text-red-400" />
                      <span className="font-medium text-red-600 dark:text-red-400">{t('logout')}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}