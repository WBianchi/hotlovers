"use client";

import { MessageCircle, Users, Activity } from "lucide-react";

export function ChatHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-cyan-600" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-foreground">Chat ao Vivo</h1>
          <p className="text-sm text-muted-foreground">Monitore todas as conversas em tempo real</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
          <Activity className="w-4 h-4 text-green-600" />
          <span className="text-sm font-bold text-green-600">12 Ativos</span>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-muted rounded-lg">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-bold text-foreground">45 Total</span>
        </div>
      </div>
    </div>
  );
}
