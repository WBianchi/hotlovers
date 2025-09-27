interface ModalProps {
  children?: React.ReactNode;
  className?: string;
}

export function Modal({ children, className }: ModalProps) {
  return (
    <div className={`modal-container ${className || ""}`}>
      {/* Modal Component */}
      {children}
    </div>
  );
}

export default Modal;
