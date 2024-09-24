"use client";
import CollectionMain from "@/components/CollectionMain";
import AddMessageCart from "@/components/AddMessageCart";
import useStore from "@/store/myState";

function color() {
  const { isModalOpen } = useStore();
  return (
    <>
      {isModalOpen && <AddMessageCart />}

      <CollectionMain
        categoryName="Color"
        categoryBG="bg-color"
        nameElement="color"
        nameCollection="Color"
      />
    </>
  );
}

export default color;
