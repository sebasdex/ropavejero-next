"use client";

import BannerCategory from "@/components/BannerCategory";
import ColorElements from "@/components/categories/ColorElements";
import NewCollections from "@/components/categories/NewCollections";
import MenuCategories from "@/components/MenuCategories";
import BasicBreadcrumbs from "@/components/ui/Breadcrumbs";
import useStore from "@/store/myState";
import AddMessageCart from "@/components/AddMessageCart";

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
  const { isModalOpen } = useStore();

  return (
    <>
      {isModalOpen && <AddMessageCart />}

      <div className="my-28 px-4 sm:px-8 lg:px-20 py-16 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <BasicBreadcrumbs nameCollection={nameCollection} />
          <BannerCategory categoryName={categoryName} categoryBG={categoryBG} />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <aside className="lg:col-span-1 space-y-10">
              <MenuCategories textMenu="Colecciones" />
              <NewCollections />
            </aside>
            <main className="lg:col-span-3">
              <ColorElements nameElement={nameElement} />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionMain;