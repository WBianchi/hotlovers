import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export interface User {
  id: string;
  nome: string;
  email: string;
  foto?: string;
  tipo: 'admin' | 'modelo' | 'assinante';
  ativo: boolean;
  emailVerificado: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface JWTPayload {
  userId: string;
  email: string;
  tipo: 'admin' | 'modelo' | 'assinante';
  iat?: number;
  exp?: number;
}

export class AuthService {
  private static JWT_SECRET = process.env.JWT_SECRET!;
  private static JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;
  private static JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';
  private static JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

  static {
    // Debug das variáveis de ambiente
    console.log('🔑 JWT_SECRET carregado:', !!process.env.JWT_SECRET);
    console.log('🔑 JWT_SECRET length:', process.env.JWT_SECRET?.length);
  }

  // Gerar hash da senha
  static async hashPassword(password: string): Promise<string> {
    const rounds = parseInt(process.env.BCRYPT_ROUNDS || '12');
    return bcrypt.hash(password, rounds);
  }

  // Verificar senha
  static async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  // Gerar token JWT
  static generateToken(payload: JWTPayload): string {
    return jwt.sign(payload, this.JWT_SECRET, {
      expiresIn: this.JWT_EXPIRES_IN
    } as jwt.SignOptions);
  }

  // Gerar refresh token
  static generateRefreshToken(payload: JWTPayload): string {
    return jwt.sign(payload, this.JWT_REFRESH_SECRET, {
      expiresIn: this.JWT_REFRESH_EXPIRES_IN
    } as jwt.SignOptions);
  }

  // Verificar token
  static verifyToken(token: string): JWTPayload | null {
    try {
      console.log('🔍 JWT_SECRET existe:', !!this.JWT_SECRET); // DEBUG
      console.log('🔍 Token recebido:', token.substring(0, 20) + '...'); // DEBUG
      
      const decoded = jwt.verify(token, this.JWT_SECRET) as JWTPayload;
      console.log('✅ Token decodificado:', decoded); // DEBUG
      return decoded;
    } catch (error) {
      console.log('❌ Erro na verificação JWT:', error); // DEBUG
      return null;
    }
  }

  // Verificar refresh token
  static verifyRefreshToken(token: string): JWTPayload | null {
    try {
      const decoded = jwt.verify(token, this.JWT_REFRESH_SECRET) as JWTPayload;
      return decoded;
    } catch (error) {
      return null;
    }
  }

  // Gerar código de verificação
  static generateVerificationCode(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  // Gerar código numérico para reset de senha
  static generateResetCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // Validar email
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validar senha (mínimo 8 caracteres, pelo menos 1 número)
  static isValidPassword(password: string): boolean {
    return password.length >= 8 && /\d/.test(password);
  }

  // Validar idade (18+)
  static isValidAge(birthDate: string): boolean {
    const today = new Date();
    const birth = new Date(birthDate);
    const age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      return age - 1 >= 18;
    }
    return age >= 18;
  }

  // Obter redirecionamento por tipo de usuário
  static getRedirectPath(tipo: 'admin' | 'modelo' | 'assinante'): string {
    switch (tipo) {
      case 'admin':
        return '/admin/dashboard';
      case 'modelo':
        return '/modelo/dashboard';
      case 'assinante':
        return '/assinante/dashboard';
      default:
        return '/';
    }
  }
}

export default AuthService;