"use client";

import { Header } from "@/components/header";
import { FooterSimples } from "@/components/footer-simples";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";
import Link from "next/link";
import { Crown, Star, Eye, Heart, Play, Flame, Award, Camera, Video } from "lucide-react";

// Componente CarrosselDark Premium
function CarrosselDark({ titulo, subtitulo }: { titulo: string; subtitulo: string }) {
  const modelos = [
    {
      id: 1,
      nome: "Isabella Black",
      foto: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=400&h=500&fit=crop&crop=face",
      rating: 4.9,
      likes: 45600,
      views: 234500,
      content: { photos: 180, videos: 45 },
      tags: ["4K Ultra", "Exclusive", "VIP"],
      tier: "BLACK"
    },
    {
      id: 2,
      nome: "Amanda Dark",
      foto: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop&crop=face",
      rating: 4.8,
      likes: 38200,
      views: 189300,
      content: { photos: 150, videos: 38 },
      tags: ["Ultra HD", "Premium", "Hot"],
      tier: "PREMIUM"
    },
    {
      id: 3,
      nome: "Sophia Fire",
      foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=face",
      rating: 4.9,
      likes: 52100,
      views: 298700,
      content: { photos: 220, videos: 67 },
      tags: ["4K", "Exclusive", "Fire"],
      tier: "BLACK"
    },
    {
      id: 4,
      nome: "Valentina Noir",
      foto: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=400&h=500&fit=crop&crop=face",
      rating: 4.7,
      likes: 29800,
      views: 156400,
      content: { photos: 125, videos: 32 },
      tags: ["HD", "Premium", "Dark"],
      tier: "PREMIUM"
    },
    {
      id: 5,
      nome: "Mia Obsidian",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      rating: 4.8,
      likes: 41300,
      views: 223100,
      content: { photos: 190, videos: 52 },
      tags: ["4K Ultra", "VIP", "Hot"],
      tier: "BLACK"
    },
    {
      id: 6,
      nome: "Luna Shadow",
      foto: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop&crop=face",
      rating: 4.6,
      likes: 33700,
      views: 178900,
      content: { photos: 140, videos: 35 },
      tags: ["Ultra HD", "Exclusive", "Shadow"],
      tier: "PREMIUM"
    }
  ];

  return (
    <section className="py-16 bg-black/95 backdrop-blur-xl">
      <div className="w-full max-w-none mx-auto px-6 lg:px-16">
        
        {/* Header Premium */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-4 backdrop-blur-sm">
            <Flame className="w-4 h-4 mr-2" />
            PREMIUM COLLECTION
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
            {titulo}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {subtitulo}
          </p>
          
          {/* Call to Action */}
          <div className="mt-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-bold">PLANO BLACK</span>
              <Crown className="w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-gray-300 text-sm mb-4">Acesso ilimitado a todo conteúdo 4K</p>
            <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-500/25">
              ATIVAR PLANO BLACK
            </button>
          </div>
        </div>

        {/* Carrossel Premium */}
        <div className="relative overflow-hidden rounded-3xl">
          <div className="flex space-x-8 animate-scroll-infinite">
            {[...modelos, ...modelos].map((modelo, index) => (
              <Link
                key={`${modelo.id}-${index}`}
                href={`/modelos/${modelo.id}`}
                className="relative flex-shrink-0 w-80 h-96 rounded-3xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 shadow-2xl shadow-black/50"
              >
                {/* Imagem com filtros premium */}
                <img
                  src={modelo.foto}
                  alt={modelo.nome}
                  className="w-full h-full object-cover filter contrast-110 saturate-110"
                />
                
                {/* Overlay gradient premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
                
                {/* Glass overlay top */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent backdrop-blur-[1px]"></div>

                {/* Tier badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-full text-white text-xs font-bold shadow-lg border border-white/20">
                    <Crown className="w-3 h-3" />
                    <span>{modelo.tier}</span>
                  </div>
                </div>

                {/* Status premium */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <div className="flex items-center space-x-1 px-2 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-white text-xs font-medium shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content stats overlay */}
                <div className="absolute top-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1 text-white text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                        <Camera className="w-3 h-3" />
                        <span>{modelo.content.photos}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-white text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                        <Video className="w-3 h-3" />
                        <span>{modelo.content.videos}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-red-400 text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                        <Play className="w-3 h-3" />
                        <span>LIVE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags premium */}
                <div className="absolute bottom-20 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex flex-wrap gap-1">
                    {modelo.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-red-500/20 border border-red-500/30 text-red-300 rounded text-xs font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info bottom com glass effect */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-xl border-t border-white/10">
                  <div className="text-white">
                    <h3 className="font-black text-xl mb-2">{modelo.nome}</h3>
                    
                    {/* Stats row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-bold">{modelo.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-red-400">
                          <Heart className="w-4 h-4" />
                          <span>{(modelo.likes / 1000).toFixed(1)}K</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-300">
                          <Eye className="w-4 h-4" />
                          <span>{(modelo.views / 1000).toFixed(1)}K</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons Premium */}
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-center text-sm font-bold hover:bg-white/20 transition-all">
                        Ver Perfil Premium
                      </div>
                      <div className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-sm font-bold hover:scale-105 transition-all shadow-lg shadow-red-500/25">
                        CHAT VIP
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-red-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-400 text-sm mb-4">
            <span>Apenas para assinantes BLACK</span>
            <Crown className="w-4 h-4 text-yellow-400" />
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-black rounded-2xl border border-white/20 hover:scale-105 transition-all shadow-2xl backdrop-blur-xl">
            UPGRADE PARA BLACK - R$ 49,90/mês
          </button>
        </div>
      </div>
    </section>
  );
}

export default function ModelosHotPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header usuario={{
        nome: "Black Member",
        email: "black@hotlovers.com",
        foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        tipo: "assinante" as const
      }} />
      
      <main className="pt-20">
        {/* Hero Section Dark */}
        <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-20"></div>
          
          <div className="relative text-center px-6">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-bold mb-8 backdrop-blur-sm">
              <Flame className="w-5 h-5 mr-2" />
              MODELOS HOT - EXCLUSIVE COLLECTION
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
              DARK EDITION
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              As modelos mais exclusivas em conteúdo 4K Ultra HD. Experiência premium para membros BLACK.
            </p>

            {/* Premium CTA */}
            <div className="max-w-lg mx-auto p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Crown className="w-6 h-6 text-yellow-400" />
                <span className="text-2xl font-black text-white">PLANO BLACK</span>
                <Crown className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-gray-300 mb-6">Conteúdo 4K, lives exclusivas, chat VIP</p>
              <button className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-lg font-black rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-red-500/25">
                ATIVAR AGORA - R$ 49,90/mês
              </button>
              <p className="text-xs text-gray-500 mt-3">⚡ Ativação imediata • 🔒 Cancelamento fácil</p>
            </div>
          </div>
        </section>

        {/* Carrosséis Premium */}
        <CarrosselDark 
          titulo="BLACK MODELS" 
          subtitulo="Conteúdo exclusivo em 4K Ultra HD para membros BLACK"
        />
        
        <CarrosselDark 
          titulo="VIP COLLECTION" 
          subtitulo="As modelos mais desejadas com conteúdo premium"
        />
        
        <CarrosselDark 
          titulo="PLATINUM SERIES" 
          subtitulo="Experiência única com as top models da plataforma"
        />
      </main>

      <FooterSimples />
      
      {/* Componentes flutuantes */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}