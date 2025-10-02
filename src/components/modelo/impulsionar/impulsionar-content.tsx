"use client";

import { ImpulsionarHeader } from "./impulsionar-header";
import { ImpulsionarStats } from "./impulsionar-stats";
import { ImpulsionarCards } from "./impulsionar-cards";
import { ImpulsionarAtivas } from "./impulsionar-ativas";

export function ImpulsionarContent() {
  return (
    <div className="p-6 space-y-6">
      <ImpulsionarHeader />
      <ImpulsionarStats />
      <ImpulsionarCards />
      <ImpulsionarAtivas />
    </div>
  );
}
