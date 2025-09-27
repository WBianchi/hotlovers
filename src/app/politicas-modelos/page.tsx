"use client";

import { ModeloPolitica, PoliticaData } from "@/components/pages/politicas/modelo-politica";
import { Users } from "lucide-react";

const politicasModelosData: PoliticaData = {
  titulo: "Políticas para Modelos",
  subtitulo: "Diretrizes, responsabilidades e benefícios para criadores de conteúdo na HotLovers",
  icon: Users,
  ultimaAtualizacao: "2024-01-15",
  tempoLeitura: "20 min",
  backLink: "/",
  backText: "Voltar ao Início",
  conteudo: (
    <div>
      <section id="introducao">
        <h2>1. Bem-vinda à HotLovers</h2>
        <p>
          Como modelo na HotLovers, você faz parte de uma comunidade premium 
          dedicada à criação de conteúdo de alta qualidade. Estas políticas 
          estabelecem diretrizes para garantir um ambiente seguro e próspero 
          para todos.
        </p>
      </section>

      <section id="elegibilidade">
        <h2>2. Elegibilidade</h2>
        <p>Para ser modelo na HotLovers, você deve:</p>
        <ul>
          <li>Ter pelo menos 18 anos de idade</li>
          <li>Possuir documentos válidos de identificação</li>
          <li>Ter capacidade legal para firmar contratos</li>
          <li>Concordar com todos os termos e políticas</li>
          <li>Passar pelo processo de verificação</li>
        </ul>
      </section>

      <section id="verificacao">
        <h2>3. Processo de Verificação</h2>
        <h3>3.1 Documentação Necessária</h3>
        <ul>
          <li>Documento de identidade com foto (RG, CNH ou Passaporte)</li>
          <li>CPF válido</li>
          <li>Comprovante de residência (últimos 3 meses)</li>
          <li>Dados bancários para pagamentos</li>
        </ul>

        <h3>3.2 Verificação de Identidade</h3>
        <p>
          Todas as modelos passam por um processo rigoroso de verificação 
          para garantir autenticidade e segurança da plataforma.
        </p>
      </section>

      <section id="conteudo">
        <h2>4. Diretrizes de Conteúdo</h2>
        
        <h3>4.1 Conteúdo Permitido</h3>
        <ul>
          <li>Fotos e vídeos originais de sua autoria</li>
          <li>Conteúdo sensual e artístico</li>
          <li>Lives e transmissões ao vivo</li>
          <li>Interações através de chat e mensagens</li>
        </ul>

        <h3>4.2 Conteúdo Proibido</h3>
        <ul>
          <li>Conteúdo violento ou que incite violência</li>
          <li>Materiais protegidos por direitos autorais</li>
          <li>Conteúdo que viole leis locais ou internacionais</li>
          <li>Spam ou conteúdo irrelevante</li>
          <li>Informações pessoais de terceiros</li>
        </ul>

        <h3>4.3 Qualidade do Conteúdo</h3>
        <p>
          Encorajamos a criação de conteúdo de alta qualidade:
        </p>
        <ul>
          <li>Resolução mínima de 1080p para vídeos</li>
          <li>Boa iluminação e qualidade de áudio</li>
          <li>Conteúdo original e criativo</li>
          <li>Regularidade nas publicações</li>
        </ul>
      </section>

      <section id="receitas">
        <h2>5. Sistema de Receitas</h2>
        
        <h3>5.1 Divisão de Receitas</h3>
        <p>
          As modelos recebem <strong>70%</strong> de todas as receitas geradas 
          através de suas assinaturas, tips e conteúdo premium.
        </p>

        <h3>5.2 Formas de Monetização</h3>
        <ul>
          <li><strong>Assinaturas:</strong> Receita recorrente mensal</li>
          <li><strong>Tips:</strong> Gorjetas de fãs</li>
          <li><strong>Conteúdo Premium:</strong> Venda de conteúdo exclusivo</li>
          <li><strong>Lives Privadas:</strong> Sessões personalizadas</li>
          <li><strong>Mensagens Pagas:</strong> Chat premium</li>
        </ul>

        <h3>5.3 Pagamentos</h3>
        <ul>
          <li>Pagamentos semanais via transferência bancária</li>
          <li>Valor mínimo para saque: R$ 100</li>
          <li>Processamento em até 2 dias úteis</li>
          <li>Relatórios detalhados de ganhos</li>
        </ul>
      </section>

      <section id="ferramentas">
        <h2>6. Ferramentas e Recursos</h2>
        
        <h3>6.1 Painel da Modelo</h3>
        <ul>
          <li>Dashboard com estatísticas em tempo real</li>
          <li>Gerenciamento de conteúdo e uploads</li>
          <li>Chat integrado com fãs</li>
          <li>Configurações de privacidade e bloqueios</li>
          <li>Relatórios financeiros detalhados</li>
        </ul>

        <h3>6.2 Suporte e Treinamento</h3>
        <ul>
          <li>Suporte técnico 24/7</li>
          <li>Guias de melhores práticas</li>
          <li>Workshops sobre criação de conteúdo</li>
          <li>Comunidade privada de modelos</li>
          <li>Programa de mentoria</li>
        </ul>
      </section>

      <section id="seguranca">
        <h2>7. Segurança e Privacidade</h2>
        
        <h3>7.1 Proteção da Identidade</h3>
        <ul>
          <li>Opção de usar nome artístico</li>
          <li>Bloqueio geográfico por região</li>
          <li>Controle de quem pode ver seu conteúdo</li>
          <li>Ferramentas de bloqueio de usuários</li>
        </ul>

        <h3>7.2 Segurança de Dados</h3>
        <ul>
          <li>Criptografia de ponta a ponta</li>
          <li>Backup seguro de conteúdo</li>
          <li>Proteção contra screenshots não autorizados</li>
          <li>Monitoramento de vazamentos</li>
        </ul>
      </section>

      <section id="promocao">
        <h2>8. Marketing e Promoção</h2>
        
        <h3>8.1 Ferramentas de Marketing</h3>
        <ul>
          <li>Página de perfil personalizada</li>
          <li>Sistema de ranking e destaque</li>
          <li>Promoções e descontos automatizados</li>
          <li>Links de referência</li>
        </ul>

        <h3>8.2 Redes Sociais</h3>
        <p>
          Encorajamos a promoção em redes sociais, mas lembre-se de 
          seguir as diretrizes de cada plataforma.
        </p>
      </section>

      <section id="responsabilidades">
        <h2>9. Responsabilidades</h2>
        
        <h3>9.1 Da Modelo</h3>
        <ul>
          <li>Criar conteúdo original e de qualidade</li>
          <li>Interagir respeitosamente com fãs</li>
          <li>Manter informações atualizadas</li>
          <li>Seguir todas as diretrizes da plataforma</li>
          <li>Reportar problemas ou violações</li>
        </ul>

        <h3>9.2 Da HotLovers</h3>
        <ul>
          <li>Fornecer plataforma segura e estável</li>
          <li>Processar pagamentos pontualmente</li>
          <li>Oferecer suporte técnico</li>
          <li>Proteger dados e privacidade</li>
          <li>Promover conteúdo de qualidade</li>
        </ul>
      </section>

      <section id="violacoes">
        <h2>10. Violações e Penalidades</h2>
        
        <h3>10.1 Sistema de Advertências</h3>
        <p>
          Violações menores resultam em advertências. Violações graves 
          podem levar à suspensão ou encerramento da conta.
        </p>

        <h3>10.2 Processo de Apelação</h3>
        <p>
          Modelos têm direito de apelar decisões através do nosso 
          sistema de suporte.
        </p>
      </section>

      <section id="suporte">
        <h2>11. Suporte e Contato</h2>
        <p>
          Nossa equipe está sempre disponível para ajudar:
        </p>
        <ul>
          <li><strong>Email Modelos:</strong> modelos@hotlovers.com</li>
          <li><strong>Suporte Técnico:</strong> suporte@hotlovers.com</li>
          <li><strong>Financeiro:</strong> pagamentos@hotlovers.com</li>
          <li><strong>WhatsApp:</strong> +55 (11) 99999-9999</li>
          <li><strong>Chat 24/7:</strong> Disponível no painel</li>
        </ul>
      </section>

      <section id="alteracoes">
        <h2>12. Alterações nas Políticas</h2>
        <p>
          Estas políticas podem ser atualizadas. Mudanças significativas 
          serão comunicadas com 30 dias de antecedência.
        </p>
      </section>
    </div>
  )
};

export default function PoliticasModelosPage() {
  return <ModeloPolitica data={politicasModelosData} />;
}