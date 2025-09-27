import Link from "next/link";
import { User, Settings, LogOut, Crown, Heart, ChevronDown, Bell, CreditCard, Star, Zap, Gift, MessageCircle, Camera, BarChart3, Shield } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface PerfilProps {
  className?: string;
  usuario?: {
    nome: string;
    email: string;
    foto?: string;
    tipo: "admin" | "modelo" | "assinante";
  };
}

export function Perfil({ className, usuario }: PerfilProps) {
  const [aberto, setAberto] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        { label: "Seguidores", value: "12.5K", icon: Heart },
        { label: "Ganhos (mês)", value: "R$ 8.4K", icon: CreditCard },
        { label: "Conteúdos", value: "142", icon: Camera }
      ];
    } else if (usuario.tipo === "assinante") {
      return [
        { label: "Modelos Seguidas", value: "23", icon: Heart },
        { label: "Mensagens", value: "47", icon: MessageCircle },
      ];
    }
    return [];
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/login';
    } catch (error) {
      console.error('Erro no logout:', error);
      window.location.href = '/login';
    }
  };

  const getMenuItems = () => {
    const baseItems = [
      { icon: User, label: "Meu Perfil", href: "/perfil", color: "text-blue-500" },
      { icon: Heart, label: "Favoritos", href: "/favoritos", color: "text-pink-500" },
      { icon: Bell, label: "Notificações", href: "/notificacoes", color: "text-yellow-500" },
      { icon: Settings, label: "Configurações", href: "/configuracoes", color: "text-gray-500" }
    ];

    if (usuario.tipo === "modelo") {
      return [
        { icon: Crown, label: "Dashboard Modelo", href: "/modelo/dashboard", color: "text-hotlovers-red" },
        { icon: BarChart3, label: "Analytics", href: "/modelo/analytics", color: "text-green-500" },
        { icon: Camera, label: "Upload Conteúdo", href: "/modelo/upload", color: "text-purple-500" },
        { icon: CreditCard, label: "Ganhos", href: "/modelo/ganhos", color: "text-emerald-500" },
        ...baseItems
      ];
    } else if (usuario.tipo === "assinante") {
      return [
        { icon: Zap, label: "Minha Assinatura", href: "/assinatura", color: "text-hotlovers-red" },
        { icon: Gift, label: "Ofertas Especiais", href: "/ofertas", color: "text-orange-500" },
        { icon: MessageCircle, label: "Conversas", href: "/conversas", color: "text-blue-500" },
        { icon: CreditCard, label: "Pagamentos", href: "/pagamentos", color: "text-green-500" },
        ...baseItems
      ];
    } else {
      return [
        { icon: Shield, label: "Admin Panel", href: "/admin", color: "text-hotlovers-red" },
        ...baseItems
      ];
    }
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
                  {usuario.tipo === "admin" && <Shield className="w-4 h-4 text-hotlovers-red" />}
                </div>
                <p className="text-sm text-muted-foreground">{usuario.email}</p>
                <div className="flex items-center space-x-1 mt-1">
                  {usuario.tipo === "modelo" && <Crown className="w-3 h-3 text-hotlovers-red" />}
                  {usuario.tipo === "assinante" && <Zap className="w-3 h-3 text-hotlovers-red" />}
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
              <div className="grid grid-cols-3 gap-4">
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

          {/* Menu Items Sofisticados */}
          <div className="py-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center space-x-4 px-6 py-3 text-sm hover:bg-muted/50 transition-all duration-300"
                  onClick={() => setAberto(false)}
                >
                  <div className={`w-8 h-8 rounded-lg bg-background group-hover:bg-white/10 flex items-center justify-center transition-all duration-300`}>
                    <Icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-hotlovers-red transition-colors">{item.label}</span>
                  <div className="flex-1"></div>
                  <div className="w-1.5 h-1.5 bg-hotlovers-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              );
            })}
          </div>

          {/* Footer com Logout Sofisticado */}
          <div className="border-t border-border bg-muted/20">
            <button
              onClick={() => {
                // Lógica de logout
                setAberto(false);
              }}
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
