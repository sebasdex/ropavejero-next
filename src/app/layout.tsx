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
      <body
        className={`${inter.className} flex flex-col min-h-dvh justify-between`}
      >
        <div>
          <Menubar />
          <MenuLogo />
        </div>
        <div className="container mx-auto flex flex-col mb-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
