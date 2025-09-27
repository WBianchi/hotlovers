import { Search, X } from "lucide-react";
import { useState } from "react";

interface BuscaProps {
  className?: string;
  placeholder?: string;
}

export function Busca({ className, placeholder = "Buscar modelos..." }: BuscaProps) {
  const [busca, setBusca] = useState("");
  const [ativo, setAtivo] = useState(false);

  const limparBusca = () => {
    setBusca("");
    setAtivo(false);
  };

  return (
    <div className={`relative flex-1 max-w-md ${className || ""}`}>
      <div className={`relative transition-all duration-300 ${ativo ? "scale-102" : ""}`}>
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder={placeholder}
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          onFocus={() => setAtivo(true)}
          onBlur={() => setAtivo(false)}
          className={`
            w-full h-10 pl-10 pr-8 rounded-full border border-gray-300 transition-all duration-300
            bg-background text-foreground text-sm placeholder:text-muted-foreground
            ${ativo 
              ? "border-hotlovers-red/50 shadow-sm" 
              : "border-gray-300 hover:border-gray-400"
            }
            focus:outline-none focus:ring-1 focus:ring-hotlovers-red/20
          `}
        />
        {busca && (
          <button
            onClick={limparBusca}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-hotlovers-red transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Busca;
