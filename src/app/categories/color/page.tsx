import BannerCategory from "@/components/BannerCategory";
import NewCollections from "@/components/categories/NewCollections";
import MenuCategories from "@/components/MenuCategories";
import React from "react";

function color() {
  return (
    <aside className="flex flex-col w-full mt-4 min-h-dvh gap-4">
      <MenuCategories
        textMenu="Colecciones"
        myStyles=" text-gray-500 p-2 tracking-widest font-medium"
      />
      <NewCollections />
      {/* <BannerCategory categoryName="Color" categoryBG="bg-menGrid" /> */}
    </aside>
  );
}

export default color;
