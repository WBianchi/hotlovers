"use client";

import Link from "next/link";
import { ArrowRight, Play, Heart, Star, Sparkles } from "lucide-react";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={`relative min-h-screen bg-background overflow-hidden ${className || ""}`}>
      {/* Background Blush Balls */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blush ball principal - vermelho opaco */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-hotlovers-red/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-pink-400/4 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-hotlovers-red/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative w-full max-w-none mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* CTA Left Side */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20">
              <Sparkles className="w-4 h-4 text-hotlovers-red" />
              <span className="text-sm font-semibold text-hotlovers-red">
                #1 Plataforma Premium do Brasil
              </span>
              <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
            </div>

            {/* Título Principal */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-foreground">Conteúdo</span>
                <br />
                <span className="text-hotlovers-red">
                  Exclusivo
                </span>
                <br />
                <span className="text-foreground">das Modelos</span>
                <br />
                <span className="text-hotlovers-red">
                  Mais Quentes
                </span>
              </h1>
            </div>

            {/* Parágrafo */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Acesse conteúdo premium e exclusivo das modelos mais desejadas do Brasil. 
              Vídeos, fotos e experiências únicas esperando por você.
            </p>

            {/* Stats pequenas */}
            <div className="flex items-center space-x-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-black text-hotlovers-red">500+</div>
                <div className="text-sm text-muted-foreground">Modelos Ativas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-hotlovers-red">50K+</div>
                <div className="text-sm text-muted-foreground">Conteúdos Premium</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-hotlovers-red">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte Online</div>
              </div>
            </div>

            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/modelos"
                className="group flex items-center justify-center space-x-3 px-8 py-4 bg-hotlovers-gradient text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <span>🔥 Explorar Modelos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/hot-videos"
                className="group flex items-center justify-center space-x-3 px-8 py-4 border-2 border-hotlovers-red text-hotlovers-red font-bold rounded-2xl hover:bg-hotlovers-red hover:text-white transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                <span>Ver Vídeos Hot</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4 opacity-70">
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">4.9/5 avaliação</span>
              </div>
              <div className="text-sm text-muted-foreground">
                🔒 100% Seguro e Discreto
              </div>
            </div>
          </div>

          {/* Shape Flutuante Right Side */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-[800px] h-[700px]">
              
              {/* Shape principal de fundo - formato retrato */}
              <div className="absolute inset-0 bg-gradient-to-br from-hotlovers-red/5 to-pink-500/5 rounded-[3rem] rotate-2 shadow-2xl"></div>
              <div className="absolute inset-2 bg-white/80 backdrop-blur-sm rounded-[2.5rem] -rotate-1 shadow-xl"></div>
              
              {/* Área para foto da modelo */}
              <div className="absolute inset-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] flex items-center justify-center overflow-hidden">
                {/* Modelo com fundo transparente - SCALE GIGANTE */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/modelo.png"
                    alt="Modelo HotLovers"
                    className="w-auto object-cover animate-float"
                    style={{
                      filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.2))',
                      transform: 'scale(2.2) translateX(20px) translateY(150px)',
                      height: '180%'
                    }}
                  />
                </div>
              </div>

              {/* Elementos flutuantes */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-hotlovers-gradient rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-white text-2xl">🔥</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              
              <div className="absolute top-20 -left-8 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              
              <div className="absolute bottom-32 -right-8 w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                <Sparkles className="w-6 h-6 text-white" />
              </div>

              {/* Efeitos de brilho */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full shadow-lg animate-ping"></div>
              <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-hotlovers-red rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-pink-400 rounded-full shadow-lg animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
