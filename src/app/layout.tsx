import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Menubar from "@/components/Menubar";
import MenuLogo from "@/components/MenuLogo";
import ArrowUp from "@/components/ui/ArrowUp";

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
      <body
        className={`${inter.className} relative flex flex-col min-h-dvh justify-between`}
      >
        <ArrowUp />
        <Menubar />
        <MenuLogo />

        <div className="container mx-auto flex flex-col mb-auto mt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
