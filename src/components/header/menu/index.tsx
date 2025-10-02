import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, Flame, Video, Info, PenTool } from "lucide-react";

interface MenuProps {
  className?: string;
}

const menuItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/modelos", label: "Modelos", icon: Users },
  { href: "/modelos-hot", label: "Hot Models", icon: Flame },
  { href: "/hot-videos", label: "Hot Vídeos", icon: Video },
  { href: "/sobre", label: "Sobre", icon: Info }
];

export function Menu({ className }: MenuProps) {
  const pathname = usePathname();
  const isDarkPage = pathname.includes('/modelos-hot') || pathname.includes('/hot-videos');

  return (
    <nav className={`hidden lg:flex items-center space-x-1 ${className || ""}`}>
      {menuItems.map((item) => {
        const ativo = pathname === item.href;
        
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300
              hover:bg-hotlovers-red/10 hover:text-hotlovers-red
              ${ativo 
                ? "bg-hotlovers-gradient text-white shadow-lg animate-pulse-soft" 
                : isDarkPage 
                  ? "text-white hover:scale-105" 
                  : "text-foreground hover:scale-105"
              }
            `}
          >
            <Icon className="w-4 h-4" />
            <span className="font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default Menu;
