import Link from "next/link";
import { User, Settings, LogOut, Crown, Heart, ChevronDown, Bell, CreditCard, Star, Zap, Gift, MessageCircle, Camera, BarChart3, Shield, LayoutDashboard, Video, Package, Users, DollarSign, Wallet, Handshake, Link2, TrendingUp, Download, ShoppingBag } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface PerfilProps {
  className?: string;
  usuario?: {
    nome: string;
    email: string;
    foto?: string;
    tipo: "admin" | "modelo" | "assinante" | "afiliado";
  };
}

export function Perfil({ className, usuario }: PerfilProps) {
  const [aberto, setAberto] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAberto(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Se não tiver usuário, mostra botões de login
  if (!usuario) {
    return (
      <div className={`flex items-center space-x-3 ${className || ""}`}>
        <Link
          href="/login"
          className="px-4 py-2 bg-hotlovers-gradient text-white text-sm font-medium rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Entrar
        </Link>
        <Link
          href="/cadastro"
          className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-hotlovers-red transition-colors border border-border rounded-lg hover:border-hotlovers-red/50"
        >
          Assinar
        </Link>
      </div>
    );
  }

  // Stats mockados baseados no tipo de usuário
  const getUserStats = () => {
    if (usuario.tipo === "modelo") {
      return [
        { label: "Ganhos", value: "R$ 8.4K", icon: DollarSign },
        { label: "Assinantes", value: "245", icon: Users }
      ];
    } else if (usuario.tipo === "assinante") {
      return [
        { label: "Assinaturas", value: "3", icon: Crown },
        { label: "Compras", value: "12", icon: ShoppingBag }
      ];
    } else if (usuario.tipo === "afiliado") {
      return [
        { label: "Comissões", value: "R$ 1.2K", icon: DollarSign },
        { label: "Vendas", value: "23", icon: ShoppingBag }
      ];
    } else if (usuario.tipo === "admin") {
      return [
        { label: "Usuários", value: "1.2K", icon: Users },
        { label: "Receita", value: "R$ 45K", icon: DollarSign }
      ];
    }
    return [];
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      localStorage.removeItem('session');
      localStorage.removeItem('token');
      sessionStorage.clear();
      router.push('/login');
    } catch (error) {
      console.error('Erro no logout:', error);
      router.push('/login');
    }
  };

  const getMenuItems = () => {
    if (usuario.tipo === "modelo") {
      return [
        { section: "Dashboard", items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "/modelo/dashboard", color: "text-purple-500" }
        ]},
        { section: "Conteúdo", items: [
          { icon: Camera, label: "Fotos", href: "/modelo/fotos", color: "text-pink-500" },
          { icon: Video, label: "Vídeos", href: "/modelo/videos", color: "text-blue-500" },
          { icon: Package, label: "Packs", href: "/modelo/packs", color: "text-orange-500" }
        ]},
        { section: "Relacionamento", items: [
          { icon: MessageCircle, label: "Chat ao Vivo", href: "/modelo/chat-ao-vivo", color: "text-green-500" },
          { icon: Users, label: "Assinantes", href: "/modelo/assinantes", color: "text-blue-500" },
          { icon: Gift, label: "Gorjetas", href: "/modelo/gorjetas", color: "text-red-500" }
        ]},
        { section: "Financeiro", items: [
          { icon: Wallet, label: "Saques", href: "/modelo/saques", color: "text-emerald-500" },
          { icon: CreditCard, label: "Planos", href: "/modelo/planos", color: "text-indigo-500" }
        ]},
        { section: "Marketing", items: [
          { icon: Zap, label: "Impulsionar", href: "/modelo/impulsionar", color: "text-yellow-500" },
          { icon: Handshake, label: "Afiliados", href: "/modelo/afiliados", color: "text-cyan-500" }
        ]},
        { section: "Conta", items: [
          { icon: User, label: "Perfil", href: "/modelo/perfil", color: "text-gray-500" }
        ]}
      ];
    } else if (usuario.tipo === "assinante") {
      return [
        { section: "Principal", items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "/assinante/dashboard", color: "text-purple-500" },
          { icon: User, label: "Meu Perfil", href: "/assinante/perfil", color: "text-blue-500" }
        ]},
        { section: "Conteúdo", items: [
          { icon: Camera, label: "Fotos", href: "/assinante/fotos", color: "text-pink-500" },
          { icon: Video, label: "Vídeos", href: "/assinante/videos", color: "text-blue-500" },
          { icon: Package, label: "Packs", href: "/assinante/packs", color: "text-orange-500" }
        ]},
        { section: "Minhas Atividades", items: [
          { icon: Crown, label: "Minhas Assinaturas", href: "/assinante/assinaturas", color: "text-yellow-500" },
          { icon: ShoppingBag, label: "Minhas Compras", href: "/assinante/compras", color: "text-green-500" },
          { icon: Heart, label: "Favoritos", href: "/assinante/favoritos", color: "text-red-500" },
          { icon: Download, label: "Meus Downloads", href: "/assinante/downloads", color: "text-blue-500" }
        ]},
        { section: "Interação", items: [
          { icon: MessageCircle, label: "Chat ao Vivo", href: "/assinante/chat-ao-vivo", color: "text-green-500" },
          { icon: Gift, label: "Gorjetas", href: "/assinante/gorjetas", color: "text-purple-500" }
        ]}
      ];
    } else if (usuario.tipo === "afiliado") {
      return [
        { section: "Principal", items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "/afiliado/dashboard", color: "text-purple-500" },
          { icon: User, label: "Meu Perfil", href: "/afiliado/perfil", color: "text-blue-500" }
        ]},
        { section: "Afiliação", items: [
          { icon: Link2, label: "Links Compartilhados", href: "/afiliado/links", color: "text-blue-500" },
          { icon: DollarSign, label: "Comissões", href: "/afiliado/comissoes", color: "text-green-500" },
          { icon: Wallet, label: "Saques", href: "/afiliado/saques", color: "text-emerald-500" }
        ]},
        { section: "Análise", items: [
          { icon: BarChart3, label: "Estatísticas", href: "/afiliado/estatisticas", color: "text-orange-500" },
          { icon: TrendingUp, label: "Histórico", href: "/afiliado/historico", color: "text-purple-500" },
          { icon: Users, label: "Referidos", href: "/afiliado/referidos", color: "text-cyan-500" }
        ]},
        { section: "Configurações", items: [
          { icon: Settings, label: "Configurações", href: "/afiliado/configuracoes", color: "text-gray-500" }
        ]}
      ];
    } else if (usuario.tipo === "admin") {
      return [
        { section: "Principal", items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard", color: "text-purple-500" },
          { icon: BarChart3, label: "Analytics", href: "/admin/analytics", color: "text-blue-500" }
        ]},
        { section: "Gestão", items: [
          { icon: Users, label: "Modelos", href: "/admin/modelos", color: "text-pink-500" },
          { icon: Users, label: "Assinantes", href: "/admin/assinantes", color: "text-blue-500" },
          { icon: Handshake, label: "Afiliados", href: "/admin/afiliados", color: "text-cyan-500" }
        ]},
        { section: "Financeiro", items: [
          { icon: DollarSign, label: "Pagamentos", href: "/admin/pagamentos", color: "text-green-500" },
          { icon: CreditCard, label: "Assinaturas", href: "/admin/assinaturas", color: "text-emerald-500" },
          { icon: TrendingUp, label: "Comissões", href: "/admin/comissoes", color: "text-orange-500" }
        ]},
        { section: "Sistema", items: [
          { icon: Settings, label: "Configurações", href: "/admin/configuracoes", color: "text-gray-500" }
        ]}
      ];
    }
    return [];
  };

  const stats = getUserStats();
  const menuItems = getMenuItems();

  return (
    <div className={`relative ${className || ""}`} ref={dropdownRef}>
      <button
        onClick={() => setAberto(!aberto)}
        className={`flex items-center space-x-3 p-2 rounded-xl hover:bg-muted transition-all duration-300 ${aberto ? 'bg-muted ring-2 ring-hotlovers-red/20' : ''}`}
      >
        <div className="relative">
          <img
            src={usuario.foto || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"}
            alt={usuario.nome}
            className="w-9 h-9 rounded-full object-cover ring-2 ring-hotlovers-red/20"
          />
          {/* Status indicator */}
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></div>
        </div>
        <div className="hidden md:block text-left">
          <div className="text-sm font-semibold text-foreground">{usuario.nome}</div>
          <div className="text-xs text-muted-foreground capitalize flex items-center space-x-1">
            {usuario.tipo === "modelo" && <Crown className="w-3 h-3 text-hotlovers-red" />}
            {usuario.tipo === "assinante" && <Zap className="w-3 h-3 text-hotlovers-red" />}
            {usuario.tipo === "afiliado" && <Link2 className="w-3 h-3 text-hotlovers-red" />}
            {usuario.tipo === "admin" && <Shield className="w-3 h-3 text-hotlovers-red" />}
            <span>{usuario.tipo}</span>
          </div>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`} 
        />
      </button>

      {aberto && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl z-50 overflow-hidden">
          {/* Header do dropdown */}
          <div className="p-6 bg-gradient-to-r from-hotlovers-red/10 to-hotlovers-pink/10 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <img
                src={usuario.foto}
                alt={usuario.nome}
                className="w-12 h-12 rounded-xl object-cover border-2 border-hotlovers-red/20"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-foreground">{usuario.nome}</h3>
                  {usuario.tipo === "modelo" && <Crown className="w-4 h-4 text-hotlovers-red" />}
                  {usuario.tipo === "assinante" && <Zap className="w-4 h-4 text-hotlovers-red" />}
                  {usuario.tipo === "afiliado" && <Link2 className="w-4 h-4 text-hotlovers-red" />}
                  {usuario.tipo === "admin" && <Shield className="w-4 h-4 text-hotlovers-red" />}
                </div>
                <p className="text-sm text-muted-foreground">{usuario.email}</p>
                <div className="flex items-center space-x-1 mt-1">
                  {usuario.tipo === "modelo" && <Crown className="w-3 h-3 text-hotlovers-red" />}
                  {usuario.tipo === "assinante" && <Zap className="w-3 h-3 text-hotlovers-red" />}
                  {usuario.tipo === "afiliado" && <Link2 className="w-3 h-3 text-hotlovers-red" />}
                  {usuario.tipo === "admin" && <Shield className="w-3 h-3 text-hotlovers-red" />}
                  <span className="text-xs font-medium text-hotlovers-red capitalize">
                    {usuario.tipo}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Stats Section */}
          {stats.length > 0 && (
            <div className="px-6 py-4 bg-muted/30">
              <div className={`grid gap-4 ${stats.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-8 h-8 bg-hotlovers-red/10 rounded-lg flex items-center justify-center mx-auto mb-1">
                        <Icon className="w-4 h-4 text-hotlovers-red" />
                      </div>
                      <div className="text-sm font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Menu Items por Seção */}
          <div className="py-2 max-h-96 overflow-y-auto">
            {menuItems.map((section, sectionIndex) => (
              <div key={section.section} className={sectionIndex > 0 ? 'mt-2' : ''}>
                {/* Section Header */}
                <div className="px-6 py-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                    {section.section}
                  </p>
                </div>
                
                {/* Section Items */}
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center space-x-3 px-6 py-2.5 text-sm hover:bg-muted/50 transition-all duration-300"
                      onClick={() => setAberto(false)}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-background group-hover:bg-white/10 flex items-center justify-center transition-all duration-300`}>
                        <Icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <span className="font-medium text-foreground group-hover:text-hotlovers-red transition-colors">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Footer com Logout */}
          <div className="border-t border-border bg-muted/20">
            <button
              onClick={handleLogout}
              className="group w-full flex items-center space-x-4 px-6 py-4 text-sm text-red-500 hover:bg-red-500/10 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 flex items-center justify-center transition-all duration-300">
                <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-medium group-hover:text-red-600 transition-colors">Sair da Conta</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Perfil;
