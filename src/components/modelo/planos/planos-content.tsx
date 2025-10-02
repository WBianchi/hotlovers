"use client";

import { PlanosHeader } from "./planos-header";
import { PlanosCards } from "./planos-cards";
import { PlanosInfo } from "./planos-info";

export function PlanosContent() {
  return (
    <div className="p-6 space-y-6">
      <PlanosHeader />
      <PlanosInfo />
      <PlanosCards />
    </div>
  );
}
