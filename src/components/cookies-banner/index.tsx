"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Shield, Settings } from "lucide-react";

interface CookiesBannerProps {
  className?: string;
}

export function CookiesBanner({ className }: CookiesBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const hasAccepted = localStorage.getItem("hotlovers-cookies-accepted");
    if (!hasAccepted) {
      // Mostrar banner após 2 segundos
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("hotlovers-cookies-accepted", "all");
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("hotlovers-cookies-accepted", "necessary");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`${className || ""}`}>
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
        <div className="bg-background/95 backdrop-blur-lg border-t shadow-2xl">
          <div className="w-full max-w-none mx-auto px-6 lg:px-16 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              
              {/* Conteúdo principal */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-hotlovers-gradient rounded-full flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      🍪 Cookies & Privacidade HotLovers
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-hotlovers-red" />
                      <span className="text-sm text-muted-foreground">
                        Seus dados estão seguros conosco
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                    Utilizamos cookies para personalizar sua experiência, manter você logado e 
                    analisar nosso tráfego. Também compartilhamos informações sobre seu uso com 
                    nossos parceiros de analytics. 🔒
                  </p>

                  {showDetails && (
                    <div className="bg-muted/30 rounded-xl p-4 space-y-3 animate-fade-in">
                      <h4 className="font-semibold text-foreground">Tipos de Cookies:</h4>
                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        <div className="space-y-1">
                          <div className="font-medium text-hotlovers-red">✅ Essenciais</div>
                          <div className="text-muted-foreground">Funcionamento básico do site</div>
                        </div>
                        <div className="space-y-1">
                          <div className="font-medium text-hotlovers-red">📊 Analytics</div>
                          <div className="text-muted-foreground">Análise de tráfego e uso</div>
                        </div>
                        <div className="space-y-1">
                          <div className="font-medium text-hotlovers-red">🎯 Marketing</div>
                          <div className="text-muted-foreground">Anúncios personalizados</div>
                        </div>
                        <div className="space-y-1">
                          <div className="font-medium text-hotlovers-red">⚙️ Preferências</div>
                          <div className="text-muted-foreground">Lembrar suas configurações</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row items-center gap-3 min-w-fit">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="group flex items-center space-x-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  <span>{showDetails ? "Ocultar" : "Ver"} Detalhes</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={acceptNecessary}
                    className="px-6 py-3 border-2 border-muted text-muted-foreground font-semibold rounded-xl hover:border-foreground hover:text-foreground transition-all duration-300"
                  >
                    Apenas Essenciais
                  </button>

                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 bg-hotlovers-gradient text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Aceitar Todos
                  </button>
                </div>

                <button
                  onClick={handleClose}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiesBanner;
