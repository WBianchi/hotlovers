import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Limpar dados existentes (cuidado em produção!)
  console.log('🧹 Limpando dados existentes...')
  await prisma.ganho.deleteMany()
  await prisma.conversaoAfiliado.deleteMany()
  await prisma.grupoAfiliado.deleteMany()
  await prisma.afiliado.deleteMany()
  await prisma.compraPack.deleteMany()
  await prisma.conteudoPack.deleteMany()
  await prisma.pack.deleteMany()
  await prisma.doacao.deleteMany()
  await prisma.assinatura.deleteMany()
  await prisma.plano.deleteMany()
  await prisma.avaliacao.deleteMany()
  await prisma.mensagem.deleteMany()
  await prisma.conteudo.deleteMany()
  await prisma.disparo.deleteMany()
  await prisma.template.deleteMany()
  await prisma.banner.deleteMany()
  await prisma.configuracaoSistema.deleteMany()
  await prisma.modelo.deleteMany()
  await prisma.assinante.deleteMany()
  await prisma.admin.deleteMany()

  // Criar Admin
  console.log('👑 Criando administrador...')
  const senhaHashAdmin = await bcrypt.hash('admin123456', 12)
  const admin = await prisma.admin.create({
    data: {
      nome: 'Super Admin',
      email: 'admin@hotlovers.com',
      senha: senhaHashAdmin,
      telefone: '+5511999999999',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      permissoes: {
        usuarios: true,
        financeiro: true,
        conteudo: true,
        configuracoes: true,
        relatorios: true
      },
      ativo: true
    }
  })

  // Criar Assinantes
  console.log('👥 Criando assinantes...')
  const senhaHashAssinante = await bcrypt.hash('123456', 12)
  const assinantes = await Promise.all([
    prisma.assinante.create({
      data: {
        nome: 'João Silva',
        email: 'joao@email.com',
        senha: senhaHashAssinante,
        telefone: '+5511888888888',
        cidade: 'São Paulo',
        estado: 'SP',
        verificado: true,
        premium: false
      }
    }),
    prisma.assinante.create({
      data: {
        nome: 'Pedro Santos',
        email: 'pedro@email.com',
        senha: senhaHashAssinante,
        telefone: '+5511777777777',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        verificado: true,
        premium: true
      }
    })
  ])

  // Criar Modelos
  console.log('💄 Criando 10 modelos...')
  const senhaHashModelo = await bcrypt.hash('modelo123', 12)
  const modelos = await Promise.all([
    prisma.modelo.create({
      data: {
        nome: 'Larissa Manoela Silva',
        nomeArtistico: 'Lari Hot',
        email: 'lari@hotlovers.com',
        senha: senhaHashModelo,
        telefone: '+5511666666666',
        foto: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=1080&h=1080&fit=crop&crop=face',
        cpf: '12345678901',
        rg: '123456789',
        endereco: 'Rua das Flores, 123',
        cidade: 'São Paulo',
        estado: 'SP',
        bairro: 'Vila Madalena',
        rua: 'Rua das Flores',
        numero: '123',
        cep: '01234567',
        linkInstagram: 'https://instagram.com/lari_hot',
        linkTwitter: 'https://twitter.com/lari_hot',
        status: 'APROVADA',
        ativo: true,
        destaque: true,
        verificada: true,
        biografia: 'Modelo sensual e carinhosa, aqui para realizar seus sonhos mais quentes 🔥',
        // // tags: JSON.stringify(["loira", "sensual", "carinhosa", "brasileira"]),
        precoMensal: 29.90,
        percentualPlataforma: 20.0
      }
    }),
    prisma.modelo.create({
      data: {
        nome: 'Amanda Costa',
        nomeArtistico: 'Amanda Fire',
        email: 'amanda@hotlovers.com',
        senha: senhaHashModelo,
        telefone: '+5511555555555',
        foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&h=1080&fit=crop&crop=face',
        cpf: '98765432109',
        rg: '987654321',
        endereco: 'Av. Paulista, 456',
        cidade: 'São Paulo',
        estado: 'SP',
        bairro: 'Bela Vista',
        rua: 'Av. Paulista',
        numero: '456',
        cep: '01310100',
        linkInstagram: 'https://instagram.com/amanda_fire',
        linkOnlyFans: 'https://onlyfans.com/amanda_fire',
        chavePix: '+5511555555555',
        status: 'APROVADA',
        ativo: true,
        destaque: true,
        verificada: true,
        biografia: 'Sua morena favorita está aqui! Conteúdo exclusivo todos os dias 💋',
        // tags: JSON.stringify(['morena', 'brasileira', 'exclusivo', 'diario']),
        precoMensal: 39.90,
        percentualPlataforma: 18.0
      }
    }),
    prisma.modelo.create({
      data: {
        nome: 'Gabriela Santos',
        nomeArtistico: 'Gabi Dreams',
        email: 'gabi@hotlovers.com',
        senha: senhaHashModelo,
        telefone: '+5511444444444',
        foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1080&h=1080&fit=crop&crop=face',
        cpf: '11122233344',
        rg: '111222333',
        endereco: 'Rua Augusta, 789',
        cidade: 'São Paulo',
        estado: 'SP',
        bairro: 'Consolação',
        rua: 'Rua Augusta',
        numero: '789',
        cep: '01305000',
        linkInstagram: 'https://instagram.com/gabi_dreams',
        linkTikTok: 'https://tiktok.com/@gabi_dreams',
        chavePix: '+5511444444444',
        status: 'APROVADA',
        ativo: true,
        destaque: false,
        verificada: true,
        biografia: 'Ruiva safada que adora realizar fantasias! Venha se divertir comigo 😈',
        // tags: ['ruiva', 'safada', 'fantasias', 'divertida'],
        precoMensal: 24.90,
        percentualPlataforma: 22.0
      }
    }),
    prisma.modelo.create({
      data: {
        nome: 'Juliana Oliveira',
        nomeArtistico: 'Juli Delícia',
        email: 'juli@hotlovers.com',
        senha: senhaHashModelo,
        telefone: '+5511333333333',
        foto: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1080&h=1080&fit=crop&crop=face',
        cpf: '22233344455',
        rg: '222333444',
        endereco: 'Av. Rebouças, 321',
        cidade: 'São Paulo',
        estado: 'SP',
        bairro: 'Pinheiros',
        rua: 'Av. Rebouças',
        numero: '321',
        cep: '05402000',
        linkInstagram: 'https://instagram.com/juli_delicia',
        linkPrivacy: 'https://privacy.com.br/juli_delicia',
        chavePix: 'juli@hotlovers.com',
        status: 'APROVADA',
        ativo: true,
        destaque: true,
        verificada: true,
        biografia: 'Morena linda e sedutora! Conteúdo premium todos os dias! 🌹',
        // tags: ['morena', 'sedutora', 'premium', 'linda'],
        precoMensal: 34.90,
        percentualPlataforma: 19.0
      }
    }),
    prisma.modelo.create({
      data: {
        nome: 'Bianca Ferreira',
        nomeArtistico: 'Bia Sexy',
        email: 'bia@hotlovers.com',
        senha: senhaHashModelo,
        telefone: '+5511222222222',
        foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1080&h=1080&fit=crop&crop=face',
        cpf: '33344455566',
        rg: '333444555',
        endereco: 'Rua Oscar Freire, 654',
        cidade: 'São Paulo',
        estado: 'SP',
        bairro: 'Jardins',
        rua: 'Rua Oscar Freire',
        numero: '654',
        cep: '01426000',
        linkInstagram: 'https://instagram.com/bia_sexy',
        linkOnlyFans: 'https://onlyfans.com/bia_sexy',
        chavePix: '33344455566',
        status: 'APROVADA',
        ativo: true,
        destaque: false,
        verificada: true,
        biografia: 'Loira gostosa e muito safadinha! Vem brincar comigo 😘',
        // tags: ['loira', 'gostosa', 'safadinha', 'brincalhona'],
        precoMensal: 27.90,
        percentualPlataforma: 21.0
      }
    }),
    prisma.modelo.create({
      data: {
        nome: 'Fernanda Lima',
        nomeArtistico: 'Fê Tesão',
        email: 'fe@hotlovers.com',
        senha: senhaHashModelo,
        telefone: '+5511111111111',
        foto: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1080&h=1080&fit=crop&crop=face',
        cpf: '44455566677',
        rg: '444555666',
        endereco: 'Rua da Consolação, 987',
        cidade: 'São Paulo',
        estado: 'SP',
        bairro: 'República',
        rua: 'Rua da Consolação',
        numero: '987',
        cep: '01302000',
        linkInstagram: 'https://instagram.com/fe_tesao',
        linkTwitter: 'https://twitter.com/fe_tesao',
        chavePix: 'fe@hotlovers.com',
        status: 'APROVADA',
        ativo: true,
        destaque: true,
        verificada: true,
        biografia: 'Brunette deliciosa que adora agradar! Conteúdo quente diário 🔥',
        // tags: ['brunette', 'deliciosa', 'quente', 'agradar'],
        precoMensal: 32.90,
        percentualPlataforma: 20.0
      }
    }),
    prisma.modelo.create({
      data: {
        nome: 'Camila Rodrigues',
        nomeArtistico: 'Cami Angel',
        email: 'cami@hotlovers.com',
        senha: senhaHashModelo,
        telefone: '+5521999999999',
        foto: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1080&h=1080&fit=crop&crop=face',
        cpf: '55566677788',
        rg: '555666777',
        endereco: 'Av. Atlântica, 159',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        bairro: 'Copacabana',
        rua: 'Av. Atlântica',
        numero: '159',
        cep: '22070000',
        linkInstagram: 'https://instagram.com/cami_angel',
        linkTikTok: 'https://tiktok.com/@cami_angel',
        chavePix: '+5521999999999',
        status: 'APROVADA',
        ativo: true,
        destaque: false,
        verificada: true,
        biografia: 'Carioca sensual direto de Copacabana! Sol, mar e muito prazer! 🏖️',
        // tags: ['carioca', 'sensual', 'praia', 'prazer'],
        precoMensal: 26.90,
        percentualPlataforma: 23.0
      }
    }),
    prisma.modelo.create({
      data: {
        nome: 'Rafaela Alves',
        nomeArtistico: 'Rafa Goddess',
        email: 'rafa@hotlovers.com',
        senha: senhaHashModelo,
        telefone: '+5531888888888',
        foto: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1080&h=1080&fit=crop&crop=face',
        cpf: '66677788899',
        rg: '666777888',
        endereco: 'Rua da Bahia, 753',
        cidade: 'Belo Horizonte',
        estado: 'MG',
        bairro: 'Centro',
        rua: 'Rua da Bahia',
        numero: '753',
        cep: '30160010',
        linkInstagram: 'https://instagram.com/rafa_goddess',
        linkPrivacy: 'https://privacy.com.br/rafa_goddess',
        chavePix: 'rafa@hotlovers.com',
        status: 'APROVADA',
        ativo: true,
        destaque: true,
        verificada: true,
        biografia: 'Mineira linda com jeitinho especial! Vem conhecer meu carinho 💖',
        // tags: ['mineira', 'linda', 'carinho', 'especial'],
        precoMensal: 31.90,
        percentualPlataforma: 20.5
      }
    }),
    prisma.modelo.create({
      data: {
        nome: 'Isabela Martins',
        nomeArtistico: 'Isa Passion',
        email: 'isa@hotlovers.com',
        senha: senhaHashModelo,
        telefone: '+5541777777777',
        foto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1080&h=1080&fit=crop&crop=face',
        cpf: '77788899900',
        rg: '777888999',
        endereco: 'Rua XV de Novembro, 951',
        cidade: 'Curitiba',
        estado: 'PR',
        bairro: 'Centro',
        rua: 'Rua XV de Novembro',
        numero: '951',
        cep: '80020000',
        linkInstagram: 'https://instagram.com/isa_passion',
        linkOnlyFans: 'https://onlyfans.com/isa_passion',
        chavePix: '77788899900',
        status: 'APROVADA',
        ativo: true,
        destaque: false,
        verificada: true,
        biografia: 'Sulista apaixonante! Aqui você encontra carinho e muito tesão 😍',
        // tags: ['sulista', 'apaixonante', 'carinho', 'tesao'],
        precoMensal: 28.90,
        percentualPlataforma: 21.5
      }
    }),
    prisma.modelo.create({
      data: {
        nome: 'Letícia Souza',
        nomeArtistico: 'Lê Provocante',
        email: 'le@hotlovers.com',
        senha: senhaHashModelo,
        telefone: '+5511987654321',
        foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1080&h=1080&fit=crop&crop=face',
        cpf: '88899900011',
        rg: '888999000',
        endereco: 'Av. Ibirapuera, 357',
        cidade: 'São Paulo',
        estado: 'SP',
        bairro: 'Ibirapuera',
        rua: 'Av. Ibirapuera',
        numero: '357',
        cep: '04029000',
        linkInstagram: 'https://instagram.com/le_provocante',
        linkTwitter: 'https://twitter.com/le_provocante',
        linkTikTok: 'https://tiktok.com/@le_provocante',
        chavePix: 'le@hotlovers.com',
        status: 'APROVADA',
        ativo: true,
        destaque: true,
        verificada: true,
        biografia: 'A mais provocante de todas! Conteúdo exclusivo que vai te deixar louco! 🔥💋',
        // tags: ['provocante', 'exclusivo', 'louco', 'sedutora'],
        precoMensal: 36.90,
        percentualPlataforma: 18.5
      }
    })
  ])

  // Criar Planos
  console.log('💳 Criando planos...')
  const planos = await Promise.all([
    prisma.plano.create({
      data: {
        nome: 'Plano Basic',
        descricao: 'Acesso básico a todo conteúdo da plataforma',
        preco: 19.90,
        tipo: 'PLATAFORMA',
        duracao: 30,
        acessoTotalConteudo: true,
        limiteMensagens: 10,
        downloadPacks: false,
        suporteVip: false,
        ativo: true,
        destaque: false
      }
    }),
    prisma.plano.create({
      data: {
        nome: 'Plano VIP',
        descricao: 'Acesso VIP com todos os benefícios premium',
        preco: 49.90,
        tipo: 'PLATAFORMA',
        duracao: 30,
        acessoTotalConteudo: true,
        limiteMensagens: null,
        downloadPacks: true,
        suporteVip: true,
        ativo: true,
        destaque: true
      }
    })
  ])

  // Criar Packs para algumas modelos
  console.log('📦 Criando packs...')
  const packs = await Promise.all([
    prisma.pack.create({
      data: {
        modeloId: modelos[0].id, // Lari Hot
        titulo: 'Pack Sensual Lari',
        descricao: 'Pack especial com fotos exclusivas e muito sensuais',
        preco: 39.90,
        capa: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
        ativo: true,
        destaque: true,
        limitado: true,
        limite: 100,
        vendidos: 15
      }
    }),
    prisma.pack.create({
      data: {
        modeloId: modelos[1].id, // Amanda Fire
        titulo: 'Pack Fire Exclusivo',
        descricao: 'Conteúdo premium da Amanda com vídeos e fotos quentes',
        preco: 49.90,
        capa: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop',
        ativo: true,
        destaque: true,
        limitado: false,
        vendidos: 8
      }
    }),
    prisma.pack.create({
      data: {
        modeloId: modelos[9].id, // Lê Provocante
        titulo: 'Pack Provocante Premium',
        descricao: 'O pack mais provocante com conteúdo exclusivo',
        preco: 59.90,
        capa: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop',
        ativo: true,
        destaque: true,
        limitado: true,
        limite: 50,
        vendidos: 23
      }
    })
  ])

  // Criar Conteúdos dos Packs
  console.log('🎬 Criando conteúdos dos packs...')
  await Promise.all([
    // Pack Lari Hot
    prisma.conteudoPack.create({
      data: {
        packId: packs[0].id,
        tipo: 'foto',
        url: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=1080&h=1080&fit=crop',
        titulo: 'Foto Sensual 1',
        ordem: 1
      }
    }),
    prisma.conteudoPack.create({
      data: {
        packId: packs[0].id,
        tipo: 'foto',
        url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1080&h=1080&fit=crop',
        titulo: 'Foto Sensual 2',
        ordem: 2
      }
    }),
    prisma.conteudoPack.create({
      data: {
        packId: packs[0].id,
        tipo: 'video',
        url: 'https://sample-videos.com/zip/10/mp4/720/SampleVideo_720x480_1mb.mp4',
        titulo: 'Vídeo Exclusivo',
        ordem: 3
      }
    }),
    
    // Pack Amanda Fire
    prisma.conteudoPack.create({
      data: {
        packId: packs[1].id,
        tipo: 'foto',
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&h=1080&fit=crop',
        titulo: 'Amanda Fire 1',
        ordem: 1
      }
    }),
    prisma.conteudoPack.create({
      data: {
        packId: packs[1].id,
        tipo: 'video',
        url: 'https://sample-videos.com/zip/10/mp4/720/SampleVideo_720x480_2mb.mp4',
        titulo: 'Vídeo Fire',
        ordem: 2
      }
    })
  ])

  // Criar Conteúdos gerais das modelos
  console.log('📸 Criando conteúdos das modelos...')
  await Promise.all([
    // Conteúdos da Lari Hot
    prisma.conteudo.create({
      data: {
        modeloId: modelos[0].id,
        tipo: 'foto',
        titulo: 'Foto do Dia',
        descricao: 'Uma foto especial para vocês',
        url: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=1080&h=1080&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop',
        premium: false,
        gratuito: true,
        // tags: ['selfie', 'linda', 'diario'],
        visualizacoes: 1250,
        curtidas: 89
      }
    }),
    prisma.conteudo.create({
      data: {
        modeloId: modelos[0].id,
        tipo: 'video',
        titulo: 'Vídeo Premium',
        descricao: 'Conteúdo exclusivo para assinantes',
        url: 'https://sample-videos.com/zip/10/mp4/720/SampleVideo_720x480_1mb.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop',
        premium: true,
        gratuito: false,
        // tags: ['premium', 'exclusivo', 'quente'],
        visualizacoes: 456,
        curtidas: 67
      }
    }),
    
    // Conteúdos da Amanda Fire
    prisma.conteudo.create({
      data: {
        modeloId: modelos[1].id,
        tipo: 'foto',
        titulo: 'Fire Session',
        descricao: 'Sessão de fotos especial',
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&h=1080&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        premium: true,
        gratuito: false,
        // tags: ['fire', 'sessao', 'exclusivo'],
        visualizacoes: 890,
        curtidas: 123
      }
    })
  ])

  // Criar algumas Doações
  console.log('💝 Criando gorjetas/doações...')
  await Promise.all([
    prisma.doacao.create({
      data: {
        assinanteId: assinantes[0].id,
        modeloId: modelos[0].id, // Para Lari Hot
        valor: 25.00,
        mensagem: 'Você é linda demais! ❤️',
        statusPagamento: 'APROVADO'
      }
    }),
    prisma.doacao.create({
      data: {
        assinanteId: assinantes[1].id,
        modeloId: modelos[1].id, // Para Amanda Fire
        valor: 50.00,
        mensagem: 'Adoro seu conteúdo! Continue assim 🔥',
        statusPagamento: 'APROVADO'
      }
    }),
    prisma.doacao.create({
      data: {
        assinanteId: assinantes[0].id,
        modeloId: modelos[9].id, // Para Lê Provocante
        valor: 75.00,
        mensagem: 'A mais provocante mesmo! 😍',
        statusPagamento: 'APROVADO'
      }
    }),
    prisma.doacao.create({
      data: {
        assinanteId: assinantes[1].id,
        modeloId: modelos[3].id, // Para Juli Delícia
        valor: 30.00,
        mensagem: 'Que delícia de modelo! 💋',
        statusPagamento: 'PENDENTE'
      }
    })
  ])

  // Criar algumas Compras de Packs
  console.log('🛒 Criando compras de packs...')
  await Promise.all([
    prisma.compraPack.create({
      data: {
        assinanteId: assinantes[0].id,
        packId: packs[0].id, // Pack da Lari
        valor: 39.90,
        statusPagamento: 'APROVADO'
      }
    }),
    prisma.compraPack.create({
      data: {
        assinanteId: assinantes[1].id,
        packId: packs[1].id, // Pack da Amanda
        valor: 49.90,
        statusPagamento: 'APROVADO'
      }
    }),
    prisma.compraPack.create({
      data: {
        assinanteId: assinantes[0].id,
        packId: packs[2].id, // Pack da Lê Provocante
        valor: 59.90,
        statusPagamento: 'PENDENTE'
      }
    })
  ])

  console.log('✅ Seed finalizado com sucesso!')
  console.log(`📊 Dados criados:`)
  console.log(`   - 1 Admin`)
  console.log(`   - 2 Assinantes`)
  console.log(`   - 10 Modelos`)
  console.log(`   - 2 Planos`)
  console.log(`   - 3 Packs`)
  console.log(`   - 5 Conteúdos dos Packs`)
  console.log(`   - 3 Conteúdos das Modelos`)
  console.log(`   - 4 Gorjetas/Doações`)
  console.log(`   - 3 Compras de Packs`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
