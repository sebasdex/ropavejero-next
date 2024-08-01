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
      <div className="flex w-full gap-3 h-full">
        <MenuCategories />
        <PopularShirts />
      </div>
      <Offer />
      <Title text="Tendencias" />
      <Trend />
    </>
  );
}
