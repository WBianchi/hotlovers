interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={`card-container ${className || ""}`}>
      {/* Card Component */}
      {children}
    </div>
  );
}

export default Card;
