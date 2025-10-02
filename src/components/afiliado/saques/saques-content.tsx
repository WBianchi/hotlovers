"use client";

import { Wallet, DollarSign, CheckCircle, Clock, XCircle, Plus } from "lucide-react";
import { FaWallet } from "react-icons/fa";
import { useState } from "react";

const saques = [
  {
    id: "1",
    valor: 500.00,
    taxa: 0,
    valorLiquido: 500.00,
    metodo: "PIX",
    chave: "carlos@email.com",
    data: "2024-01-20",
    dataPagamento: "2024-01-22",
    status: "pago"
  },
  {
    id: "2",
    valor: 300.00,
    taxa: 0,
    valorLiquido: 300.00,
    metodo: "Transferência Bancária",
    banco: "Banco do Brasil - Ag: 1234 CC: 56789-0",
    data: "2024-01-15",
    dataPagamento: null,
    status: "processando"
  },
  {
    id: "3",
    valor: 450.00,
    taxa: 0,
    valorLiquido: 450.00,
    metodo: "PIX",
    chave: "+55 11 98888-8888",
    data: "2024-01-10",
    dataPagamento: "2024-01-12",
    status: "pago"
  }
];

export function SaquesContent() {
  const [showModal, setShowModal] = useState(false);
  const [valorSaque, setValorSaque] = useState("");
  const [metodo, setMetodo] = useState("pix");

  const saldoDisponivel = 1245.80;
  const saldoBloqueado = 89.70;
  const totalSacado = saques.filter(s => s.status === "pago").reduce((acc, s) => acc + s.valor, 0);

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center space-x-3">
            <FaWallet className="w-8 h-8 text-red-600" />
            <span>Saques</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Solicite saques e acompanhe o histórico de pagamentos
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Saldo Disponível</h3>
            <p className="text-3xl font-black text-green-600">R$ {saldoDisponivel.toFixed(2)}</p>
            <button
              onClick={() => setShowModal(true)}
              className="w-full mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all hover:scale-105"
            >
              Solicitar Saque
            </button>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Saldo Bloqueado</h3>
            <p className="text-3xl font-black text-yellow-600">R$ {saldoBloqueado.toFixed(2)}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Comissões pendentes</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Sacado</h3>
            <p className="text-3xl font-black text-blue-600">R$ {totalSacado.toFixed(2)}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Histórico completo</p>
          </div>
        </div>

        {/* Histórico de Saques */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-black text-gray-900 dark:text-white mb-6">Histórico de Saques</h2>

          <div className="space-y-4">
            {saques.map((saque) => (
              <div
                key={saque.id}
                className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white">R$ {saque.valor.toFixed(2)}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        saque.status === "pago"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          : saque.status === "processando"
                          ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                          : "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                      }`}>
                        {saque.status === "pago" ? "Pago" : saque.status === "processando" ? "Processando" : "Cancelado"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">Método</p>
                        <p className="font-bold text-gray-900 dark:text-white">{saque.metodo}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">Solicitado em</p>
                        <p className="font-bold text-gray-900 dark:text-white">{new Date(saque.data).toLocaleDateString('pt-BR')}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">Valor Líquido</p>
                        <p className="font-bold text-green-600">R$ {saque.valorLiquido.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">
                          {saque.status === "pago" ? "Pago em" : "Status"}
                        </p>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {saque.dataPagamento ? new Date(saque.dataPagamento).toLocaleDateString('pt-BR') : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Solicitar Saque */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Solicitar Saque</h2>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Valor do Saque
                </label>
                <input
                  type="number"
                  value={valorSaque}
                  onChange={(e) => setValorSaque(e.target.value)}
                  placeholder="0,00"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white font-bold text-lg focus:outline-none focus:ring-2 focus:ring-red-600/30"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Disponível: R$ {saldoDisponivel.toFixed(2)}
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Método de Pagamento
                </label>
                <select
                  value={metodo}
                  onChange={(e) => setMetodo(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-600/30"
                >
                  <option value="pix">PIX</option>
                  <option value="transferencia">Transferência Bancária</option>
                </select>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold transition-all"
                >
                  Cancelar
                </button>
                <button className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all hover:scale-105">
                  Confirmar Saque
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
