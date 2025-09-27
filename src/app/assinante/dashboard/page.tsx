"use client";

import { useEffect, useState } from "react";
import { Crown, Heart, Play, Star, Eye, Users, Flame, Gift } from "lucide-react";
import { FaFire, FaHeart, FaCrown, FaPlay, FaStar, FaEye } from "react-icons/fa";
import Link from "next/link";

export default function AssinanteDashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // TODO: Buscar dados do usuário logado via API
    setUser({
      nome: "Carlos Silva",
      email: "carlos@email.com",
      tipo: "assinante"
    });
  }, []);

  // Mock data das modelos favoritas
  const modelosFavoritas = [
    {
      id: "1",
      nome: "Isabella Santos",
      foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=100&h=100&fit=crop&crop=face",
      online: true,
      novoConteudo: 3
    },
    {
      id: "2", 
      nome: "Amanda Silva",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      online: false,
      novoConteudo: 1
    },
    {
      id: "3",
      nome: "Juliana Costa", 
      foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      online: true,
      novoConteudo: 5
    }
  ];

  // Mock data dos vídeos recentes
  const videosRecentes = [
    {
      id: "1",
      titulo: "Isabella: Ensaio Sensual",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=300&h=200&fit=crop",
      duracao: "12:45",
      views: "15.2K",
      premium: true
    },
    {
      id: "2",
      titulo: "Amanda: Behind the Scenes",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=200&fit=crop",
      duracao: "8:30",
      views: "8.7K",
      premium: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Premium Dashboard */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
                    alt="Profile"
                    className="w-16 h-16 rounded-2xl object-cover ring-2 ring-hotlovers-red/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-hotlovers-gradient rounded-full flex items-center justify-center border-2 border-background">
                    <FaCrown className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-black bg-hotlovers-gradient bg-clip-text text-transparent">
                    Dashboard VIP
                  </h1>
                  <p className="text-muted-foreground">Bem-vindo, {user?.nome}! 🔥</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-gradient rounded-full">
                  <FaCrown className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">Assinante Premium</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-hotlovers-red/10 to-red-500/10 border border-hotlovers-red/20 rounded-2xl">
              <div className="flex items-center space-x-3">
                <FaFire className="w-5 h-5 text-hotlovers-red" />
                <span className="text-sm font-semibold text-hotlovers-red">
                  5 novos conteúdos exclusivos disponíveis!
                </span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-6 bg-white border border-border rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-hotlovers-gradient opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-hotlovers-red/10 rounded-xl flex items-center justify-center">
                  <FaEye className="w-6 h-6 text-hotlovers-red" />
                </div>
                <span className="text-2xl font-black text-foreground">89</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Vídeos Assistidos</h3>
              <p className="text-sm text-muted-foreground">Este mês</p>
            </div>

            <div className="p-6 bg-white border border-border rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <FaHeart className="w-6 h-6 text-red-500" />
                </div>
                <span className="text-2xl font-black text-foreground">23</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Modelos Favoritas</h3>
              <p className="text-sm text-muted-foreground">Seguindo</p>
            </div>

            <div className="p-6 bg-white border border-border rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <FaStar className="w-6 h-6 text-yellow-500" />
                </div>
                <span className="text-2xl font-black text-foreground">156</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Curtidas Dadas</h3>
              <p className="text-sm text-muted-foreground">Total</p>
            </div>

            <div className="p-6 bg-white border border-border rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-2xl font-black text-foreground">12</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Dias Restantes</h3>
              <p className="text-sm text-muted-foreground">Assinatura atual</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Modelos Favoritas */}
            <div className="lg:col-span-1">
              <div className="p-6 bg-white border border-border rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                  <FaHeart className="w-5 h-5 text-red-500" />
                  <span>Suas Favoritas</span>
                </h3>
                <div className="space-y-4">
                  {modelosFavoritas.map((modelo) => (
                    <Link
                      key={modelo.id}
                      href={`/modelos/${modelo.id}`}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-muted/30 transition-all group"
                    >
                      <div className="relative">
                        <img
                          src={modelo.foto}
                          alt={modelo.nome}
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        {modelo.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground group-hover:text-hotlovers-red transition-colors">
                          {modelo.nome}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {modelo.online ? 'Online agora' : 'Offline'} • {modelo.novoConteudo} novos
                        </p>
                      </div>
                      {modelo.novoConteudo > 0 && (
                        <div className="w-6 h-6 bg-hotlovers-red rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{modelo.novoConteudo}</span>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
                
                <Link
                  href="/modelos"
                  className="block w-full mt-4 py-3 text-center text-hotlovers-red font-medium border border-hotlovers-red/50 rounded-xl hover:bg-hotlovers-red/5 transition-all"
                >
                  Ver Todas as Modelos
                </Link>
              </div>
            </div>

            {/* Vídeos Recentes */}
            <div className="lg:col-span-2">
              <div className="p-6 bg-white border border-border rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
                    <FaPlay className="w-5 h-5 text-hotlovers-red" />
                    <span>Novos Vídeos</span>
                  </h3>
                  <Link
                    href="/hot-videos"
                    className="text-sm text-hotlovers-red hover:underline font-medium"
                  >
                    Ver todos
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {videosRecentes.map((video) => (
                    <Link
                      key={video.id}
                      href={`/hot-videos/${video.id}`}
                      className="group block"
                    >
                      <div className="relative rounded-xl overflow-hidden mb-3">
                        <img
                          src={video.thumbnail}
                          alt={video.titulo}
                          className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {/* Premium badge */}
                        <div className="absolute top-2 left-2 px-2 py-1 bg-hotlovers-gradient rounded-full">
                          <FaCrown className="w-3 h-3 text-white" />
                        </div>
                        {/* Duration */}
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-white text-xs font-medium">
                          {video.duracao}
                        </div>
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                          <div className="w-12 h-12 bg-hotlovers-gradient rounded-full flex items-center justify-center">
                            <FaPlay className="w-4 h-4 text-white ml-1" />
                          </div>
                        </div>
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-hotlovers-red transition-colors mb-1">
                        {video.titulo}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <FaEye className="w-3 h-3" />
                        <span>{video.views} views</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link
              href="/hot-videos"
              className="p-6 bg-hotlovers-gradient text-white rounded-2xl hover:scale-105 transition-all text-center"
            >
              <FaPlay className="w-8 h-8 mx-auto mb-2" />
              <p className="font-bold">Vídeos Premium</p>
            </Link>
            
            <Link
              href="/modelos"
              className="p-6 border border-border text-foreground rounded-2xl hover:border-hotlovers-red/50 transition-all text-center group"
            >
              <FaHeart className="w-8 h-8 mx-auto mb-2 text-red-500 group-hover:text-hotlovers-red" />
              <p className="font-bold">Descobrir Modelos</p>
            </Link>
            
            <button className="p-6 border border-border text-foreground rounded-2xl hover:border-hotlovers-red/50 transition-all text-center group">
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-500 group-hover:text-hotlovers-red" />
              <p className="font-bold">Chat Privado</p>
            </button>
            
            <button className="p-6 border border-border text-foreground rounded-2xl hover:border-hotlovers-red/50 transition-all text-center group">
              <FaStar className="w-8 h-8 mx-auto mb-2 text-yellow-500 group-hover:text-hotlovers-red" />
              <p className="font-bold">Meus Favoritos</p>
            </button>
          </div>

          {/* Success Message */}
          <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-hotlovers-gradient rounded-full flex items-center justify-center">
                <FaCrown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-hotlovers-red">🎉 Bem-vindo ao seu painel VIP, Carlos!</h3>
                <p className="text-muted-foreground">
                  Login realizado com sucesso! Você está logado como <strong>Assinante Premium</strong>.
                  Aproveite todo o conteúdo exclusivo e interaja com suas modelos favoritas!
                </p>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-white/70 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <strong>Acesso liberado:</strong> Todos os vídeos premium, chat privado com modelos, 
                conteúdo exclusivo e muito mais! Sua experiência VIP está apenas começando! 🔥
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}