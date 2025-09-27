"use client";

import { ModeloPolitica, PoliticaData } from "@/components/pages/politicas/modelo-politica";
import { Cookie } from "lucide-react";

const cookiesData: PoliticaData = {
  titulo: "Política de Cookies",
  subtitulo: "Como utilizamos cookies e tecnologias similares para melhorar sua experiência na HotLovers",
  icon: Cookie,
  ultimaAtualizacao: "2024-01-15",
  tempoLeitura: "8 min",
  backLink: "/",
  backText: "Voltar ao Início",
  conteudo: (
    <div>
      <section id="introducao">
        <h2>1. O que são Cookies</h2>
        <p>
          Cookies são pequenos arquivos de texto armazenados no seu dispositivo 
          quando você visita um site. Eles nos ajudam a melhorar sua experiência 
          e fornecer serviços personalizados.
        </p>
      </section>

      <section id="tipos">
        <h2>2. Tipos de Cookies que Usamos</h2>
        
        <h3>2.1 Cookies Essenciais</h3>
        <p>
          Necessários para o funcionamento básico da plataforma. Sem eles, 
          alguns recursos não funcionariam adequadamente.
        </p>
        <ul>
          <li>Autenticação de usuário</li>
          <li>Segurança da sessão</li>
          <li>Carrinho de compras</li>
          <li>Configurações de privacidade</li>
        </ul>

        <h3>2.2 Cookies de Funcionalidade</h3>
        <p>
          Melhoram a funcionalidade da plataforma lembrando suas preferências 
          e configurações.
        </p>
        <ul>
          <li>Preferências de idioma</li>
          <li>Configurações de tema</li>
          <li>Histórico de navegação</li>
          <li>Favoritos salvos</li>
        </ul>

        <h3>2.3 Cookies Analíticos</h3>
        <p>
          Nos ajudam a entender como você usa a plataforma para melhorarmos 
          nossos serviços.
        </p>
        <ul>
          <li>Páginas mais visitadas</li>
          <li>Tempo gasto na plataforma</li>
          <li>Padrões de navegação</li>
          <li>Relatórios de erro</li>
        </ul>

        <h3>2.4 Cookies de Marketing</h3>
        <p>
          Utilizados para mostrar anúncios relevantes (apenas com seu consentimento).
        </p>
        <ul>
          <li>Publicidade personalizada</li>
          <li>Remarketing</li>
          <li>Medição de campanhas</li>
          <li>Redes sociais</li>
        </ul>
      </section>

      <section id="terceiros">
        <h2>3. Cookies de Terceiros</h2>
        <p>
          Alguns cookies são definidos por serviços de terceiros que aparecem 
          em nossas páginas:
        </p>
        <ul>
          <li><strong>Google Analytics:</strong> Para análise de tráfego</li>
          <li><strong>Processadores de Pagamento:</strong> Para transações seguras</li>
          <li><strong>CDN:</strong> Para melhorar a velocidade de carregamento</li>
          <li><strong>Chat de Suporte:</strong> Para atendimento ao cliente</li>
        </ul>
      </section>

      <section id="gerenciamento">
        <h2>4. Como Gerenciar Cookies</h2>
        
        <h3>4.1 Configurações da Plataforma</h3>
        <p>
          Você pode gerenciar suas preferências de cookies através da nossa 
          central de privacidade, acessível no rodapé do site.
        </p>

        <h3>4.2 Configurações do Navegador</h3>
        <p>
          A maioria dos navegadores permite controlar cookies através das configurações:
        </p>
        <ul>
          <li><strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies</li>
          <li><strong>Firefox:</strong> Preferências → Privacidade e segurança</li>
          <li><strong>Safari:</strong> Preferências → Privacidade</li>
          <li><strong>Edge:</strong> Configurações → Privacidade, pesquisa e serviços</li>
        </ul>

        <h3>4.3 Ferramentas de Terceiros</h3>
        <p>
          Você também pode usar ferramentas específicas para gerenciar cookies:
        </p>
        <ul>
          <li>Extensões de bloqueio de cookies</li>
          <li>Modo privado/incógnito</li>
          <li>Ferramentas de privacidade</li>
        </ul>
      </section>

      <section id="impacto">
        <h2>5. Impacto da Desativação</h2>
        <p>
          Desativar cookies pode afetar sua experiência na plataforma:
        </p>
        <ul>
          <li>Necessidade de fazer login repetidamente</li>
          <li>Perda de preferências e configurações</li>
          <li>Funcionalidades limitadas</li>
          <li>Experiência menos personalizada</li>
        </ul>
      </section>

      <section id="atualizacoes">
        <h2>6. Atualizações desta Política</h2>
        <p>
          Esta política pode ser atualizada periodicamente. Mudanças significativas 
          serão comunicadas através de:
        </p>
        <ul>
          <li>Notificação na plataforma</li>
          <li>Email para usuários registrados</li>
          <li>Banner de aviso no site</li>
        </ul>
      </section>

      <section id="contato">
        <h2>7. Contato</h2>
        <p>
          Para dúvidas sobre nossa política de cookies:
        </p>
        <ul>
          <li><strong>Email:</strong> cookies@hotlovers.com</li>
          <li><strong>Suporte:</strong> atendimento@hotlovers.com</li>
          <li><strong>Telefone:</strong> +55 (11) 9999-9999</li>
        </ul>
      </section>

      <section id="consentimento">
        <h2>8. Consentimento</h2>
        <p>
          Ao usar nossa plataforma, você consente com o uso de cookies conforme 
          descrito nesta política. Você pode retirar seu consentimento a qualquer 
          momento através das configurações de privacidade.
        </p>
      </section>
    </div>
  )
};

export default function CookiesPage() {
  return <ModeloPolitica data={cookiesData} />;
}