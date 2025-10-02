"use client";

import { useState } from "react";
import { User, Settings, DollarSign, LogOut, Crown, Activity, ChevronDown, BarChart3, Heart, Package, Image as ImageIcon, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const modeloData = {
  name: "Isabella Santos",
  username: "@isabella_hot",
  avatar: "/image.jpg", // Foto local
  role: "Modelo Premium",
  status: "online",
  verified: true,
  stats: {
    ganhos: "R$ 8.420",
    assinantes: 245,
    rating: 4.9
  }
};

const menuItems = [
  {
    section: "Dashboard",
    items: [
      { icon: BarChart3, label: "Dashboard", href: "/modelo/dashboard", color: "text-purple-500" }
    ]
  },
  {
    section: "Conteúdo",
    items: [
      { icon: ImageIcon, label: "Fotos", href: "/modelo/fotos", color: "text-pink-500" },
      { icon: Activity, label: "Vídeos", href: "/modelo/videos", color: "text-blue-500" },
      { icon: Package, label: "Packs", href: "/modelo/packs", color: "text-orange-500" }
    ]
  },
  {
    section: "Relacionamento",
    items: [
      { icon: Activity, label: "Chat ao Vivo", href: "/modelo/chat-ao-vivo", color: "text-green-500" },
      { icon: User, label: "Assinantes", href: "/modelo/assinantes", color: "text-blue-500" },
      { icon: Heart, label: "Gorjetas", href: "/modelo/gorjetas", color: "text-red-500" }
    ]
  },
  {
    section: "Financeiro",
    items: [
      { icon: DollarSign, label: "Saques", href: "/modelo/saques", color: "text-emerald-500" },
      { icon: Shield, label: "Planos", href: "/modelo/planos", color: "text-indigo-500" }
    ]
  },
  {
    section: "Marketing",
    items: [
      { icon: Activity, label: "Impulsionar", href: "/modelo/impulsionar", color: "text-yellow-500" },
      { icon: Activity, label: "Afiliados", href: "/modelo/afiliados", color: "text-cyan-500" }
    ]
  },
  {
    section: "Conta",
    items: [
      { icon: User, label: "Perfil", href: "/modelo/perfil", color: "text-gray-500" }
    ]
  }
];

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
    
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
        className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 group"
      >
        {/* Avatar */}
        <div className="relative">
          <img
            src={modeloData.avatar}
            alt={modeloData.name}
            className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
          />
          
          {/* Status Indicator */}
          <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-gray-800 ${modeloData.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
        </div>

        {/* User Info */}
        <div className="hidden xl:block text-left">
          <p className="text-xs font-bold text-gray-800 dark:text-gray-100">
            {modeloData.name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {modeloData.stats.ganhos}
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
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-br from-hotlovers-red/5 via-red-500/5 to-purple-500/5">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={modeloData.avatar}
                    alt={modeloData.name}
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg ring-4 ring-white dark:ring-gray-800"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                    <Crown className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="font-black text-lg text-gray-800 dark:text-gray-100 flex items-center space-x-2">
                    <span>{modeloData.name}</span>
                    {modeloData.verified && <Crown className="w-4 h-4 text-yellow-500" />}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{modeloData.username}</p>
                  
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex items-center space-x-1">
                      <Activity className="w-3 h-3 text-green-500" />
                      <span className="text-xs font-semibold text-green-600 dark:text-green-400 capitalize">
                        {modeloData.status}
                      </span>
                    </div>
                    
                    <span className="text-xs text-gray-400">•</span>
                    
                    <span className="text-xs bg-gradient-to-r from-red-600 to-red-700 text-white px-2 py-0.5 rounded-full font-bold">
                      {modeloData.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center p-2 bg-white dark:bg-gray-700 rounded-xl">
                  <p className="text-lg font-black text-red-600">{modeloData.stats.ganhos}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Ganhos</p>
                </div>
                <div className="text-center p-2 bg-white dark:bg-gray-700 rounded-xl">
                  <p className="text-lg font-black text-red-600">{modeloData.stats.assinantes}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Assinantes</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
              {menuItems.map((section, sectionIndex) => (
                <div key={section.section} className={sectionIndex > 0 ? 'mt-3' : ''}>
                  {/* Section Header */}
                  <div className="px-3 py-2">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {section.section}
                    </p>
                  </div>
                  
                  {/* Section Items */}
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 flex items-center justify-center transition-all group-hover:scale-110">
                          <item.icon className={`w-4 h-4 ${item.color}`} />
                        </div>
                        
                        <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 text-sm">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Logout */}
            <div className="p-2 border-t border-gray-100 dark:border-gray-700">
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 hover:bg-red-50 dark:hover:bg-red-900/20 group"
              >
                <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-900/30 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 flex items-center justify-center transition-all group-hover:scale-110">
                  <LogOut className="w-4 h-4 text-red-500" />
                </div>
                
                <span className="font-bold text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 text-sm">
                  Sair da Conta
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
