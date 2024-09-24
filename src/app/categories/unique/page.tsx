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
        categoryName="Únicas"
        categoryBG="bg-unique"
        nameElement="unique"
        nameCollection="Únicas"
      />
    </>
  );
}

export default page;
