"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";
import { Heart, Star, Shield, Users, Play, Crown } from "lucide-react";
import { FaFire } from "react-icons/fa";
import { CTANewsletter } from "@/components/cta-newsletter";

// Componente Hero Sobre
function HeroSobre() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Blush Balls */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-hotlovers-red/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-pink-400/4 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-hotlovers-red/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative w-full max-w-none mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20">
              <Heart className="w-4 h-4 text-hotlovers-red" />
              <span className="text-sm font-semibold text-hotlovers-red">
                Plataforma #1 do Brasil
              </span>
              <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
            </div>

            {/* Título */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-foreground">Sobre a</span>
                <br />
                <span className="text-hotlovers-red">
                  HotLovers
                </span>
                <br />
                <span className="text-foreground">Plataforma</span>
              </h1>
            </div>

            {/* Descrição */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              A plataforma premium que conecta você às modelos mais exclusivas do Brasil. 
              Conteúdo original, interação real e experiências únicas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-hotlovers-red">500K+</div>
                <div className="text-sm text-muted-foreground">Usuários Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-hotlovers-red">1000+</div>
                <div className="text-sm text-muted-foreground">Modelos Verificadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-hotlovers-red">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte Online</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Placeholder para imagem principal */}
              <div className="w-full h-full bg-gradient-to-br from-hotlovers-red/10 to-pink-500/10 rounded-3xl border border-hotlovers-red/20 flex items-center justify-center">
                <div className="text-center text-hotlovers-red/40">
                  <Crown className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-lg font-bold">Imagem Principal</p>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-8 -right-8 bg-background border border-border rounded-2xl p-4 shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-hotlovers-gradient rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">100% Seguro</div>
                    <div className="text-xs text-muted-foreground">Dados Protegidos</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-background border border-border rounded-2xl p-4 shadow-lg animate-float-delayed">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-hotlovers-gradient rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">4.9/5 Estrelas</div>
                    <div className="text-xs text-muted-foreground">Avaliação dos Usuários</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente Nossa História
function NossaHistoria() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-hotlovers-red/10 rounded-full text-hotlovers-red text-sm font-medium mb-6">
            <FaFire className="w-4 h-4 mr-2" />
            Nossa Jornada
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            Como Começou Tudo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fundada em 2020, a HotLovers nasceu da visão de criar uma plataforma segura, 
            exclusiva e respeitosa para modelos e criadores de conteúdo premium.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <div className="space-y-8">
            {[
              { ano: "2020", titulo: "Fundação", desc: "Criação da plataforma com foco em segurança e qualidade" },
              { ano: "2021", titulo: "Expansão", desc: "Chegada de 100+ modelos verificadas e 50K usuários" },
              { ano: "2022", titulo: "Inovação", desc: "Lançamento de features exclusivas e chat ao vivo" },
              { ano: "2023", titulo: "Liderança", desc: "Tornamo-nos a plataforma #1 do Brasil" },
              { ano: "2024", titulo: "Futuro", desc: "Expansão internacional e novas tecnologias" }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-hotlovers-gradient rounded-2xl flex items-center justify-center text-white font-black">
                  {item.ano}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.titulo}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-hotlovers-red/10 to-pink-500/10 rounded-3xl border border-hotlovers-red/20 flex items-center justify-center">
              <div className="text-center text-hotlovers-red/40">
                <Users className="w-20 h-20 mx-auto mb-4" />
                <p className="text-lg font-bold">Timeline Visual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente Valores
function Valores() {
  const valores = [
    {
      icon: Shield,
      titulo: "Segurança Total",
      desc: "Proteção máxima dos dados e privacidade de todos os usuários"
    },
    {
      icon: Heart,
      titulo: "Respeito Mútuo",
      desc: "Ambiente respeitoso e seguro para modelos e membros"
    },
    {
      icon: Star,
      titulo: "Qualidade Premium",
      desc: "Conteúdo exclusivo e experiências de alta qualidade"
    },
    {
      icon: Users,
      titulo: "Comunidade",
      desc: "Construindo conexões autênticas e duradouras"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-hotlovers-red/10 rounded-full text-hotlovers-red text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Nossos Valores
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            O que Nos Move
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valores.map((valor, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-hotlovers-gradient rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg shadow-hotlovers-red/25">
                  <valor.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{valor.titulo}</h3>
              <p className="text-muted-foreground">{valor.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente Equipe (placeholder)
function Equipe() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-hotlovers-red/10 rounded-full text-hotlovers-red text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Nossa Equipe
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            Conheça Quem Faz Acontecer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma equipe apaixonada por tecnologia, inovação e experiências excepcionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-hotlovers-red/20 to-pink-500/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-hotlovers-red/60" />
              </div>
              <h3 className="text-lg font-bold text-foreground text-center mb-2">
                Nome do Membro
              </h3>
              <p className="text-hotlovers-red text-center font-medium mb-3">
                Cargo da Pessoa
              </p>
              <p className="text-muted-foreground text-center text-sm">
                Breve descrição sobre a experiência e papel na empresa.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SobrePage() {
  const usuarioExemplo = {
    nome: "João Silva",
    email: "joao@email.com", 
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    tipo: "assinante" as const
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSobre />
        <NossaHistoria />
        <Valores />
        <Equipe />
        <CTANewsletter />
      </main>

      <Footer />
      
      {/* Componentes flutuantes */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}