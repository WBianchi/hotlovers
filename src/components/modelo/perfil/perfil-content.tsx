"use client";

import { PerfilHeader } from "./perfil-header";
import { PerfilFotos } from "./perfil-fotos";
import { PerfilDados } from "./perfil-dados";
import { PerfilRedes } from "./perfil-redes";
import { PerfilPrivacidade } from "./perfil-privacidade";

export function PerfilContent() {
  return (
    <div className="p-6 space-y-6">
      <PerfilHeader />
      <PerfilFotos />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerfilDados />
        <PerfilRedes />
      </div>
      
      <PerfilPrivacidade />
    </div>
  );
}
