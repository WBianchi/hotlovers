interface LinksProps {
  children?: React.ReactNode;
  className?: string;
}

export function Links({ children, className }: LinksProps) {
  return (
    <div className={`links-container ${className || ""}`}>
      {/* Links Component */}
      {children}
    </div>
  );
}

export default Links;
