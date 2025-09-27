interface MobileProps {
  children?: React.ReactNode;
  className?: string;
}

export function Mobile({ children, className }: MobileProps) {
  return (
    <div className={`mobile-container ${className || ""}`}>
      {/* Mobile Component */}
      {children}
    </div>
  );
}

export default Mobile;
