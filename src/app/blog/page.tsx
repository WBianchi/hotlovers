"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";
import { CTANewsletter } from "@/components/cta-newsletter";
import { blogPosts, getFeaturedPosts } from "@/data/blog-posts";
import { PenTool, Clock, Eye, Heart, Calendar, User, Search, Filter } from "lucide-react";
import { FaFire } from "react-icons/fa";
import Link from "next/link";

// Componente Hero Blog
function HeroBlog() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background Blush Balls */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-hotlovers-red/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-pink-400/4 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-hotlovers-red/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20 mb-8">
            <PenTool className="w-4 h-4 text-hotlovers-red" />
            <span className="text-sm font-semibold text-hotlovers-red">
              Conteúdo Exclusivo HotLovers
            </span>
            <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
          </div>

          {/* Título */}
          <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-foreground">Blog</span>
            <br />
            <span className="text-hotlovers-red">HotLovers</span>
          </h1>

          {/* Descrição */}
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            Dicas exclusivas, tendências e guias completos para modelos e criadores de conteúdo. 
            Aprenda com os especialistas e transforme sua carreira digital.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/50 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente Blog Card
function BlogCard({ post, featured = false }: { post: any; featured?: boolean }) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <Link 
      href={`/blog/${post.slug}`}
      className={`group block bg-background border border-border rounded-2xl overflow-hidden hover:border-hotlovers-red/30 hover:shadow-lg transition-all duration-300 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Imagem */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-[2/1]' : 'aspect-video'}`}>
        <img
          src={post.imagemDestaque}
          alt={post.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <span className="px-3 py-1 bg-hotlovers-red rounded-full text-white text-xs font-bold">
            {post.categoria}
          </span>
          {post.destaque && (
            <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-xs font-bold">
              <FaFire className="w-3 h-3" />
              <span>Destaque</span>
            </div>
          )}
        </div>

        {/* Read time */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-1 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg">
          <Clock className="w-4 h-4" />
          <span>{post.tempoLeitura}</span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.dataPublicacao)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{post.visualizacoes.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1 text-hotlovers-red">
            <Heart className="w-4 h-4" />
            <span>{post.curtidas}</span>
          </div>
        </div>

        <h2 className={`font-black text-foreground mb-3 group-hover:text-hotlovers-red transition-colors ${
          featured ? 'text-2xl lg:text-3xl' : 'text-xl'
        }`}>
          {post.titulo}
        </h2>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {post.subtitulo}
        </p>

        {/* Autor */}
        <div className="flex items-center space-x-3 pt-4 border-t border-border">
          <img
            src={post.autor.avatar}
            alt={post.autor.nome}
            className="w-10 h-10 rounded-xl object-cover"
          />
          <div>
            <div className="flex items-center space-x-1">
              <User className="w-3 h-3 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{post.autor.nome}</span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-1">{post.autor.bio}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.slice(0, 3).map((tag: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-lg hover:bg-hotlovers-red/10 hover:text-hotlovers-red transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

// Componente Categorias
function Categorias() {
  const categorias = [
    "Todos",
    "Criação de Conteúdo", 
    "Fotografia",
    "Marketing Digital",
    "Segurança",
    "Negócios",
    "Tendências",
    "Produção",
    "Relacionamento",
    "Bem-estar",
    "Futuro"
  ];

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-wrap gap-3 justify-center">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaSelecionada(categoria)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                categoriaSelecionada === categoria
                  ? "bg-hotlovers-gradient text-white shadow-lg"
                  : "bg-background border border-border text-foreground hover:border-hotlovers-red/50 hover:text-hotlovers-red"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const allPosts = blogPosts;

  const usuarioExemplo = {
    nome: "João Silva",
    email: "joao@email.com", 
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    tipo: "assinante" as const
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header usuario={usuarioExemplo} />
      
      <main className="flex-1">
        <HeroBlog />
        <Categorias />

        {/* Posts em Destaque */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-hotlovers-red/10 rounded-full text-hotlovers-red text-sm font-medium mb-6">
                  <FaFire className="w-4 h-4 mr-2" />
                  Posts em Destaque
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-foreground">
                  Mais Populares
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <BlogCard 
                    key={post.id} 
                    post={post} 
                    featured={index === 0}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Todos os Posts */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
                Todos os Artigos
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore nosso conteúdo completo sobre criação e monetização
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        <CTANewsletter />
      </main>

      <Footer />
      
      {/* Componentes flutuantes */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}