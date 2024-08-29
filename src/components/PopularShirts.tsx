import { dbShirts, Shirt } from "@/db/db";
import Image from "next/image";
import { useState } from "react";
import useStore from "@/store/myState";

function PopularShirts() {
  const [popularShirt, setPopularShirt] = useState(dbShirts);
  const { addToCart, currentShirtAdd, openModal } = useStore();

  const addCart = (shirt: Shirt) => {
    addToCart(shirt);
    openModal();
  };
  return (
    <>
      <article className="flex justify-center gap-4 w-full">
        {popularShirt.map(
          (shirt) =>
            shirt.popular && (
              <div
                key={shirt.id}
                className="text-center w-full h-full pb-4 flex flex-col justify-center items-center"
              >
                <Image
                  width={300}
                  height={300}
                  src={shirt.image}
                  alt={shirt.name}
                  className="object-cover"
                />
                <h3 className="pt-2">{shirt.name}</h3>
                <p className="py-2 font-semibold">${shirt.price}</p>
                <button
                  className="bg-black text-white p-2 hover:bg-gray-600 ease-in-out duration-300"
                  onClick={() => {
                    currentShirtAdd(shirt);
                    addCart(shirt);
                  }}
                >
                  Añadir al carrito
                </button>
              </div>
            )
        )}
      </article>
    </>
  );
}

export default PopularShirts;
