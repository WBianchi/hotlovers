interface InputProps {
  children?: React.ReactNode;
  className?: string;
}

export function Input({ children, className }: InputProps) {
  return (
    <div className={`input-container ${className || ""}`}>
      {/* Input Component */}
      {children}
    </div>
  );
}

export default Input;
