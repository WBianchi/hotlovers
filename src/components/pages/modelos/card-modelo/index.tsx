"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, MessageCircle, Eye, Star, Crown, MapPin, Users, Zap } from "lucide-react";

interface Modelo {
  id: string;
  nome: string;
  idade: number;
  localizacao: string;
  foto: string;
  fotos: string[];
  avaliacao: number;
  totalAvaliacoes: number;
  seguidores: number;
  preco: number;
  status: 'online' | 'ocupada' | 'offline';
  verificada: boolean;
  premium: boolean;
  categoria: string;
  bio: string;
  tags: string[];
}

interface CardModeloProps {
  modelo: Modelo;
  className?: string;
}

export function CardModelo({ modelo, className }: CardModeloProps) {
  const [fotoAtual, setFotoAtual] = useState(0);
  const [favorito, setFavorito] = useState(false);
  const [hover, setHover] = useState(false);

  const proximaFoto = () => {
    setFotoAtual((prev) => (prev + 1) % modelo.fotos.length);
  };

  const fotoAnterior = () => {
    setFotoAtual((prev) => (prev - 1 + modelo.fotos.length) % modelo.fotos.length);
  };

  const getStatusColor = () => {
    switch (modelo.status) {
      case 'online': return 'bg-green-500';
      case 'ocupada': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch (modelo.status) {
      case 'online': return 'Online';
      case 'ocupada': return 'Ocupada';
      default: return 'Offline';
    }
  };

  return (
    <div 
      className={`group relative bg-background rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:border-hotlovers-red/30 transition-all duration-500 ${className || ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Header da foto */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {/* Foto principal */}
        <img
          src={modelo.fotos[fotoAtual]}
          alt={modelo.nome}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

        {/* Navegação de fotos */}
        {modelo.fotos.length > 1 && hover && (
          <>
            <button
              onClick={fotoAnterior}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
            >
              ←
            </button>
            <button
              onClick={proximaFoto}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
            >
              →
            </button>
          </>
        )}

        {/* Indicadores de foto */}
        {modelo.fotos.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {modelo.fotos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === fotoAtual ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {/* Status e badges superiores */}
        <div className="absolute top-3 left-3 flex items-center space-x-2">
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor()}`}>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span>{getStatusText()}</span>
          </div>
          {modelo.verificada && (
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <Crown className="w-3 h-3 text-white" />
            </div>
          )}
          {modelo.premium && (
            <div className="w-6 h-6 bg-hotlovers-gradient rounded-full flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
          )}
        </div>

        {/* Botão favorito */}
        <button
          onClick={() => setFavorito(!favorito)}
          className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-all"
        >
          <Heart 
            className={`w-4 h-4 transition-all ${favorito ? 'text-hotlovers-red fill-current' : 'text-white'}`} 
          />
        </button>

        {/* Info overlay bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">{modelo.nome}</h3>
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <span>{modelo.idade} anos</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{modelo.localizacao}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">R$ {modelo.preco}</div>
              <div className="text-xs text-white/80">por mês</div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-4 space-y-4">
        {/* Avaliação e stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="font-medium">{modelo.avaliacao.toFixed(1)}</span>
            <span className="text-muted-foreground text-sm">({modelo.totalAvaliacoes})</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
            <Users className="w-4 h-4" />
            <span>{modelo.seguidores > 1000 ? `${(modelo.seguidores/1000).toFixed(1)}K` : modelo.seguidores}</span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {modelo.bio}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {modelo.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {modelo.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground">
              +{modelo.tags.length - 3}
            </span>
          )}
        </div>

        {/* Botões de ação */}
        <div className="grid grid-cols-3 gap-2">
          <Link
            href={`/modelos/${modelo.id}`}
            className="flex items-center justify-center space-x-1 px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
          >
            <Eye className="w-4 h-4" />
            <span>Ver</span>
          </Link>
          <button className="flex items-center justify-center space-x-1 px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
            <MessageCircle className="w-4 h-4" />
            <span>Chat</span>
          </button>
          <button className="flex items-center justify-center space-x-1 px-3 py-2 bg-hotlovers-gradient text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg">
            <Crown className="w-4 h-4" />
            <span>Assinar</span>
          </button>
        </div>
      </div>

      {/* Hover overlay com mais opções */}
      {hover && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="space-y-3 text-center">
            <Link
              href={`/modelos/${modelo.id}`}
              className="block px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-all"
            >
              Ver Perfil Completo
            </Link>
            <button className="block px-6 py-3 bg-hotlovers-gradient text-white rounded-xl font-bold hover:scale-105 transition-all">
              Assinar por R$ {modelo.preco}/mês
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardModelo;
