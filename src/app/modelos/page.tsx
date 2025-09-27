"use client";

import { Header } from "@/components/header";
import { FooterSimples } from "@/components/footer-simples";
import { Carrossel } from "@/components/pages/inicio/carrossel";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";

import Link from "next/link";
import { Zap, ChevronLeft, ChevronRight } from "lucide-react";

// Componente CarrosselPersonalizado 
function CarrosselPersonalizado({ titulo, subtitulo }: { titulo: string; subtitulo: string }) {
  const modelos = [
    {
      id: 1,
      nome: "Isabella Santos",
      foto: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=400&h=300&fit=crop&crop=face",
      premium: true,
      online: true
    },
    {
      id: 2,
      nome: "Amanda Silva", 
      foto: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop&crop=face",
      premium: false,
      online: true
    },
    {
      id: 3,
      nome: "Sophia Rodriguez",
      foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop&crop=face", 
      premium: true,
      online: false
    },
    {
      id: 4,
      nome: "Valentina Costa",
      foto: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=400&h=300&fit=crop&crop=face",
      premium: false,
      online: true
    },
    {
      id: 5,
      nome: "Mia Johnson",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      premium: true,
      online: true
    },
    {
      id: 6,
      nome: "Luna Martinez",
      foto: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=300&fit=crop&crop=face",
      premium: false,
      online: false
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="w-full max-w-none mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-foreground mb-2">
              {titulo}
            </h2>
            <p className="text-muted-foreground">
              {subtitulo}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 rounded-full bg-muted hover:bg-hotlovers-red hover:text-white transition-all flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-muted hover:bg-hotlovers-red hover:text-white transition-all flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carrossel */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll-infinite">
            {[...modelos, ...modelos].map((modelo, index) => (
              <Link
                key={`${modelo.id}-${index}`}
                href={`/modelos/${modelo.id}`}
                className="relative flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 block"
              >
                <img
                  src={modelo.foto}
                  alt={modelo.nome}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                
                {/* Status badges */}
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  {modelo.online && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-hotlovers-red rounded-full text-xs text-white font-medium">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span>Online</span>
                    </div>
                  )}
                  {modelo.premium && (
                    <div className="w-6 h-6 bg-black/80 rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-hotlovers-red" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg mb-2">{modelo.nome}</h3>
                  <div className="flex items-center space-x-2">
                    <Link 
                      href={`/modelos/${modelo.id}`}
                      className="flex-1 py-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all text-sm font-medium text-center block"
                    >
                      Ver Perfil
                    </Link>
                    <Link 
                      href={`/modelos/${modelo.id}`}
                      className="px-4 py-2 bg-hotlovers-gradient rounded-lg hover:scale-105 transition-all text-sm font-medium text-white block"
                    >
                      Chat
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default function ModelosPage() {
  // Exemplo de usuário logado (depois virá do contexto de auth)
  const usuarioExemplo = {
    nome: "João Silva",
    email: "joao@email.com", 
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    tipo: "assinante" as const
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header usuario={usuarioExemplo} />
      
      <main className="flex-1">
        {/* Carrossel 1 - Hot Videos Exclusivos */}
        <Carrossel />

        {/* Carrossel 2 - Modelos em Destaque */}
        <CarrosselPersonalizado 
          titulo="⭐ Modelos em Destaque"
          subtitulo="As mais populares e bem avaliadas da plataforma"
        />

        {/* Carrossel 3 - Novas Modelos */}
        <CarrosselPersonalizado 
          titulo="🆕 Novas Modelos"  
          subtitulo="Recém-chegadas e esperando por você"
        />

      </main>

      <FooterSimples />
      
      {/* Componentes flutuantes/overlay */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}
