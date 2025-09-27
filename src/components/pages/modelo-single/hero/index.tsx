"use client";

import { useState } from "react";
import { Heart, MessageCircle, Star, MapPin, Calendar, Users, Eye, Crown, Zap, Shield, Instagram, Twitter, Share2 } from "lucide-react";

interface ModeloHeroProps {
  modelo: {
    id: string;
    nome: string;
    idade: number;
    localizacao: string;
    capa: string;
    avatar: string;
    bio: string;
    seguidores: number;
    likes: number;
    fotos: number;
    videos: number;
    avaliacao: number;
    avaliacoes: number;
    precoMensal: number;
    online: boolean;
    verificada: boolean;
    premium: boolean;
    tags: string[];
    redesSociais: {
      instagram: string;
      twitter: string;
    };
  };
  usuario: {
    assinante: boolean;
    tipo: string;
  };
  onAssinatura: () => void;
  onChat: () => void;
}

export function ModeloHero({ modelo, usuario, onAssinatura, onChat }: ModeloHeroProps) {
  const [favorito, setFavorito] = useState(false);
  const [seguindo, setSeguindo] = useState(false);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${modelo.nome} - HotLovers`,
        text: modelo.bio,
        url: window.location.href
      });
    }
  };

  return (
    <div className="relative">
      {/* Capa com blur para não-assinantes */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <img
          src={modelo.capa}
          alt={`Capa de ${modelo.nome}`}
          className={`w-full h-full object-cover transition-all duration-500 ${
            !usuario.assinante ? 'blur-md scale-110' : ''
          }`}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Overlay para não-assinantes */}
        {!usuario.assinante && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-md">
            <div className="text-center text-white p-8 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl">
              <Crown className="w-12 h-12 text-hotlovers-red mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Conteúdo Premium</h3>
              <p className="text-white/80 mb-4">Assine para ver fotos e vídeos exclusivos</p>
              <button
                onClick={onAssinatura}
                className="px-6 py-3 bg-hotlovers-gradient text-white font-bold rounded-xl hover:scale-105 transition-all"
              >
                Assinar por R$ {modelo.precoMensal.toFixed(2)}/mês
              </button>
            </div>
          </div>
        )}

        {/* Status e badges */}
        <div className="absolute top-6 left-6 flex items-center space-x-3">
          {modelo.online && (
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-hotlovers-red rounded-full text-sm text-white font-medium shadow-lg">
              <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
              <span>Online Agora</span>
            </div>
          )}
          {modelo.verificada && (
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <Crown className="w-5 h-5 text-white" />
            </div>
          )}
          {modelo.premium && (
            <div className="w-10 h-10 bg-black/80 rounded-full flex items-center justify-center shadow-lg">
              <Zap className="w-5 h-5 text-hotlovers-red" />
            </div>
          )}
        </div>

        {/* Ações do usuário */}
        <div className="absolute top-6 right-6 flex items-center space-x-3">
          <button
            onClick={() => setFavorito(!favorito)}
            className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-all backdrop-blur-sm"
          >
            <Heart className={`w-5 h-5 transition-all ${favorito ? 'text-hotlovers-red fill-current' : 'text-white'}`} />
          </button>
          <button
            onClick={handleShare}
            className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-all backdrop-blur-sm"
          >
            <Share2 className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Perfil Info */}
      <div className="relative -mt-20 mx-6 lg:mx-16">
        <div className="bg-background/95 backdrop-blur-lg rounded-2xl border border-border shadow-2xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end space-y-6 lg:space-y-0 lg:space-x-8">
            
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <img
                src={modelo.avatar}
                alt={modelo.nome}
                className={`w-32 h-32 lg:w-40 lg:h-40 rounded-2xl object-cover border-4 border-background shadow-2xl ${
                  !usuario.assinante ? 'blur-sm' : ''
                }`}
              />
              {modelo.online && (
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-background rounded-full"></div>
              )}
            </div>

            {/* Info Principal */}
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl lg:text-4xl font-black text-foreground">
                    {modelo.nome}
                  </h1>
                  {modelo.verificada && (
                    <Shield className="w-6 h-6 text-blue-500" />
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{modelo.idade} anos</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{modelo.localizacao}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{modelo.avaliacao}</span>
                    <span className="text-sm">({formatNumber(modelo.avaliacoes)} avaliações)</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-muted/30 rounded-xl">
                  <div className="text-2xl font-black text-foreground">{formatNumber(modelo.seguidores)}</div>
                  <div className="text-sm text-muted-foreground">Seguidores</div>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-xl">
                  <div className="text-2xl font-black text-foreground">{formatNumber(modelo.likes)}</div>
                  <div className="text-sm text-muted-foreground">Likes</div>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-xl">
                  <div className="text-2xl font-black text-foreground">{modelo.fotos}</div>
                  <div className="text-sm text-muted-foreground">Fotos</div>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-xl">
                  <div className="text-2xl font-black text-foreground">{modelo.videos}</div>
                  <div className="text-sm text-muted-foreground">Vídeos</div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-3">
                <p className="text-foreground leading-relaxed">
                  {usuario.assinante ? modelo.bio : `${modelo.bio.substring(0, 100)}...`}
                  {!usuario.assinante && (
                    <button
                      onClick={onAssinatura}
                      className="text-hotlovers-red font-medium hover:underline ml-2"
                    >
                      Ver mais
                    </button>
                  )}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {modelo.tags.slice(0, usuario.assinante ? modelo.tags.length : 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-hotlovers-red/10 text-hotlovers-red rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {!usuario.assinante && modelo.tags.length > 3 && (
                    <button
                      onClick={onAssinatura}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +{modelo.tags.length - 3} mais
                    </button>
                  )}
                </div>

                {/* Redes Sociais - só para assinantes */}
                {usuario.assinante && (
                  <div className="flex items-center space-x-4 pt-2">
                    <span className="text-sm text-muted-foreground">Redes sociais:</span>
                    <a
                      href={`https://instagram.com/${modelo.redesSociais.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-hotlovers-red hover:text-hotlovers-red/80 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      <span className="text-sm">{modelo.redesSociais.instagram}</span>
                    </a>
                    <a
                      href={`https://twitter.com/${modelo.redesSociais.twitter.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-hotlovers-red hover:text-hotlovers-red/80 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      <span className="text-sm">{modelo.redesSociais.twitter}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col space-y-3 min-w-fit">
              {!usuario.assinante ? (
                <button
                  onClick={onAssinatura}
                  className="flex items-center justify-center space-x-2 px-8 py-4 bg-hotlovers-gradient text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <Crown className="w-5 h-5" />
                  <span>Assinar R$ {modelo.precoMensal.toFixed(2)}/mês</span>
                </button>
              ) : (
                <div className="flex items-center space-x-2 px-6 py-3 bg-green-500/10 text-green-600 rounded-xl border border-green-500/20">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Assinante Ativo</span>
                </div>
              )}
              
              <button
                onClick={onChat}
                className="flex items-center justify-center space-x-2 px-8 py-3 border-2 border-hotlovers-red text-hotlovers-red hover:bg-hotlovers-red hover:text-white font-bold rounded-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat Privado</span>
              </button>

              <button
                onClick={() => setSeguindo(!seguindo)}
                className={`flex items-center justify-center space-x-2 px-8 py-3 font-bold rounded-xl transition-all duration-300 ${
                  seguindo
                    ? 'bg-muted text-foreground'
                    : 'bg-background border-2 border-muted text-foreground hover:border-foreground'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>{seguindo ? 'Seguindo' : 'Seguir'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModeloHero;
