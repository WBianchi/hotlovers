"use client";

import { useState, useEffect, Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookiesBanner } from "@/components/cookies-banner";
import { ChatFlutuante } from "@/components/chat-flutuante";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, Shield, ArrowLeft, Key, CheckCircle } from "lucide-react";

function RecuperarSenhaContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<'email' | 'reset'>('email');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    token: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      setFormData(prev => ({ ...prev, token }));
      setStep('reset');
    }
  }, [searchParams]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Erro ao enviar email');
      }
    } catch (err) {
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: formData.token,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        })
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Erro ao redefinir senha');
      }
    } catch (err) {
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header usuario={undefined} />
      
      <main className="flex-1 flex items-center justify-center py-20 bg-background overflow-hidden relative">
        {/* Background Blush Balls */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-hotlovers-red/5 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-32 left-20 w-80 h-80 bg-hotlovers-red/4 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-hotlovers-red/3 rounded-full blur-2xl"></div>
        </div>

        <div className="relative w-full max-w-md mx-auto px-6">
          <div className="bg-background border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
            
            {/* Back Link */}
            <Link 
              href="/login"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-hotlovers-red transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Login</span>
            </Link>

            {success ? (
              // Tela de Sucesso
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                
                <div>
                  <h2 className="text-2xl font-black text-foreground mb-2">
                    {step === 'email' ? 'Email Enviado!' : 'Senha Alterada!'}
                  </h2>
                  <p className="text-muted-foreground">
                    {step === 'email' 
                      ? 'Verifique seu email e siga as instruções para recuperar sua senha.'
                      : 'Sua senha foi alterada com sucesso! Você já pode fazer login.'
                    }
                  </p>
                </div>

                <Link
                  href="/login"
                  className="w-full py-4 bg-hotlovers-gradient text-white font-bold rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-hotlovers-red/25 inline-block text-center"
                >
                  Ir para Login
                </Link>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-hotlovers-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step === 'email' ? (
                      <Mail className="w-8 h-8 text-hotlovers-red" />
                    ) : (
                      <Key className="w-8 h-8 text-hotlovers-red" />
                    )}
                  </div>
                  
                  <h2 className="text-3xl font-black text-foreground mb-2">
                    {step === 'email' ? 'Recuperar Senha' : 'Nova Senha'}
                  </h2>
                  <p className="text-muted-foreground">
                    {step === 'email' 
                      ? 'Digite seu email para receber as instruções'
                      : 'Digite sua nova senha'
                    }
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    {error}
                  </div>
                )}

                {step === 'email' ? (
                  // Form de Email
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
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

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-hotlovers-gradient text-white font-bold rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-hotlovers-red/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Enviando...' : 'Enviar Instruções'}
                    </button>
                  </form>
                ) : (
                  // Form de Reset de Senha
                  <form onSubmit={handlePasswordReset} className="space-y-6">
                    {/* Token (hidden) */}
                    <input
                      type="hidden"
                      value={formData.token}
                    />

                    {/* New Password */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nova Senha
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
                          disabled={loading}
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
                          placeholder="Repita a senha"
                          disabled={loading}
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

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-hotlovers-gradient text-white font-bold rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-hotlovers-red/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Alterando...' : 'Alterar Senha'}
                    </button>
                  </form>
                )}

                {/* Security Note */}
                <div className="mt-6 p-4 bg-muted/30 rounded-xl border border-border">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">
                      {step === 'email' 
                        ? 'Por segurança, sempre confirme se o email é realmente da HotLovers'
                        : 'Sua nova senha será criptografada e armazenada com segurança'
                      }
                    </span>
                  </div>
                </div>
              </>
            )}
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

export default function RecuperarSenhaPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <RecuperarSenhaContent />
    </Suspense>
  );
}