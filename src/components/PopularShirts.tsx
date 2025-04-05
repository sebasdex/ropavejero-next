import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { dbShirts, Shirt } from "@/db/db";
import useStore from "@/store/myState";

function PopularShirts() {
  const [popularShirt] = useState<Shirt[]>(dbShirts);
  const { addToCart, currentShirtAdd, openModal } = useStore();

  const addCart = (shirt: Shirt) => {
    addToCart(shirt);
    openModal();
  };

  return (
    <article className="w-full h-full px-6 py-12">
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-6 h-full">
        {popularShirt.map(
          (shirt) =>
            shirt.popular && (
              <div
                key={shirt.id}
                className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-out flex flex-col"
              >
                <Link href={`/collection/${shirt.id}`} className="block relative flex-shrink-0">
                  <div className="relative w-full h-72 bg-gray-100 p-4 group/image">
                    <div className="absolute inset-0 border-4 border-black/10 rounded-2xl transform rotate-2 group-hover/image:rotate-0 transition-transform duration-700 ease-out"></div>
                    <Image
                      width={400}
                      height={400}
                      src={shirt.image}
                      alt={shirt.name}
                      className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover/image:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-20 animate-pulse-subtle">
                      Popular
                    </span>
                  </div>
                </Link>

                <div className="relative px-6 py-6 text-center flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight line-clamp-1">
                    {shirt.name}
                  </h3>

                  <div className="relative inline-block mb-4">
                    <span className="text-lg font-extrabold text-black bg-white px-4 py-1 rounded-lg shadow-sm border border-gray-200 transform rotate-3 transition-transform duration-500">
                      ${shirt.price.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      currentShirtAdd(shirt);
                      addCart(shirt);
                    }}
                    className="w-full bg-black text-white py-3 px-6 rounded-xl text-sm font-semibold uppercase tracking-wide relative overflow-hidden group/button"
                  >
                    <span className="relative z-10">Añadir al carrito</span>
                    <div className="absolute inset-0 bg-white/30 transform skew-x-12 -translate-x-full group-hover/button:translate-x-0 transition-transform duration-500 ease-out"></div>
                  </button>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-black rounded-t-full opacity-0 transition-opacity duration-500">
                  <div className="w-full h-full bg-white/50 rounded-t-full transform scale-x-0 transition-transform duration-300 origin-center"></div>
                </div>
              </div>
            )
        )}
      </div>
    </article>
  );
}

export default PopularShirts;