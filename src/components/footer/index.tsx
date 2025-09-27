import { Logo } from "../header/logo";
import { Secoes } from "./secoes";
import { RedesSociais } from "./redes-sociais";
import { FooterMobile } from "../footer-mobile";

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
      <div className="w-full max-w-none mx-auto py-12 px-6 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A plataforma premium de conteúdo adulto mais quente do Brasil. 
              Conectando modelos incríveis com seus fãs através de uma experiência única e segura.
            </p>
            <div className="mt-6">
              <RedesSociais />
            </div>
          </div>

          {/* Links das Seções */}
          <div className="lg:col-span-4">
            <Secoes />
          </div>
        </div>

        {/* Linha divisória clean */}
        <div className="mt-12 pt-8 border-t border-gray-200"></div>
      </div>

      {/* Seção Inferior */}
      <div className="bg-muted/30" style={{ border: 'none' }}>
        <div className="w-full max-w-none mx-auto py-6 px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>© {new Date().getFullYear()} HotLovers. Todos os direitos reservados.</p>
              <p className="mt-1">
                Plataforma para maiores de 18 anos • Conteúdo adulto premium
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Sistema Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground">🔒 Site Seguro</span>
              </div>
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
