import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Menubar from "@/components/Menubar";
import MenuLogo from "@/components/MenuLogo";
import ArrowUp from "@/components/ui/ArrowUp";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ropavejero",
  description: "Tienda de ropa en linea",
  icons: {
    icon: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative flex flex-col justify-between mt-28`}
      >
        <Analytics />
        <ArrowUp />
        <Menubar />
        <MenuLogo />
        <div className="container mx-auto flex flex-col mb-auto mt-16 bg-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
