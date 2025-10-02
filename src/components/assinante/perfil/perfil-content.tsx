"use client";

import { User, Mail, Phone, MapPin, Calendar, Edit, Camera, Shield, CreditCard } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

export function PerfilContent() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    nome: "João Silva",
    email: "joao@email.com",
    telefone: "+55 11 98888-8888",
    cidade: "São Paulo",
    estado: "SP",
    dataNascimento: "1990-05-15",
    cpf: "123.456.789-00"
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-5xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-3 flex items-center space-x-3">
            <FaUser className="w-10 h-10 text-red-600" />
            <span>Meu Perfil</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Gerencie suas informações pessoais e preferências
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
          {/* Cover */}
          <div className="relative h-32 bg-gradient-to-r from-red-600 to-red-700">
            <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-all">
              <Camera className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Avatar & Info */}
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 mb-6">
              <div className="flex items-end space-x-4 mb-4 md:mb-0">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
                    alt="Profile"
                    className="w-32 h-32 rounded-2xl object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                  />
                  <button className="absolute bottom-0 right-0 p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all">
                    <Camera className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="pb-2">
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                    {userData.nome}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Membro desde Janeiro 2024
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center space-x-2 ${
                  isEditing
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-red-600 hover:bg-red-700 text-white"
                }`}
              >
                <Edit className="w-5 h-5" />
                <span>{isEditing ? "Salvar Alterações" : "Editar Perfil"}</span>
              </button>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={userData.nome}
                    onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
                    disabled={!isEditing}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-600/30 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    disabled={!isEditing}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-600/30 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Telefone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={userData.telefone}
                    onChange={(e) => setUserData({ ...userData, telefone: e.target.value })}
                    disabled={!isEditing}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-600/30 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Data Nascimento */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Data de Nascimento
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={userData.dataNascimento}
                    onChange={(e) => setUserData({ ...userData, dataNascimento: e.target.value })}
                    disabled={!isEditing}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-600/30 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Cidade */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Cidade
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={userData.cidade}
                    onChange={(e) => setUserData({ ...userData, cidade: e.target.value })}
                    disabled={!isEditing}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-600/30 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Estado */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Estado
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={userData.estado}
                    onChange={(e) => setUserData({ ...userData, estado: e.target.value })}
                    disabled={!isEditing}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-600/30 disabled:opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Privacy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Segurança */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">Segurança</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Proteja sua conta</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold text-left transition-all">
                Alterar Senha
              </button>
              <button className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold text-left transition-all">
                Autenticação em Dois Fatores
              </button>
              <button className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold text-left transition-all">
                Dispositivos Conectados
              </button>
            </div>
          </div>

          {/* Pagamento */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">Pagamento</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Métodos de pagamento</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold text-left transition-all">
                Adicionar Cartão
              </button>
              <button className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold text-left transition-all">
                Histórico de Pagamentos
              </button>
              <button className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold text-left transition-all">
                Faturas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
