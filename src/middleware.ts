import { NextRequest, NextResponse } from 'next/server';
import AuthService from './lib/auth';

export const runtime = 'nodejs';

// Rotas protegidas por tipo de usuário
const PROTECTED_ROUTES = {
  admin: ['/admin'],
  modelo: ['/modelo'],
  assinante: ['/assinante'],
  public: ['/login', '/cadastro', '/recuperar-senha', '/verificar-email']
};

// Rotas que redirecionam usuários logados
const AUTH_ROUTES = ['/login', '/cadastro'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('auth_token')?.value;

  console.log('🔍 Middleware - Pathname:', pathname); // DEBUG
  console.log('🔍 Middleware - Token encontrado:', !!token); // DEBUG

  // Se tem token, verificar se é válido
  let user = null;
  if (token) {
    user = AuthService.verifyToken(token);
    console.log('🔍 Middleware - Token válido:', !!user, user?.tipo); // DEBUG
  }

  // Se usuário está logado e tenta acessar páginas de auth, redirecionar para dashboard
  if (user && AUTH_ROUTES.some(route => pathname.startsWith(route))) {
    const redirectPath = AuthService.getRedirectPath(user.tipo);
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  // Verificar se a rota precisa de autenticação
  const isAdminRoute = pathname.startsWith('/admin');
  const isModeloRoute = pathname.startsWith('/modelo');
  const isAssinanteRoute = pathname.startsWith('/assinante');

  // Se não está logado e tenta acessar rota protegida
  if (!user && (isAdminRoute || isModeloRoute || isAssinanteRoute)) {
    console.log('🚨 Middleware - Redirecionando para login: usuário não autenticado'); // DEBUG
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Se está logado mas tenta acessar rota de outro tipo
  if (user) {
    if (isAdminRoute && user.tipo !== 'admin') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (isModeloRoute && user.tipo !== 'modelo') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (isAssinanteRoute && user.tipo !== 'assinante') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$).*)',
  ],
}