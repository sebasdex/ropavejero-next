import { useState } from "react";
import { Shirt } from "@/db/db";
import SocialMediaInfo from "./SocialMediaInfo";
import useStore from "@/store/myState";
import AddMessageCart from "../AddMessageCart";

function InfoClothes({ shirt }: { shirt: Shirt }) {
  const {
    addItemToBuy,
    isModalOpen,
    openModal,
    currentShirtAdd,
    quantityToBuy,
    addQuantityToBuy,
    removeQuantityToBuy,
  } = useStore();

  return (
    <>
      {isModalOpen && <AddMessageCart />}
      <article className="px-4 w-full max-w-lg space-y-2">
        <h1 className="text-2xl font-bold uppercase tracking-wider mb-6">
          {shirt.name}
        </h1>
        <p className="font-bold text-sm">
          Stock:
          <span
            className={
              shirt.available ? "text-green-700 font-normal" : "text-red-500"
            }
          >
            {" "}
            {shirt.available ? "Disponible" : "No Disponible"}
          </span>
        </p>
        <p className="font-bold text-sm">
          Colección:{" "}
          <span className="font-normal capitalize">{shirt.category}</span>
        </p>
        <p className="font-bold text-sm">
          Código:{" "}
          <span className="font-normal capitalize">{shirt.barcode}</span>
        </p>
        <p className="font-bold text-sm">
          Descripción:{" "}
          <span className="font-normal capitalize">{shirt.description}</span>
        </p>
        <p className="font-bold text-sm">
          Material:{" "}
          <span className="font-normal capitalize">{shirt.material}</span>
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between py-4">
          <p className="font-bold text-2xl">${shirt.price.toFixed(2)} MXN</p>
          <div className="flex items-center space-x-2">
            <p>Cantidad:</p>
            <button
              className="border border-gray-400 px-2 font-bold text-xl hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 ease-in-out"
              onClick={removeQuantityToBuy}
            >
              -
            </button>
            <p className="text-lg text-gray-500 border px-2 border-gray-400">
              {quantityToBuy}
            </p>
            <button
              className="border border-gray-400 px-2 font-bold text-xl hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 ease-in-out"
              onClick={addQuantityToBuy}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="bg-black text-white p-3 uppercase font-bold hover:bg-gray-800 transition-all duration-300 ease-in-out"
          onClick={() => {
            addItemToBuy(shirt, quantityToBuy);
            currentShirtAdd(shirt);
            openModal();
          }}
        >
          Agregar al carrito
        </button>
        <SocialMediaInfo />
      </article>
    </>
  );
}

export default InfoClothes;
