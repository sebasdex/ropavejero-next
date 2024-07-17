"use client";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import MenuLogo from "@/components/MenuLogo";
import Menubar from "@/components/Menubar";

export default function Home() {
  return (
    <>
      <Menubar />
      <MenuLogo />
      <Banner />
      <Categories />
    </>
  );
}
