"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface TemaProps {
  className?: string;
}

export function Tema({ className }: TemaProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-lg bg-muted animate-pulse ${className || ""}`} />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`
        w-9 h-9 rounded-xl bg-background hover:bg-muted 
        flex items-center justify-center transition-all duration-300
        hover:scale-110 hover:shadow-lg border-0
        ${className || ""}
      `}
      title={theme === "dark" ? "Modo Claro" : "Modo Escuro"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-hotlovers-red hover:text-yellow-500 transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-hotlovers-red hover:text-blue-500 transition-colors" />
      )}
    </button>
  );
}

export default Tema;
