import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{display:"flex"}}  className={inter.className}>
      <div className="bg-muted p-4 md:p-6 border-r">
            <nav className="flex flex-col gap-4">
            <Link href="/">
              Inicio
              </Link>
              <a
                className="text-muted-foreground hover:text-foreground"
                href="#"
              >
                Productos
              </a>
              <a
                className="text-muted-foreground hover:text-foreground"
                href="#"
              >
                Nosotros
              </a>
              <a
                className="text-muted-foreground hover:text-foreground"
                href="#"
              >
                Contacto
              </a>
              <Link href="/perfil">
              perfil
              </Link>
            </nav>
          </div>
        {children}
        </body>
    </html>
  );
}
