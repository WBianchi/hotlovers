import { AssinanteTopbar } from "@/components/assinante/topbar/assinante-topbar";

export default function AssinanteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AssinanteTopbar />
      <main>{children}</main>
    </div>
  );
}
