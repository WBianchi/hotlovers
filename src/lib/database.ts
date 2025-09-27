import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface UserDB {
  id: string;
  nome: string;
  email: string;
  senha: string; // hash
  foto?: string;
  tipo: 'admin' | 'modelo' | 'assinante';
  ativo: boolean;
  emailVerificado: boolean;
  dataNascimento?: string;
  telefone?: string;
  createdAt: Date;
  updatedAt: Date;
  // Para modelos
  nomeArtistico?: string;
  bio?: string;
  // Para reset de senha
  resetToken?: string;
  resetTokenExpiry?: Date;
  // Para verificação de email
  verificationToken?: string;
}

class DatabaseService {

  // Buscar usuário por email em todas as tabelas
  static async findUserByEmail(email: string): Promise<UserDB | null> {
    try {
      // Buscar primeiro em Admin
      const admin = await prisma.admin.findUnique({
        where: { email: email.toLowerCase() }
      });

      if (admin) {
        return {
          id: admin.id,
          nome: admin.nome,
          email: admin.email,
          senha: admin.senha,
          foto: admin.foto || undefined,
          tipo: 'admin' as const,
          ativo: admin.ativo,
          emailVerificado: true, // Admins são sempre verificados
          telefone: admin.telefone || undefined,
          createdAt: admin.criadoEm,
          updatedAt: admin.atualizadoEm
        };
      }

      // Buscar em Modelo
      const modelo = await prisma.modelo.findUnique({
        where: { email: email.toLowerCase() }
      });

      if (modelo) {
        return {
          id: modelo.id,
          nome: modelo.nome,
          email: modelo.email,
          senha: modelo.senha,
          foto: modelo.foto || undefined,
          tipo: 'modelo' as const,
          ativo: modelo.ativo,
          emailVerificado: modelo.verificada,
          telefone: modelo.telefone,
          nomeArtistico: modelo.nomeArtistico || undefined,
          bio: modelo.biografia || undefined,
          createdAt: modelo.criadoEm,
          updatedAt: modelo.atualizadoEm
        };
      }

      // Buscar em Assinante
      const assinante = await prisma.assinante.findUnique({
        where: { email: email.toLowerCase() }
      });

      if (assinante) {
        return {
          id: assinante.id,
          nome: assinante.nome,
          email: assinante.email,
          senha: assinante.senha,
          foto: assinante.foto || undefined,
          tipo: 'assinante' as const,
          ativo: assinante.ativo,
          emailVerificado: assinante.verificado,
          telefone: assinante.telefone || undefined,
          dataNascimento: assinante.dataNascimento?.toISOString() || undefined,
          createdAt: assinante.criadoEm,
          updatedAt: assinante.atualizadoEm
        };
      }

      return null;
    } catch (error) {
      console.error('Erro ao buscar usuário por email:', error);
      return null;
    }
  }

  // Buscar usuário por ID
  static async findUserById(id: string): Promise<UserDB | null> {
    try {
      // Tentar buscar em Admin
      const admin = await prisma.admin.findUnique({ where: { id } });
      if (admin) {
        return {
          id: admin.id,
          nome: admin.nome,
          email: admin.email,
          senha: admin.senha,
          foto: admin.foto || undefined,
          tipo: 'admin' as const,
          ativo: admin.ativo,
          emailVerificado: true,
          telefone: admin.telefone || undefined,
          createdAt: admin.criadoEm,
          updatedAt: admin.atualizadoEm
        };
      }

      // Tentar buscar em Modelo
      const modelo = await prisma.modelo.findUnique({ where: { id } });
      if (modelo) {
        return {
          id: modelo.id,
          nome: modelo.nome,
          email: modelo.email,
          senha: modelo.senha,
          foto: modelo.foto || undefined,
          tipo: 'modelo' as const,
          ativo: modelo.ativo,
          emailVerificado: modelo.verificada,
          telefone: modelo.telefone,
          nomeArtistico: modelo.nomeArtistico || undefined,
          bio: modelo.biografia || undefined,
          createdAt: modelo.criadoEm,
          updatedAt: modelo.atualizadoEm
        };
      }

      // Tentar buscar em Assinante
      const assinante = await prisma.assinante.findUnique({ where: { id } });
      if (assinante) {
        return {
          id: assinante.id,
          nome: assinante.nome,
          email: assinante.email,
          senha: assinante.senha,
          foto: assinante.foto || undefined,
          tipo: 'assinante' as const,
          ativo: assinante.ativo,
          emailVerificado: assinante.verificado,
          telefone: assinante.telefone || undefined,
          dataNascimento: assinante.dataNascimento?.toISOString() || undefined,
          createdAt: assinante.criadoEm,
          updatedAt: assinante.atualizadoEm
        };
      }

      return null;
    } catch (error) {
      console.error('Erro ao buscar usuário por ID:', error);
      return null;
    }
  }

  // Criar usuário
  static async createUser(userData: Omit<UserDB, 'id' | 'createdAt' | 'updatedAt'>): Promise<UserDB> {
    try {
      if (userData.tipo === 'modelo') {
        const modelo = await prisma.modelo.create({
          data: {
            nome: userData.nome,
            email: userData.email.toLowerCase(),
            senha: userData.senha,
            telefone: userData.telefone || '',
            foto: userData.foto,
            nomeArtistico: userData.nomeArtistico,
            biografia: userData.bio,
            verificada: userData.emailVerificado,
            ativo: userData.ativo,
            // Campos obrigatórios com valores padrão
            cpf: '000.000.000-00', // Será preenchido depois
            rg: '0000000',
            endereco: 'A completar',
            cidade: 'A completar',
            estado: 'SP',
            bairro: 'A completar',
            rua: 'A completar',
            numero: '0',
            cep: '00000-000',
            chavePix: userData.email
          }
        });

        return {
          id: modelo.id,
          nome: modelo.nome,
          email: modelo.email,
          senha: modelo.senha,
          foto: modelo.foto || undefined,
          tipo: 'modelo' as const,
          ativo: modelo.ativo,
          emailVerificado: modelo.verificada,
          telefone: modelo.telefone,
          nomeArtistico: modelo.nomeArtistico || undefined,
          bio: modelo.biografia || undefined,
          createdAt: modelo.criadoEm,
          updatedAt: modelo.atualizadoEm
        };
      } else if (userData.tipo === 'assinante') {
        const assinante = await prisma.assinante.create({
          data: {
            nome: userData.nome,
            email: userData.email.toLowerCase(),
            senha: userData.senha,
            telefone: userData.telefone,
            foto: userData.foto,
            verificado: userData.emailVerificado,
            ativo: userData.ativo,
            dataNascimento: userData.dataNascimento ? new Date(userData.dataNascimento) : undefined
          }
        });

        return {
          id: assinante.id,
          nome: assinante.nome,
          email: assinante.email,
          senha: assinante.senha,
          foto: assinante.foto || undefined,
          tipo: 'assinante' as const,
          ativo: assinante.ativo,
          emailVerificado: assinante.verificado,
          telefone: assinante.telefone || undefined,
          dataNascimento: assinante.dataNascimento?.toISOString() || undefined,
          createdAt: assinante.criadoEm,
          updatedAt: assinante.atualizadoEm
        };
      }

      throw new Error('Tipo de usuário inválido para criação');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
    }
  }

  // Atualizar senha
  static async updatePassword(id: string, hashedPassword: string): Promise<boolean> {
    try {
      // Tentar atualizar em Admin
      const admin = await prisma.admin.findUnique({ where: { id } });
      if (admin) {
        await prisma.admin.update({
          where: { id },
          data: { senha: hashedPassword }
        });
        return true;
      }

      // Tentar atualizar em Modelo
      const modelo = await prisma.modelo.findUnique({ where: { id } });
      if (modelo) {
        await prisma.modelo.update({
          where: { id },
          data: { senha: hashedPassword }
        });
        return true;
      }

      // Tentar atualizar em Assinante
      const assinante = await prisma.assinante.findUnique({ where: { id } });
      if (assinante) {
        await prisma.assinante.update({
          where: { id },
          data: { senha: hashedPassword }
        });
        return true;
      }

      return false;
    } catch (error) {
      console.error('Erro ao atualizar senha:', error);
      return false;
    }
  }

  // Placeholder methods para tokens (implementar depois se necessário)
  static async findUserByResetToken(token: string): Promise<UserDB | null> {
    // TODO: Implementar com tabela de tokens separada
    return null;
  }

  static async findUserByVerificationToken(token: string): Promise<UserDB | null> {
    // TODO: Implementar com tabela de tokens separada
    return null;
  }

  static async setPasswordResetToken(email: string, token: string): Promise<boolean> {
    // TODO: Implementar com tabela de tokens separada
    return true;
  }

  static async clearPasswordResetToken(id: string): Promise<boolean> {
    // TODO: Implementar com tabela de tokens separada
    return true;
  }

  static async verifyEmail(token: string): Promise<boolean> {
    // TODO: Implementar com tabela de tokens separada
    return true;
  }

  static async updateUser(id: string, updates: Partial<UserDB>): Promise<UserDB | null> {
    // TODO: Implementar se necessário
    return null;
  }

  static async getAllUsers(): Promise<UserDB[]> {
    // TODO: Implementar se necessário para debug
    return [];
  }

  static async deleteUser(id: string): Promise<boolean> {
    // TODO: Implementar se necessário
    return false;
  }
}

export default DatabaseService;