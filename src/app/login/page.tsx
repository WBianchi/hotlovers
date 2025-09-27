"use client";

import { useState } from "react";
import { Shield, Star, Users, Heart, Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Resposta da API:', data); // DEBUG

      if (data.success) {
        console.log('Login bem sucedido! Redirecionando para:', data.redirectTo); // DEBUG
        // Redirecionar para o dashboard apropriado
        router.push(data.redirectTo);
      } else {
        console.log('Erro no login:', data.error); // DEBUG
        setError(data.error || 'Erro no login');
      }
    } catch (err) {
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const socialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen flex flex-col">{/* Header removido temporariamente */}
      
      <main className="flex-1 flex items-center justify-center py-20 bg-background overflow-hidden relative">
        {/* Background Blush Balls */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-hotlovers-red/5 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-32 left-20 w-80 h-80 bg-hotlovers-red/4 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-hotlovers-red/3 rounded-full blur-2xl"></div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Branding */}
            <div className="hidden lg:block space-y-8">
              {/* Logo and Title */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-full border border-hotlovers-red/20">
                  <Heart className="w-4 h-4 text-hotlovers-red" />
                  <span className="text-sm font-semibold text-hotlovers-red">
                    Plataforma Premium #1
                  </span>
                  <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse"></div>
                </div>

                <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                  <span className="text-foreground">Bem-vindo</span>
                  <br />
                  <span className="text-hotlovers-red">de Volta!</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  Acesse sua conta e continue aproveitando o melhor conteúdo 
                  premium das modelos mais quentes do Brasil.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "100% Seguro e Privado" },
                  { icon: Star, text: "Conteúdo Premium Exclusivo" },
                  { icon: Users, text: "Comunidade VIP" },
                  { icon: Heart, text: "Interação Real com Modelos" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-hotlovers-gradient rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="p-6 bg-muted/30 rounded-2xl border border-border">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-hotlovers-gradient border-2 border-background"></div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">+500K usuários ativos</div>
                    <div className="text-xs text-muted-foreground">Confiaram na HotLovers</div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                  <span className="text-sm font-medium text-foreground ml-2">4.9/5 estrelas</span>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full max-w-md mx-auto">
              <div className="bg-background border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-foreground mb-2">Fazer Login</h2>
                  <p className="text-muted-foreground">
                    Entre na sua conta para acessar o conteúdo premium
                  </p>
                </div>

                {/* Social Login */}
                <div className="space-y-3 mb-8">
                  <button
                    onClick={() => socialLogin('google')}
                    className="w-full flex items-center justify-center space-x-3 py-3 border border-border rounded-xl hover:border-hotlovers-red/50 transition-all group"
                  >
                    <FaGoogle className="w-5 h-5 text-red-500" />
                    <span className="text-foreground font-medium group-hover:text-hotlovers-red">Continuar com Google</span>
                  </button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => socialLogin('facebook')}
                      className="flex items-center justify-center space-x-2 py-3 border border-border rounded-xl hover:border-blue-500/50 transition-all group"
                    >
                      <FaFacebook className="w-5 h-5 text-blue-600" />
                      <span className="text-foreground font-medium group-hover:text-blue-600 text-sm">Facebook</span>
                    </button>
                    
                    <button
                      onClick={() => socialLogin('apple')}
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
                    <span className="px-4 bg-background text-muted-foreground">ou continue com email</span>
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

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
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
                        disabled={loading}
                      />
                    </div>
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
                        placeholder="Sua senha"
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

                  {/* Remember & Forgot */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.remember}
                        onChange={(e) => setFormData({...formData, remember: e.target.checked})}
                        className="w-4 h-4 text-hotlovers-red border-border rounded focus:ring-hotlovers-red/20"
                      />
                      <span className="text-sm text-foreground">Lembrar de mim</span>
                    </label>
                    
                    <Link href="/recuperar-senha" className="text-sm text-hotlovers-red hover:underline">
                      Esqueci a senha
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-hotlovers-gradient text-white font-bold rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-hotlovers-red/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Entrando...' : 'Entrar na Conta'}
                  </button>
                </form>

                {/* Sign Up Link */}
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground">
                    Ainda não tem uma conta?{" "}
                    <Link href="/cadastro" className="text-hotlovers-red font-semibold hover:underline">
                      Criar conta grátis
                    </Link>
                  </p>
                </div>

                {/* Security Note */}
                <div className="mt-6 p-4 bg-muted/30 rounded-xl border border-border">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">
                      Seus dados estão protegidos com criptografia SSL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer e componentes removidos temporariamente */}
    </div>
  );
}