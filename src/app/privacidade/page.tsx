"use client";

import { ModeloPolitica, PoliticaData } from "@/components/pages/politicas/modelo-politica";
import { Shield } from "lucide-react";

const privacidadeData: PoliticaData = {
  titulo: "Política de Privacidade",
  subtitulo: "Como coletamos, usamos e protegemos suas informações pessoais na plataforma HotLovers",
  icon: Shield,
  ultimaAtualizacao: "2024-01-15",
  tempoLeitura: "15 min",
  backLink: "/",
  backText: "Voltar ao Início",
  conteudo: (
    <div>
      <section id="introducao">
        <h2>1. Introdução</h2>
        <p>
          A HotLovers está comprometida em proteger a privacidade e segurança dos dados pessoais 
          de todos os usuários de nossa plataforma. Esta Política de Privacidade descreve como 
          coletamos, usamos, armazenamos e protegemos suas informações pessoais.
        </p>
        <p>
          Ao usar nossos serviços, você concorda com as práticas descritas nesta política. 
          Se você não concorda com algum aspecto desta política, pedimos que não use nossa plataforma.
        </p>
      </section>

      <section id="definicoes">
        <h2>2. Definições</h2>
        <p>Para os fins desta política, definimos:</p>
        <ul>
          <li><strong>Dados Pessoais:</strong> Qualquer informação que possa identificá-lo pessoalmente</li>
          <li><strong>Usuário:</strong> Qualquer pessoa que acesse ou use nossos serviços</li>
          <li><strong>Modelo:</strong> Criador de conteúdo premium na plataforma</li>
          <li><strong>Assinante:</strong> Usuário que paga por acesso a conteúdo premium</li>
          <li><strong>Plataforma:</strong> O website e aplicativos da HotLovers</li>
        </ul>
      </section>

      <section id="direitos">
        <h2>3. Seus Direitos</h2>
        <p>Você tem os seguintes direitos sobre seus dados pessoais:</p>

        <h3>3.1 Direito de Acesso</h3>
        <p>Solicitar uma cópia de todos os dados pessoais que temos sobre você.</p>

        <h3>3.2 Direito de Retificação</h3>
        <p>Corrigir dados pessoais incorretos ou incompletos.</p>

        <h3>3.3 Direito de Exclusão</h3>
        <p>Solicitar a exclusão de seus dados pessoais (direito ao esquecimento).</p>

        <h3>3.4 Como Exercer seus Direitos</h3>
        <p>
          Para exercer qualquer desses direitos, entre em contato conosco através 
          de <strong>privacidade@hotlovers.com</strong> ou através das configurações de sua conta.
        </p>
      </section>

      <section id="seguranca">
        <h2>4. Segurança dos Dados</h2>
        <p>
          Implementamos medidas técnicas e organizacionais rigorosas para proteger 
          seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
        </p>

        <h3>4.1 Medidas Técnicas</h3>
        <ul>
          <li>Criptografia SSL/TLS</li>
          <li>Firewalls e sistemas de detecção</li>
          <li>Backup regular e seguro</li>
          <li>Monitoramento 24/7</li>
        </ul>
      </section>

      <section id="contato">
        <h2>5. Contato</h2>
        <p>
          Para dúvidas sobre esta Política de Privacidade ou sobre o 
          tratamento de seus dados pessoais, entre em contato:
        </p>
        <ul>
          <li><strong>Email:</strong> privacidade@hotlovers.com</li>
          <li><strong>Telefone:</strong> +55 (11) 9999-9999</li>
          <li><strong>Endereço:</strong> Rua da Privacidade, 123 - São Paulo, SP</li>
        </ul>
      </section>
    </div>
  )
};

export default function PrivacidadePage() {
  return <ModeloPolitica data={privacidadeData} />;
}