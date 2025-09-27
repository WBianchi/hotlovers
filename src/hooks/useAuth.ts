"use client";

import { useState, useEffect } from 'react';

export interface User {
  id: string;
  nome: string;
  email: string;
  foto?: string;
  tipo: 'admin' | 'modelo' | 'assinante';
  emailVerificado: boolean;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me');
      if (response.ok) {
        const userData = await response.json();
        setUser(userData.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setUser(null);
      window.location.href = '/login';
    } catch (error) {
      console.error('Erro no logout:', error);
      setUser(null);
      window.location.href = '/login';
    }
  };

  return {
    user,
    loading,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.tipo === 'admin',
    isModelo: user?.tipo === 'modelo',
    isAssinante: user?.tipo === 'assinante'
  };
}