"use client";

import { useState, useEffect } from "react";
import { 
  Camera, Heart, Eye, DollarSign, TrendingUp, MessageCircle, Star, 
  Crown, Users, Package, Video, Gift, Zap, Calendar, Clock,
  ArrowUpRight, ArrowDownRight, Play, Upload, Target, Plus
} from "lucide-react";
import { FaCrown, FaFire } from "react-icons/fa";
import { useLanguage } from "../../../contexts/language-context";

export function ModeloDashboardContent() {
  const [user, setUser] = useState<any>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // TODO: Buscar dados do usuário logado via API
    setUser({
      nome: "Isabella Santos",
      email: "isabella@email.com",
      tipo: "modelo"
    });
  }, []);

  const stats = [
    {
      label: t('views'),
      value: "125.8K",
      change: "+25.4%",
      trend: "up",
      icon: Eye,
      description: "Últimos 30 dias"
    },
    {
      label: t('revenue'),
      value: "R$ 8.4K",
      change: "+18.3%",
      trend: "up",
      icon: DollarSign,
      description: "Ganhos totais"
    },
    {
      label: t('followers'),
      value: "15.2K",
      change: "+234",
      trend: "up",
      icon: Heart,
      description: "Novos esta semana"
    },
    {
      label: t('rating'),
      value: "4.9",
      change: "+0.2",
      trend: "up",
      icon: Star,
      description: "1.2K avaliações"
    }
  ];

  const quickActions = [
    {
      label: "Upload Foto",
      icon: Camera,
      href: "/modelo/fotos/upload",
      description: "Nova foto"
    },
    {
      label: "Upload Vídeo",
      icon: Video,
      href: "/modelo/videos/upload", 
      description: "Novo vídeo"
    },
    {
      label: "Criar Pack",
      icon: Package,
      href: "/modelo/packs/create",
      description: "Combo especial"
    },
    {
      label: t('chat'),
      icon: MessageCircle,
      href: "/modelo/chat-ao-vivo",
      description: "Conversar"
    }
  ];

  const recentActivity = [
    {
      type: "payment",
      message: "Pagamento recebido",
      detail: "R$ 450,00 em gorjetas",
      time: "2 min atrás",
      icon: DollarSign,
      color: "text-green-600 dark:text-green-400"
    },
    {
      type: "like",
      message: "234 novas curtidas",
      detail: "No seu último post",
      time: "1 hora atrás",
      icon: Heart,
      color: "text-red-500 dark:text-red-400"
    },
    {
      type: "message", 
      message: "5 mensagens VIP",
      detail: "Assinantes premium",
      time: "30 min atrás", 
      icon: MessageCircle,
      color: "text-blue-500 dark:text-blue-400"
    },
    {
      type: "follower",
      message: "23 novos seguidores",
      detail: "Perfis verificados",
      time: "4 horas atrás",
      icon: Users,
      color: "text-purple-500 dark:text-purple-400"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header - Clean & Minimal */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700 transition-colors">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=80&h=80&fit=crop&crop=face"
              alt="Profile"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-hotlovers-red rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800">
              <FaCrown className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-black text-black dark:text-white mb-2">
              {t('welcome')}, {user?.nome}! 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">Bem-vinda ao seu painel de controle</p>
            <div className="flex items-center space-x-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hotlovers-red/10 rounded-lg">
                <FaCrown className="w-4 h-4 text-hotlovers-red" />
                <span className="text-sm font-medium text-hotlovers-red">Modelo {t('vip')}</span>
              </div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">{t('online')}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-black text-black dark:text-white">R$ 8.4K</p>
            <p className="text-gray-600 dark:text-gray-400">{t('month')}</p>
          </div>
        </div>
      </div>

      {/* Stats Cards - Clean Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gray-50 dark:bg-gray-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-600 flex items-center justify-center transition-colors">
                <stat.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </div>
              
              {/* Trend */}
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                stat.trend === 'up' 
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                  : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                <span>{stat.change}</span>
              </div>
            </div>

            {/* Value */}
            <div className="mb-2">
              <h3 className="text-3xl font-black text-black dark:text-white group-hover:text-hotlovers-red transition-colors">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-black dark:text-white">
                {stat.label}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Quick Actions - Minimal Design */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 transition-colors">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">{t('quickActions')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Crie e gerencie seu conteúdo</p>
            </div>
            <button className="px-4 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-white rounded-lg font-medium transition-colors">
              Ver Tudo
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={action.label}
                className="group p-6 bg-gray-50 dark:bg-gray-700 hover:bg-hotlovers-red text-left rounded-xl transition-all hover:text-white hover:shadow-lg"
              >
                <action.icon className="w-8 h-8 mb-3 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
                <p className="font-bold text-lg mb-1 text-black dark:text-white group-hover:text-white transition-colors">{action.label}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-white/80 transition-colors">{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity - Clean List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 transition-colors">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">{t('recentActivity')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Últimas interações</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className={`w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center ${activity.color} flex-shrink-0`}>
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-black dark:text-white">{activity.message}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{activity.detail}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Goals & Progress - Minimal & Clean */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 transition-colors">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white">{t('monthlyGoal')}</h3>
            <p className="text-gray-600 dark:text-gray-400">Progresso dos seus objetivos</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-black text-hotlovers-red">84%</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Concluída</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>R$ 8.4K de R$ 10K</span>
            <span>16 dias restantes</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3">
            <div className="bg-hotlovers-red h-3 rounded-full transition-all duration-1000" style={{ width: '84%' }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Camera className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-2xl font-black text-black dark:text-white">67</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Fotos este mês</p>
          </div>

          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Video className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <p className="text-2xl font-black text-black dark:text-white">23</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Vídeos este mês</p>
          </div>

          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Package className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-2xl font-black text-black dark:text-white">12</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Packs vendidos</p>
          </div>
        </div>
      </div>
    </div>
  );
}