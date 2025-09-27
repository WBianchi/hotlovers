"use client";

import { Eye, Heart, MessageCircle, Star, TrendingUp, Users, Clock, Calendar } from "lucide-react";

interface ModeloStatsProps {
  modelo: {
    seguidores: number;
    likes: number;
    fotos: number;
    videos: number;
    avaliacao: number;
    avaliacoes: number;
  };
}

export function ModeloStats({ modelo }: ModeloStatsProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const stats = [
    {
      icon: Users,
      label: "Seguidores",
      value: formatNumber(modelo.seguidores),
      change: "+12.5%",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Heart,
      label: "Total de Likes",
      value: formatNumber(modelo.likes),
      change: "+8.3%",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    },
    {
      icon: Eye,
      label: "Visualizações",
      value: formatNumber(modelo.likes * 3),
      change: "+15.7%",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Star,
      label: "Avaliação",
      value: modelo.avaliacao.toFixed(1),
      subtitle: `${formatNumber(modelo.avaliacoes)} reviews`,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: MessageCircle,
      label: "Mensagens",
      value: "2.4K",
      change: "+23.1%",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: TrendingUp,
      label: "Popularidade",
      value: "Top 5%",
      subtitle: "Entre todas",
      color: "text-hotlovers-red",
      bgColor: "bg-hotlovers-red/10"
    }
  ];

  const timeStats = [
    {
      icon: Clock,
      label: "Tempo Online",
      value: "8h/dia",
      subtitle: "Média diária"
    },
    {
      icon: Calendar,
      label: "Na Plataforma",
      value: "2 anos",
      subtitle: "Membro desde 2022"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="w-full max-w-none mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
            📊 Estatísticas & Performance
          </h2>
          <p className="text-muted-foreground text-lg">
            Dados em tempo real da atividade e engajamento
          </p>
        </div>

        {/* Stats principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-6 bg-background border border-border rounded-2xl hover:border-hotlovers-red/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl lg:text-3xl font-black text-foreground">
                      {stat.value}
                    </span>
                    {stat.change && (
                      <span className="text-sm font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                        {stat.change}
                      </span>
                    )}
                  </div>
                  {stat.subtitle && (
                    <p className="text-sm text-muted-foreground">
                      {stat.subtitle}
                    </p>
                  )}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-hotlovers-gradient opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"></div>
              </div>
            );
          })}
        </div>

        {/* Stats secundárias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {timeStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 bg-muted/30 rounded-2xl"
              >
                <div className="w-10 h-10 bg-hotlovers-red/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-hotlovers-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{stat.label}</h3>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement badges */}
        <div className="bg-muted/20 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center space-x-2">
            <Star className="w-5 h-5 text-hotlovers-red" />
            <span>Conquistas & Badges</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <p className="text-xs font-medium text-foreground">Top Rated</p>
              <p className="text-xs text-muted-foreground">4.5+ stars</p>
            </div>

            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="w-8 h-8 bg-hotlovers-red rounded-full mx-auto mb-2 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <p className="text-xs font-medium text-foreground">Most Loved</p>
              <p className="text-xs text-muted-foreground">100K+ likes</p>
            </div>

            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <p className="text-xs font-medium text-foreground">Trending</p>
              <p className="text-xs text-muted-foreground">Top 5%</p>
            </div>

            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <p className="text-xs font-medium text-foreground">Popular</p>
              <p className="text-xs text-muted-foreground">100K+ follows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModeloStats;
