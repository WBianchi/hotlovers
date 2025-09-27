"use client";

import { ModeloPolitica, PoliticaData } from "@/components/pages/politicas/modelo-politica";
import { Heart } from "lucide-react";

const politicasAssinantesData: PoliticaData = {
  titulo: "Políticas para Assinantes",
  subtitulo: "Direitos, benefícios e responsabilidades dos membros premium da HotLovers",
  icon: Heart,
  ultimaAtualizacao: "2024-01-15",
  tempoLeitura: "12 min",
  backLink: "/",
  backText: "Voltar ao Início",
  conteudo: (
    <div>
      <section id="introducao">
        <h2>1. Bem-vindo à HotLovers Premium</h2>
        <p>
          Como assinante da HotLovers, você tem acesso exclusivo ao melhor 
          conteúdo premium da plataforma. Estas políticas definem seus direitos, 
          benefícios e responsabilidades como membro premium.
        </p>
      </section>

      <section id="elegibilidade">
        <h2>2. Elegibilidade para Assinatura</h2>
        <p>Para se tornar assinante, você deve:</p>
        <ul>
          <li>Ter pelo menos 18 anos de idade</li>
          <li>Possuir método de pagamento válido</li>
          <li>Ter capacidade legal para firmar contratos</li>
          <li>Concordar com todos os termos da plataforma</li>
          <li>Fornecer informações verdadeiras e atualizadas</li>
        </ul>
      </section>

      <section id="tipos-assinatura">
        <h2>3. Tipos de Assinatura</h2>
        
        <h3>3.1 Plano Básico</h3>
        <ul>
          <li>Acesso a conteúdo básico das modelos</li>
          <li>Chat limitado</li>
          <li>Visualização de fotos selecionadas</li>
          <li>Suporte por email</li>
        </ul>

        <h3>3.2 Plano Premium</h3>
        <ul>
          <li>Acesso total ao conteúdo das modelos</li>
          <li>Chat ilimitado</li>
          <li>Vídeos em alta definição</li>
          <li>Lives exclusivas</li>
          <li>Suporte prioritário</li>
        </ul>

        <h3>3.3 Plano VIP</h3>
        <ul>
          <li>Todos os benefícios do Premium</li>
          <li>Acesso antecipado a novos conteúdos</li>
          <li>Sessões privadas com modelos</li>
          <li>Conteúdo personalizado</li>
          <li>Suporte 24/7</li>
          <li>Badge VIP exclusiva</li>
        </ul>
      </section>

      <section id="pagamentos">
        <h2>4. Pagamentos e Cobrança</h2>
        
        <h3>4.1 Métodos de Pagamento</h3>
        <p>Aceitamos os seguintes métodos:</p>
        <ul>
          <li>Cartões de crédito (Visa, Mastercard, American Express)</li>
          <li>Cartões de débito</li>
          <li>PIX (Brasil)</li>
          <li>Boleto bancário</li>
          <li>PayPal</li>
        </ul>

        <h3>4.2 Cobrança Automática</h3>
        <ul>
          <li>Assinaturas são renovadas automaticamente</li>
          <li>Cobrança ocorre na data de aniversário da assinatura</li>
          <li>Você será notificado 7 dias antes da renovação</li>
          <li>Falhas no pagamento resultam em suspensão temporária</li>
        </ul>

        <h3>4.3 Preços e Promoções</h3>
        <ul>
          <li>Preços podem variar por região</li>
          <li>Descontos especiais para novos assinantes</li>
          <li>Promoções sazonais disponíveis</li>
          <li>Preços de renovação podem ser diferentes</li>
        </ul>
      </section>

      <section id="beneficios">
        <h2>5. Benefícios Exclusivos</h2>
        
        <h3>5.1 Conteúdo Premium</h3>
        <ul>
          <li>Acesso a galeria completa das modelos</li>
          <li>Vídeos em 4K Ultra HD</li>
          <li>Conteúdo exclusivo não disponível gratuitamente</li>
          <li>Atualizações diárias de conteúdo</li>
        </ul>

        <h3>5.2 Interação Direta</h3>
        <ul>
          <li>Chat privado com modelos verificadas</li>
          <li>Mensagens prioritárias</li>
          <li>Participação em lives exclusivas</li>
          <li>Solicitações de conteúdo personalizado</li>
        </ul>

        <h3>5.3 Experiência Personalizada</h3>
        <ul>
          <li>Recomendações baseadas em preferências</li>
          <li>Lista de favoritos ilimitada</li>
          <li>Histórico completo de visualizações</li>
          <li>Notificações push personalizadas</li>
        </ul>
      </section>

      <section id="uso-responsavel">
        <h2>6. Uso Responsável</h2>
        
        <h3>6.1 Comportamento Esperado</h3>
        <ul>
          <li>Tratar modelos e outros usuários com respeito</li>
          <li>Não compartilhar conteúdo fora da plataforma</li>
          <li>Seguir diretrizes de chat e mensagens</li>
          <li>Reportar comportamentos inadequados</li>
        </ul>

        <h3>6.2 Proibições</h3>
        <ul>
          <li>Assédio ou intimidação de modelos</li>
          <li>Solicitações inapropriadas</li>
          <li>Compartilhamento de conteúdo protegido</li>
          <li>Uso de bots ou automação</li>
          <li>Criação de múltiplas contas</li>
        </ul>
      </section>

      <section id="privacidade">
        <h2>7. Privacidade e Segurança</h2>
        
        <h3>7.1 Proteção de Dados</h3>
        <ul>
          <li>Todas as informações são criptografadas</li>
          <li>Dados de pagamento processados por terceiros seguros</li>
          <li>Histórico de navegação privado</li>
          <li>Opção de navegação anônima</li>
        </ul>

        <h3>7.2 Controle de Privacidade</h3>
        <ul>
          <li>Configurações flexíveis de privacidade</li>
          <li>Controle de notificações</li>
          <li>Opção de exclusão de dados</li>
          <li>Histórico de atividades transparente</li>
        </ul>
      </section>

      <section id="cancelamento">
        <h2>8. Cancelamento e Reembolsos</h2>
        
        <h3>8.1 Como Cancelar</h3>
        <ul>
          <li>Cancele a qualquer momento através da sua conta</li>
          <li>Acesso ao conteúdo mantido até o fim do período pago</li>
          <li>Sem taxas de cancelamento</li>
          <li>Reativação simples quando desejar</li>
        </ul>

        <h3>8.2 Política de Reembolso</h3>
        <ul>
          <li>Reembolso integral dentro de 7 dias (primeira assinatura)</li>
          <li>Reembolsos proporcionais em casos específicos</li>
          <li>Análise caso a caso para situações especiais</li>
          <li>Processamento em até 5 dias úteis</li>
        </ul>
      </section>

      <section id="suporte">
        <h2>9. Suporte ao Assinante</h2>
        
        <h3>9.1 Canais de Atendimento</h3>
        <ul>
          <li><strong>Chat 24/7:</strong> Disponível na plataforma</li>
          <li><strong>Email:</strong> assinantes@hotlovers.com</li>
          <li><strong>WhatsApp:</strong> +55 (11) 99999-9999</li>
          <li><strong>FAQ:</strong> Base de conhecimento completa</li>
        </ul>

        <h3>9.2 Tempos de Resposta</h3>
        <ul>
          <li><strong>Chat:</strong> Resposta imediata</li>
          <li><strong>Email:</strong> Até 24 horas</li>
          <li><strong>Questões técnicas:</strong> Prioridade máxima</li>
          <li><strong>VIPs:</strong> Atendimento prioritário</li>
        </ul>
      </section>

      <section id="direitos">
        <h2>10. Seus Direitos</h2>
        <ul>
          <li>Acesso total aos conteúdos contratados</li>
          <li>Transparência nos custos e cobranças</li>
          <li>Suporte técnico de qualidade</li>
          <li>Proteção de dados pessoais</li>
          <li>Cancelamento sem penalidades</li>
          <li>Tratamento respeitoso e profissional</li>
        </ul>
      </section>

      <section id="limitacoes">
        <h2>11. Limitações de Uso</h2>
        <ul>
          <li>Uma conta por pessoa</li>
          <li>Uso pessoal e não comercial</li>
          <li>Proibido compartilhamento de credenciais</li>
          <li>Limite de dispositivos simultâneos</li>
          <li>Conteúdo disponível apenas na plataforma</li>
        </ul>
      </section>

      <section id="contato">
        <h2>12. Contato</h2>
        <p>
          Para dúvidas sobre estas políticas ou sua assinatura:
        </p>
        <ul>
          <li><strong>Suporte Geral:</strong> suporte@hotlovers.com</li>
          <li><strong>Cobrança:</strong> cobranca@hotlovers.com</li>
          <li><strong>Técnico:</strong> tecnico@hotlovers.com</li>
          <li><strong>Telefone:</strong> +55 (11) 9999-9999</li>
        </ul>
      </section>
    </div>
  )
};

export default function PoliticasAssinantesPage() {
  return <ModeloPolitica data={politicasAssinantesData} />;
}