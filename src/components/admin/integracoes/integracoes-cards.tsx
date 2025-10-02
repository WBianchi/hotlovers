"use client";

import { CreditCard, Mail, BarChart3, Facebook, Instagram, CheckCircle, XCircle, Key } from "lucide-react";
import { useState } from "react";

export function IntegracoesCards() {
  const [integrations, setIntegrations] = useState([
    {
      id: "asaas",
      nome: "Asaas",
      descricao: "Gateway de pagamento brasileiro completo",
      icon: CreditCard,
      bgGradient: "from-blue-500 to-indigo-600",
      ativo: true,
      campos: [
        { label: "API Key", placeholder: "aact_...", value: "aact_YTU5YTE0M2M6...", tipo: "password" },
        { label: "Wallet ID", placeholder: "wallet_...", value: "wallet_123456", tipo: "text" }
      ]
    },
    {
      id: "smtp",
      nome: "SMTP",
      descricao: "Servidor de e-mail para notificações",
      icon: Mail,
      bgGradient: "from-emerald-500 to-green-600",
      ativo: true,
      campos: [
        { label: "Host", placeholder: "smtp.gmail.com", value: "smtp.gmail.com", tipo: "text" },
        { label: "Port", placeholder: "587", value: "587", tipo: "text" },
        { label: "Username", placeholder: "email@exemplo.com", value: "noreply@hotlovers.com", tipo: "text" },
        { label: "Password", placeholder: "********", value: "senha123", tipo: "password" }
      ]
    },
    {
      id: "analytics",
      nome: "Google Analytics",
      descricao: "Rastreamento de métricas e conversões",
      icon: BarChart3,
      bgGradient: "from-orange-500 to-red-600",
      ativo: true,
      campos: [
        { label: "Tracking ID", placeholder: "G-XXXXXXXXXX", value: "G-ABC123XYZ", tipo: "text" }
      ]
    },
    {
      id: "facebook",
      nome: "Facebook Pixel",
      descricao: "Rastreamento de eventos para anúncios",
      icon: Facebook,
      bgGradient: "from-blue-600 to-indigo-700",
      ativo: false,
      campos: [
        { label: "Pixel ID", placeholder: "123456789", value: "", tipo: "text" }
      ]
    },
    {
      id: "instagram",
      nome: "Instagram API",
      descricao: "Integração com Instagram Business",
      icon: Instagram,
      bgGradient: "from-pink-500 to-purple-600",
      ativo: false,
      campos: [
        { label: "Access Token", placeholder: "IGQVJXXXx...", value: "", tipo: "password" }
      ]
    }
  ]);

  const toggleIntegration = (id: string) => {
    setIntegrations(prev => prev.map(int => 
      int.id === id ? { ...int, ativo: !int.ativo } : int
    ));
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {integrations.map((integration) => (
        <div
          key={integration.id}
          className="bg-white dark:bg-gray-800 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 dark:border-gray-700/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
        >
          {/* Background Gradient */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${integration.bgGradient} opacity-5 rounded-full -translate-y-32 translate-x-32 group-hover:opacity-10 transition-opacity`}></div>
          
          {/* Content */}
          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${integration.bgGradient} shadow-lg`}>
                  <integration.icon className="w-7 h-7 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-black text-gray-800 dark:text-gray-100 dark:text-gray-100">{integration.nome}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-400">{integration.descricao}</p>
                </div>
              </div>

              {/* Toggle Switch */}
              <div className="flex items-center space-x-3">
                <span className={`text-sm font-semibold ${integration.ativo ? 'text-green-600' : 'text-gray-400'}`}>
                  {integration.ativo ? 'Ativo' : 'Inativo'}
                </span>
                <button
                  onClick={() => toggleIntegration(integration.id)}
                  className={`relative w-14 h-7 rounded-full transition-all ${
                    integration.ativo ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`absolute top-1 left-1 w-5 h-5 bg-white dark:bg-gray-800 rounded-full transition-transform ${
                    integration.ativo ? 'translate-x-7' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>
            </div>

            {/* Status Badge */}
            <div className="mb-4 flex items-center space-x-2">
              {integration.ativo ? (
                <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Conectado</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 dark:bg-gray-700 text-gray-500 dark:text-gray-400 dark:text-gray-400 rounded-full text-sm font-semibold">
                  <XCircle className="w-4 h-4" />
                  <span>Desconectado</span>
                </div>
              )}
            </div>

            {/* Configuration Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {integration.campos.map((campo, index) => (
                <div key={index} className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 dark:text-gray-300 flex items-center space-x-2">
                    <Key className="w-3 h-3 text-gray-400" />
                    <span>{campo.label}</span>
                  </label>
                  <input
                    type={campo.tipo}
                    placeholder={campo.placeholder}
                    defaultValue={campo.value}
                    disabled={!integration.ativo}
                    className={`w-full px-4 py-2 rounded-lg border transition-all ${
                      integration.ativo
                        ? 'border-gray-300 bg-white dark:bg-gray-800 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20'
                        : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 dark:bg-gray-900 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Save Button */}
            {integration.ativo && (
              <div className="mt-4 flex justify-end">
                <button className={`px-6 py-2 rounded-lg text-white font-semibold transition-all hover:scale-105 bg-gradient-to-r ${integration.bgGradient} shadow-lg`}>
                  Salvar Configurações
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
