"use client";

import { ModeloPolitica, PoliticaData } from "@/components/pages/politicas/modelo-politica";
import { FileText } from "lucide-react";

const termosCondicoesData: PoliticaData = {
  titulo: "Termos e Condições",
  subtitulo: "Regulamento completo e condições gerais para uso da plataforma HotLovers",
  icon: FileText,
  ultimaAtualizacao: "2024-01-15",
  tempoLeitura: "15 min",
  backLink: "/",
  backText: "Voltar ao Início",
  conteudo: (
    <div>
      <section id="introducao">
        <h2>1. Introdução</h2>
        <p>
          Estes Termos e Condições regem completamente o uso da plataforma HotLovers. 
          Ao acessar ou usar nossos serviços, você aceita estes termos integralmente.
        </p>
      </section>

      <section id="definicoes">
        <h2>2. Definições</h2>
        <ul>
          <li><strong>HotLovers:</strong> A plataforma e empresa</li>
          <li><strong>Usuário:</strong> Qualquer pessoa que use nossos serviços</li>
          <li><strong>Conteúdo:</strong> Qualquer material na plataforma</li>
          <li><strong>Serviços:</strong> Todos os recursos oferecidos</li>
        </ul>
      </section>

      <section id="elegibilidade">
        <h2>3. Elegibilidade</h2>
        <p>Para usar a HotLovers você deve:</p>
        <ul>
          <li>Ter 18 anos ou mais</li>
          <li>Ter capacidade legal</li>
          <li>Aceitar estes termos</li>
          <li>Fornecer informações verdadeiras</li>
        </ul>
      </section>

      <section id="conta">
        <h2>4. Conta de Usuário</h2>
        <p>
          Você é responsável por manter sua conta segura e por todas as 
          atividades que ocorrem em sua conta.
        </p>
      </section>

      <section id="pagamentos">
        <h2>5. Pagamentos</h2>
        <p>
          Todos os pagamentos são processados de forma segura. Assinaturas 
          são renovadas automaticamente até o cancelamento.
        </p>
      </section>

      <section id="cancelamento">
        <h2>6. Cancelamento</h2>
        <p>
          Você pode cancelar sua assinatura a qualquer momento através 
          das configurações da conta.
        </p>
      </section>

      <section id="contato">
        <h2>7. Contato</h2>
        <p>Para dúvidas sobre estes termos:</p>
        <ul>
          <li><strong>Email:</strong> legal@hotlovers.com</li>
          <li><strong>Telefone:</strong> +55 (11) 9999-9999</li>
        </ul>
      </section>
    </div>
  )
};

export default function TermosCondicoesPage() {
  return <ModeloPolitica data={termosCondicoesData} />;
}