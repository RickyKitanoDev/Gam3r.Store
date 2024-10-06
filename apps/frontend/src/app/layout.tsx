import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gam3r.store",
  description: "A versão mais básica da loja de jogos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
