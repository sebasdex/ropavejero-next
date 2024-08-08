import BannerCategory from "@/components/BannerCategory";
import ColorElements from "@/components/categories/ColorElements";
import NewCollections from "@/components/categories/NewCollections";
import MenuCategories from "@/components/MenuCategories";
import BasicBreadcrumbs from "@/components/ui/Breadcrumbs";
import React from "react";

function CollectionMain({ categoryName }: { categoryName: string }) {
  return (
    <aside className="flex w-full mt-4 min-h-dvh gap-4">
      <article className="flex flex-col gap-4 w-96">
        <BasicBreadcrumbs />
        <MenuCategories
          textMenu="Colecciones"
          myStyles=" text-gray-500 p-2 tracking-widest font-medium"
        />
        <NewCollections />
      </article>
      <article className="w-full">
        <BannerCategory categoryName={categoryName} categoryBG="bg-menGrid" />
        <ColorElements />
      </article>
    </aside>
  );
}

export default CollectionMain;
