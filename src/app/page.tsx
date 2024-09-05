"use client";
import AddMessageCart from "@/components/AddMessageCart";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import MenuCategories from "@/components/MenuCategories";
import Offer from "@/components/Offer";
import PopularShirts from "@/components/PopularShirts";
import Title from "@/components/Title";
import Trend from "@/components/Trend";
import useStore from "@/store/myState";

export default function Home() {
  const { isModalOpen } = useStore();

  return (
    <>
      {isModalOpen && <AddMessageCart />}
      <Banner />
      <Categories />
      <Title text="Popular Products" />
      <div className="flex w-full gap-3 mb-12">
        <MenuCategories
          textMenu="Categorías"
          myStyles="bg-black text-white tracking-wider font-semibold p-4"
        />
        <PopularShirts />
      </div>
      <Offer />
      <Title text="Tendencias" />
      <Trend />
    </>
  );
}
