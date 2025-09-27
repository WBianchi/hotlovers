import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-3 ${className || ""}`}>
      <div className="bg-hotlovers-red p-3 rounded-full shadow-lg">
        <span className="text-white font-black text-xl">🔥</span>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-black">
          <span className="text-hotlovers-red">Hot</span>
          <span className="text-foreground">Lovers</span>
        </h1>
        <p className="text-xs text-muted-foreground -mt-1 font-medium">
          Premium Content
        </p>
      </div>
    </Link>
  );
}

export default Logo;
