import { dbShirts, Shirt } from "@/db/db";
import { useState } from "react";
import Image from "next/image";
import useStore from "@/store/myState";
import Link from "next/link";

function Trend() {
  const [trendShirt] = useState(dbShirts);
  const { addToCart, currentShirtAdd, openModal } = useStore();
  const addCart = (shirt: Shirt) => {
    addToCart(shirt);
    openModal();
  };

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center p-4 mb-8">
      {trendShirt.map(
        (shirt) =>
          shirt.trend && (
            <div key={shirt.id} className="w-11/12">
              <div className="relative custom-hover w-full h-full cursor-pointer">
                <Link href={`/collection/${shirt.id}`}>
                  <Image
                    width={300}
                    height={300}
                    src={shirt.image}
                    alt={shirt.name}
                    className="object-cover w-full h-full"
                  />
                </Link>
              </div>

              <div className="flex flex-col justify-center items-center">
                <h3 className="pt-2">{shirt.name}</h3>
                <p className="py-2 font-semibold">${shirt.price.toFixed(2)}</p>
                <button
                  className="bg-black text-white p-2 hover:bg-gray-600 ease-in-out duration-300 md:text-base lg:text-lg"
                  onClick={() => {
                    currentShirtAdd(shirt);
                    addCart(shirt);
                  }}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          )
      )}
    </article>
  );
}

export default Trend;
