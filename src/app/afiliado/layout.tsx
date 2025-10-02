import { AfiliadoTopbar } from "@/components/afiliado/topbar/afiliado-topbar";
import { AfiliadoSidebar } from "@/components/afiliado/sidebar/afiliado-sidebar";

export default function AfiliadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AfiliadoTopbar />
      <div className="flex pt-16">
        <AfiliadoSidebar />
        <main className="flex-1 ml-64">{children}</main>
      </div>
    </div>
  );
}
