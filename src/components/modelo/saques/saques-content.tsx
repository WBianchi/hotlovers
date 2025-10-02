"use client";

import { SaquesHeader } from "./saques-header";
import { SaquesStats } from "./saques-stats";
import { SaquesHistorico } from "./saques-historico";
import { SaquesSolicitar } from "./saques-solicitar";

export function SaquesContent() {
  return (
    <div className="p-6 space-y-6">
      <SaquesHeader />
      <SaquesStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SaquesHistorico />
        </div>
        <div className="lg:col-span-1">
          <SaquesSolicitar />
        </div>
      </div>
    </div>
  );
}
