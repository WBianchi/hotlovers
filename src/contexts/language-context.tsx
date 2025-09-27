"use client";

import { createContext, useContext, useState } from "react";

type Language = "pt" | "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    dashboard: "Dashboard",
    analytics: "Visão Geral",
    photos: "Fotos",
    videos: "Vídeos",
    packs: "Packs",
    chat: "Chat ao Vivo",
    subscribers: "Assinantes",
    earnings: "Receitas",
    profile: "Perfil",
    settings: "Configurações",
    logout: "Sair",
    notifications: "Notificações",
    language: "Idioma",
    theme: "Tema",
    welcome: "Bem-vinda",
    online: "Online",
    vip: "VIP",
    month: "Este mês",
    followers: "Seguidores",
    rating: "Rating",
    views: "Views",
    revenue: "Receita",
    quickActions: "Ações Rápidas",
    recentActivity: "Atividade Recente",
    monthlyGoal: "Meta do Mês"
  },
  en: {
    dashboard: "Dashboard",
    analytics: "Analytics",
    photos: "Photos",
    videos: "Videos",
    packs: "Packs",
    chat: "Live Chat",
    subscribers: "Subscribers",
    earnings: "Earnings",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",
    notifications: "Notifications",
    language: "Language",
    theme: "Theme",
    welcome: "Welcome",
    online: "Online",
    vip: "VIP",
    month: "This month",
    followers: "Followers",
    rating: "Rating",
    views: "Views",
    revenue: "Revenue",
    quickActions: "Quick Actions",
    recentActivity: "Recent Activity",
    monthlyGoal: "Monthly Goal"
  },
  es: {
    dashboard: "Panel",
    analytics: "Analíticas",
    photos: "Fotos",
    videos: "Videos",
    packs: "Packs",
    chat: "Chat en Vivo",
    subscribers: "Suscriptores",
    earnings: "Ganancias",
    profile: "Perfil",
    settings: "Configuración",
    logout: "Salir",
    notifications: "Notificaciones",
    language: "Idioma",
    theme: "Tema",
    welcome: "Bienvenida",
    online: "En línea",
    vip: "VIP",
    month: "Este mes",
    followers: "Seguidores",
    rating: "Calificación",
    views: "Vistas",
    revenue: "Ingresos",
    quickActions: "Acciones Rápidas",
    recentActivity: "Actividad Reciente",
    monthlyGoal: "Meta Mensual"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}