interface AvatarProps {
  children?: React.ReactNode;
  className?: string;
}

export function Avatar({ children, className }: AvatarProps) {
  return (
    <div className={`avatar-container ${className || ""}`}>
      {/* Avatar Component */}
      {children}
    </div>
  );
}

export default Avatar;
