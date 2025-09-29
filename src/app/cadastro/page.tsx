"use client";

import { useState, useEffect, Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User, Calendar, Heart, Shield, Star, Users, Crown, Camera } from "lucide-react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

function CadastroContent() {
  const searchParams = useSearchParams();
  const [tipoUsuario, setTipoUsuario] = useState<'assinante' | 'modelo'>('assinante');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    dataNascimento: "",
    password: "",
    confirmPassword: "",
    termos: false,
    newsletter: true
  });

  useEffect(() => {
    const tipo = searchParams.get('tipo');
    if (tipo === 'modelo' || tipo === 'assinante') {
      setTipoUsuario(tipo);
    }
  }, [searchParams]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, tipo: tipoUsuario })
      });

      const data = await response.json();

      if (data.success) {
        // Redirecionar para o dashboard apropriado
        window.location.href = data.redirectTo;
      } else {
        setError(data.error || 'Erro no cadastro');
      }
    } catch (err) {
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const socialSignup = (provider: string) => {
    console.log(`Signup with ${provider} as ${tipoUsuario}`);
  };

  const tipoConfig = {
    assinante: {
      title: "Criar Conta de Assinante",
      subtitle: "Junte-se à maior plataforma premium do Brasil",
      icon: Crown,
      benefits: [
        { icon: Shield, text: "Acesso Seguro e Privado" },
        { icon: Star, text: "Conteúdo Premium Exclusivo" },
        { icon: Heart, text: "Interação com Modelos Top" },
        { icon: Users, text: "Comunidade VIP" }
      ],
      color: "from-hotlovers-red to-red-600"
    },
    modelo: {
      title: "Seja uma Modelo HotLovers",
      subtitle: "Transforme sua paixão em uma carreira lucrativa",
      icon: Camera,
      benefits: [
        { icon: Shield, text: "Plataforma 100% Segura" },
        { icon: Star, text: "70% de Todos os Ganhos" },
        { icon: Heart, text: "Suporte 24/7 Dedicado" },
        { icon: Users, text: "Ferramentas Profissionais" }
      ],
      color: "from-hotlovers-red to-red-600"
    }
  };

  const config = tipoConfig[tipoUsuario];

  return (
    <div className="min-h-screen flex flex-col">
      <Header usuario={undefined} />
      
      <main className="flex-1 py-20 bg-background overflow-hidden relative">
        {/* Background Blush Balls */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-hotlovers-red/5 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-32 left-20 w-80 h-80 bg-hotlovers-red/4 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-hotlovers-red/3 rounded-full blur-2xl"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-16">
          
          {/* Tipo Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-muted/50 rounded-2xl p-2">
              <button
                onClick={() => setTipoUsuario('assinante')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  tipoUsuario === 'assinante'
                    ? 'bg-hotlovers-gradient text-white shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Crown className="w-4 h-4 inline mr-2" />
                Quero Assinar
              </button>
              <button
                onClick={() => setTipoUsuario('modelo')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  tipoUsuario === 'modelo'
                    ? 'bg-hotlovers-gradient text-white shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Camera className="w-4 h-4 inline mr-2" />
                Quero ser Modelo
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Branding */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20">
                  <config.icon className="w-4 h-4 text-hotlovers-red" />
                  <span className="text-sm font-semibold text-hotlovers-red">
                    {tipoUsuario === 'assinante' ? 'Plataforma Premium #1' : 'Programa de Modelos'}
                  </span>
                  <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
                </div>

                <h1 className="text-4xl lg:text-5xl font-black leading-tight">
                  <span className="text-foreground">{config.title.split(' ').slice(0, -1).join(' ')}</span>
                  <br />
                  <span className={`bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>
                    {config.title.split(' ').slice(-1)}
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  {config.subtitle}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {config.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 bg-gradient-to-r ${config.color} rounded-lg flex items-center justify-center`}>
                      <benefit.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-hotlovers-red">
                    {tipoUsuario === 'assinante' ? '500K+' : '10K+'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {tipoUsuario === 'assinante' ? 'Assinantes' : 'Modelos'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-hotlovers-red">
                    {tipoUsuario === 'assinante' ? '1000+' : 'R$ 15K'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {tipoUsuario === 'assinante' ? 'Modelos' : 'Média/Mês'}
                  </div>
                </div>
                <div className="text-3xl font-black text-hotlovers-red">4.9</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>

              {/* Testimonial */}
              <div className="p-6 bg-muted/30 rounded-2xl border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-hotlovers-gradient"></div>
                  <div>
                    <div className="font-bold text-foreground">
                      {tipoUsuario === 'assinante' ? 'Carlos M.' : 'Isabella S.'}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {tipoUsuario === 'assinante' ? 'Assinante VIP' : 'Top Model'}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  {tipoUsuario === 'assinante' 
                    ? '"Melhor plataforma que já usei. Conteúdo incrível e modelos super interativas!"'
                    : '"Mudou minha vida! Ganho mais em um mês aqui do que ganhava em 6 meses antes."'
                  }
                </p>
                <div className="flex items-center space-x-1 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full max-w-md mx-auto">
              <div className="bg-background border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-foreground mb-2">Criar Conta</h2>
                  <p className="text-muted-foreground">
                    {tipoUsuario === 'assinante' 
                      ? 'Comece sua jornada premium agora'
                      : 'Inicie sua carreira como modelo'
                    }
                  </p>
                </div>

                {/* Social Signup */}
                <div className="space-y-3 mb-8">
                  <button
                    onClick={() => socialSignup('google')}
                    className="w-full flex items-center justify-center space-x-3 py-3 border border-border rounded-xl hover:border-hotlovers-red/50 transition-all group"
                  >
                    <FaGoogle className="w-5 h-5 text-red-500" />
                    <span className="text-foreground font-medium group-hover:text-hotlovers-red">Continuar com Google</span>
                  </button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => socialSignup('facebook')}
                      className="flex items-center justify-center space-x-2 py-3 border border-border rounded-xl hover:border-blue-500/50 transition-all group"
                    >
                      <FaFacebook className="w-5 h-5 text-blue-600" />
                      <span className="text-foreground font-medium group-hover:text-blue-600 text-sm">Facebook</span>
                    </button>
                    
                    <button
                      onClick={() => socialSignup('apple')}
                      className="flex items-center justify-center space-x-2 py-3 border border-border rounded-xl hover:border-gray-500/50 transition-all group"
                    >
                      <FaApple className="w-5 h-5 text-foreground" />
                      <span className="text-foreground font-medium text-sm">Apple</span>
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-background text-muted-foreground">ou preencha os dados</span>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-red-700" />
                      <span>{error}</span>
                    </div>
                  </div>
                )}

                {/* Signup Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/50 transition-all"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/50 transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  {/* Data de Nascimento */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Data de Nascimento
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="date"
                        required
                        value={formData.dataNascimento}
                        onChange={(e) => setFormData({...formData, dataNascimento: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/50 transition-all"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Você deve ter 18 anos ou mais
                    </p>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Senha
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/50 transition-all"
                        placeholder="Mínimo 8 caracteres"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Confirmar Senha
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/50 transition-all"
                        placeholder="Repita sua senha"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.termos}
                        onChange={(e) => setFormData({...formData, termos: e.target.checked})}
                        className="w-4 h-4 text-hotlovers-red border-border rounded focus:ring-hotlovers-red/20 mt-0.5"
                      />
                      <span className="text-sm text-foreground">
                        Aceito os{" "}
                        <Link href="/termos" className="text-hotlovers-red hover:underline">
                          Termos de Uso
                        </Link>{" "}
                        e{" "}
                        <Link href="/privacidade" className="text-hotlovers-red hover:underline">
                          Política de Privacidade
                        </Link>
                      </span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                        className="w-4 h-4 text-hotlovers-red border-border rounded focus:ring-hotlovers-red/20"
                      />
                      <span className="text-sm text-foreground">
                        Quero receber novidades e promoções por email
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 bg-gradient-to-r ${config.color} text-white font-bold rounded-xl hover:scale-[1.02] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {loading 
                      ? 'Criando conta...' 
                      : (tipoUsuario === 'assinante' ? 'Criar Conta de Assinante' : 'Começar como Modelo')
                    }
                  </button>
                </form>

                {/* Login Link */}
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground">
                    Já tem uma conta?{" "}
                    <Link href="/login" className="text-hotlovers-red font-semibold hover:underline">
                      Fazer login
                    </Link>
                  </p>
                </div>

                {/* Security Note */}
                <div className="mt-6 p-4 bg-muted/30 rounded-xl border border-border">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">
                      Cadastro 100% seguro e seus dados protegidos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Componentes flutuantes */}
      <CookiesBanner />
      <ChatFlutuante />
    </div>
  );
}

export default function CadastroPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CadastroContent />
    </Suspense>
  );
}