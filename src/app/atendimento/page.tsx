"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";
import { CTANewsletter } from "@/components/cta-newsletter";
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, User, FileText } from "lucide-react";
import { FaWhatsapp, FaTelegram, FaDiscord } from "react-icons/fa";

// Componente Hero Atendimento
function HeroAtendimento() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background Blush Balls */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-hotlovers-red/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-pink-400/4 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-hotlovers-red/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20">
              <MessageCircle className="w-4 h-4 text-hotlovers-red" />
              <span className="text-sm font-semibold text-hotlovers-red">
                Suporte Premium 24/7
              </span>
              <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
            </div>

            {/* Título */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-foreground">Fale</span>
                <br />
                <span className="text-hotlovers-red">Conosco</span>
              </h1>
            </div>

            {/* Descrição */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Nossa equipe especializada está sempre disponível para ajudar você. 
              Atendimento rápido, seguro e personalizado.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-hotlovers-red">24/7</div>
                <div className="text-sm text-muted-foreground">Disponibilidade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-hotlovers-red">&lt;2min</div>
                <div className="text-sm text-muted-foreground">Tempo Resposta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-hotlovers-red">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Placeholder para imagem */}
              <div className="w-full h-full bg-gradient-to-br from-hotlovers-red/10 to-pink-500/10 rounded-3xl border border-hotlovers-red/20 flex items-center justify-center">
                <div className="text-center text-hotlovers-red/40">
                  <MessageCircle className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-lg font-bold">Atendimento Premium</p>
                </div>
              </div>
              
              {/* Floating contact cards */}
              <div className="absolute -top-8 -right-8 bg-background border border-border rounded-2xl p-4 shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <FaWhatsapp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">WhatsApp</div>
                    <div className="text-xs text-muted-foreground">Online agora</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-background border border-border rounded-2xl p-4 shadow-lg animate-float-delayed">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-hotlovers-gradient rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Email</div>
                    <div className="text-xs text-muted-foreground">Resposta em 1h</div>
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

// Componente Canais de Contato
function CanaisContato() {
  const canais = [
    {
      icon: MessageCircle,
      nome: "Chat ao Vivo",
      descricao: "Atendimento instantâneo 24/7",
      disponibilidade: "Online agora",
      cor: "bg-hotlovers-gradient",
      acao: "Iniciar Chat"
    },
    {
      icon: FaWhatsapp,
      nome: "WhatsApp",
      descricao: "Suporte via WhatsApp",
      disponibilidade: "Seg-Dom: 7h às 23h",
      cor: "bg-green-500",
      acao: "Chamar no Zap"
    },
    {
      icon: Mail,
      nome: "Email",
      descricao: "suporte@hotlovers.com",
      disponibilidade: "Resposta em até 1 hora",
      cor: "bg-blue-500",
      acao: "Enviar Email"
    },
    {
      icon: Phone,
      nome: "Telefone",
      descricao: "+55 (11) 99999-9999",
      disponibilidade: "Seg-Sex: 8h às 18h",
      cor: "bg-purple-500",
      acao: "Ligar Agora"
    },
    {
      icon: FaTelegram,
      nome: "Telegram",
      descricao: "Canal oficial no Telegram",
      disponibilidade: "Notificações 24/7",
      cor: "bg-cyan-500",
      acao: "Abrir Canal"
    },
    {
      icon: FaDiscord,
      nome: "Discord",
      descricao: "Comunidade HotLovers",
      disponibilidade: "Sempre ativo",
      cor: "bg-indigo-500",
      acao: "Entrar no Discord"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            Escolha o Canal Ideal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Múltiplas formas de entrar em contato conosco. Escolha a que for mais conveniente para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {canais.map((canal, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all group cursor-pointer">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-14 h-14 ${canal.cor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all`}>
                  <canal.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{canal.nome}</h3>
                  <p className="text-sm text-muted-foreground">{canal.disponibilidade}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{canal.descricao}</p>
              
              <button className="w-full py-3 border border-border rounded-xl text-foreground hover:border-hotlovers-red hover:text-hotlovers-red transition-all">
                {canal.acao}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente Formulário de Contato
function FormularioContato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    categoria: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica de envio
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            Envie uma Mensagem
          </h2>
          <p className="text-xl text-muted-foreground">
            Preencha o formulário abaixo e nossa equipe entrará em contato o mais rápido possível
          </p>
        </div>

        <div className="bg-muted/30 rounded-3xl p-8 lg:p-12 border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/50 transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/50 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Categoria */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Categoria *
                </label>
                <select
                  required
                  value={formData.categoria}
                  onChange={(e) => setFormData({...formData, categoria: e.target.value})}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/50 transition-all"
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="suporte-tecnico">Suporte Técnico</option>
                  <option value="cobranca">Cobrança e Pagamentos</option>
                  <option value="conta">Problemas com Conta</option>
                  <option value="conteudo">Conteúdo</option>
                  <option value="privacidade">Privacidade</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              {/* Assunto */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Assunto *
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    value={formData.assunto}
                    onChange={(e) => setFormData({...formData, assunto: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/50 transition-all"
                    placeholder="Resumo do seu problema"
                  />
                </div>
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Mensagem *
              </label>
              <textarea
                required
                rows={6}
                value={formData.mensagem}
                onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/50 transition-all resize-none"
                placeholder="Descreva detalhadamente seu problema ou dúvida..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-hotlovers-gradient text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-hotlovers-red/25"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensagem</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// Componente Informações Adicionais
function InfoAdicional() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Horários de Atendimento */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-6 h-6 text-hotlovers-red" />
              <h3 className="text-2xl font-black text-foreground">Horários de Atendimento</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground font-medium">Chat ao Vivo</span>
                <span className="text-hotlovers-red font-bold">24/7</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground font-medium">WhatsApp</span>
                <span className="text-muted-foreground">7h às 23h</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground font-medium">Email</span>
                <span className="text-muted-foreground">24h (resp. 1h)</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-foreground font-medium">Telefone</span>
                <span className="text-muted-foreground">8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="w-6 h-6 text-hotlovers-red" />
              <h3 className="text-2xl font-black text-foreground">Nossa Localização</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">HotLovers Tecnologia Ltda</strong><br />
                Av. Paulista, 1234 - Conjunto 567<br />
                Bela Vista, São Paulo - SP<br />
                CEP: 01310-100
              </p>
              
              <div className="pt-4">
                <p className="text-sm">
                  <strong className="text-foreground">CNPJ:</strong> 12.345.678/0001-90<br />
                  <strong className="text-foreground">Razão Social:</strong> HotLovers Tecnologia Ltda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AtendimentoPage() {
  const usuarioExemplo = {
    nome: "João Silva",
    email: "joao@email.com", 
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    tipo: "assinante" as const
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header usuario={usuarioExemplo} />
      
      <main className="flex-1">
        <HeroAtendimento />
        <CanaisContato />
        <FormularioContato />
        <InfoAdicional />
        <CTANewsletter />
      </main>

      <Footer />
      
      {/* Componentes flutuantes */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}