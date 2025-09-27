"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, Camera, Video, Package, Users, MessageCircle, 
  DollarSign, TrendingUp, User, Settings, CreditCard, Handshake,
  Eye, Heart, Crown, Gift, Zap, BarChart3, Wallet, PiggyBank,
  ChevronDown
} from "lucide-react";
import { FaCrown, FaFire } from "react-icons/fa";
import { useSidebar } from "../../../contexts/sidebar-context";
import { useLanguage } from "../../../contexts/language-context";

const menuItems = [
  {
    section: "Dashboard",
    items: [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: "/modelo/dashboard",
        color: "text-gray-600 dark:text-gray-400",
        badge: null
      },
      {
        icon: TrendingUp,
        label: "Visão Geral",
        href: "/modelo/visao-geral", 
        color: "text-gray-600 dark:text-gray-400",
        badge: null
      }
    ]
  },
  {
    section: "Conteúdo",
    items: [
      {
        icon: Camera,
        label: "Fotos",
        href: "/modelo/fotos",
        color: "text-gray-600 dark:text-gray-400",
        badge: "234",
        subItems: [
          { label: "Upload nova foto", href: "/modelo/fotos/upload" },
          { label: "Gerenciar fotos", href: "/modelo/fotos" },
          { label: "Álbuns", href: "/modelo/fotos/albums" },
          { label: "Fotos VIP", href: "/modelo/fotos/vip" }
        ]
      },
      {
        icon: Video,
        label: "Vídeos",
        href: "/modelo/videos",
        color: "text-gray-600 dark:text-gray-400",
        badge: "67",
        subItems: [
          { label: "Upload novo vídeo", href: "/modelo/videos/upload" },
          { label: "Gerenciar vídeos", href: "/modelo/videos" },
          { label: "Lives gravadas", href: "/modelo/videos/lives" },
          { label: "Vídeos premium", href: "/modelo/videos/premium" }
        ]
      },
      {
        icon: Package,
        label: "Packs",
        href: "/modelo/packs",
        color: "text-gray-600 dark:text-gray-400", 
        badge: "12",
        subItems: [
          { label: "Criar pack", href: "/modelo/packs/create" },
          { label: "Gerenciar packs", href: "/modelo/packs" },
          { label: "Packs populares", href: "/modelo/packs/popular" },
          { label: "Personalizados", href: "/modelo/packs/custom" }
        ]
      }
    ]
  },
  {
    section: "Relacionamento",
    items: [
      {
        icon: MessageCircle,
        label: "Chat ao Vivo",
        href: "/modelo/chat-ao-vivo",
        color: "text-gray-600 dark:text-gray-400",
        badge: "5",
        subItems: [
          { label: "Conversas ativas", href: "/modelo/chat-ao-vivo" },
          { label: "Mensagens VIP", href: "/modelo/chat-ao-vivo/vip" },
          { label: "Grupos", href: "/modelo/chat-ao-vivo/groups" }
        ]
      },
      {
        icon: Users,
        label: "Assinantes",
        href: "/modelo/assinantes",
        color: "text-gray-600 dark:text-gray-400",
        badge: "1.2K",
        subItems: [
          { label: "Todos assinantes", href: "/modelo/assinantes" },
          { label: "Assinantes VIP", href: "/modelo/assinantes/vip" },
          { label: "Novos assinantes", href: "/modelo/assinantes/new" }
        ]
      },
      {
        icon: Heart,
        label: "Gorjetas",
        href: "/modelo/gorjetas",
        color: "text-gray-600 dark:text-gray-400",
        badge: "89"
      }
    ]
  },
  {
    section: "Financeiro",
    items: [
      {
        icon: DollarSign,
        label: "Receitas",  
        href: "/modelo/receitas",
        color: "text-gray-600 dark:text-gray-400",
        badge: null
      },
      {
        icon: Wallet,
        label: "Saques",
        href: "/modelo/saques", 
        color: "text-gray-600 dark:text-gray-400",
        badge: null
      },
      {
        icon: CreditCard,
        label: "Planos",
        href: "/modelo/planos",
        color: "text-gray-600 dark:text-gray-400",
        badge: "3"
      }
    ]
  },
  {
    section: "Marketing",
    items: [
      {
        icon: Zap,
        label: "Impulsionar",
        href: "/modelo/impulsionar",
        color: "text-gray-600 dark:text-gray-400",
        badge: null
      },
      {
        icon: Handshake,
        label: "Afiliados",
        href: "/modelo/afiliados",
        color: "text-gray-600 dark:text-gray-400",
        badge: "23"
      }
    ]
  },
  {
    section: "Conta",
    items: [
      {
        icon: User,
        label: "Perfil",
        href: "/modelo/perfil",
        color: "text-gray-600 dark:text-gray-400",
        badge: null
      },
      {
        icon: Settings,
        label: "Configurações",
        href: "/modelo/configuracoes",
        color: "text-gray-600 dark:text-gray-400",
        badge: null
      }
    ]
  }
];

export function ModeloSidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const { isExpanded } = useSidebar();
  const { t } = useLanguage();

  const toggleExpanded = (itemLabel: string) => {
    if (!isExpanded) return; // Não expandir se sidebar está colapsada
    
    setExpandedItems(prev => 
      prev.includes(itemLabel) 
        ? prev.filter(item => item !== itemLabel)
        : [...prev, itemLabel]
    );
  };

  const isActiveLink = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const isItemExpanded = (itemLabel: string) => {
    if (!isExpanded) return false;
    return expandedItems.includes(itemLabel) || isActiveLink(menuItems.find(section => 
      section.items.find(item => item.label === itemLabel)
    )?.items.find(item => item.label === itemLabel)?.href || '');
  };

  return (
    <aside className={`fixed top-16 left-0 z-30 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 ${
      isExpanded ? 'w-64' : 'w-16'
    }`}>
      
      {/* Profile Section - Only show when expanded */}
      {isExpanded && (
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=48&h=48&fit=crop&crop=face"
                alt="Profile"
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-hotlovers-red rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
                <FaCrown className="w-2 h-2 text-white" />
              </div>
            </div>
            <div>
              <p className="font-bold text-black dark:text-white">Isabella Santos</p>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-hotlovers-red/10 text-hotlovers-red">
                  <FaCrown className="w-2 h-2 mr-1" />
                  VIP
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Meta do Mês</span>
              <span className="text-xs font-bold text-hotlovers-red">84%</span>
            </div>
            <div className="w-full bg-white dark:bg-gray-700 rounded-full h-2">
              <div className="bg-hotlovers-red h-2 rounded-full transition-all duration-1000" style={{ width: '84%' }}></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">R$ 8.4K de R$ 10K</p>
          </div>
        </div>
      )}

      {/* Collapsed Profile - Only show when collapsed */}
      {!isExpanded && (
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=32&h=32&fit=crop&crop=face"
                alt="Profile"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-hotlovers-red rounded-full flex items-center justify-center border border-white dark:border-gray-900">
                <FaCrown className="w-1.5 h-1.5 text-white" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {menuItems.map((section) => (
            <div key={section.section}>
              {/* Section Header - Only show when expanded */}
              {isExpanded && (
                <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                  {section.section}
                </h3>
              )}

              {/* Section Items */}
              <div className="space-y-1">
                {section.items.map((item) => (
                  <div key={item.label}>
                    {/* Main Item */}
                    <div className="relative group">
                      <Link
                        href={item.href}
                        onClick={item.subItems ? (e) => {
                          if (isExpanded) {
                            e.preventDefault();
                            toggleExpanded(item.label);
                          }
                        } : undefined}
                        className={`flex items-center w-full px-3 py-2.5 rounded-lg font-medium transition-all group relative ${
                          isActiveLink(item.href)
                            ? 'bg-hotlovers-red text-white shadow-sm'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white'
                        } ${!isExpanded ? 'justify-center' : 'justify-between'}`}
                        title={!isExpanded ? item.label : undefined}
                      >
                        <div className={`flex items-center ${isExpanded ? 'space-x-3' : ''}`}>
                          <item.icon className={`w-5 h-5 ${
                            isActiveLink(item.href) ? 'text-white' : 'text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white'
                          }`} />
                          {isExpanded && <span>{item.label}</span>}
                        </div>
                        
                        {isExpanded && (
                          <div className="flex items-center space-x-2">
                            {/* Badge */}
                            {item.badge && (
                              <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                                isActiveLink(item.href)
                                  ? 'bg-white/20 text-white'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                            
                            {/* Expand Arrow */}
                            {item.subItems && (
                              <ChevronDown className={`w-4 h-4 transition-transform ${
                                isItemExpanded(item.label) ? 'rotate-180' : ''
                              } ${
                                isActiveLink(item.href) ? 'text-white' : 'text-gray-400 dark:text-gray-500'
                              }`} />
                            )}
                          </div>
                        )}
                      </Link>

                      {/* Tooltip for collapsed state */}
                      {!isExpanded && (
                        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                          {item.label}
                          {item.badge && (
                            <span className="ml-2 px-1.5 py-0.5 bg-hotlovers-red text-white rounded-full text-xs">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Sub Items - Only show when expanded and item is expanded */}
                    {item.subItems && isExpanded && isItemExpanded(item.label) && (
                      <div className="ml-8 mt-2 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                              pathname === subItem.href
                                ? 'bg-hotlovers-red/10 text-hotlovers-red font-medium'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white'
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
        </div>
      </nav>

      {/* Sidebar Footer - Only show when expanded */}
      {isExpanded && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <FaFire className="w-4 h-4 text-hotlovers-red" />
              <span className="text-sm font-medium text-black dark:text-white">Destaque</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Impulsione seu perfil para aparecer em destaque!
            </p>
            <button className="w-full mt-2 py-2 bg-hotlovers-red text-white rounded-lg text-xs font-medium hover:bg-red-700 transition-colors">
              Impulsionar Agora
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}