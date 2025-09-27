"use client";

import { ModeloPolitica, PoliticaData } from "@/components/pages/politicas/modelo-politica";
import { FileText } from "lucide-react";

const termosData: PoliticaData = {
  titulo: "Termos de Uso",
  subtitulo: "Regulamento e condições para uso da plataforma HotLovers e seus serviços",
  icon: FileText,
  ultimaAtualizacao: "2024-01-15",
  tempoLeitura: "12 min",
  backLink: "/",
  backText: "Voltar ao Início",
  conteudo: (
    <div>
      <section id="introducao">
        <h2>1. Introdução</h2>
        <p>
          Bem-vindo à HotLovers! Estes Termos de Uso regem o uso de nossa plataforma 
          e serviços. Ao acessar ou usar nossa plataforma, você concorda em cumprir 
          estes termos integralmente.
        </p>
        <p>
          Se você não concorda com qualquer parte destes termos, não deve usar nossa plataforma.
        </p>
      </section>

      <section id="definicoes">
        <h2>2. Definições</h2>
        <ul>
          <li><strong>Plataforma:</strong> O website e aplicativos da HotLovers</li>
          <li><strong>Usuário:</strong> Qualquer pessoa que acesse nossa plataforma</li>
          <li><strong>Conta:</strong> Perfil criado pelo usuário na plataforma</li>
          <li><strong>Conteúdo:</strong> Qualquer material postado na plataforma</li>
          <li><strong>Serviços:</strong> Todos os recursos oferecidos pela plataforma</li>
        </ul>
      </section>

      <section id="elegibilidade">
        <h2>3. Elegibilidade</h2>
        <p>Para usar nossa plataforma, você deve:</p>
        <ul>
          <li>Ter pelo menos 18 anos de idade</li>
          <li>Ter capacidade legal para firmar contratos</li>
          <li>Não estar proibido de usar nossos serviços</li>
          <li>Fornecer informações verdadeiras e precisas</li>
        </ul>
      </section>

      <section id="conta">
        <h2>4. Criação e Uso de Conta</h2>
        <h3>4.1 Responsabilidades</h3>
        <p>Ao criar uma conta, você se compromete a:</p>
        <ul>
          <li>Fornecer informações verdadeiras e atualizadas</li>
          <li>Manter a segurança de sua senha</li>
          <li>Notificar imediatamente sobre uso não autorizado</li>
          <li>Não compartilhar sua conta com terceiros</li>
        </ul>

        <h3>4.2 Suspensão e Encerramento</h3>
        <p>
          Reservamo-nos o direito de suspender ou encerrar contas que violem 
          estes termos ou por motivos de segurança.
        </p>
      </section>

      <section id="conduta">
        <h2>5. Conduta do Usuário</h2>
        <h3>5.1 Comportamento Permitido</h3>
        <p>Você pode:</p>
        <ul>
          <li>Usar a plataforma para fins legais</li>
          <li>Interagir respeitosamente com outros usuários</li>
          <li>Reportar comportamentos inadequados</li>
          <li>Proteger sua privacidade e a de outros</li>
        </ul>

        <h3>5.2 Comportamento Proibido</h3>
        <p>É estritamente proibido:</p>
        <ul>
          <li>Assediar, intimidar ou ameaçar outros usuários</li>
          <li>Compartilhar conteúdo ilegal ou ofensivo</li>
          <li>Violar direitos de propriedade intelectual</li>
          <li>Usar a plataforma para spam ou fraudes</li>
          <li>Tentar acessar contas de outros usuários</li>
          <li>Usar bots ou automação não autorizada</li>
        </ul>
      </section>

      <section id="conteudo">
        <h2>6. Conteúdo e Propriedade Intelectual</h2>
        <h3>6.1 Seu Conteúdo</h3>
        <p>
          Você mantém os direitos sobre o conteúdo que posta, mas nos concede 
          uma licença para usá-lo na plataforma.
        </p>

        <h3>6.2 Nosso Conteúdo</h3>
        <p>
          Todos os direitos sobre a plataforma, design, código e marca 
          pertencem à HotLovers.
        </p>
      </section>

      <section id="pagamentos">
        <h2>7. Pagamentos e Reembolsos</h2>
        <h3>7.1 Assinaturas</h3>
        <p>
          Assinaturas são cobradas automaticamente até o cancelamento. 
          Você pode cancelar a qualquer momento.
        </p>

        <h3>7.2 Reembolsos</h3>
        <p>
          Reembolsos são processados conforme nossa política específica 
          e legislação aplicável.
        </p>
      </section>

      <section id="limitacoes">
        <h2>8. Limitações de Responsabilidade</h2>
        <p>
          A HotLovers não será responsável por danos indiretos, especiais 
          ou consequenciais decorrentes do uso da plataforma.
        </p>
      </section>

      <section id="alteracoes">
        <h2>9. Alterações nos Termos</h2>
        <p>
          Podemos alterar estes termos a qualquer momento. Usuários serão 
          notificados sobre mudanças significativas.
        </p>
      </section>

      <section id="contato">
        <h2>10. Contato</h2>
        <p>Para dúvidas sobre estes termos:</p>
        <ul>
          <li><strong>Email:</strong> legal@hotlovers.com</li>
          <li><strong>Telefone:</strong> +55 (11) 9999-9999</li>
        </ul>
      </section>
    </div>
  )
};

export default function TermosPage() {
  return <ModeloPolitica data={termosData} />;
}