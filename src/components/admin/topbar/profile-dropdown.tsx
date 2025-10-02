"use client";

import { useState } from "react";
import { User, Settings, Shield, LogOut, Crown, Activity, ChevronDown, BarChart3, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const user = {
  name: "Super Admin",
  email: "admin@hotlovers.com",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
  role: "Administrador",
  status: "online"
};

const menuItems = [
  {
    section: "Conta",
    items: [
      { icon: User, label: "Dashboard", href: "/admin/dashboard", color: "text-blue-500" },
      { icon: Settings, label: "Configurações", href: "/admin/configuracoes", color: "text-gray-500" },
      { icon: BarChart3, label: "Analytics", href: "/admin/analytics", color: "text-purple-500" }
    ]
  },
  {
    section: "Admin",
    items: [
      { icon: Crown, label: "Modelos", href: "/admin/modelos", color: "text-hotlovers-red" },
      { icon: Zap, label: "Integrações", href: "/admin/integracoes", color: "text-orange-500" },
      { icon: Shield, label: "Relatórios", href: "/admin/relatorios", color: "text-emerald-500" }
    ]
  }
];

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Fazer logout na API
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
    
    // Limpar storage
    localStorage.removeItem('session');
    localStorage.removeItem('token');
    sessionStorage.clear();
    
    // Redirecionar para login público
    router.push('/login');
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105 group"
      >
        {/* Avatar */}
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-lg object-cover ring-2 ring-white group-hover:ring-hotlovers-red/30 transition-all"
          />
          
          {/* Status Indicator */}
          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
            user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
          }`}>
            {user.status === 'online' && (
              <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
            )}
          </div>
        </div>

        {/* User Info */}
        <div className="hidden lg:block text-left">
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100 group-hover:text-hotlovers-red transition-colors">
            {user.name}
          </p>
          <p className="text-xs text-gray-500">
            {user.role}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDown className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-12 right-0 z-20 bg-white dark:bg-gray-800 dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 w-72 backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
            
            {/* User Header */}
            <div className="p-4 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-hotlovers-gradient rounded-full flex items-center justify-center">
                    <Crown className="w-3 h-3 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 dark:text-gray-100">{user.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                  
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center space-x-1">
                      <Activity className="w-3 h-3 text-green-500" />
                      <span className="text-xs font-medium text-green-600 capitalize">
                        {user.status}
                      </span>
                    </div>
                    
                    <span className="text-xs text-gray-400">•</span>
                    
                    <span className="text-xs bg-hotlovers-red/10 text-hotlovers-red px-2 py-0.5 rounded-full font-medium">
                      {user.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2">
              {menuItems.map((section, sectionIndex) => (
                <div key={section.section} className={sectionIndex > 0 ? 'mt-3' : ''}>
                  {/* Section Header */}
                  <div className="px-3 py-2">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
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
                        className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 flex items-center justify-center transition-all group-hover:scale-110">
                          <item.icon className={`w-4 h-4 ${item.color}`} />
                        </div>
                        
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
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
                <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 flex items-center justify-center transition-all group-hover:scale-110">
                  <LogOut className="w-4 h-4 text-red-500" />
                </div>
                
                <span className="font-medium text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300">
                  Sair da conta
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}