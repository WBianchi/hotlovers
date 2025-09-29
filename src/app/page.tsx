import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/pages/inicio/hero";
import { Carrossel } from "@/components/pages/inicio/carrossel";
import { Secoes } from "@/components/pages/inicio/secoes";
import { CTANewsletter } from "@/components/cta-newsletter";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
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
