interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <div className={`badge-container ${className || ""}`}>
      {/* Badge Component */}
      {children}
    </div>
  );
}

export default Badge;
