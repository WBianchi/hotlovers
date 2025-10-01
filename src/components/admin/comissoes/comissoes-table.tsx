"use client";

import { CreditCard, Heart, Package, Image, Video, TrendingUp } from "lucide-react";

export function ComissoesTable() {
  const transacoes = [
    {
      id: "1",
      tipo: "assinatura",
      modelo: "Larissa Silva",
      assinante: "João Santos",
      valor: "R$ 89,90",
      comissao: "R$ 17,98",
      percentual: "20%",
      data: "01/10/2025",
      status: "Pago"
    },
    {
      id: "2",
      tipo: "gorjeta",
      modelo: "Amanda Fire",
      assinante: "Carlos Lima",
      valor: "R$ 50,00",
      comissao: "R$ 10,00",
      percentual: "20%",
      data: "01/10/2025",
      status: "Pago"
    },
    {
      id: "3",
      tipo: "pack",
      modelo: "Juliana Hot",
      assinante: "Pedro Costa",
      valor: "R$ 149,90",
      comissao: "R$ 29,98",
      percentual: "20%",
      data: "30/09/2025",
      status: "Pago"
    },
    {
      id: "4",
      tipo: "foto",
      modelo: "Larissa Silva",
      assinante: "Ricardo Alves",
      valor: "R$ 29,90",
      comissao: "R$ 5,98",
      percentual: "20%",
      data: "30/09/2025",
      status: "Pendente"
    },
    {
      id: "5",
      tipo: "video",
      modelo: "Amanda Fire",
      assinante: "Lucas Souza",
      valor: "R$ 39,90",
      comissao: "R$ 7,98",
      percentual: "20%",
      data: "29/09/2025",
      status: "Pago"
    }
  ];

  const getTipoIcon = (tipo: string) => {
    switch(tipo) {
      case "assinatura": return <CreditCard className="w-4 h-4 text-blue-600" />;
      case "gorjeta": return <Heart className="w-4 h-4 text-pink-600" />;
      case "pack": return <Package className="w-4 h-4 text-purple-600" />;
      case "foto": return <Image className="w-4 h-4 text-orange-600" />;
      case "video": return <Video className="w-4 h-4 text-red-600" />;
      default: return null;
    }
  };

  const getTipoLabel = (tipo: string) => {
    switch(tipo) {
      case "assinatura": return "Assinatura";
      case "gorjeta": return "Gorjeta";
      case "pack": return "Pack";
      case "foto": return "Foto";
      case "video": return "Vídeo";
      default: return tipo;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-bold text-foreground flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <span>Últimas Transações com Comissões</span>
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Histórico detalhado de todas as comissões geradas
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
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
                Valor Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Comissão
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                %
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Data
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {transacoes.map((transacao) => (
              <tr key={transacao.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    {getTipoIcon(transacao.tipo)}
                    <span className="text-sm font-medium text-foreground">
                      {getTipoLabel(transacao.tipo)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-foreground">{transacao.modelo}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-muted-foreground">{transacao.assinante}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-foreground">{transacao.valor}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-bold text-emerald-600">{transacao.comissao}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-xs font-semibold px-2 py-1 bg-emerald-100 text-emerald-600 rounded-full">
                    {transacao.percentual}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-muted-foreground">{transacao.data}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    transacao.status === "Pago"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}>
                    {transacao.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-border flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Mostrando 5 de 1.234 transações
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
            3
          </button>
          <button className="px-3 py-1 text-sm border border-border rounded hover:bg-muted transition-colors">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}
