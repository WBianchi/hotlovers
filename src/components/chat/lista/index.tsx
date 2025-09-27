interface ListaProps {
  children?: React.ReactNode;
  className?: string;
}

export function Lista({ children, className }: ListaProps) {
  return (
    <div className={`lista-container ${className || ""}`}>
      {/* Lista Component */}
      {children}
    </div>
  );
}

export default Lista;
