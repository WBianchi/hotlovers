import Link from "next/link";
import { FaFire } from "react-icons/fa";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-3 group ${className || ""}`}>
      <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
        <FaFire className="w-5 h-5 text-white" />
      </div>
      <div className="hidden md:block">
        <h1 className="text-xl font-black">
          <span className="text-red-600">Hot</span>
          <span className="text-gray-800 dark:text-gray-100">Lovers</span>
        </h1>
      </div>
    </Link>
  );
}

export default Logo;
