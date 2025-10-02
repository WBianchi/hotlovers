"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Link2, DollarSign, Wallet, BarChart3, Users, Settings, FileText } from "lucide-react";

const menuItems = [
  {
    title: "Visão Geral",
    href: "/afiliado/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Links Compartilhados",
    href: "/afiliado/links",
    icon: Link2
  },
  {
    title: "Comissões",
    href: "/afiliado/comissoes",
    icon: DollarSign
  },
  {
    title: "Saques",
    href: "/afiliado/saques",
    icon: Wallet
  },
  {
    title: "Estatísticas",
    href: "/afiliado/estatisticas",
    icon: BarChart3
  },
  {
    title: "Histórico",
    href: "/afiliado/historico",
    icon: FileText
  },
  {
    title: "Referidos",
    href: "/afiliado/referidos",
    icon: Users
  },
  {
    title: "Configurações",
    href: "/afiliado/configuracoes",
    icon: Settings
  }
];

export function AfiliadoSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all group ${
                isActive
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-500 dark:text-gray-400 group-hover:text-red-600"}`} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Promo Banner */}
      <div className="m-4 p-4 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl text-white">
        <p className="text-sm font-bold mb-2">🎯 Meta do Mês</p>
        <p className="text-xs opacity-90 mb-3">Alcance 50 vendas e ganhe bônus de R$ 500!</p>
        <div className="w-full bg-white/20 rounded-full h-2 mb-2">
          <div className="bg-white h-2 rounded-full" style={{ width: "46%" }}></div>
        </div>
        <p className="text-xs font-bold">23/50 vendas (46%)</p>
      </div>
    </aside>
  );
}
