"use client";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import MenuCategories from "@/components/MenuCategories";
import MenuLogo from "@/components/MenuLogo";
import Menubar from "@/components/Menubar";
import Offer from "@/components/Offer";
import PopularShirts from "@/components/PopularShirts";
import Title from "@/components/Title";
import Trend from "@/components/Trend";

export default function Home() {
  return (
    <>
      <Menubar />
      <div className="container min-h-dvh mx-auto m-8 flex flex-col items-center justify-center">
        <MenuLogo />
        <Banner />
        <Categories />
        <Title text="Popular Products" />
        <div className="flex w-full gap-3 h-full">
          <MenuCategories />
          <PopularShirts />
        </div>
        <Offer />
        <Title text="Tendencias" />
        <Trend />
      </div>
      <Footer />
    </>
  );
}
