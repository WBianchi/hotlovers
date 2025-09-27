import { Instagram, Facebook, Youtube } from "lucide-react";

interface RedesSociaisProps {
  className?: string;
}

const redes = [
  {
    nome: "Instagram",
    href: "https://instagram.com/hotlovers",
    icon: Instagram,
    cor: "hover:text-pink-500"
  },
  {
    nome: "Facebook",
    href: "https://facebook.com/hotlovers",
    icon: Facebook,
    cor: "hover:text-blue-600"
  },
  {
    nome: "YouTube",
    href: "https://youtube.com/hotlovers",
    icon: Youtube,
    cor: "hover:text-red-500"
  }
];

export function RedesSociais({ className }: RedesSociaisProps) {
  return (
    <div className={`flex items-center space-x-4 ${className || ""}`}>
      <span className="text-sm text-muted-foreground">Siga-nos:</span>
      <div className="flex space-x-3">
        {redes.map((rede) => {
          const Icon = rede.icon;
          return (
            <a
              key={rede.nome}
              href={rede.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                w-10 h-10 rounded-full bg-muted hover:bg-hotlovers-red
                flex items-center justify-center transition-all duration-300
                hover:scale-110 hover:shadow-lg
                text-muted-foreground hover:text-white
                ${rede.cor}
              `}
              title={rede.nome}
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default RedesSociais;
