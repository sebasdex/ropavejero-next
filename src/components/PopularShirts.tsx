import { dbShirts, Shirt } from "@/db/db";
import Image from "next/image";
import { useState } from "react";
import useStore from "@/store/myState";
import Link from "next/link";

function PopularShirts() {
  const [popularShirt, setPopularShirt] = useState(dbShirts);
  const { addToCart, currentShirtAdd, openModal } = useStore();

  const addCart = (shirt: Shirt) => {
    addToCart(shirt);
    openModal();
  };
  return (
    <>
      <article className="flex justify-center gap-2 flex-wrap lg:flex-nowrap w-full">
        {popularShirt.map(
          (shirt) =>
            shirt.popular && (
              <div
                key={shirt.id}
                className="text-center pb-4 flex flex-col justify-center items-center"
              >
                <Link
                  href={`/collection/${shirt.id}`}
                  className="relative custom-hover"
                >
                  <Image
                    width={300}
                    height={300}
                    src={shirt.image}
                    alt={shirt.name}
                    className="object-cover w-full h-full"
                  />
                </Link>
                <h3 className="pt-2">{shirt.name}</h3>
                <p className="py-2 font-semibold">${shirt.price}</p>
                <button
                  className="bg-black text-white p-2 hover:bg-gray-600 ease-in-out duration-300"
                  onClick={() => {
                    addCart(shirt);
                    currentShirtAdd(shirt);
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
