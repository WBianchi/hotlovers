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

            {/* Shape Direita - MOLDURA ROUND MODERNA (Mais Larga) */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-[850px] h-[700px]">
                {/* Moldura externa - sombra suave */}
                <div className="absolute inset-0 bg-hotlovers-red/5 rounded-[3rem] shadow-2xl"></div>
                
                {/* Moldura principal - branca com borda vermelha */}
                <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-[2.5rem] border-2 border-hotlovers-red/20 shadow-xl"></div>
                
                {/* Container da imagem */}
                <div className="absolute inset-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-[2rem] overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src="/image.jpg"
                      alt="Seja Modelo HotLovers"
                      className="w-full h-full object-cover animate-float"
                      style={{
                        filter: 'drop-shadow(0 20px 40px rgba(220,38,127,0.15))'
                      }}
                    />
                  </div>
                </div>

                {/* Elementos flutuantes modernos */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-hotlovers-red rounded-2xl flex items-center justify-center shadow-lg animate-float">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-white dark:bg-gray-800 border-2 border-hotlovers-red rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                  <TrendingUp className="w-5 h-5 text-hotlovers-red" />
                </div>
                
                <div className="absolute top-20 -left-6 w-12 h-12 bg-hotlovers-red/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-hotlovers-red text-lg">💰</span>
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
            
            {/* Shape Esquerda - MOLDURA ROUND MODERNA (Média) */}
            <div className="relative flex items-center justify-center lg:justify-start">
              <div className="relative w-[750px] h-[700px]">
                {/* Moldura externa - sombra suave */}
                <div className="absolute inset-0 bg-hotlovers-red/8 rounded-[3.5rem] shadow-2xl"></div>
                
                {/* Moldura principal - dark com borda vermelha */}
                <div className="absolute inset-6 bg-gray-900 dark:bg-white rounded-[3rem] border-2 border-hotlovers-red/30 shadow-xl"></div>
                
                {/* Container da imagem */}
                <div className="absolute inset-10 bg-gradient-to-br from-gray-800 to-black dark:from-gray-100 dark:to-gray-200 rounded-[2.5rem] overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src="/image (1).jpg"
                      alt="Conteúdo Premium HotLovers"
                      className="w-full h-full object-cover animate-float"
                      style={{
                        filter: 'drop-shadow(0 20px 40px rgba(220,38,127,0.2))'
                      }}
                    />
                  </div>
                </div>

                {/* Elementos flutuantes modernos */}
                <div className="absolute -top-5 -left-5 w-18 h-18 bg-hotlovers-red rounded-3xl flex items-center justify-center shadow-lg animate-float">
                  <Crown className="w-7 h-7 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white dark:bg-gray-900 border-2 border-hotlovers-red rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <Heart className="w-6 h-6 text-hotlovers-red fill-current" />
                </div>
                
                <div className="absolute top-24 -right-8 w-14 h-14 bg-hotlovers-red/15 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-pulse">
                  <span className="text-hotlovers-red text-xl">👑</span>
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

            {/* Shape Direita - MOLDURA ROUND MODERNA (Mais Estreita) */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-[650px] h-[700px]">
                {/* Moldura externa - sombra suave */}
                <div className="absolute inset-0 bg-hotlovers-red/6 rounded-[4rem] shadow-2xl"></div>
                
                {/* Moldura principal - branca/dark com borda vermelha forte */}
                <div className="absolute inset-5 bg-white dark:bg-gray-900 rounded-[3.5rem] border-3 border-hotlovers-red/40 shadow-xl"></div>
                
                {/* Container da imagem */}
                <div className="absolute inset-9 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-[3rem] overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src="/image (2).jpg"
                      alt="Segurança HotLovers"
                      className="w-full h-full object-cover animate-float"
                      style={{
                        filter: 'drop-shadow(0 20px 40px rgba(220,38,127,0.18))'
                      }}
                    />
                  </div>
                </div>

                {/* Elementos flutuantes modernos */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-hotlovers-red rounded-2xl flex items-center justify-center shadow-lg animate-float">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-white dark:bg-gray-800 border-2 border-hotlovers-red rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                  <Lock className="w-5 h-5 text-hotlovers-red" />
                </div>
                
                <div className="absolute top-16 -left-6 w-12 h-12 bg-hotlovers-red/12 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-hotlovers-red text-lg">🔒</span>
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
