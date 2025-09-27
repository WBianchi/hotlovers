"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { FooterSimples } from "@/components/footer-simples";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";

// Componentes da página single
import { ModeloHero } from "@/components/pages/modelo-single/hero";
import { ModeloStats } from "@/components/pages/modelo-single/stats";
import { ModeloGaleria } from "@/components/pages/modelo-single/galeria";
import { ModeloVideos } from "@/components/pages/modelo-single/videos";
import { ModeloCarrossel } from "@/components/pages/modelo-single/carrossel";
// import { ModalAssinatura } from "@/components/pages/modelo-single/modal-assinatura";
// import { ModalPagamento } from "@/components/pages/modelo-single/modal-pagamento";
// import { ChatPrivado } from "@/components/pages/modelo-single/chat-privado";

export default function ModeloSinglePage({ params }: { params: { id: string } }) {
  const [modalAssinatura, setModalAssinatura] = useState(false);
  const [modalPagamento, setModalPagamento] = useState(false);
  const [chatAberto, setChatAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<any>(null);

  // Exemplo de usuário (depois virá do contexto)
  const usuarioExemplo = {
    nome: "João Silva",
    email: "joao@email.com", 
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    tipo: "assinante" as const,
    assinante: false // Muda para true para ver o conteúdo desbloqueado
  };

  // Mock data da modelo
  const modelo = {
    id: params.id,
    nome: "Isabella Santos",
    idade: 23,
    localizacao: "São Paulo, BR",
    capa: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=1200&h=600&fit=crop&crop=face",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=200&h=200&fit=crop&crop=face",
    bio: "Modelo profissional apaixonada por fotografia artística e lifestyle. Amo criar conteúdo exclusivo para meus fãs especiais! 🔥💕",
    seguidores: 125000,
    likes: 89000,
    fotos: 342,
    videos: 127,
    avaliacao: 4.9,
    avaliacoes: 1247,
    precoMensal: 29.90,
    online: true,
    verificada: true,
    premium: true,
    tags: ["Lifestyle", "Fashion", "Arte", "Fitness", "Sensual"],
    redesSociais: {
      instagram: "@isabella_santos",
      twitter: "@bella_santos"
    }
  };

  const handleAssinatura = () => {
    setModalAssinatura(true);
  };

  const handleComprarPack = (pack: any) => {
    setProdutoSelecionado(pack);
    setModalPagamento(true);
  };

  const handleChat = () => {
    setChatAberto(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header usuario={usuarioExemplo} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <ModeloHero 
          modelo={modelo}
          usuario={usuarioExemplo}
          onAssinatura={handleAssinatura}
          onChat={handleChat}
        />


        {/* Galeria de Fotos */}
        <ModeloGaleria 
          modelo={modelo}
          usuario={usuarioExemplo}
          onAssinatura={handleAssinatura}
        />

        {/* Vídeos */}
        <ModeloVideos 
          modelo={modelo}
          usuario={usuarioExemplo}
          onAssinatura={handleAssinatura}
        />


        {/* Carrossel "Modelos Similares" */}
        <ModeloCarrossel titulo="Modelos Similares" />
      </main>

      <FooterSimples />
      
      {/* Componentes flutuantes */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}