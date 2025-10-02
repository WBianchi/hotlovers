"use client";

import { GorjetasHeader } from "./gorjetas-header";
import { GorjetasStats } from "./gorjetas-stats";
import { GorjetasTable } from "./gorjetas-table";

export function GorjetasContent() {
  return (
    <div className="p-6 space-y-6">
      <GorjetasHeader />
      <GorjetasStats />
      <GorjetasTable />
    </div>
  );
}
