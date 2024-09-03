"use client";
import AddMessageCart from "@/components/AddMessageCart";
import CollectionMain from "@/components/CollectionMain";
import useStore from "@/store/myState";

function page() {
  const { isModalOpen } = useStore();
  return (
    <>
      {isModalOpen && <AddMessageCart />}
      <CollectionMain
        categoryName="Figuras"
        categoryBG="bg-images"
        nameElement="figures"
      />
    </>
  );
}

export default page;
