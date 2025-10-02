import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function createAfiliado() {
  console.log('🚀 Criando afiliado...')

  try {
    // Primeiro, criar um assinante para vincular ao afiliado
    console.log('👤 Criando assinante para o afiliado...')
    const senhaHash = await bcrypt.hash('afiliado123', 12)
    
    const assinante = await prisma.assinante.create({
      data: {
        nome: 'Carlos Afiliado',
        email: 'carlos@afiliado.com',
        senha: senhaHash,
        telefone: '+5511987654321',
        cidade: 'São Paulo',
        estado: 'SP',
        verificado: true,
        premium: false
      }
    })

    console.log('✅ Assinante criado:', assinante.email)

    // Criar o afiliado vinculado ao assinante
    console.log('🤝 Criando registro de afiliado...')
    const afiliado = await prisma.afiliado.create({
      data: {
        assinanteId: assinante.id,
        codigo: 'CARLOS2024',
        percentual: 30.0, // 30% de comissão
        totalCliques: 0,
        totalConversoes: 0,
        totalGanho: 0,
        ativo: true
      }
    })

    console.log('✅ Afiliado criado com sucesso!')
    console.log('📊 Dados do afiliado:')
    console.log('   - ID:', afiliado.id)
    console.log('   - Código:', afiliado.codigo)
    console.log('   - Percentual:', afiliado.percentual + '%')
    console.log('   - Email:', assinante.email)
    console.log('   - Senha: afiliado123')
    console.log('')
    console.log('🔗 Link de afiliado: https://hotlovers.com/aff/' + afiliado.codigo)
    console.log('')
    console.log('✨ Você pode fazer login com:')
    console.log('   Email: carlos@afiliado.com')
    console.log('   Senha: afiliado123')

  } catch (error) {
    console.error('❌ Erro ao criar afiliado:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

createAfiliado()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
