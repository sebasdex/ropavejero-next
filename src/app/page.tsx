"use client";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import MenuCategories from "@/components/MenuCategories";
import Offer from "@/components/Offer";
import PopularShirts from "@/components/PopularShirts";
import Title from "@/components/Title";
import Trend from "@/components/Trend";

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <Title text="Popular Products" />
      <div className="flex w-full gap-3">
        <MenuCategories
          textMenu="Categorías"
          myStyles="bg-black text-white p-2 font-semibold"
        />
        <PopularShirts />
      </div>
      <Offer />
      <Title text="Tendencias" />
      <Trend />
    </>
  );
}
