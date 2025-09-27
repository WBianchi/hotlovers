"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";
import { CTANewsletter } from "@/components/cta-newsletter";
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle, Mail, Phone } from "lucide-react";
import { FaQuestionCircle } from "react-icons/fa";

// Dados das FAQs
const faqData = [
  {
    categoria: "Conta e Assinatura",
    perguntas: [
      {
        pergunta: "Como faço para criar uma conta?",
        resposta: "Para criar uma conta, clique no botão 'Entrar' no canto superior direito e depois em 'Criar conta'. Preencha seus dados básicos como email, senha e confirme que você tem mais de 18 anos. Você receberá um email de confirmação para ativar sua conta."
      },
      {
        pergunta: "Quais são os tipos de assinatura disponíveis?",
        resposta: "Oferecemos três tipos de assinatura: Básico (R$ 29,90/mês), Premium (R$ 49,90/mês) e VIP (R$ 99,90/mês). Cada plano oferece diferentes níveis de acesso ao conteúdo e recursos exclusivos."
      },
      {
        pergunta: "Como cancelar minha assinatura?",
        resposta: "Você pode cancelar sua assinatura a qualquer momento através da seção 'Minha Conta' > 'Gerenciar Assinatura'. Seu acesso continuará ativo até o final do período já pago."
      },
      {
        pergunta: "Posso reativar minha conta cancelada?",
        resposta: "Sim! Você pode reativar sua conta a qualquer momento. Seus dados e preferências serão mantidos. Basta fazer login e escolher um novo plano de assinatura."
      }
    ]
  },
  {
    categoria: "Pagamentos e Cobrança",
    perguntas: [
      {
        pergunta: "Quais formas de pagamento vocês aceitam?",
        resposta: "Aceitamos cartões de crédito (Visa, Mastercard, American Express), cartões de débito, PIX, boleto bancário e PayPal. Todos os pagamentos são processados de forma segura."
      },
      {
        pergunta: "Quando serei cobrado?",
        resposta: "A cobrança é feita no momento da assinatura e depois mensalmente na mesma data. Você será notificado 7 dias antes de cada cobrança."
      },
      {
        pergunta: "Posso pedir reembolso?",
        resposta: "Sim! Oferecemos reembolso integral se solicitado dentro de 7 dias da primeira assinatura. Para assinaturas já renovadas, analisamos cada caso individualmente."
      },
      {
        pergunta: "Meu cartão foi recusado, o que fazer?",
        resposta: "Verifique se os dados estão corretos e se há limite disponível. Se o problema persistir, tente outro método de pagamento ou entre em contato com seu banco."
      }
    ]
  },
  {
    categoria: "Conteúdo e Recursos",
    perguntas: [
      {
        pergunta: "Que tipo de conteúdo encontro na plataforma?",
        resposta: "Temos fotos e vídeos premium de modelos verificadas, lives exclusivas, conteúdo interativo e muito mais. Todo conteúdo é original e de alta qualidade."
      },
      {
        pergunta: "Posso baixar o conteúdo?",
        resposta: "Não, o conteúdo é apenas para visualização online na plataforma. Isso protege os direitos das modelos e garante a exclusividade do material."
      },
      {
        pergunta: "Como funciona o chat com as modelos?",
        resposta: "Assinantes Premium e VIP podem enviar mensagens privadas para as modelos. O tempo de resposta varia, mas a maioria das modelos responde em até 24 horas."
      },
      {
        pergunta: "Posso solicitar conteúdo personalizado?",
        resposta: "Sim! Assinantes VIP podem fazer solicitações de conteúdo personalizado. Os valores e disponibilidade variam por modelo."
      }
    ]
  },
  {
    categoria: "Segurança e Privacidade",
    perguntas: [
      {
        pergunta: "Meus dados estão seguros?",
        resposta: "Sim! Utilizamos criptografia de ponta a ponta e seguimos os mais altos padrões de segurança. Nunca compartilhamos seus dados pessoais com terceiros."
      },
      {
        pergunta: "Como aparece a cobrança no cartão?",
        resposta: "A cobrança aparece de forma discreta como 'HLV Digital Services' ou similar, sem referência explícita ao conteúdo adulto."
      },
      {
        pergunta: "Posso navegar anonimamente?",
        resposta: "Oferecemos opções de privacidade avançadas, incluindo modo de navegação privada e controle sobre quem pode ver sua atividade."
      },
      {
        pergunta: "Como denuncio conteúdo inadequado?",
        resposta: "Use o botão 'Denunciar' disponível em todos os conteúdos. Nossa equipe analisa todas as denúncias em até 24 horas."
      }
    ]
  },
  {
    categoria: "Problemas Técnicos",
    perguntas: [
      {
        pergunta: "O site não está carregando, o que fazer?",
        resposta: "Primeiro, verifique sua conexão de internet. Se o problema persistir, limpe o cache do navegador ou tente em modo privado. Se ainda assim não funcionar, entre em contato conosco."
      },
      {
        pergunta: "Os vídeos não reproduzem, por quê?",
        resposta: "Certifique-se de ter uma conexão estável de internet. Alguns bloqueadores de anúncios podem interferir na reprodução. Tente desativá-los temporariamente."
      },
      {
        pergunta: "Como atualizar meus dados pessoais?",
        resposta: "Acesse 'Minha Conta' > 'Configurações' para atualizar seus dados pessoais, método de pagamento e preferências."
      },
      {
        pergunta: "Esqueci minha senha, como recuperar?",
        resposta: "Clique em 'Esqueci minha senha' na tela de login. Você receberá um email com instruções para criar uma nova senha."
      }
    ]
  }
];

// Componente FAQ Item
function FAQItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-background">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{pergunta}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-hotlovers-red flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 pt-2 border-t border-border">
          <p className="text-muted-foreground leading-relaxed">{resposta}</p>
        </div>
      )}
    </div>
  );
}

// Componente Hero FAQ
function HeroFAQ() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background Blush Balls */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-hotlovers-red/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-pink-400/4 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-hotlovers-red/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20 mb-8">
          <FaQuestionCircle className="w-4 h-4 text-hotlovers-red" />
          <span className="text-sm font-semibold text-hotlovers-red">
            Central de Ajuda HotLovers
          </span>
          <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
        </div>

        {/* Título */}
        <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-6">
          <span className="text-foreground">Dúvidas</span>
          <br />
          <span className="text-hotlovers-red">Frequentes</span>
        </h1>

        {/* Descrição */}
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
          Encontre respostas rápidas para as perguntas mais comuns sobre a plataforma, 
          pagamentos, conteúdo e muito mais.
        </p>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar dúvidas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/50 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente de Contato Rápido
function ContatoRapido() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
            Não Encontrou sua Dúvida?
          </h2>
          <p className="text-xl text-muted-foreground">
            Nossa equipe está sempre pronta para ajudar você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chat */}
          <div className="bg-background border border-border rounded-2xl p-8 text-center group hover:border-hotlovers-red/30 transition-all">
            <div className="w-16 h-16 bg-hotlovers-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Chat ao Vivo</h3>
            <p className="text-muted-foreground mb-6">
              Atendimento imediato 24/7 através do nosso chat
            </p>
            <button className="w-full py-3 bg-hotlovers-gradient text-white font-bold rounded-xl hover:scale-105 transition-all">
              Iniciar Chat
            </button>
          </div>

          {/* Email */}
          <div className="bg-background border border-border rounded-2xl p-8 text-center group hover:border-hotlovers-red/30 transition-all">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
            <p className="text-muted-foreground mb-6">
              Resposta em até 24 horas via suporte@hotlovers.com
            </p>
            <button className="w-full py-3 border border-border text-foreground rounded-xl hover:border-hotlovers-red hover:text-hotlovers-red transition-all">
              Enviar Email
            </button>
          </div>

          {/* WhatsApp */}
          <div className="bg-background border border-border rounded-2xl p-8 text-center group hover:border-hotlovers-red/30 transition-all">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">WhatsApp</h3>
            <p className="text-muted-foreground mb-6">
              Suporte direto pelo WhatsApp (horário comercial)
            </p>
            <button className="w-full py-3 bg-green-500 text-white font-bold rounded-xl hover:scale-105 transition-all">
              Chamar no Zap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DuvidasFrequentesPage() {
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
        <HeroFAQ />

        {/* FAQs por Categoria */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-16">
            {faqData.map((categoria, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-8 h-8 bg-hotlovers-gradient rounded-lg flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-foreground">
                    {categoria.categoria}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {categoria.perguntas.map((faq, faqIndex) => (
                    <FAQItem
                      key={faqIndex}
                      pergunta={faq.pergunta}
                      resposta={faq.resposta}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContatoRapido />
        <CTANewsletter />
      </main>

      <Footer />
      
      {/* Componentes flutuantes */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}