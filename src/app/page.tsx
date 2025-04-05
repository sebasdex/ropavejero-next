"use client";
import AddMessageCart from "@/components/AddMessageCart";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import CollectionBanner from "@/components/CollectionBanner";
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
      <div className="w-full flex flex-col lg:flex-row gap-8 pb-10 mx-auto">
        <div className="w-full lg:w-72 p-5 flex-shrink-0">
          <MenuCategories textMenu="Categorías" />
        </div>
        <div className="w-full flex-1">
          <PopularShirts />
        </div>
      </div>
      <Offer />
      <Title text="Tendencias" />
      <Trend />
      <CollectionBanner />
    </>
  );
}
