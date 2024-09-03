"use client";
import CollectionMain from "@/components/CollectionMain";
import AddMessageCart from "@/components/AddMessageCart";
import useStore from "@/store/myState";

function page() {
  const { isModalOpen } = useStore();
  return (
    <>
      {isModalOpen && <AddMessageCart />}
      <CollectionMain
        categoryName="Mujeres"
        categoryBG="bg-women"
        nameElement="women"
      />
    </>
  );
}

export default page;
