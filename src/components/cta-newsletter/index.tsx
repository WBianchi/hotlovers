"use client";

import { useState } from "react";
import { Mail, ArrowRight, Heart, Sparkles } from "lucide-react";

interface CTANewsletterProps {
  className?: string;
}

export function CTANewsletter({ className }: CTANewsletterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    
    // Simular envio
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 2000);
  };

  if (isSubscribed) {
    return (
      <div className={`${className || ""}`}>
        <section className="relative py-20 bg-hotlovers-gradient overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-soft"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float"></div>
          </div>

          <div className="relative w-full max-w-4xl mx-auto px-6 lg:px-16 text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <Heart className="w-10 h-10 text-white fill-current" />
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white">
                🔥 Obrigado por se Inscrever!
              </h2>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Você receberá conteúdo exclusivo, ofertas especiais e novidades das modelos mais quentes direto no seu email!
              </p>

              <div className="flex justify-center items-center space-x-2 pt-4">
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span className="text-white/80 font-semibold">Check your email!</span>
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={`${className || ""}`}>
      <section className="relative py-20 bg-hotlovers-gradient overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-soft"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse-soft"></div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full border border-white/30">
              <Mail className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Newsletter VIP Exclusiva
              </span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>

            {/* Título */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                Receba Conteúdo
                <br />
                <span className="text-yellow-300">
                  Exclusivo
                </span>
                <br />
                no seu Email 🔥
              </h2>
            </div>

            {/* Parágrafo */}
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Seja o primeiro a ver fotos inéditas, vídeos exclusivos e ofertas especiais 
              das modelos mais sensuais. Conteúdo que você não vê em lugar nenhum!
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center space-x-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-black text-white">50K+</div>
                <div className="text-sm text-white/70">Inscritos VIP</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">3x</div>
                <div className="text-sm text-white/70">Por semana</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-sm text-white/70">Exclusivo</div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-lg"
                    required
                    disabled={isLoading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  className="group flex items-center justify-center space-x-3 px-8 py-4 bg-white text-hotlovers-red font-bold rounded-2xl hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-hotlovers-red border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Quero Receber!</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Garantia */}
            <div className="flex justify-center items-center space-x-2 pt-4">
              <Heart className="w-4 h-4 text-white/60" />
              <span className="text-sm text-white/60">
                100% seguro • Sem spam • Cancele quando quiser
              </span>
              <Heart className="w-4 h-4 text-white/60" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTANewsletter;
