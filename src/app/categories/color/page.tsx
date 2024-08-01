import BannerCategory from "@/components/BannerCategory";
import MenuCategories from "@/components/MenuCategories";
import React from "react";

function color() {
  return (
    <aside className="w-full mt-4 flex gap-4">
      <MenuCategories />
      <BannerCategory categoryName="Color" categoryBG="bg-menGrid" />
    </aside>
  );
}

export default color;
