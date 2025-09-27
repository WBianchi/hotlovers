"use client";

import Link from "next/link";
import { Home, Users, Video, User, Heart } from "lucide-react";
import { usePathname } from "next/navigation";

interface FooterMobileProps {
  className?: string;
}

export function FooterMobile({ className }: FooterMobileProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/",
      label: "Início",
      icon: Home
    },
    {
      href: "/modelos",
      label: "Modelos",
      icon: Users
    },
    {
      href: "/hot-videos",
      label: "Vídeos",
      icon: Video
    },
    {
      href: "/blog",
      label: "Blog",
      icon: Heart
    },
    {
      href: "/login",
      label: "Perfil",
      icon: User
    }
  ];

  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 ${className || ""}`}>
      {/* Glass Background */}
      <div className="bg-background/80 backdrop-blur-2xl border-t border-white/10 shadow-lg shadow-black/20">
        <div className="flex items-center justify-around px-4 py-3">
          {menuItems.map((item) => {
            const ativo = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center space-y-1 px-3 py-2 rounded-2xl transition-all duration-300 min-w-0 flex-1 max-w-20
                  ${ativo 
                    ? "bg-hotlovers-gradient text-white shadow-lg shadow-hotlovers-red/30 scale-105" 
                    : "text-muted-foreground hover:text-hotlovers-red hover:bg-hotlovers-red/5"
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${ativo ? "animate-pulse-soft" : ""}`} />
                <span className={`text-xs font-medium truncate ${ativo ? "font-bold" : ""}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
        
        {/* Home Indicator (iOS style) */}
        <div className="flex justify-center pb-2">
          <div className="w-32 h-1 bg-muted-foreground/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default FooterMobile;