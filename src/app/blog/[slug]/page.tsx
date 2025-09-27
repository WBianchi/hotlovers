"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";
import { CTANewsletter } from "@/components/cta-newsletter";
import { getPostBySlug, getRelatedPosts, blogPosts } from "@/data/blog-posts";
import { ArrowLeft, Calendar, Clock, Eye, Heart, Share2, User, BookOpen, MessageCircle } from "lucide-react";
import { FaFire, FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { notFound } from "next/navigation";

// Componente Header do Post
function PostHeader({ post }: { post: any }) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background Blush Balls */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-hotlovers-red/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-pink-400/4 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-16">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-hotlovers-red transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar ao Blog</span>
        </Link>

        {/* Categoria e Tags */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-4 py-2 bg-hotlovers-red rounded-full text-white text-sm font-bold">
            {post.categoria}
          </span>
          {post.destaque && (
            <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-xs font-bold">
              <FaFire className="w-3 h-3" />
              <span>Post em Destaque</span>
            </div>
          )}
          {post.tags.slice(0, 3).map((tag: string, index: number) => (
            <span key={index} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-lg">
              #{tag}
            </span>
          ))}
        </div>

        {/* Título */}
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-foreground mb-6">
          {post.titulo}
        </h1>

        {/* Subtítulo */}
        <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
          {post.subtitulo}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.dataPublicacao)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{post.tempoLeitura} de leitura</span>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>{post.visualizacoes.toLocaleString()} visualizações</span>
          </div>
          <div className="flex items-center space-x-2 text-hotlovers-red">
            <Heart className="w-4 h-4" />
            <span>{post.curtidas} curtidas</span>
          </div>
        </div>

        {/* Autor */}
        <div className="flex items-center space-x-4 p-6 bg-muted/30 rounded-2xl border border-border">
          <img
            src={post.autor.avatar}
            alt={post.autor.nome}
            className="w-16 h-16 rounded-2xl object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-lg font-bold text-foreground">{post.autor.nome}</h3>
            </div>
            <p className="text-muted-foreground">{post.autor.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente Imagem de Destaque
function FeaturedImage({ post }: { post: any }) {
  return (
    <section className="py-8 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={post.imagemDestaque}
            alt={post.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

// Componente Conteúdo do Post
function PostContent({ post }: { post: any }) {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <div className="flex lg:flex-row flex-col gap-12">
          
          {/* Conteúdo Principal */}
          <article className="flex-1">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-headings:font-black prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-p:mb-6"
              dangerouslySetInnerHTML={{ __html: post.conteudo }}
            />

            {/* Engagement Section */}
            <div className="mt-12 p-8 bg-muted/30 rounded-2xl border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-foreground">Gostou do Artigo?</h3>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 text-hotlovers-red rounded-xl hover:bg-hotlovers-red hover:text-white transition-all">
                    <Heart className="w-4 h-4" />
                    <span>Curtir</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-xl hover:border-hotlovers-red hover:text-hotlovers-red transition-all">
                    <MessageCircle className="w-4 h-4" />
                    <span>Comentar</span>
                  </button>
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground font-medium">Compartilhar:</span>
                <div className="flex items-center space-x-3">
                  <button className="w-10 h-10 bg-[#1DA1F2] text-white rounded-xl flex items-center justify-center hover:scale-110 transition-all">
                    <FaTwitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-[#1877F2] text-white rounded-xl flex items-center justify-center hover:scale-110 transition-all">
                    <FaFacebook className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-[#0A66C2] text-white rounded-xl flex items-center justify-center hover:scale-110 transition-all">
                    <FaLinkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-[#25D366] text-white rounded-xl flex items-center justify-center hover:scale-110 transition-all">
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80">
            {/* Table of Contents */}
            <div className="sticky top-8 space-y-6">
              <div className="bg-background border border-border rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="w-5 h-5 text-hotlovers-red" />
                  <h3 className="font-bold text-foreground">Neste Artigo</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-muted-foreground hover:text-hotlovers-red transition-colors py-1">
                    1. Conheça Seu Público
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-hotlovers-red transition-colors py-1">
                    2. Qualidade Acima de Quantidade
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-hotlovers-red transition-colors py-1">
                    3. Seja Autêntica
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-hotlovers-red transition-colors py-1">
                    4. Crie Séries e Temas
                  </a>
                  <a href="#" className="block text-muted-foregrund hover:text-hotlovers-red transition-colors py-1">
                    Conclusão
                  </a>
                </div>
              </div>

              {/* Newsletter CTA Sidebar */}
              <div className="bg-hotlovers-gradient rounded-2xl p-6 text-white text-center">
                <h3 className="font-black text-xl mb-3">📧 Newsletter HotLovers</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Receba dicas exclusivas e conteúdo premium direto no seu email
                </p>
                <input 
                  type="email" 
                  placeholder="Seu melhor email"
                  className="w-full px-4 py-2 rounded-xl text-gray-900 mb-3 text-sm"
                />
                <button className="w-full py-2 bg-white text-hotlovers-red font-bold rounded-xl hover:scale-105 transition-all text-sm">
                  Quero Receber!
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// Componente Posts Relacionados
function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-hotlovers-red/10 rounded-full text-hotlovers-red text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Posts Relacionados
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground">
            Continue Lendo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-background border border-border rounded-2xl overflow-hidden hover:border-hotlovers-red/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.imagemDestaque}
                  alt={post.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-hotlovers-red rounded-full text-white text-xs font-bold">
                    {post.categoria}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg">
                  <Clock className="w-4 h-4" />
                  <span>{post.tempoLeitura}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-black text-foreground mb-3 group-hover:text-hotlovers-red transition-colors line-clamp-2">
                  {post.titulo}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {post.subtitulo}
                </p>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={post.autor.avatar}
                    alt={post.autor.nome}
                    className="w-8 h-8 rounded-lg object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium text-foreground">{post.autor.nome}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(post.dataPublicacao).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

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
        <PostHeader post={post} />
        <FeaturedImage post={post} />
        <PostContent post={post} />
        <RelatedPosts currentSlug={post.slug} />
        <CTANewsletter />
      </main>

      <Footer />
      
      {/* Componentes flutuantes */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}