"use client";

import { useState, useEffect } from "react";
import { 
  BarChart3, TrendingUp, Users, Eye, DollarSign, Heart, 
  Crown, Calendar, ArrowUpRight, ArrowDownRight, Filter,
  Download, RefreshCw, Target, Zap
} from "lucide-react";
import { FaCrown, FaFire } from "react-icons/fa";

export function VisaoGeralContent() {
  const [timeRange, setTimeRange] = useState("30d");
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - depois vem da API
  const analyticsData = {
    overview: [
      {
        metric: "Views do Perfil",
        value: "125.8K",
        change: "+25.4%",
        trend: "up",
        icon: Eye,
        description: "Visualizações últimos 30 dias"
      },
      {
        metric: "Receita Total",
        value: "R$ 8.4K",
        change: "+18.3%", 
        trend: "up",
        icon: DollarSign,
        description: "Ganhos este mês"
      },
      {
        metric: "Novos Seguidores",
        value: "1.2K",
        change: "+12.8%",
        trend: "up",
        icon: Users,
        description: "Crescimento mensal"
      },
      {
        metric: "Engajamento",
        value: "8.7%",
        change: "-2.1%",
        trend: "down",
        icon: Heart,
        description: "Taxa média"
      }
    ],
    performance: {
      topContent: [
        { type: "Foto", title: "Selfie na praia", views: "12.3K", revenue: "R$ 450" },
        { type: "Vídeo", title: "Good morning ☀️", views: "8.7K", revenue: "R$ 320" },
        { type: "Pack", title: "Ensaio Romântico", views: "5.2K", revenue: "R$ 890" }
      ],
      demographics: {
        ageGroups: [
          { range: "18-24", percentage: 28 },
          { range: "25-34", percentage: 45 },
          { range: "35-44", percentage: 20 },
          { range: "45+", percentage: 7 }
        ],
        countries: [
          { country: "Brasil", percentage: 65, flag: "🇧🇷" },
          { country: "Estados Unidos", percentage: 20, flag: "🇺🇸" },
          { country: "Espanha", percentage: 10, flag: "🇪🇸" },
          { country: "Outros", percentage: 5, flag: "🌍" }
        ]
      }
    }
  };

  const timeRanges = [
    { value: "7d", label: "7 dias" },
    { value: "30d", label: "30 dias" },
    { value: "90d", label: "90 dias" },
    { value: "1y", label: "1 ano" }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-black mb-2">Visão Geral</h1>
          <p className="text-gray-600">Analytics detalhados da sua performance</p>
        </div>

        <div className="flex items-center space-x-3">
          {/* Time Range Selector */}
          <div className="flex items-center bg-gray-50 rounded-lg p-1">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  timeRange === range.value
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <button className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-black flex items-center justify-center transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-black flex items-center justify-center transition-colors">
            <Download className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsLoading(true)}
            className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-black flex items-center justify-center transition-colors"
          >
            <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {analyticsData.overview.map((metric, index) => (
          <div
            key={metric.metric}
            className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gray-50 group-hover:bg-gray-100 flex items-center justify-center transition-colors">
                <metric.icon className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors" />
              </div>
              
              {/* Trend */}
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                metric.trend === 'up' 
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-red-50 text-red-700'
              }`}>
                {metric.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                <span>{metric.change}</span>
              </div>
            </div>

            {/* Value */}
            <div className="mb-2">
              <h3 className="text-3xl font-black text-black group-hover:text-hotlovers-red transition-colors">
                {metric.value}
              </h3>
              <p className="text-sm font-medium text-black">
                {metric.metric}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Performance Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-black">Performance</h3>
              <p className="text-gray-600 text-sm">Receitas e visualizações</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-hotlovers-red rounded-full"></div>
                <span className="text-sm text-gray-600">Receitas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-sm text-gray-600">Views</span>
              </div>
            </div>
          </div>

          {/* Simplified Chart Placeholder */}
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Gráfico de Performance</p>
              <p className="text-xs text-gray-400">Chart.js será integrado aqui</p>
            </div>
          </div>
        </div>

        {/* Top Content */}
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-hotlovers-red rounded-lg flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black">Top Conteúdo</h3>
              <p className="text-gray-600 text-sm">Melhor performance</p>
            </div>
          </div>

          <div className="space-y-4">
            {analyticsData.performance.topContent.map((content, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium text-black">{content.title}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      content.type === 'Foto' ? 'bg-blue-100 text-blue-700' :
                      content.type === 'Vídeo' ? 'bg-red-100 text-red-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {content.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-hotlovers-red">{content.revenue}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{content.views} views</span>
                  <span>#{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Age Groups */}
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-black mb-6">Faixa Etária</h3>
          <div className="space-y-4">
            {analyticsData.performance.demographics.ageGroups.map((group, index) => (
              <div key={group.range} className="flex items-center justify-between">
                <span className="text-sm font-medium text-black">{group.range} anos</span>
                <div className="flex items-center space-x-3 flex-1 ml-4">
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-hotlovers-red h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${group.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-black min-w-[3rem]">{group.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Countries */}
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-black mb-6">Países</h3>
          <div className="space-y-4">
            {analyticsData.performance.demographics.countries.map((country, index) => (
              <div key={country.country} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{country.flag}</span>
                  <span className="text-sm font-medium text-black">{country.country}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-16 bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-hotlovers-red h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${country.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-black min-w-[3rem]">{country.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Goals & Targets */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-hotlovers-red rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black">Metas do Mês</h3>
              <p className="text-gray-600 text-sm">Progresso dos objetivos</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-black rounded-lg font-medium transition-colors">
            Ajustar Metas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-2xl font-black text-black">84%</p>
            <p className="text-sm text-gray-600">Meta de Receita</p>
            <p className="text-xs text-gray-500 mt-1">R$ 8.4K de R$ 10K</p>
          </div>

          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-2xl font-black text-black">76%</p>
            <p className="text-sm text-gray-600">Novos Seguidores</p>
            <p className="text-xs text-gray-500 mt-1">1.2K de 1.5K</p>
          </div>

          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Eye className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-2xl font-black text-black">92%</p>
            <p className="text-sm text-gray-600">Views do Perfil</p>
            <p className="text-xs text-gray-500 mt-1">125K de 135K</p>
          </div>
        </div>
      </div>
    </div>
  );
}