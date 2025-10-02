"use client";

import { Header } from "@/components/header";
import { FooterSimples } from "@/components/footer-simples";
import { Carrossel } from "@/components/pages/inicio/carrossel";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";
import { useEffect, useState } from "react";

import Link from "next/link";
import { Zap, ChevronLeft, ChevronRight, Crown } from "lucide-react";

interface Modelo {
  id: string;
  nome: string;
  nomeArtistico: string | null;
  foto: string | null;
  precoMensal: number;
  verificada: boolean;
  destaque: boolean;
  cidade: string;
  estado: string;
}

// Componente CarrosselPersonalizado 
function CarrosselPersonalizado({ titulo, subtitulo, modelos }: { titulo: string; subtitulo: string; modelos: Modelo[] }) {
  if (!modelos || modelos.length === 0) {
    return null;
  }

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
                  src={modelo.foto || 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=600&fit=crop&crop=face'}
                  alt={modelo.nomeArtistico || modelo.nome}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                
                {/* Status badges */}
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  {modelo.verificada && (
                    <div className="w-6 h-6 bg-black/80 rounded-full flex items-center justify-center">
                      <Crown className="w-3 h-3 text-yellow-500" />
                    </div>
                  )}
                  {modelo.destaque && (
                    <div className="px-2 py-1 bg-red-600 rounded-full text-xs text-white font-bold">
                      ⭐ Destaque
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{modelo.nomeArtistico || modelo.nome}</h3>
                  <p className="text-xs opacity-90 mb-2">{modelo.cidade}, {modelo.estado}</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 py-2 bg-white/20 rounded-lg backdrop-blur-sm text-sm font-medium text-center">
                      R$ {modelo.precoMensal.toFixed(2)}/mês
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-br from-red-600 to-red-700 rounded-lg text-sm font-medium text-white">
                      Ver Perfil
                    </div>
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
  const [modelosDestaque, setModelosDestaque] = useState<Modelo[]>([]);
  const [modelosNovos, setModelosNovos] = useState<Modelo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchModelos() {
      try {
        // Buscar modelos em destaque
        const resDestaque = await fetch('/api/modelos?destaque=true');
        const dataDestaque = await resDestaque.json();
        
        // Buscar todas as modelos (para novas)
        const resNovos = await fetch('/api/modelos?limit=10');
        const dataNovos = await resNovos.json();

        if (dataDestaque.success) {
          setModelosDestaque(dataDestaque.modelos);
        }
        
        if (dataNovos.success) {
          setModelosNovos(dataNovos.modelos);
        }
      } catch (error) {
        console.error('Erro ao buscar modelos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchModelos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Carregando modelos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Carrossel 1 - Hot Videos Exclusivos */}
        <Carrossel />

        {/* Carrossel 2 - Modelos em Destaque */}
        {modelosDestaque.length > 0 && (
          <CarrosselPersonalizado 
            titulo="⭐ Modelos em Destaque"
            subtitulo="As mais populares e bem avaliadas da plataforma"
            modelos={modelosDestaque}
          />
        )}

        {/* Carrossel 3 - Novas Modelos */}
        {modelosNovos.length > 0 && (
          <CarrosselPersonalizado 
            titulo="🆕 Novas Modelos"  
            subtitulo="Recém-chegadas e esperando por você"
            modelos={modelosNovos}
          />
        )}

      </main>

      <FooterSimples />
      
      {/* Componentes flutuantes/overlay */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}
