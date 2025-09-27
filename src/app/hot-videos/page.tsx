"use client";

import { Header } from "@/components/header";
import { FooterSimples } from "@/components/footer-simples";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";
import Link from "next/link";
import { FaPlay, FaHeart, FaEye, FaStar, FaCrown, FaFire, FaCalendar, FaMapMarkerAlt, FaAward } from "react-icons/fa";

// Componente CarrosselVideo Premium
function CarrosselVideo({ titulo, subtitulo }: { titulo: string; subtitulo: string }) {
  const videos = [
    {
      id: 1,
      titulo: "Ensaio Sensual - Isabella",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=500&h=600&fit=crop&crop=face",
      duracao: "12:45",
      views: "234K",
      likes: "45.2K",
      rating: 4.9,
      premium: true,
      hot: true,
      modelo: {
        nome: "Isabella Santos",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=100&h=100&fit=crop&crop=face",
        idade: 24,
        localizacao: "São Paulo",
        verified: true
      },
      tags: ["4K Ultra", "Sensual", "Premium"]
    },
    {
      id: 2,
      titulo: "Live Session - Amanda",
      thumbnail: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&h=600&fit=crop&crop=face",
      duracao: "25:30",
      views: "189K",
      likes: "32.8K",
      rating: 4.8,
      premium: true,
      hot: false,
      modelo: {
        nome: "Amanda Silva",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
        idade: 22,
        localizacao: "Rio de Janeiro",
        verified: true
      },
      tags: ["Live", "Interactive", "HD"]
    },
    {
      id: 3,
      titulo: "4K Collection - Sophia",
      thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=600&fit=crop&crop=face",
      duracao: "18:22",
      views: "345K",
      likes: "67.5K",
      rating: 4.9,
      premium: true,
      hot: true,
      modelo: {
        nome: "Sophia Rodriguez",
        avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face",
        idade: 26,
        localizacao: "Barcelona",
        verified: true
      },
      tags: ["4K", "Artistic", "Fire"]
    },
    {
      id: 4,
      titulo: "Behind Scenes - Valentina",
      thumbnail: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=500&h=600&fit=crop&crop=face",
      duracao: "15:45",
      views: "156K",
      likes: "29.8K",
      rating: 4.7,
      premium: false,
      hot: false,
      modelo: {
        nome: "Valentina Costa",
        avatar: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=100&h=100&fit=crop&crop=face",
        idade: 23,
        localizacao: "Florianópolis",
        verified: false
      },
      tags: ["Behind", "Scenes", "Fun"]
    },
    {
      id: 5,
      titulo: "Exclusive VIP - Mia",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face",
      duracao: "22:18",
      views: "423K",
      likes: "85.3K",
      rating: 4.9,
      premium: true,
      hot: true,
      modelo: {
        nome: "Mia Johnson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        idade: 25,
        localizacao: "Los Angeles",
        verified: true
      },
      tags: ["VIP", "Exclusive", "Ultra"]
    },
    {
      id: 6,
      titulo: "Shadow Series - Luna",
      thumbnail: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&h=600&fit=crop&crop=face",
      duracao: "19:35",
      views: "278K",
      likes: "54.7K",
      rating: 4.6,
      premium: true,
      hot: false,
      modelo: {
        nome: "Luna Martinez",
        avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face",
        idade: 21,
        localizacao: "Miami",
        verified: true
      },
      tags: ["Shadow", "Mystery", "Art"]
    }
  ];

  return (
    <section className="py-16 bg-black/95 backdrop-blur-xl">
      <div className="w-full max-w-none mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 border border-red-500 rounded-full text-white text-sm font-bold mb-4 shadow-lg shadow-red-500/50">
            <FaFire className="w-4 h-4 mr-2" />
            HOT VIDEOS COLLECTION
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
            {titulo}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {subtitulo}
          </p>
        </div>

        {/* Carrossel de Vídeos - Altura maior */}
        <div className="relative overflow-hidden rounded-3xl">
          <div className="flex space-x-8 animate-scroll-infinite">
            {[...videos, ...videos].map((video, index) => (
              <Link
                key={`${video.id}-${index}`}
                href={`/hot-videos/${video.id}`}
                className="relative flex-shrink-0 w-80 h-[500px] rounded-3xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 shadow-2xl shadow-black/50"
              >
                {/* Thumbnail com Glass Effect */}
                <img
                  src={video.thumbnail}
                  alt={video.titulo}
                  className="w-full h-full object-cover filter contrast-110 saturate-110"
                />
                
                {/* Glass Overlay Premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent backdrop-blur-[2px]"></div>
                
                {/* Glass Top Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"></div>

                {/* Play Button Center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-2xl">
                    <FaPlay className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-sm font-bold rounded-lg border border-white/20">
                  {video.duracao}
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  {video.premium && (
                    <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-white text-xs font-bold shadow-lg border border-white/20">
                      <FaCrown className="w-3 h-3" />
                      <span>PREMIUM</span>
                    </div>
                  )}
                  {video.hot && (
                    <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-white text-xs font-bold shadow-lg border border-white/20">
                      <FaFire className="w-3 h-3" />
                      <span>HOT</span>
                    </div>
                  )}
                </div>

                {/* Model Info Overlay - Hover */}
                <div className="absolute top-20 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <img
                        src={video.modelo.avatar}
                        alt={video.modelo.nome}
                        className="w-10 h-10 rounded-xl object-cover border border-white/30"
                      />
                      <div>
                        <div className="flex items-center space-x-1">
                          <h4 className="text-white font-bold text-sm">{video.modelo.nome}</h4>
                          {video.modelo.verified && (
                            <FaAward className="w-4 h-4 text-blue-400" />
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-300">
                          <div className="flex items-center space-x-1">
                            <FaCalendar className="w-3 h-3" />
                            <span>{video.modelo.idade}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaMapMarkerAlt className="w-3 h-3" />
                            <span>{video.modelo.localizacao}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {video.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-red-500/20 border border-red-500/30 text-red-300 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info Bottom com Glass */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-xl border-t border-white/10">
                  <div className="text-white">
                    <h3 className="font-black text-xl mb-3">{video.titulo}</h3>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <FaStar className="w-4 h-4 text-yellow-400" />
                          <span className="font-bold">{video.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-red-400">
                          <FaHeart className="w-4 h-4" />
                          <span>{video.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-300">
                          <FaEye className="w-4 h-4" />
                          <span>{video.views}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-center text-sm font-bold hover:bg-white/20 transition-all">
                        Assistir Vídeo
                      </div>
                      <div className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-sm font-bold hover:scale-105 transition-all shadow-lg shadow-red-500/25">
                        VIP
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-red-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HotVideosPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header usuario={{
        nome: "VIP Member",
        email: "vip@hotlovers.com",
        foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        tipo: "assinante" as const
      }} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-20"></div>
          
          <div className="relative text-center px-6">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 border border-red-500 rounded-full text-white text-sm font-bold mb-8 shadow-lg shadow-red-500/50">
              <FaPlay className="w-5 h-5 mr-2" />
              HOT VIDEOS PREMIUM COLLECTION
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-6 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
              VÍDEOS EXCLUSIVOS
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Os vídeos mais quentes e exclusivos das top models. Conteúdo premium em 4K Ultra HD.
            </p>

            {/* Stats Premium */}
            <div className="flex items-center justify-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-black text-white">500+</div>
                <div className="text-sm text-gray-400">Vídeos 4K</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">50+</div>
                <div className="text-sm text-gray-400">Top Models</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">∞</div>
                <div className="text-sm text-gray-400">Acesso Ilimitado</div>
              </div>
            </div>
          </div>
        </section>

        {/* Carrosséis de Vídeos */}
        <CarrosselVideo 
          titulo="MAIS ASSISTIDOS" 
          subtitulo="Os vídeos mais populares e quentes da semana"
        />
        
        <CarrosselVideo 
          titulo="TOP MODELS" 
          subtitulo="Conteúdo exclusivo das modelos mais desejadas"
        />
        
        <CarrosselVideo 
          titulo="PREMIUM 4K" 
          subtitulo="Qualidade cinematográfica em Ultra HD"
        />

        <CarrosselVideo 
          titulo="RECÉM ADICIONADOS" 
          subtitulo="Os lançamentos mais recentes e exclusivos"
        />
      </main>

      <FooterSimples />
      
      {/* Componentes flutuantes */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}