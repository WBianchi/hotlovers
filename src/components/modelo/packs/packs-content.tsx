"use client";

import { PacksHeader } from "./packs-header";
import { PacksStats } from "./packs-stats";
import { PacksGrid } from "./packs-grid";

export function PacksContent() {
  return (
    <div className="p-6 space-y-6">
      <PacksHeader />
      <PacksStats />
      <PacksGrid />
    </div>
  );
}