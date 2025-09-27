interface BotaoProps {
  children?: React.ReactNode;
  className?: string;
}

export function Botao({ children, className }: BotaoProps) {
  return (
    <div className={`botao-container ${className || ""}`}>
      {/* Botao Component */}
      {children}
    </div>
  );
}

export default Botao;
