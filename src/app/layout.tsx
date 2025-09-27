import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HotLovers - Plataforma de Conteúdo Adulto",
  description: "A melhor plataforma de conteúdo adulto premium com as modelos mais quentes do Brasil",
  keywords: "conteúdo adulto, modelos, premium, assinatura, brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          storageKey="hotlovers-theme"
        >
          <div className="min-h-screen bg-background text-foreground">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
