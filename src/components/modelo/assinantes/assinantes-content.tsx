"use client";

import { AssinantesHeader } from "./assinantes-header";
import { AssinantesStats } from "./assinantes-stats";
import { AssinantesTable } from "./assinantes-table";

export function AssinantesContent() {
  return (
    <div className="p-6 space-y-6">
      <AssinantesHeader />
      <AssinantesStats />
      <AssinantesTable />
    </div>
  );
}
