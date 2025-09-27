"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";
import Link from "next/link";
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Heart, Share, Eye, 
  Clock, Star, Crown, Zap, ThumbsUp, MessageCircle, Bookmark,
  Calendar, Users, Camera, Shield, ArrowLeft, MoreHorizontal
} from "lucide-react";
import { FaFire, FaHeart, FaPlay, FaStar, FaEye, FaCrown } from "react-icons/fa";

// Mock data do vídeo
const getVideoData = (id: string) => {
  return {
    id: id,
    titulo: "Sessão Exclusiva: Isabella em Paris",
    descricao: "Uma sessão íntima e sensual da nossa top model Isabella durante sua viagem a Paris. Conteúdo exclusivo premium com qualidade 4K.",
    duracao: "12:45",
    visualizacoes: "156.8K",
    likes: "8.9K",
    dataPublicacao: "2024-01-15",
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=800&h=600&fit=crop&crop=face",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    tags: ["Premium", "4K", "Exclusivo", "Paris", "Sensual"],
    categoria: "Premium",
    avaliacao: 4.9,
    totalAvaliacoes: 1247,
    modelo: {
      id: "1",
      nome: "Isabella Santos",
      username: "@isabella_hot",
      foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=100&h=100&fit=crop&crop=face",
      verificada: true,
      nivel: "VIP",
      seguidores: "125K",
      videos: 89,
      bio: "Top model internacional 🌟 Conteúdo exclusivo e interativo 💕",
      precoAssinatura: 29.90
    }
  };
};

// Mock data dos vídeos relacionados
const getVideosRelacionados = () => {
  return [
    {
      id: "4",
      titulo: "Isabella: Bastidores NYC",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop&crop=face",
      duracao: "8:32",
      visualizacoes: "89.2K",
      premium: true
    },
    {
      id: "5", 
      titulo: "Sessão Golden Hour",
      thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop&crop=face",
      duracao: "15:20",
      visualizacoes: "203K",
      premium: true
    },
    {
      id: "6",
      titulo: "Live Interativa Especial",
      thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop&crop=face", 
      duracao: "45:18",
      visualizacoes: "67.5K",
      premium: false
    }
  ];
};

// Componente Video Player
function VideoPlayer({ video }: { video: any }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  return (
    <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden group">
      {/* Thumbnail/Preview */}
      <div className="absolute inset-0">
        <img
          src={video.thumbnail}
          alt={video.titulo}
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
      </div>

      {/* Floating Badges */}
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <div className="px-3 py-1 bg-hotlovers-gradient rounded-full text-white text-xs font-bold flex items-center space-x-1 animate-pulse-soft">
          <FaCrown className="w-3 h-3" />
          <span>PREMIUM</span>
        </div>
        <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
          4K UHD
        </div>
        <div className="px-3 py-1 bg-green-500 rounded-full text-white text-xs font-bold animate-pulse">
          AO VIVO
        </div>
      </div>

      {/* Top Right Badges */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-hotlovers-red/20 transition-all">
          <Heart className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-hotlovers-red/20 transition-all">
          <Share className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-hotlovers-red/20 transition-all">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>

      {/* Center Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-20 h-20 bg-hotlovers-gradient rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 group"
        >
          {isPlaying ? (
            <Pause className="w-10 h-10 ml-1" />
          ) : (
            <FaPlay className="w-8 h-8 ml-1" />
          )}
        </button>
      </div>

      {/* Bottom Controls */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/20 rounded-full mb-3 cursor-pointer">
          <div className="w-1/3 h-full bg-hotlovers-gradient rounded-full relative">
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-hotlovers-red transition-colors">
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMuted(!isMuted)} className="hover:text-hotlovers-red transition-colors">
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <span className="text-sm font-medium">3:45 / {video.duracao}</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Eye className="w-4 h-4" />
              <span>{video.visualizacoes}</span>
            </div>
            <button className="hover:text-hotlovers-red transition-colors">
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-20 left-4 flex flex-col space-y-2">
        <div className="flex items-center space-x-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
          <FaEye className="w-3 h-3 text-hotlovers-red" />
          <span>{video.visualizacoes}</span>
        </div>
        <div className="flex items-center space-x-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
          <FaHeart className="w-3 h-3 text-red-500" />
          <span>{video.likes}</span>
        </div>
      </div>
    </div>
  );
}

// Componente Info da Modelo
function ModeloInfo({ video }: { video: any }) {
  const [seguindo, setSeguindo] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header da Modelo */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={video.modelo.foto}
            alt={video.modelo.nome}
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-hotlovers-red/20"
          />
          {video.modelo.verificada && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-hotlovers-gradient rounded-full flex items-center justify-center">
              <Shield className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h2 className="text-xl font-black text-foreground">{video.modelo.nome}</h2>
            {video.modelo.nivel === 'VIP' && (
              <div className="px-2 py-0.5 bg-hotlovers-gradient rounded-full">
                <FaCrown className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <p className="text-muted-foreground text-sm">{video.modelo.username}</p>
          <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
            <span>{video.modelo.seguidores} seguidores</span>
            <span>{video.modelo.videos} vídeos</span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-muted-foreground leading-relaxed">{video.modelo.bio}</p>

      {/* Título e Descrição do Vídeo */}
      <div className="space-y-4">
        <h1 className="text-3xl font-black text-foreground leading-tight">{video.titulo}</h1>
        <p className="text-muted-foreground leading-relaxed">{video.descricao}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {video.tags.map((tag: string, index: number) => (
          <span key={index} className="px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground border border-border hover:border-hotlovers-red/50 transition-colors">
            #{tag}
          </span>
        ))}
      </div>

      {/* Avaliação */}
      <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-2xl border border-border">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className={`w-4 h-4 ${i < Math.floor(video.avaliacao) ? 'text-yellow-500' : 'text-muted-foreground/30'}`} />
            ))}
          </div>
          <span className="font-bold text-foreground">{video.avaliacao}</span>
        </div>
        <div className="text-sm text-muted-foreground">
          {video.totalAvaliacoes.toLocaleString()} avaliações
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-background border border-border rounded-2xl">
          <div className="text-2xl font-black text-hotlovers-red">{video.visualizacoes}</div>
          <div className="text-sm text-muted-foreground">Visualizações</div>
        </div>
        <div className="text-center p-4 bg-background border border-border rounded-2xl">
          <div className="text-2xl font-black text-hotlovers-red">{video.likes}</div>
          <div className="text-sm text-muted-foreground">Curtidas</div>
        </div>
        <div className="text-center p-4 bg-background border border-border rounded-2xl">
          <div className="text-2xl font-black text-hotlovers-red">{Math.floor(video.avaliacao * 20)}%</div>
          <div className="text-sm text-muted-foreground">Aprovação</div>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="space-y-3">
        <button className="w-full py-4 bg-hotlovers-gradient text-white font-bold rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-hotlovers-red/25 flex items-center justify-center space-x-2">
          <FaCrown className="w-5 h-5" />
          <span>Assinar por R$ {video.modelo.precoAssinatura.toFixed(2)}/mês</span>
        </button>
        
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => setSeguindo(!seguindo)}
            className={`py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center space-x-2 ${
              seguindo 
                ? 'bg-hotlovers-red/10 text-hotlovers-red border border-hotlovers-red' 
                : 'border border-border text-foreground hover:border-hotlovers-red/50 hover:text-hotlovers-red'
            }`}
          >
            <Heart className={`w-4 h-4 ${seguindo ? 'fill-current' : ''}`} />
            <span>{seguindo ? 'Seguindo' : 'Seguir'}</span>
          </button>
          
          <button className="py-3 px-4 border border-border text-foreground rounded-xl hover:border-hotlovers-red/50 hover:text-hotlovers-red transition-all flex items-center justify-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>Chat</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente Vídeos Relacionados
function VideosRelacionados({ videos }: { videos: any[] }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FaFire className="w-5 h-5 text-hotlovers-red" />
        <h3 className="text-xl font-black text-foreground">Mais Vídeos</h3>
      </div>
      
      <div className="space-y-4">
        {videos.map((video) => (
          <Link
            key={video.id}
            href={`/hot-videos/${video.id}`}
            className="group block"
          >
            <div className="flex space-x-3 p-3 rounded-2xl hover:bg-muted/30 transition-all border border-transparent hover:border-hotlovers-red/20">
              <div className="relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={video.thumbnail}
                  alt={video.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Duration */}
                <div className="absolute bottom-1 right-1 px-2 py-0.5 bg-black/70 rounded text-white text-xs font-medium">
                  {video.duracao}
                </div>
                {/* Premium badge */}
                {video.premium && (
                  <div className="absolute top-1 left-1 p-1 bg-hotlovers-gradient rounded">
                    <FaCrown className="w-2 h-2 text-white" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-foreground text-sm line-clamp-2 group-hover:text-hotlovers-red transition-colors">
                  {video.titulo}
                </h4>
                <div className="flex items-center space-x-2 mt-1 text-xs text-muted-foreground">
                  <Eye className="w-3 h-3" />
                  <span>{video.visualizacoes}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Ver Todos */}
      <Link
        href="/hot-videos"
        className="block w-full py-3 text-center text-hotlovers-red font-medium border border-hotlovers-red/50 rounded-xl hover:bg-hotlovers-red/5 transition-all"
      >
        Ver Todos os Vídeos
      </Link>
    </div>
  );
}

export default function VideoSinglePage({ params }: { params: { id: string } }) {
  const video = getVideoData(params.id);
  const videosRelacionados = getVideosRelacionados();
  
  const usuarioExemplo = {
    nome: "João Silva",
    email: "joao@email.com", 
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    tipo: "assinante" as const
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header usuario={usuarioExemplo} />
      
      <main className="flex-1">
        {/* Hero Header */}
        <section className="py-8 bg-muted/20 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="flex items-center space-x-4 mb-4">
              <Link 
                href="/hot-videos"
                className="flex items-center space-x-2 text-muted-foreground hover:text-hotlovers-red transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar aos Vídeos</span>
              </Link>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20">
                  <FaFire className="w-4 h-4 text-hotlovers-red" />
                  <span className="text-sm font-semibold text-hotlovers-red">
                    Vídeo Premium
                  </span>
                  <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(video.dataPublicacao).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="w-10 h-10 border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-hotlovers-red hover:border-hotlovers-red/50 transition-all">
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-hotlovers-red hover:border-hotlovers-red/50 transition-all">
                  <Share className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-hotlovers-red hover:border-hotlovers-red/50 transition-all">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Video Player - 70% width */}
              <div className="lg:col-span-8">
                <VideoPlayer video={video} />
                
                {/* Video Info Mobile */}
                <div className="lg:hidden mt-6">
                  <ModeloInfo video={video} />
                </div>
              </div>

              {/* Sidebar - 30% width */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* Model Info Desktop */}
                <div className="hidden lg:block">
                  <ModeloInfo video={video} />
                </div>
                
                {/* Related Videos */}
                <div className="lg:sticky lg:top-8">
                  <VideosRelacionados videos={videosRelacionados} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Componentes flutuantes */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}