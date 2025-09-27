"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import { Logo } from "./logo";
import { Busca } from "./busca";
import { Menu } from "./menu";
import { Perfil } from "./perfil";
import { Tema } from "./tema";

interface HeaderProps {
  className?: string;
  usuario?: {
    nome: string;
    email: string;
    foto?: string;
    tipo: "admin" | "modelo" | "assinante";
  };
}

export function Header({ className, usuario }: HeaderProps) {
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);

  return (
    <header className={`
      sticky top-0 z-50 w-full
      bg-background/95 backdrop-blur-lg shadow-sm
      ${className || ""}
    `} style={{ border: 'none' }}>
      <div className="w-full max-w-none mx-auto flex h-16 items-center justify-between px-6 lg:px-16">
        {/* Logo */}
        <Logo />

        {/* Busca - Desktop */}
        <div className="hidden md:flex flex-1 mx-6">
          <Busca />
        </div>

        {/* Menu Desktop */}
        <Menu />

        {/* Área direita */}
        <div className="flex items-center space-x-4">
          <Tema />
          <Perfil usuario={usuario} />
          
          {/* Botão Menu Mobile */}
          <button
            onClick={() => setMenuMobileAberto(!menuMobileAberto)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {menuMobileAberto ? (
              <X className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuMobileAberto && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="container p-4 space-y-4">
            {/* Busca Mobile */}
            <div className="md:hidden">
              <Busca placeholder="Buscar..." />
            </div>
            
            {/* Links Mobile */}
            <nav className="space-y-2">
              {[
                { href: "/", label: "Início", icon: "🏠" },
                { href: "/modelos", label: "Modelos", icon: "👥" },
                { href: "/modelos-hot", label: "Hot Models", icon: "🔥" },
                { href: "/hot-videos", label: "Hot Vídeos", icon: "🎬" },
                { href: "/sobre", label: "Sobre", icon: "ℹ️" },
                { href: "/blog", label: "Blog", icon: "✏️" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMenuMobileAberto(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
              
              <a
                href="/cadastro"
                className="flex items-center justify-center p-3 bg-hotlovers-gradient text-white font-bold rounded-lg shadow-lg"
                onClick={() => setMenuMobileAberto(false)}
              >
                🔥 Assinar Agora
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
