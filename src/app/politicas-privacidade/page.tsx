"use client";

import { ModeloPolitica, PoliticaData } from "@/components/pages/politicas/modelo-politica";
import { Shield } from "lucide-react";

const politicasPrivacidadeData: PoliticaData = {
  titulo: "Políticas de Privacidade",
  subtitulo: "Como protegemos e utilizamos suas informações pessoais na plataforma HotLovers",
  icon: Shield,
  ultimaAtualizacao: "2024-01-15",
  tempoLeitura: "18 min",
  backLink: "/",
  backText: "Voltar ao Início",
  conteudo: (
    <div>
      <section id="introducao">
        <h2>1. Introdução</h2>
        <p>
          A HotLovers valoriza sua privacidade e está comprometida em proteger 
          suas informações pessoais. Esta política explica como coletamos, usamos 
          e protegemos seus dados.
        </p>
      </section>

      <section id="coleta">
        <h2>2. Coleta de Dados</h2>
        <h3>2.1 Dados Coletados</h3>
        <ul>
          <li>Informações de cadastro (nome, email, idade)</li>
          <li>Dados de pagamento (processados por terceiros seguros)</li>
          <li>Histórico de navegação e uso</li>
          <li>Preferências e configurações</li>
        </ul>

        <h3>2.2 Como Coletamos</h3>
        <ul>
          <li>Formulários de registro</li>
          <li>Cookies e tecnologias similares</li>
          <li>Interações na plataforma</li>
          <li>Comunicações diretas</li>
        </ul>
      </section>

      <section id="uso">
        <h2>3. Uso dos Dados</h2>
        <p>Utilizamos seus dados para:</p>
        <ul>
          <li>Fornecer e melhorar nossos serviços</li>
          <li>Processar pagamentos e assinaturas</li>
          <li>Personalizar sua experiência</li>
          <li>Comunicar atualizações importantes</li>
          <li>Garantir segurança e prevenir fraudes</li>
        </ul>
      </section>

      <section id="compartilhamento">
        <h2>4. Compartilhamento</h2>
        <p>
          Não vendemos seus dados pessoais. Compartilhamos apenas com 
          prestadores de serviços essenciais e quando exigido por lei.
        </p>
      </section>

      <section id="seguranca">
        <h2>5. Segurança</h2>
        <p>
          Implementamos medidas técnicas e organizacionais avançadas para 
          proteger seus dados contra acesso não autorizado.
        </p>
        <ul>
          <li>Criptografia SSL/TLS</li>
          <li>Firewalls e monitoramento</li>
          <li>Controle de acesso restrito</li>
          <li>Auditorias regulares de segurança</li>
        </ul>
      </section>

      <section id="direitos">
        <h2>6. Seus Direitos</h2>
        <p>Você tem direito a:</p>
        <ul>
          <li>Acessar seus dados pessoais</li>
          <li>Corrigir informações incorretas</li>
          <li>Solicitar exclusão de dados</li>
          <li>Portabilidade de dados</li>
          <li>Opor-se ao processamento</li>
        </ul>
      </section>

      <section id="cookies">
        <h2>7. Cookies</h2>
        <p>
          Utilizamos cookies para melhorar sua experiência. Você pode 
          gerenciar suas preferências de cookies nas configurações.
        </p>
      </section>

      <section id="contato">
        <h2>8. Contato</h2>
        <p>Para questões sobre privacidade:</p>
        <ul>
          <li><strong>Email:</strong> privacidade@hotlovers.com</li>
          <li><strong>DPO:</strong> dpo@hotlovers.com</li>
          <li><strong>Telefone:</strong> +55 (11) 9999-9999</li>
        </ul>
      </section>
    </div>
  )
};

export default function PoliticasPrivacidadePage() {
  return <ModeloPolitica data={politicasPrivacidadeData} />;
}