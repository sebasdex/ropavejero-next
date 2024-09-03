"use client";
import AddMessageCart from "@/components/AddMessageCart";
import CollectionMain from "@/components/CollectionMain";
import useStore from "@/store/myState";
import React from "react";

function page() {
  const { isModalOpen } = useStore();
  return (
    <>
      {isModalOpen && <AddMessageCart />}
      <CollectionMain
        categoryName="Logo"
        categoryBG="bg-logo"
        nameElement="logo"
      />
    </>
  );
}

export default page;
