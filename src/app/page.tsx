"use client";
import Carrousel from "@/components/Carrousel";
import MenuLogo from "@/components/MenuLogo";
import Menubar from "@/components/Menubar";

export default function Home() {
  return (
    <>
      <Menubar />
      <MenuLogo />
      <Carrousel />
    </>
  );
}
