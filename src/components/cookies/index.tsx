interface CookiesProps {
  children?: React.ReactNode;
  className?: string;
}

export function Cookies({ children, className }: CookiesProps) {
  return (
    <div className={`cookies-container ${className || ""}`}>
      {/* Cookies Component */}
      {children}
    </div>
  );
}

export default Cookies;
