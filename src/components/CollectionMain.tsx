import BannerCategory from "@/components/BannerCategory";
import ColorElements from "@/components/categories/ColorElements";
import NewCollections from "@/components/categories/NewCollections";
import MenuCategories from "@/components/MenuCategories";
import BasicBreadcrumbs from "@/components/ui/Breadcrumbs";
import React from "react";

function CollectionMain({
  categoryName,
  categoryBG,
  nameElement,
  nameCollection,
}: {
  categoryName: string;
  categoryBG: string;
  nameElement: string;
  nameCollection: string;
}) {
  return (
    <div className="p-4 m-auto w-full">
      <BasicBreadcrumbs nameCollection={nameCollection} />
      <aside className="flex flex-col space-y-4 gap-8 lg:flex-row lg:space-y-0 lg:space-x-4">
        <section className="order-2 lg:order-1">
          <article className="">
            <MenuCategories
              textMenu="Colecciones"
              myStyles=" text-gray-500 p-2 tracking-widest font-medium w-fit"
            />
            <NewCollections />
          </article>
        </section>
        <article className="lg:order-2 order-1">
          <BannerCategory categoryName={categoryName} categoryBG={categoryBG} />
          <ColorElements nameElement={nameElement} />
        </article>
      </aside>
    </div>
  );
}

export default CollectionMain;
