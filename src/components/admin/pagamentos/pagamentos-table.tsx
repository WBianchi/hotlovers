"use client";

import { CreditCard, Heart, Package, CheckCircle, Clock, XCircle } from "lucide-react";

export function PagamentosTable() {
  const pagamentos = [
    {
      id: "#PAG-1234",
      tipo: "assinatura",
      modelo: "Larissa Silva",
      assinante: "João Santos",
      valor: "R$ 89,90",
      metodo: "Cartão Crédito",
      data: "01/10/2025 14:30",
      status: "Aprovado"
    },
    {
      id: "#PAG-1235",
      tipo: "gorjeta",
      modelo: "Amanda Fire",
      assinante: "Carlos Lima",
      valor: "R$ 50,00",
      metodo: "PIX",
      data: "01/10/2025 13:15",
      status: "Aprovado"
    },
    {
      id: "#PAG-1236",
      tipo: "pack",
      modelo: "Juliana Hot",
      assinante: "Pedro Costa",
      valor: "R$ 149,90",
      metodo: "Cartão Crédito",
      data: "01/10/2025 12:00",
      status: "Pendente"
    },
    {
      id: "#PAG-1237",
      tipo: "assinatura",
      modelo: "Larissa Silva",
      assinante: "Ricardo Alves",
      valor: "R$ 89,90",
      metodo: "Boleto",
      data: "30/09/2025 18:45",
      status: "Aprovado"
    },
    {
      id: "#PAG-1238",
      tipo: "pack",
      modelo: "Amanda Fire",
      assinante: "Lucas Souza",
      valor: "R$ 199,90",
      metodo: "Cartão Crédito",
      data: "30/09/2025 16:20",
      status: "Recusado"
    }
  ];

  const getTipoIcon = (tipo: string) => {
    switch(tipo) {
      case "assinatura": return <CreditCard className="w-4 h-4 text-blue-600" />;
      case "gorjeta": return <Heart className="w-4 h-4 text-pink-600" />;
      case "pack": return <Package className="w-4 h-4 text-purple-600" />;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "Aprovado":
        return (
          <span className="inline-flex items-center space-x-1 text-xs font-semibold px-2 py-1 bg-green-100 text-green-600 rounded-full">
            <CheckCircle className="w-3 h-3" />
            <span>Aprovado</span>
          </span>
        );
      case "Pendente":
        return (
          <span className="inline-flex items-center space-x-1 text-xs font-semibold px-2 py-1 bg-orange-100 text-orange-600 rounded-full">
            <Clock className="w-3 h-3" />
            <span>Pendente</span>
          </span>
        );
      case "Recusado":
        return (
          <span className="inline-flex items-center space-x-1 text-xs font-semibold px-2 py-1 bg-red-100 text-red-600 rounded-full">
            <XCircle className="w-3 h-3" />
            <span>Recusado</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-bold text-foreground">
          Últimos Pagamentos
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Histórico completo de transações processadas
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Tipo
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Modelo
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Assinante
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Valor
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Método
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Data/Hora
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {pagamentos.map((pagamento) => (
              <tr key={pagamento.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-mono text-foreground">{pagamento.id}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    {getTipoIcon(pagamento.tipo)}
                    <span className="text-sm text-foreground capitalize">{pagamento.tipo}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-foreground">{pagamento.modelo}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-muted-foreground">{pagamento.assinante}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-bold text-foreground">{pagamento.valor}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-muted-foreground">{pagamento.metodo}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-muted-foreground">{pagamento.data}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(pagamento.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-border flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Mostrando 5 de 1.872 pagamentos
        </p>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm border border-border rounded hover:bg-muted transition-colors">
            Anterior
          </button>
          <button className="px-3 py-1 text-sm bg-hotlovers-red text-white rounded hover:opacity-90 transition-opacity">
            1
          </button>
          <button className="px-3 py-1 text-sm border border-border rounded hover:bg-muted transition-colors">
            2
          </button>
          <button className="px-3 py-1 text-sm border border-border rounded hover:bg-muted transition-colors">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}
