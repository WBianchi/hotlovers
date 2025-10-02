"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, User, Settings, CreditCard, Download, Heart, LogOut, Crown } from "lucide-react";

export function AssinanteProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const assinanteData = {
    name: "João Silva",
    email: "joao@email.com",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    premium: true,
    gastoTotal: 450.00
  };

  const handleLogout = () => {
    localStorage.removeItem('session');
    localStorage.removeItem('token');
    sessionStorage.clear();
    router.push('/login');
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 group"
      >
        {/* Avatar */}
        <div className="relative">
          <img
            src={assinanteData.avatar}
            alt={assinanteData.name}
            className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
          />
          {assinanteData.premium && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <Crown className="w-2.5 h-2.5 text-white" />
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="hidden xl:block text-left">
          <p className="text-xs font-bold text-gray-800 dark:text-gray-100">
            {assinanteData.name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {assinanteData.premium ? "Premium" : "Básico"}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDown className={`hidden xl:block w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-14 right-0 z-50 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 w-80 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 overflow-hidden">
            
            {/* User Header */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={assinanteData.avatar}
                    alt={assinanteData.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-white dark:ring-gray-800 shadow-lg"
                  />
                  {assinanteData.premium && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <Crown className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800 dark:text-gray-100">{assinanteData.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{assinanteData.email}</p>
                  {assinanteData.premium && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                      Premium
                    </span>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Gasto Total</p>
                  <p className="text-lg font-black text-red-600">R$ {assinanteData.gastoTotal.toFixed(2)}</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Assinaturas</p>
                  <p className="text-lg font-black text-purple-600">3 ativas</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-3">
              <MenuItem
                icon={User}
                label="Meu Perfil"
                onClick={() => {
                  router.push('/assinante/perfil');
                  setIsOpen(false);
                }}
              />
              <MenuItem
                icon={CreditCard}
                label="Minhas Assinaturas"
                onClick={() => {
                  router.push('/assinante/assinaturas');
                  setIsOpen(false);
                }}
              />
              <MenuItem
                icon={Download}
                label="Meus Downloads"
                onClick={() => {
                  router.push('/assinante/downloads');
                  setIsOpen(false);
                }}
              />
              <MenuItem
                icon={Heart}
                label="Favoritos"
                onClick={() => {
                  router.push('/assinante/favoritos');
                  setIsOpen(false);
                }}
              />
            </div>

            {/* Logout */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all font-semibold group"
              >
                <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function MenuItem({ icon: Icon, label, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all group"
    >
      <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-red-600 transition-colors" />
      <span className="font-medium">{label}</span>
    </button>
  );
}
