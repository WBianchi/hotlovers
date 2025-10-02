"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, User, Settings, DollarSign, LogOut, BarChart3 } from "lucide-react";

export function AfiliadoProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const afiliadoData = {
    name: "Carlos Afiliado",
    email: "carlos@afiliado.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    comissaoTotal: 1245.80,
    vendasMes: 23
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
        className="relative p-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 group h-[46px] flex items-center"
      >
        <div className="flex items-center space-x-2">
          <img
            src={afiliadoData.avatar}
            alt={afiliadoData.name}
            className="w-5 h-5 rounded-full object-cover"
          />
          <div className="hidden xl:flex xl:flex-col text-left">
            <p className="text-xs font-bold text-gray-800 dark:text-gray-100 leading-none">
              {afiliadoData.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-none mt-0.5">
              Afiliado
            </p>
          </div>
          <ChevronDown className={`hidden xl:block w-3 h-3 text-gray-500 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute top-14 right-0 z-50 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 w-80 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 overflow-hidden">
            
            {/* User Header */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10">
              <div className="flex items-center space-x-4">
                <img
                  src={afiliadoData.avatar}
                  alt={afiliadoData.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-white dark:ring-gray-800 shadow-lg"
                />
                <div className="flex-1">
                  <p className="font-bold text-gray-800 dark:text-gray-100">{afiliadoData.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{afiliadoData.email}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                    Afiliado Ativo
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Comissões</p>
                  <p className="text-lg font-black text-green-600">R$ {afiliadoData.comissaoTotal.toFixed(2)}</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Vendas/Mês</p>
                  <p className="text-lg font-black text-blue-600">{afiliadoData.vendasMes}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-3">
              <MenuItem
                icon={User}
                label="Meu Perfil"
                onClick={() => {
                  router.push('/afiliado/perfil');
                  setIsOpen(false);
                }}
              />
              <MenuItem
                icon={BarChart3}
                label="Estatísticas"
                onClick={() => {
                  router.push('/afiliado/dashboard');
                  setIsOpen(false);
                }}
              />
              <MenuItem
                icon={DollarSign}
                label="Comissões"
                onClick={() => {
                  router.push('/afiliado/comissoes');
                  setIsOpen(false);
                }}
              />
              <MenuItem
                icon={Settings}
                label="Configurações"
                onClick={() => {
                  router.push('/afiliado/configuracoes');
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
