interface FlutuanteProps {
  children?: React.ReactNode;
  className?: string;
}

export function Flutuante({ children, className }: FlutuanteProps) {
  return (
    <div className={`flutuante-container ${className || ""}`}>
      {/* Flutuante Component */}
      {children}
    </div>
  );
}

export default Flutuante;
