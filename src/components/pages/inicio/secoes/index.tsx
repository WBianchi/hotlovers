"use client";

import Link from "next/link";
import { ArrowRight, DollarSign, Shield, Crown, Zap, Users, Lock, Heart, Star, TrendingUp } from "lucide-react";

interface SecoesProps {
  className?: string;
}

export function Secoes({ className }: SecoesProps) {
  return (
    <div className={`${className || ""}`}>
      
      {/* SEÇÃO 1 - Para Modelos (Normal: CTA esquerda, Shape direita) */}
      <section className="relative py-20 bg-background overflow-hidden">
        {/* Background Blush Balls */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-hotlovers-red/4 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-red-400/3 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative w-full max-w-none mx-auto px-6 lg:px-16 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* CTA Left Side */}
            <div className="space-y-8 z-10">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20">
                <DollarSign className="w-4 h-4 text-hotlovers-red" />
                <span className="text-sm font-semibold text-hotlovers-red">
                  Ganhe até R$ 50.000/mês
                </span>
                <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
              </div>

              {/* Título */}
              <div className="space-y-4">
                <h2 className="text-6xl lg:text-7xl font-black leading-tight">
                  <span className="text-foreground">Seja uma</span>
                  <br />
                  <span className="text-hotlovers-red">
                    Modelo
                  </span>
                  <br />
                  <span className="text-foreground">e Ganhe</span>
                  <br />
                  <span className="text-hotlovers-red">
                    Muito Dinheiro
                  </span>
                </h2>
              </div>

              {/* Parágrafo */}
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transforme sua beleza em renda! Modelos HotLovers ganham em média R$ 15.000/mês 
                criando conteúdo exclusivo para seus fãs.
              </p>

              {/* Stats */}
              <div className="flex items-center space-x-8 py-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-hotlovers-red">R$ 50K</div>
                  <div className="text-sm text-muted-foreground">Máximo/mês</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-hotlovers-red">80%</div>
                  <div className="text-sm text-muted-foreground">Sua comissão</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-hotlovers-red">0</div>
                  <div className="text-sm text-muted-foreground">Taxa inicial</div>
                </div>
              </div>

              {/* Botões CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="/cadastro?tipo=modelo"
                  className="group flex items-center justify-center space-x-3 px-8 py-4 bg-hotlovers-gradient text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <span>💰 Começar a Ganhar</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/modelos/requisitos"
                  className="group flex items-center justify-center space-x-3 px-8 py-4 border-2 border-hotlovers-red text-hotlovers-red font-bold rounded-2xl hover:bg-hotlovers-red hover:text-white transition-all duration-300"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>Ver Requisitos</span>
                </Link>
              </div>
            </div>

            {/* Shape Direita - MOLDURA HEXAGONAL */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-[800px] h-[700px]">
                {/* Moldura hexagonal para seção 1 */}
                <div className="absolute inset-0 bg-gradient-to-br from-hotlovers-red/5 to-red-500/5 rounded-[4rem] rotate-6 shadow-2xl transform skew-y-3"></div>
                <div className="absolute inset-3 bg-card/80 backdrop-blur-sm rounded-[3.5rem] -rotate-3 shadow-xl transform -skew-y-2"></div>
                
                <div className="absolute inset-4 bg-gradient-to-br from-muted/50 to-muted rounded-[2rem] flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/modelo.png"
                      alt="Seja Modelo HotLovers"
                      className="w-auto object-cover animate-float"
                      style={{
                        filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.2))',
                        transform: 'scale(2.2) translateX(20px) translateY(150px)',
                        height: '180%'
                      }}
                    />
                  </div>
                </div>

                {/* Elementos flutuantes vermelhos */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-hotlovers-gradient rounded-full flex items-center justify-center shadow-lg animate-float">
                  <span className="text-white text-2xl">💰</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-hotlovers-red rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute top-20 -left-8 w-12 h-12 bg-red-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - Para Assinantes (Invertida: Shape esquerda, CTA direita) */}
      <section className="relative py-20 bg-muted/30 overflow-hidden">
        {/* Background Blush Balls */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-hotlovers-red/4 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-32 left-20 w-80 h-80 bg-red-400/3 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative w-full max-w-none mx-auto px-6 lg:px-16 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* Shape Esquerda - MOLDURA DIAMANTE */}
            <div className="relative flex items-center justify-center lg:justify-start">
              <div className="relative w-[800px] h-[700px]">
                {/* Moldura diamante para seção 2 */}
                <div className="absolute inset-0 bg-gradient-to-br from-hotlovers-red/5 to-red-500/5 rounded-[5rem] rotate-45 shadow-2xl transform scale-75"></div>
                <div className="absolute inset-1 bg-card/80 backdrop-blur-sm rounded-[4.5rem] -rotate-45 shadow-xl transform scale-75"></div>
                
                <div className="absolute inset-4 bg-gradient-to-br from-muted/50 to-muted rounded-[2rem] flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/modelo.png"
                      alt="Conteúdo Premium HotLovers"
                      className="w-auto object-cover animate-float"
                      style={{
                        filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.2))',
                        transform: 'scale(2.2) translateX(-20px) translateY(150px)',
                        height: '180%'
                      }}
                    />
                  </div>
                </div>

                {/* Elementos flutuantes vermelhos */}
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-hotlovers-gradient rounded-full flex items-center justify-center shadow-lg animate-float">
                  <span className="text-white text-2xl">👑</span>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-hotlovers-red rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute bottom-32 -left-8 w-14 h-14 bg-red-400 rounded-full flex items-center justify-center shadow-lg animate-float">
                  <Heart className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
            </div>

            {/* CTA Direita */}
            <div className="space-y-8 z-10">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20">
                <Crown className="w-4 h-4 text-hotlovers-red" />
                <span className="text-sm font-semibold text-hotlovers-red">
                  Acesso Premium Ilimitado
                </span>
                <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
              </div>

              {/* Título */}
              <div className="space-y-4">
                <h2 className="text-6xl lg:text-7xl font-black leading-tight">
                  <span className="text-foreground">Conteúdo</span>
                  <br />
                  <span className="text-hotlovers-red">
                    Premium
                  </span>
                  <br />
                  <span className="text-foreground">das Melhores</span>
                  <br />
                  <span className="text-hotlovers-red">
                    Modelos
                  </span>
                </h2>
              </div>

              {/* Parágrafo */}
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Acesse milhares de vídeos exclusivos, fotos sensuais e converse diretamente 
                com suas modelos favoritas. Tudo em HD e sem censura.
              </p>

              {/* Stats */}
              <div className="flex items-center space-x-8 py-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-hotlovers-red">1M+</div>
                  <div className="text-sm text-muted-foreground">Vídeos HD</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-hotlovers-red">500+</div>
                  <div className="text-sm text-muted-foreground">Modelos Ativas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-hotlovers-red">∞</div>
                  <div className="text-sm text-muted-foreground">Acesso Total</div>
                </div>
              </div>

              {/* Botões CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="/cadastro?tipo=assinante"
                  className="group flex items-center justify-center space-x-3 px-8 py-4 bg-hotlovers-gradient text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <span>👑 Assinar Premium</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/planos"
                  className="group flex items-center justify-center space-x-3 px-8 py-4 border-2 border-hotlovers-red text-hotlovers-red font-bold rounded-2xl hover:bg-hotlovers-red hover:text-white transition-all duration-300"
                >
                  <Zap className="w-5 h-5" />
                  <span>Ver Planos</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - Segurança (Normal: CTA esquerda, Shape direita) */}
      <section className="relative py-20 bg-background overflow-hidden">
        {/* Background Blush Balls */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-hotlovers-red/4 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-red-400/3 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative w-full max-w-none mx-auto px-6 lg:px-16 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* CTA Left Side */}
            <div className="space-y-8 z-10">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20">
                <Shield className="w-4 h-4 text-hotlovers-red" />
                <span className="text-sm font-semibold text-hotlovers-red">
                  100% Seguro e Discreto
                </span>
                <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
              </div>

              {/* Título */}
              <div className="space-y-4">
                <h2 className="text-6xl lg:text-7xl font-black leading-tight">
                  <span className="text-foreground">Total</span>
                  <br />
                  <span className="text-hotlovers-red">
                    Segurança
                  </span>
                  <br />
                  <span className="text-foreground">e</span>
                  <br />
                  <span className="text-hotlovers-red">
                    Privacidade
                  </span>
                </h2>
              </div>

              {/* Parágrafo */}
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Seus dados estão protegidos com criptografia militar. Pagamentos discretos 
                e total anonimato garantido. Sua privacidade é nossa prioridade.
              </p>

              {/* Stats */}
              <div className="flex items-center space-x-8 py-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-hotlovers-red">SSL</div>
                  <div className="text-sm text-muted-foreground">Criptografia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-hotlovers-red">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoramento</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-hotlovers-red">0</div>
                  <div className="text-sm text-muted-foreground">Vazamentos</div>
                </div>
              </div>

              {/* Botões CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="/seguranca"
                  className="group flex items-center justify-center space-x-3 px-8 py-4 bg-hotlovers-gradient text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <span>🔒 Nossa Segurança</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/privacidade"
                  className="group flex items-center justify-center space-x-3 px-8 py-4 border-2 border-hotlovers-red text-hotlovers-red font-bold rounded-2xl hover:bg-hotlovers-red hover:text-white transition-all duration-300"
                >
                  <Lock className="w-5 h-5" />
                  <span>Política de Privacidade</span>
                </Link>
              </div>
            </div>

            {/* Shape Direita - MOLDURA ONDULADA */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-[800px] h-[700px]">
                {/* Moldura ondulada para seção 3 */}
                <div className="absolute inset-0 bg-gradient-to-br from-hotlovers-red/5 to-red-500/5 rounded-[6rem] rotate-12 shadow-2xl transform -skew-x-6"></div>
                <div className="absolute inset-2 bg-card/80 backdrop-blur-sm rounded-[5.5rem] -rotate-6 shadow-xl transform skew-x-3"></div>
                
                <div className="absolute inset-4 bg-gradient-to-br from-muted/50 to-muted rounded-[2rem] flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/modelo.png"
                      alt="Segurança HotLovers"
                      className="w-auto object-cover animate-float"
                      style={{
                        filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.2))',
                        transform: 'scale(2.2) translateX(20px) translateY(150px)',
                        height: '180%'
                      }}
                    />
                  </div>
                </div>

                {/* Elementos flutuantes vermelhos */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-hotlovers-gradient rounded-full flex items-center justify-center shadow-lg animate-float">
                  <span className="text-white text-2xl">🔒</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-hotlovers-red rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute top-20 -left-8 w-12 h-12 bg-red-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Lock className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Secoes;
