"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, Users, Crown, DollarSign, BarChart3, Settings, 
  ChevronDown, Shield, MessageCircle, FileText, Zap, Globe, Lock,
  TrendingUp, UserCheck, CreditCard, Bell, Archive, Users2, Percent,
  Layers, Target, Gift, Banknote, Handshake
} from "lucide-react";

interface NavigationMenuProps {
  isExpanded: boolean;
}

const menuItems = [
  {
    section: "Principal",
    items: [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: "/admin/dashboard",
        color: "text-blue-500",
        badge: null
      },
      {
        icon: BarChart3,
        label: "Analytics",
        href: "/admin/analytics", 
        color: "text-purple-500",
        badge: "Pro"
      }
    ]
  },
  {
    section: "Negócios",
    items: [
      {
        icon: CreditCard,
        label: "Assinaturas",
        href: "/admin/assinaturas",
        color: "text-cyan-500",
        badge: "156",
        subItems: [
          { label: "Todas assinaturas", href: "/admin/assinaturas" },
          { label: "Assinaturas ativas", href: "/admin/assinaturas/active" },
          { label: "Cancelamentos", href: "/admin/assinaturas/cancelled" },
          { label: "Renovações", href: "/admin/assinaturas/renewals" }
        ]
      },
      {
        icon: Handshake,
        label: "Afiliados",
        href: "/admin/afiliados",
        color: "text-purple-500",
        badge: "8",
        subItems: [
          { label: "Todos os afiliados", href: "/admin/afiliados" },
          { label: "Pendentes aprovação", href: "/admin/afiliados/pending" },
          { label: "Top performers", href: "/admin/afiliados/top" },
          { label: "Comissões afiliados", href: "/admin/afiliados/commissions" }
        ]
      }
    ]
  },
  {
    section: "Usuários",
    items: [
      {
        icon: Users,
        label: "Modelos",
        href: "/admin/modelos",
        color: "text-pink-500",
        badge: "12",
        subItems: [
          { label: "Em aprovação", href: "/admin/modelos/pending" },
          { label: "Aprovadas", href: "/admin/modelos/approved" },
          { label: "Fotos", href: "/admin/modelos/photos" },
          { label: "Videos", href: "/admin/modelos/videos" },
          { label: "Packs", href: "/admin/modelos/packs" },
          { label: "Assinantes", href: "/admin/modelos/subscribers" }
        ]
      },
      {
        icon: Users2,
        label: "Assinantes", 
        href: "/admin/assinantes",
        color: "text-emerald-500",
        badge: "1.2K",
        subItems: [
          { label: "Todos os assinantes", href: "/admin/assinantes" },
          { label: "Planos ativos", href: "/admin/assinantes/active" },
          { label: "Expiram em breve", href: "/admin/assinantes/expiring" },
          { label: "Histórico", href: "/admin/assinantes/history" }
        ]
      }
    ]
  },

  {
    section: "Financeiro", 
    items: [
      {
        icon: Percent,
        label: "Minhas Comissões",
        href: "/admin/comissoes",
        color: "text-emerald-500",
        badge: "R$ 12K",
        subItems: [
          { label: "Visão geral", href: "/admin/comissoes" },
          { label: "De assinaturas", href: "/admin/comissoes/assinaturas" },
          { label: "De gorjetas", href: "/admin/comissoes/gorjetas" },
          { label: "De packs", href: "/admin/comissoes/packs" },
          { label: "De fotos", href: "/admin/comissoes/fotos" },
          { label: "De vídeos", href: "/admin/comissoes/videos" }
        ]
      },
      {
        icon: Banknote,
        label: "Pagamentos",
        href: "/admin/pagamentos", 
        color: "text-blue-500",
        badge: "45",
        subItems: [
          { label: "Todos pagamentos", href: "/admin/pagamentos" },
          { label: "Assinaturas", href: "/admin/pagamentos/assinaturas" },
          { label: "Packs", href: "/admin/pagamentos/packs" },
          { label: "Gorjetas", href: "/admin/pagamentos/gorjetas" },
          { label: "Métodos de pagamento", href: "/admin/pagamentos/metodos" }
        ]
      }
    ]
  },
  {
    section: "Sistema",
    items: [
      {
        icon: MessageCircle,
        label: "Chat",
        href: "/admin/chat-ao-vivo",
        color: "text-cyan-500", 
        badge: "5"
      },
      {
        icon: Zap,
        label: "Integrações",
        href: "/admin/integracoes",
        color: "text-violet-500",
        badge: "5",
        subItems: [
          { label: "Payment Gateways", href: "/admin/integracoes/pagamentos" },
          { label: "Redes Sociais", href: "/admin/integracoes/sociais" },
          { label: "Analytics", href: "/admin/integracoes/analytics" },
          { label: "Email Marketing", href: "/admin/integracoes/email" },
          { label: "APIs Externas", href: "/admin/integracoes/apis" }
        ]
      },
      {
        icon: FileText,
        label: "Relatórios",
        href: "/admin/relatorios",
        color: "text-indigo-500",
        badge: null,
        subItems: [
          { label: "Visão geral", href: "/admin/relatorios" },
          { label: "Acessos", href: "/admin/relatorios/acessos" },
          { label: "Cadastros", href: "/admin/relatorios/cadastros" },
          { label: "Vendas de packs", href: "/admin/relatorios/vendas-packs" },
          { label: "Assinaturas", href: "/admin/relatorios/assinaturas" },
          { label: "Fotos & vídeos", href: "/admin/relatorios/conteudo" }
        ]
      },
      {
        icon: Settings,
        label: "Configurações",
        href: "/admin/configuracoes",
        color: "text-gray-500",
        badge: null,
        subItems: [
          { label: "Geral", href: "/admin/configuracoes/geral" },
          { label: "Comissões & taxas", href: "/admin/configuracoes/comissoes" },
          { label: "Pagamentos", href: "/admin/configuracoes/pagamentos" },
          { label: "Email & templates", href: "/admin/configuracoes/email" },
          { label: "API & webhooks", href: "/admin/configuracoes/api" }
        ]
      }
    ]
  }
];

export function NavigationMenu({ isExpanded }: NavigationMenuProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    if (!isExpanded) return;
    
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav className="px-3 py-4 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      {menuItems.map((section) => (
        <div key={section.section}>
          {/* Section Header */}
          {isExpanded && (
            <div className="px-3 py-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {section.section}
              </p>
            </div>
          )}

          {/* Section Items */}
          <div className="space-y-1">
            {section.items.map((item) => (
              <div key={item.label}>
                {/* Main Item */}
                <div className="relative group">
                  <Link
                    href={item.href}
                    onClick={() => item.subItems && toggleExpanded(item.label)}
                    className={`flex items-center justify-between w-full px-3 py-3 rounded-xl transition-all duration-200 hover:bg-gray-50 group ${
                      isActive(item.href) 
                        ? 'bg-hotlovers-red/5 border border-hotlovers-red/20' 
                        : 'hover:scale-105'
                    }`}
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      {/* Icon */}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                        isActive(item.href) 
                          ? 'bg-hotlovers-gradient shadow-lg' 
                          : 'bg-gray-100 group-hover:bg-gray-200 group-hover:scale-110'
                      }`}>
                        <item.icon className={`w-4 h-4 transition-colors ${
                          isActive(item.href) ? 'text-white' : item.color
                        }`} />
                      </div>

                      {/* Label */}
                      {isExpanded && (
                        <span className={`font-medium truncate transition-colors ${
                          isActive(item.href) ? 'text-hotlovers-red' : 'text-gray-700 group-hover:text-gray-900'
                        }`}>
                          {item.label}
                        </span>
                      )}
                    </div>

                    {/* Right Side */}
                    {isExpanded && (
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        {/* Badge */}
                        {item.badge && (
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            isActive(item.href)
                              ? 'bg-hotlovers-red text-white'
                              : item.badge === 'Pro'
                              ? 'bg-purple-100 text-purple-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {item.badge}
                          </span>
                        )}

                        {/* Expand Icon */}
                        {item.subItems && (
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${
                            expandedItems.includes(item.label) ? 'rotate-180' : ''
                          }`} />
                        )}
                      </div>
                    )}
                  </Link>

                  {/* Active Indicator */}
                  {isActive(item.href) && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-hotlovers-gradient rounded-r-full"></div>
                  )}
                </div>

                {/* Sub Items */}
                {item.subItems && isExpanded && expandedItems.includes(item.label) && (
                  <div className="ml-11 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          isActive(subItem.href)
                            ? 'text-hotlovers-red bg-hotlovers-red/5 font-medium'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}