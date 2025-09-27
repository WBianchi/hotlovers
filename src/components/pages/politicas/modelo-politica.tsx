"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";
import { ArrowLeft, Shield, FileText, Calendar, Clock, Mail } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export interface PoliticaData {
  titulo: string;
  subtitulo: string;
  icon: React.ComponentType<any>;
  ultimaAtualizacao: string;
  tempoLeitura: string;
  conteudo: ReactNode;
  backLink?: string;
  backText?: string;
}

interface ModeloPoliticaProps {
  data: PoliticaData;
}

export function ModeloPolitica({ data }: ModeloPoliticaProps) {
  const usuarioExemplo = {
    nome: "João Silva",
    email: "joao@email.com", 
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    tipo: "assinante" as const
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header usuario={usuarioExemplo} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-background overflow-hidden">
          {/* Background Blush Balls */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-hotlovers-red/5 rounded-full blur-3xl animate-pulse-soft"></div>
            <div className="absolute bottom-32 left-20 w-80 h-80 bg-pink-400/4 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-hotlovers-red/3 rounded-full blur-2xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-6 lg:px-16">
            {/* Back Button */}
            <Link 
              href={data.backLink || "/"}
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-hotlovers-red transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>{data.backText || "Voltar"}</span>
            </Link>

            {/* Badge com Ícone */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20 mb-8">
              <data.icon className="w-4 h-4 text-hotlovers-red" />
              <span className="text-sm font-semibold text-hotlovers-red">
                Documentos Legais HotLovers
              </span>
              <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
            </div>

            {/* Título */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-foreground mb-6">
              {data.titulo}
            </h1>

            {/* Subtítulo */}
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
              {data.subtitulo}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Atualizado em {formatDate(data.ultimaAtualizacao)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{data.tempoLeitura} de leitura</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Documento Legal</span>
              </div>
            </div>

            {/* Alert de Atualização */}
            <div className="p-6 bg-gradient-to-r from-hotlovers-red/10 to-pink-500/10 border border-hotlovers-red/20 rounded-2xl">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-hotlovers-red flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Documento Oficial</h3>
                  <p className="text-muted-foreground text-sm">
                    Este documento é parte dos termos legais da HotLovers. É importante que você 
                    leia e compreenda completamente seu conteúdo. Em caso de dúvidas, entre em contato conosco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-16">
            <div className="flex lg:flex-row flex-col gap-12">
              
              {/* Conteúdo Principal */}
              <article className="flex-1">
                <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-headings:font-black prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:mb-6 prose-ul:mb-6 prose-li:mb-2">
                  {data.conteudo}
                </div>

                {/* Contact Section */}
                <div className="mt-12 p-8 bg-muted/30 rounded-2xl border border-border">
                  <div className="flex items-center space-x-3 mb-6">
                    <Mail className="w-6 h-6 text-hotlovers-red" />
                    <h3 className="text-2xl font-black text-foreground">Dúvidas ou Sugestões?</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Se você tiver alguma dúvida sobre este documento ou quiser fazer sugestões, 
                    não hesite em entrar em contato conosco.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="mailto:legal@hotlovers.com"
                      className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-hotlovers-gradient text-white font-bold rounded-xl hover:scale-105 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>legal@hotlovers.com</span>
                    </a>
                    <Link 
                      href="/sobre"
                      className="inline-flex items-center justify-center space-x-2 px-6 py-3 border border-border text-foreground rounded-xl hover:border-hotlovers-red hover:text-hotlovers-red transition-all"
                    >
                      <Shield className="w-4 h-4" />
                      <span>Sobre Nós</span>
                    </Link>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:w-80">
                <div className="sticky top-8 space-y-6">
                  {/* Índice */}
                  <div className="bg-background border border-border rounded-2xl p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <FileText className="w-5 h-5 text-hotlovers-red" />
                      <h3 className="font-bold text-foreground">Índice</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <a href="#introducao" className="block text-muted-foreground hover:text-hotlovers-red transition-colors py-1">
                        1. Introdução
                      </a>
                      <a href="#definicoes" className="block text-muted-foreground hover:text-hotlovers-red transition-colors py-1">
                        2. Definições
                      </a>
                      <a href="#direitos" className="block text-muted-foreground hover:text-hotlovers-red transition-colors py-1">
                        3. Direitos e Deveres
                      </a>
                      <a href="#responsabilidades" className="block text-muted-foreground hover:text-hotlovers-red transition-colors py-1">
                        4. Responsabilidades
                      </a>
                      <a href="#alteracoes" className="block text-muted-foreground hover:text-hotlovers-red transition-colors py-1">
                        5. Alterações
                      </a>
                      <a href="#contato" className="block text-muted-foreground hover:text-hotlovers-red transition-colors py-1">
                        6. Contato
                      </a>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-hotlovers-gradient rounded-2xl p-6 text-white">
                    <Shield className="w-8 h-8 text-white mb-3" />
                    <h3 className="font-black text-lg mb-3">Segurança & Privacidade</h3>
                    <p className="text-white/90 mb-4 text-sm">
                      Sua segurança e privacidade são nossas prioridades máximas. 
                      Conheça todos os seus direitos.
                    </p>
                    <Link 
                      href="/sobre" 
                      className="inline-block w-full py-2 bg-white text-hotlovers-red font-bold rounded-xl hover:scale-105 transition-all text-sm text-center"
                    >
                      Saiba Mais
                    </Link>
                  </div>

                  {/* Outros Documentos */}
                  <div className="bg-background border border-border rounded-2xl p-6">
                    <h3 className="font-bold text-foreground mb-4">Outros Documentos</h3>
                    <div className="space-y-3 text-sm">
                      <Link href="/privacidade" className="block text-muted-foreground hover:text-hotlovers-red transition-colors">
                        Política de Privacidade
                      </Link>
                      <Link href="/termos" className="block text-muted-foreground hover:text-hotlovers-red transition-colors">
                        Termos de Uso
                      </Link>
                      <Link href="/cookies" className="block text-muted-foreground hover:text-hotlovers-red transition-colors">
                        Política de Cookies
                      </Link>
                      <Link href="/politicas-assinantes" className="block text-muted-foreground hover:text-hotlovers-red transition-colors">
                        Políticas para Assinantes
                      </Link>
                      <Link href="/politicas-modelos" className="block text-muted-foreground hover:text-hotlovers-red transition-colors">
                        Políticas para Modelos
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
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