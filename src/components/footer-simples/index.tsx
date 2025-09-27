"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

interface FooterSimplesProps {
  className?: string;
}

export function FooterSimples({ className }: FooterSimplesProps) {
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

  return (
    <footer className={`bg-background border-t border-border ${className || ""}`}>
      <div className="w-full max-w-none mx-auto px-6 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-hotlovers-red p-2 rounded-full">
              <span className="text-white font-black text-lg">🔥</span>
            </div>
            <div>
              <h3 className="font-black text-lg">
                <span className="text-hotlovers-red">Hot</span>
                <span className="text-foreground">Lovers</span>
              </h3>
              <p className="text-xs text-muted-foreground">Premium Content</p>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/sobre" className="text-muted-foreground hover:text-hotlovers-red transition-colors">
              Sobre
            </Link>
            <Link href="/termos" className="text-muted-foreground hover:text-hotlovers-red transition-colors">
              Termos
            </Link>
            <Link href="/privacidade" className="text-muted-foreground hover:text-hotlovers-red transition-colors">
              Privacidade
            </Link>
            <Link href="/contato" className="text-muted-foreground hover:text-hotlovers-red transition-colors">
              Contato
            </Link>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center space-x-3">
            {redes.map((rede) => {
              const Icon = rede.icon;
              return (
                <a
                  key={rede.nome}
                  href={rede.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-8 h-8 rounded-full bg-muted hover:bg-hotlovers-red
                    flex items-center justify-center transition-all duration-300
                    hover:scale-110 text-muted-foreground hover:text-white
                  `}
                  title={rede.nome}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 HotLovers. Todos os direitos reservados. | +18 anos
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSimples;
