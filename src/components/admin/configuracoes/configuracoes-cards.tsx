"use client";

import { Percent, DollarSign, CreditCard, Shield, Mail, Bell } from "lucide-react";
import { useState } from "react";

export function ConfiguracoesCards() {
  const [configs, setConfigs] = useState({
    // Comissões
    comissaoAssinaturas: "20",
    comissaoGorjetas: "20",
    comissaoPacks: "20",
    comissaoFotos: "20",
    comissaoVideos: "20",
    
    // Taxas
    taxaPlataforma: "5",
    taxaSaque: "2.5",
    
    // Valores
    valorMinimoSaque: "50",
    valorAssinaturaBase: "89.90",
    
    // E-mail
    emailAdmin: "admin@hotlovers.com",
    emailSuporte: "suporte@hotlovers.com",
    
    // Notificações
    notifNovoModelo: true,
    notifNovoAssinante: true,
    notifPagamento: true,
  });

  const sections = [
    {
      title: "Comissões da Plataforma",
      icon: Percent,
      bgGradient: "from-emerald-500 to-green-600",
      fields: [
        { key: "comissaoAssinaturas", label: "Comissão de Assinaturas (%)", type: "number" },
        { key: "comissaoGorjetas", label: "Comissão de Gorjetas (%)", type: "number" },
        { key: "comissaoPacks", label: "Comissão de Packs (%)", type: "number" },
        { key: "comissaoFotos", label: "Comissão de Fotos (%)", type: "number" },
        { key: "comissaoVideos", label: "Comissão de Vídeos (%)", type: "number" },
      ]
    },
    {
      title: "Taxas e Tarifas",
      icon: DollarSign,
      bgGradient: "from-blue-500 to-indigo-600",
      fields: [
        { key: "taxaPlataforma", label: "Taxa da Plataforma (%)", type: "number" },
        { key: "taxaSaque", label: "Taxa de Saque (%)", type: "number" },
      ]
    },
    {
      title: "Valores e Limites",
      icon: CreditCard,
      bgGradient: "from-purple-500 to-indigo-600",
      fields: [
        { key: "valorMinimoSaque", label: "Valor Mínimo de Saque (R$)", type: "number" },
        { key: "valorAssinaturaBase", label: "Valor Base Assinatura (R$)", type: "number" },
      ]
    },
    {
      title: "E-mails de Contato",
      icon: Mail,
      bgGradient: "from-orange-500 to-red-600",
      fields: [
        { key: "emailAdmin", label: "E-mail do Administrador", type: "email" },
        { key: "emailSuporte", label: "E-mail de Suporte", type: "email" },
      ]
    },
    {
      title: "Notificações",
      icon: Bell,
      bgGradient: "from-yellow-500 to-orange-600",
      toggles: [
        { key: "notifNovoModelo", label: "Notificar quando novo modelo se cadastrar" },
        { key: "notifNovoAssinante", label: "Notificar quando novo assinante entrar" },
        { key: "notifPagamento", label: "Notificar quando houver novo pagamento" },
      ]
    }
  ];

  const handleChange = (key: string, value: any) => {
    setConfigs(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
        >
          {/* Background Gradient */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${section.bgGradient} opacity-5 rounded-full -translate-y-32 translate-x-32 group-hover:opacity-10 transition-opacity`}></div>
          
          {/* Content */}
          <div className="relative">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${section.bgGradient} shadow-lg`}>
                <section.icon className="w-6 h-6 text-white" />
              </div>
              
              <div>
                <h3 className="text-xl font-black text-gray-800 dark:text-gray-100">{section.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Configure os parâmetros abaixo</p>
              </div>
            </div>

            {/* Fields */}
            {section.fields && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.fields.map((field) => (
                  <div key={field.key} className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={configs[field.key as keyof typeof configs] as string}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-hotlovers-red focus:ring-2 focus:ring-hotlovers-red/20 transition-all font-semibold text-gray-800 dark:text-gray-100"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Toggles */}
            {section.toggles && (
              <div className="space-y-4">
                {section.toggles.map((toggle) => (
                  <div key={toggle.key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:bg-gray-700 transition-colors">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 cursor-pointer">
                      {toggle.label}
                    </label>
                    <button
                      onClick={() => handleChange(toggle.key, !configs[toggle.key as keyof typeof configs])}
                      className={`relative w-14 h-7 rounded-full transition-all ${
                        configs[toggle.key as keyof typeof configs] ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                        configs[toggle.key as keyof typeof configs] ? 'translate-x-7' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
