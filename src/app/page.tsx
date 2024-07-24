"use client";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import MenuCategories from "@/components/MenuCategories";
import MenuLogo from "@/components/MenuLogo";
import Menubar from "@/components/Menubar";
import PopularShirts from "@/components/PopularShirts";

export default function Home() {
  return (
    <>
      <Menubar />
      <div className="container min-h-dvh mx-auto m-8 flex flex-col items-center justify-center">
        <MenuLogo />
        <Banner />
        <Categories />
        <h1 className="text-center p-4 uppercase font-semibold tracking-wider">
          Popular Products
        </h1>
        <div className="flex w-full gap-3 h-full">
          <MenuCategories />
          <PopularShirts />
        </div>
      </div>
    </>
  );
}
