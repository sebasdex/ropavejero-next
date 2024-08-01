import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Menubar from "@/components/Menubar";
import MenuLogo from "@/components/MenuLogo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ropavejero",
  description: "Tienda de ropa en linea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menubar />
        <MenuLogo />
        <div className="container min-h-dvh mx-auto flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
