"use client";

import { AfiliadosHeader } from "./afiliados-header";
import { AfiliadosStats } from "./afiliados-stats";
import { AfiliadosTable } from "./afiliados-table";

export function AfiliadosContent() {
  return (
    <div className="p-6 space-y-6">
      <AfiliadosHeader />
      <AfiliadosStats />
      <AfiliadosTable />
    </div>
  );
}
