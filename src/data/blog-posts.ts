export interface BlogPost {
  id: number;
  slug: string;
  titulo: string;
  subtitulo: string;
  conteudo: string;
  autor: {
    nome: string;
    avatar: string;
    bio: string;
  };
  categoria: string;
  tags: string[];
  imagemDestaque: string;
  dataPublicacao: string;
  tempoLeitura: string;
  visualizacoes: number;
  curtidas: number;
  destaque: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "como-criar-conteudo-premium-exclusivo",
    titulo: "Como Criar Conteúdo Premium Exclusivo que Engaja",
    subtitulo: "Dicas essenciais para modelos criarem conteúdo único e conquistarem mais assinantes na plataforma",
    conteudo: `
      <p>Criar conteúdo premium exclusivo é uma arte que combina criatividade, estratégia e autenticidade. Neste guia completo, vamos explorar as melhores práticas para desenvolver conteúdo que não apenas engaja, mas também converte visitantes em assinantes fiéis.</p>
      
      <h2>1. Conheça Seu Público</h2>
      <p>O primeiro passo para criar conteúdo premium é entender profundamente quem é seu público. Analise suas interações, comentários e feedback para identificar o que eles realmente valorizam.</p>
      
      <h2>2. Qualidade Acima de Quantidade</h2>
      <p>Invista em equipamentos de qualidade e aprenda técnicas de fotografia e vídeo. Um conteúdo bem produzido vale mais que dez mal feitos.</p>
      
      <h2>3. Seja Autêntica</h2>
      <p>Autenticidade é o que diferencia conteúdo premium de conteúdo comum. Mostre sua personalidade única e crie uma conexão genuína com seus fãs.</p>
      
      <h2>4. Crie Séries e Temas</h2>
      <p>Desenvolva séries temáticas que mantenham seus assinantes ansiosos pelo próximo conteúdo. Isso cria expectativa e fidelidade.</p>
      
      <h2>Conclusão</h2>
      <p>Lembre-se: o conteúdo premium não é apenas sobre o produto final, mas sobre toda a experiência que você oferece aos seus assinantes. Invista tempo em planejamento, produção e relacionamento com seu público.</p>
    `,
    autor: {
      nome: "Isabella Santos",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=100&h=100&fit=crop&crop=face",
      bio: "Top model e criadora de conteúdo com 5 anos de experiência na plataforma"
    },
    categoria: "Criação de Conteúdo",
    tags: ["conteúdo premium", "estratégias", "engajamento", "modelos"],
    imagemDestaque: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    dataPublicacao: "2024-01-15",
    tempoLeitura: "8 min",
    visualizacoes: 15420,
    curtidas: 892,
    destaque: true
  },
  {
    id: 2,
    slug: "fotografia-profissional-para-modelos-iniciantes",
    titulo: "Fotografia Profissional: Guia para Modelos Iniciantes",
    subtitulo: "Transforme suas fotos amadoras em conteúdo profissional com técnicas simples e equipamentos acessíveis",
    conteudo: `
      <p>A fotografia é a base de qualquer conteúdo visual de qualidade. Para modelos iniciantes, dominar as técnicas básicas pode ser o diferencial entre o sucesso e a frustração.</p>
      
      <h2>Equipamentos Essenciais</h2>
      <p>Você não precisa de equipamentos caros para começar. Uma boa câmera de smartphone, ring light e tripé já são suficientes para criar conteúdo de qualidade.</p>
      
      <h2>Iluminação: O Segredo do Sucesso</h2>
      <p>A iluminação é o elemento mais importante da fotografia. Aprenda a usar luz natural e artificial a seu favor.</p>
      
      <h2>Composição e Ângulos</h2>
      <p>Explore diferentes ângulos e composições. A regra dos terços é um bom ponto de partida para criar fotos mais interessantes.</p>
      
      <h2>Edição Básica</h2>
      <p>Aprenda o básico de edição de fotos. Ferramentas gratuitas como VSCO e Snapseed podem transformar suas imagens.</p>
    `,
    autor: {
      nome: "Marco Photography",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      bio: "Fotógrafo profissional especializado em retratos e conteúdo digital"
    },
    categoria: "Fotografia",
    tags: ["fotografia", "técnicas", "iniciantes", "equipamentos"],
    imagemDestaque: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&h=400&fit=crop",
    dataPublicacao: "2024-01-10",
    tempoLeitura: "6 min",
    visualizacoes: 12350,
    curtidas: 645,
    destaque: true
  },
  {
    id: 3,
    slug: "construindo-marca-pessoal-plataformas-digitais",
    titulo: "Construindo sua Marca Pessoal em Plataformas Digitais",
    subtitulo: "Como desenvolver uma identidade única e reconhecível que atrai e mantém assinantes engajados",
    conteudo: `
      <p>Sua marca pessoal é muito mais do que apenas seu nome ou aparência. É a promessa que você faz aos seus fãs sobre a experiência que eles terão ao interagir com seu conteúdo.</p>
      
      <h2>Definindo sua Identidade</h2>
      <p>Comece definindo seus valores, personalidade e o que te torna única. Isso será a base de toda sua comunicação.</p>
      
      <h2>Consistência Visual</h2>
      <p>Mantenha consistência em cores, filtros e estilo visual. Isso ajuda as pessoas a reconhecerem seu conteúdo imediatamente.</p>
      
      <h2>Tom de Voz</h2>
      <p>Desenvolva um tom de voz característico em suas legendas e interações. Seja sempre você mesma.</p>
      
      <h2>Engajamento Autêntico</h2>
      <p>Responda comentários, crie conversas e mostre interesse genuíno em sua comunidade.</p>
    `,
    autor: {
      nome: "Sofia Marketing",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
      bio: "Especialista em marketing digital e personal branding para criadores de conteúdo"
    },
    categoria: "Marketing Digital",
    tags: ["marca pessoal", "branding", "marketing", "identidade"],
    imagemDestaque: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    dataPublicacao: "2024-01-08",
    tempoLeitura: "10 min",
    visualizacoes: 9870,
    curtidas: 432,
    destaque: false
  },
  {
    id: 4,
    slug: "seguranca-privacidade-criadores-conteudo",
    titulo: "Segurança e Privacidade para Criadores de Conteúdo",
    subtitulo: "Proteja sua identidade e dados pessoais enquanto constrói seu império digital com segurança máxima",
    conteudo: `
      <p>A segurança digital é fundamental para qualquer criador de conteúdo. Proteger sua privacidade e dados pessoais deve ser uma prioridade desde o primeiro dia.</p>
      
      <h2>Proteção de Dados Pessoais</h2>
      <p>Nunca compartilhe informações pessoais como endereço, telefone ou documentos. Use nomes artísticos e mantenha sua identidade real protegida.</p>
      
      <h2>Senhas Seguras</h2>
      <p>Use senhas únicas e fortes para cada plataforma. Considere usar um gerenciador de senhas confiável.</p>
      
      <h2>Autenticação em Duas Etapas</h2>
      <p>Sempre ative a autenticação em duas etapas em todas as suas contas. Esta é sua primeira linha de defesa.</p>
      
      <h2>Configurações de Privacidade</h2>
      <p>Revise regularmente as configurações de privacidade de todas as plataformas que você usa.</p>
    `,
    autor: {
      nome: "Alex Security",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      bio: "Especialista em segurança digital e proteção de dados para influenciadores"
    },
    categoria: "Segurança",
    tags: ["segurança", "privacidade", "proteção", "dados"],
    imagemDestaque: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    dataPublicacao: "2024-01-05",
    tempoLeitura: "7 min",
    visualizacoes: 8420,
    curtidas: 578,
    destaque: false
  },
  {
    id: 5,
    slug: "monetizacao-estrategias-avancadas-criadores",
    titulo: "Monetização: Estratégias Avançadas para Criadores",
    subtitulo: "Diversifique suas fontes de renda e maximize seus ganhos com técnicas comprovadas de monetização",
    conteudo: `
      <p>A monetização eficiente vai além de apenas vender conteúdo. É sobre criar múltiplas fontes de renda e construir um negócio sustentável.</p>
      
      <h2>Diversificação de Receitas</h2>
      <p>Não dependa apenas de uma fonte de renda. Explore assinaturas, produtos personalizados, consultoria e parcerias.</p>
      
      <h2>Precificação Estratégica</h2>
      <p>Aprenda a precificar seu conteúdo baseado no valor que você oferece, não apenas no que outros cobram.</p>
      
      <h2>Fidelização de Assinantes</h2>
      <p>Invista em relacionamento. Assinantes fiéis valem mais do que novos assinantes que cancelam rapidamente.</p>
      
      <h2>Análise de Métricas</h2>
      <p>Acompanhe suas métricas financeiras e ajuste sua estratégia baseada em dados reais.</p>
    `,
    autor: {
      nome: "Carol Business",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=100&h=100&fit=crop&crop=face",
      bio: "Consultora de negócios digitais e especialista em monetização de conteúdo"
    },
    categoria: "Negócios",
    tags: ["monetização", "receita", "negócios", "estratégia"],
    imagemDestaque: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    dataPublicacao: "2024-01-03",
    tempoLeitura: "12 min",
    visualizacoes: 11250,
    curtidas: 823,
    destaque: true
  },
  {
    id: 6,
    slug: "tendencias-conteudo-adulto-2024",
    titulo: "Tendências de Conteúdo Adulto em 2024",
    subtitulo: "Descubra as principais tendências que estão moldando o futuro do entretenimento adulto online",
    conteudo: `
      <p>O mercado de conteúdo adulto está em constante evolução. Estar atualizada com as tendências pode ser o diferencial para seu sucesso.</p>
      
      <h2>Realidade Virtual e Aumentada</h2>
      <p>A tecnologia VR/AR está criando experiências mais imersivas e interativas.</p>
      
      <h2>Conteúdo Interativo</h2>
      <p>Lives, chats ao vivo e experiências personalizadas estão ganhando popularidade.</p>
      
      <h2>Sustentabilidade e Consciência Social</h2>
      <p>Criadores estão adotando práticas mais conscientes e sustentáveis.</p>
      
      <h2>Personalização em Massa</h2>
      <p>IA e automação permitem criar conteúdo personalizado em escala.</p>
    `,
    autor: {
      nome: "Tech Trends",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      bio: "Analista de tendências em tecnologia e entretenimento digital"
    },
    categoria: "Tendências",
    tags: ["tendências", "2024", "tecnologia", "futuro"],
    imagemDestaque: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
    dataPublicacao: "2024-01-01",
    tempoLeitura: "9 min",
    visualizacoes: 7890,
    curtidas: 456,
    destaque: false
  },
  {
    id: 7,
    slug: "producao-video-conteudo-premium",
    titulo: "Produção de Vídeo para Conteúdo Premium",
    subtitulo: "Técnicas profissionais para criar vídeos que prendem a atenção e geram mais engajamento",
    conteudo: `
      <p>Os vídeos são o formato de conteúdo que mais gera engajamento. Aprender a produzir vídeos de qualidade pode transformar seu negócio.</p>
      
      <h2>Planejamento é Tudo</h2>
      <p>Crie roteiros, storyboards e planeje cada detalhe antes de começar a gravar.</p>
      
      <h2>Áudio de Qualidade</h2>
      <p>Um áudio ruim pode arruinar um vídeo excelente. Invista em microfones de qualidade.</p>
      
      <h2>Edição Profissional</h2>
      <p>Aprenda técnicas básicas de edição para criar vídeos mais dinâmicos e envolventes.</p>
      
      <h2>Otimização para Plataformas</h2>
      <p>Cada plataforma tem suas especificidades. Adapte seu conteúdo para cada uma.</p>
    `,
    autor: {
      nome: "Video Pro",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      bio: "Produtor de vídeo com 10 anos de experiência em conteúdo digital"
    },
    categoria: "Produção",
    tags: ["vídeo", "produção", "edição", "qualidade"],
    imagemDestaque: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=400&fit=crop",
    dataPublicacao: "2023-12-28",
    tempoLeitura: "11 min",
    visualizacoes: 6540,
    curtidas: 389,
    destaque: false
  },
  {
    id: 8,
    slug: "relacionamento-fas-comunidade-engajada",
    titulo: "Construindo Relacionamento com Fãs: Comunidade Engajada",
    subtitulo: "Como criar conexões genuínas que transformam seguidores casuais em fãs fiéis e assinantes",
    conteudo: `
      <p>O relacionamento com seus fãs é o coração de qualquer negócio de criação de conteúdo bem-sucedido. É a diferença entre ter seguidores e ter uma comunidade.</p>
      
      <h2>Comunicação Autêntica</h2>
      <p>Seja genuína em todas as interações. Seus fãs conseguem perceber quando você está sendo falsa.</p>
      
      <h2>Resposta Consistente</h2>
      <p>Mantenha um padrão de resposta aos comentários e mensagens. Consistência gera confiança.</p>
      
      <h2>Conteúdo Exclusivo para Fãs</h2>
      <p>Crie conteúdo especial apenas para seus fãs mais engajados. Isso os faz se sentirem especiais.</p>
      
      <h2>Eventos e Lives</h2>
      <p>Organize eventos online e sessões ao vivo para criar momentos únicos de conexão.</p>
    `,
    autor: {
      nome: "Luna Community",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
      bio: "Especialista em construção de comunidades e engajamento digital"
    },
    categoria: "Relacionamento",
    tags: ["relacionamento", "comunidade", "engajamento", "fãs"],
    imagemDestaque: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    dataPublicacao: "2023-12-25",
    tempoLeitura: "8 min",
    visualizacoes: 9320,
    curtidas: 672,
    destaque: false
  },
  {
    id: 9,
    slug: "bem-estar-mental-criadores-conteudo",
    titulo: "Bem-estar Mental para Criadores de Conteúdo",
    subtitulo: "Mantenha sua saúde mental em dia enquanto navega pelos desafios da criação de conteúdo online",
    conteudo: `
      <p>A saúde mental é fundamental para uma carreira sustentável como criadora de conteúdo. O burnout é real e pode acabar com sua paixão pelo trabalho.</p>
      
      <h2>Estabeleça Limites</h2>
      <p>Defina horários de trabalho e momentos de descanso. Sua saúde mental vale mais do que qualquer meta financeira.</p>
      
      <h2>Lidando com Críticas</h2>
      <p>Aprenda a filtrar feedback construtivo de comentários tóxicos. Nem toda opinião merece sua atenção.</p>
      
      <h2>Rede de Apoio</h2>
      <p>Mantenha relacionamentos com família e amigos fora do trabalho. Tenha pessoas com quem conversar.</p>
      
      <h2>Procure Ajuda Profissional</h2>
      <p>Não hesite em buscar terapia ou aconselhamento quando necessário. Cuidar da mente é investimento.</p>
    `,
    autor: {
      nome: "Dr. Wellness",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      bio: "Psicólogo especializado em saúde mental de profissionais digitais"
    },
    categoria: "Bem-estar",
    tags: ["saúde mental", "bem-estar", "autocuidado", "burnout"],
    imagemDestaque: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    dataPublicacao: "2023-12-20",
    tempoLeitura: "7 min",
    visualizacoes: 5670,
    curtidas: 445,
    destaque: false
  },
  {
    id: 10,
    slug: "futuro-plataformas-conteudo-adulto",
    titulo: "O Futuro das Plataformas de Conteúdo Adulto",
    subtitulo: "Análise das inovações tecnológicas e mudanças sociais que moldarão o setor nos próximos anos",
    conteudo: `
      <p>O futuro das plataformas de conteúdo adulto será moldado por avanços tecnológicos, mudanças sociais e novas regulamentações. Estar preparada para essas mudanças é essencial.</p>
      
      <h2>Blockchain e NFTs</h2>
      <p>A tecnologia blockchain promete mais transparência e controle para criadores sobre seu conteúdo.</p>
      
      <h2>Inteligência Artificial</h2>
      <p>IA está revolucionando desde a moderação de conteúdo até experiências personalizadas para usuários.</p>
      
      <h2>Regulamentação Global</h2>
      <p>Novas leis estão surgindo globalmente. Mantenha-se informada sobre mudanças regulatórias.</p>
      
      <h2>Sustentabilidade</h2>
      <p>O futuro pertence a plataformas que adotem práticas sustentáveis e responsáveis.</p>
    `,
    autor: {
      nome: "Future Tech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      bio: "Futurista e analista de tecnologia especializado em entretenimento digital"
    },
    categoria: "Futuro",
    tags: ["futuro", "tecnologia", "inovação", "regulamentação"],
    imagemDestaque: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    dataPublicacao: "2023-12-15",
    tempoLeitura: "13 min",
    visualizacoes: 4320,
    curtidas: 287,
    destaque: false
  }
];

// Função para buscar posts por categoria
export const getPostsByCategory = (categoria: string) => {
  return blogPosts.filter(post => post.categoria.toLowerCase() === categoria.toLowerCase());
};

// Função para buscar posts em destaque
export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.destaque);
};

// Função para buscar post por slug
export const getPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

// Função para buscar posts relacionados (mesma categoria, exceto o atual)
export const getRelatedPosts = (currentSlug: string, limit: number = 3) => {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => post.categoria === currentPost.categoria && post.slug !== currentSlug)
    .slice(0, limit);
};