"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Star, Crown, Zap, MapPin } from "lucide-react";

interface ModeloCarrosselProps {
  titulo: string;
}

export function ModeloCarrossel({ titulo }: ModeloCarrosselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favoritas, setFavoritas] = useState<Set<string>>(new Set());

  // Mock de modelos similares
  const modelos = [
    {
      id: "2",
      nome: "Amanda Silva",
      idade: 26,
      localizacao: "Rio de Janeiro, BR",
      foto: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop&crop=face",
      avaliacao: 4.6,
      avaliacoes: 892,
      precoMensal: 24.90,
      status: 'online' as const,
      verificada: true,
      premium: false,
      tags: ["Praia", "Sol", "Lifestyle"]
    },
    {
      id: "3",
      nome: "Sophia Rodriguez", 
      idade: 22,
      localizacao: "Barcelona, ES",
      foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=face",
      avaliacao: 4.9,
      avaliacoes: 1247,
      precoMensal: 34.90,
      status: 'online' as const,
      verificada: true,
      premium: true,
      tags: ["Dance", "Art", "Sensual"]
    },
    {
      id: "4",
      nome: "Valentina Costa",
      idade: 24,
      localizacao: "Florianópolis, BR", 
      foto: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=400&h=500&fit=crop&crop=face",
      avaliacao: 4.7,
      avaliacoes: 634,
      precoMensal: 27.90,
      status: 'ocupada' as const,
      verificada: false,
      premium: false,
      tags: ["Surf", "Praia", "Lifestyle"]
    },
    {
      id: "5",
      nome: "Mia Johnson",
      idade: 25,
      localizacao: "Los Angeles, US",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      avaliacao: 4.5,
      avaliacoes: 1534,
      precoMensal: 39.90,
      status: 'online' as const,
      verificada: true,
      premium: true,
      tags: ["Hollywood", "Glamour", "Fashion"]
    },
    {
      id: "6",
      nome: "Luna Martinez",
      idade: 21,
      localizacao: "Miami, US",
      foto: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop&crop=face",
      avaliacao: 4.4,
      avaliacoes: 456,
      precoMensal: 22.90,
      status: 'offline' as const,
      verificada: true,
      premium: false,
      tags: ["Beach", "Fitness", "Miami"]
    },
    {
      id: "7",
      nome: "Camila Restrepo",
      idade: 23,
      localizacao: "Medellín, CO",
      foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop&crop=face",
      avaliacao: 4.8,
      avaliacoes: 789,
      precoMensal: 28.90,
      status: 'online' as const,
      verificada: true,
      premium: true,
      tags: ["Latina", "Sensual", "Fitness"]
    }
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, modelos.length - itemsPerView);

  const next = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleFavoritar = (id: string) => {
    setFavoritas(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'ocupada': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'Online';
      case 'ocupada': return 'Ocupada';
      default: return 'Offline';
    }
  };

  return (
    <section className="py-12 bg-background">
      <div className="w-full max-w-none mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-hotlovers-red/10 text-hotlovers-red rounded-full text-sm font-medium mb-3">
              Modelos Similares
            </div>
            <h2 className="text-2xl font-black text-foreground mb-2">
              Descubra outras modelos incríveis
            </h2>
            <p className="text-muted-foreground">
              Que você vai adorar conhecer e acompanhar
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-background border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-hotlovers-red hover:text-white hover:border-hotlovers-red transition-all flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 rounded-full bg-background border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-hotlovers-red hover:text-white hover:border-hotlovers-red transition-all flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
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
                  {modelo.status === 'online' && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-hotlovers-red rounded-full text-xs text-white font-medium">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span>Online</span>
                    </div>
                  )}
                  {modelo.verificada && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Crown className="w-3 h-3 text-white" />
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
                    <div className="flex-1 py-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all text-sm font-medium text-center">
                      Ver Perfil
                    </div>
                    <div className="px-4 py-2 bg-hotlovers-gradient rounded-lg hover:scale-105 transition-all text-sm font-medium text-white">
                      Chat
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-hotlovers-red w-8' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModeloCarrossel;
