import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Apenas proteger rotas específicas de admin, modelo e assinante
  // IMPORTANTE: /modelo/ com barra para não pegar /modelos ou /modelos-hot
  const isAdminRoute = pathname.startsWith('/admin/');
  const isModeloRoute = pathname.startsWith('/modelo/') || pathname === '/modelo';
  const isAssinanteRoute = pathname.startsWith('/assinante/') || pathname === '/assinante';

  // Se tenta acessar área restrita sem login, redirecionar para login
  if (isAdminRoute || isModeloRoute || isAssinanteRoute) {
    const token = request.cookies.get('auth_token')?.value;
    
    if (!token) {
      console.log('🚨 Middleware - Redirecionando para login:', pathname);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Todas as outras rotas são públicas (/modelos, /modelos-hot, etc)
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