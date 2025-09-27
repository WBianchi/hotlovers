import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/pages/inicio/hero";
import { Carrossel } from "@/components/pages/inicio/carrossel";
import { Secoes } from "@/components/pages/inicio/secoes";
import { CTANewsletter } from "@/components/cta-newsletter";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";

export default function HomePage() {
  // Exemplo de usuário logado (depois virá do contexto de auth)
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
        <Hero />
        <Carrossel />
        <Secoes />
        <CTANewsletter />
      </main>

      <Footer />
      
      {/* Componentes flutuantes/overlay */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}
