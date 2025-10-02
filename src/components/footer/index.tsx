import { Logo } from "../header/logo";
import { Secoes } from "./secoes";
import { RedesSociais } from "./redes-sociais";
import { FooterMobile } from "../footer-mobile";
import { Shield, Award, Zap, Users, TrendingUp, Mail } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`
      bg-background
      ${className || ""}
    `} style={{ border: 'none' }}>
      {/* Seção Principal */}
      <div className="w-full max-w-none mx-auto py-16 px-6 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Logo e Descrição - Maior */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              A plataforma premium de conteúdo adulto mais quente do Brasil. 
              Conectando modelos incríveis com seus fãs através de uma experiência única e segura.
            </p>
            
            {/* Stats Rápidas */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-xl">
                <Users className="w-5 h-5 text-red-600 mb-1" />
                <p className="text-lg font-black text-red-600">500+</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Modelos</p>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-xl">
                <TrendingUp className="w-5 h-5 text-red-600 mb-1" />
                <p className="text-lg font-black text-red-600">50K+</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Assinantes</p>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="mt-6">
              <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Siga-nos</p>
              <RedesSociais />
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Newsletter</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600/30"
                />
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Links das Seções */}
          <div className="lg:col-span-4">
            <Secoes />
          </div>
        </div>

        {/* Badges de Confiança */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Shield className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">100% Seguro</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">SSL Certificado</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Award className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Verificado</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Modelos Reais</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Zap className="w-8 h-8 text-yellow-600" />
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Rápido</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Streaming HD</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Users className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Comunidade</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">50K+ Membros</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Inferior - Compacta */}
      <div className="bg-gray-900 dark:bg-black" style={{ border: 'none' }}>
        <div className="w-full max-w-none mx-auto py-4 px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} HotLovers. Todos os direitos reservados. • Plataforma +18</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Online</span>
              </div>
              <span>🔒 SSL Seguro</span>
              <span>Made with ❤️ in Brazil</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Mobile */}
      <FooterMobile />
    </footer>
  );
}

export default Footer;
