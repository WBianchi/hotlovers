import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignorar erros de TypeScript durante o build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Ignorar erros de ESLint durante o build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configurações de imagem para URLs externas
  images: {
    domains: ['images.unsplash.com', 'localhost'],
    unoptimized: true,
  },
  
  // Outras configurações
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
