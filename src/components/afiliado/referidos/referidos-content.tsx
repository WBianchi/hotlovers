"use client";

import { Users, UserPlus, DollarSign, TrendingUp, Copy } from "lucide-react";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";

const referidos = [
  {
    id: "1",
    nome: "Maria Santos",
    email: "maria@email.com",
    dataRegistro: "2024-01-15",
    vendas: 12,
    comissaoGerada: 456.80,
    status: "ativo"
  },
  {
    id: "2",
    nome: "Paulo Silva",
    email: "paulo@email.com",
    dataRegistro: "2024-01-10",
    vendas: 8,
    comissaoGerada: 287.50,
    status: "ativo"
  },
  {
    id: "3",
    nome: "Ana Costa",
    email: "ana@email.com",
    dataRegistro: "2024-01-05",
    vendas: 15,
    comissaoGerada: 598.90,
    status: "ativo"
  }
];

export function ReferidosContent() {
  const [copied, setCopied] = useState(false);
  const linkReferencia = "https://hotlovers.com/ref/CARLOS2024";

  const copyLink = () => {
    navigator.clipboard.writeText(linkReferencia);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const totalReferidos = referidos.length;
  const totalComissoes = referidos.reduce((acc, r) => acc + r.comissaoGerada, 0);
  const totalVendas = referidos.reduce((acc, r) => acc + r.vendas, 0);

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center space-x-3">
            <FaUsers className="w-8 h-8 text-red-600" />
            <span>Programa de Referência</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Convide outros afiliados e ganhe comissão sobre as vendas deles
          </p>
        </div>

        {/* Link de Referência */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white mb-8">
          <h2 className="text-2xl font-black mb-4">Seu Link de Referência</h2>
          <p className="text-sm opacity-90 mb-4">
            Compartilhe este link e ganhe 10% de comissão sobre todas as vendas dos afiliados que você indicar!
          </p>
          <div className="flex items-center space-x-3">
            <div className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <code className="text-white font-mono">{linkReferencia}</code>
            </div>
            <button
              onClick={copyLink}
              className="px-6 py-3 bg-white text-red-600 hover:bg-gray-100 rounded-xl font-bold transition-all hover:scale-105 flex items-center space-x-2"
            >
              {copied ? (
                <>
                  <span>✓ Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-bold text-blue-600">+2 este mês</span>
            </div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total de Referidos</h3>
            <p className="text-3xl font-black text-gray-900 dark:text-white">{totalReferidos}</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-bold text-green-600">+15.2%</span>
            </div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Comissões de Referência</h3>
            <p className="text-3xl font-black text-green-600">R$ {totalComissoes.toFixed(2)}</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm font-bold text-purple-600">Total</span>
            </div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Vendas Geradas</h3>
            <p className="text-3xl font-black text-gray-900 dark:text-white">{totalVendas}</p>
          </div>
        </div>

        {/* Lista de Referidos */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-black text-gray-900 dark:text-white mb-6">Seus Referidos</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Afiliado</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Data Registro</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Vendas</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Comissão Gerada</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {referidos.map((referido) => (
                  <tr key={referido.id} className="border-t border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{referido.nome}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{referido.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(referido.dataRegistro).toLocaleDateString('pt-BR')}
                      </p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-gray-900 dark:text-white">{referido.vendas}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-green-600">R$ {referido.comissaoGerada.toFixed(2)}</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold rounded-full">
                        {referido.status.charAt(0).toUpperCase() + referido.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
