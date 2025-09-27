interface ConversaProps {
  children?: React.ReactNode;
  className?: string;
}

export function Conversa({ children, className }: ConversaProps) {
  return (
    <div className={`conversa-container ${className || ""}`}>
      {/* Conversa Component */}
      {children}
    </div>
  );
}

export default Conversa;
