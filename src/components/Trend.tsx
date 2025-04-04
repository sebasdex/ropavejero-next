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
    <article className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {trendShirt.map(
        (shirt) =>
          shirt.trend && (
            <div
              key={shirt.id}
              className="w-full max-w-md mx-auto bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative w-full group">
                <Link href={`/collection/${shirt.id}`}>
                  <div className="relative w-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      width={300}
                      height={300}
                      src={shirt.image}
                      alt={shirt.name}
                      className="object-contain w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-2 bg-gray-900 bg-opacity-80 rounded-full flex items-center space-x-2">
                        <span>Más detalles</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative px-6 pt-10 pb-6 text-center">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-gray-900 text-white text-lg font-bold flex items-center justify-center rounded-tl-3xl rounded-br-3xl shadow-lg border border-gray-800">
                  ${shirt.price.toFixed(2)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight line-clamp-1">
                  {shirt.name}
                </h3>
                <button
                  className="w-full bg-black text-white py-3 px-6 rounded-lg text-base font-medium hover:bg-gray-600 active:bg-gray-900 transition-all duration-300 ease-in-out relative overflow-hidden"
                  onClick={() => {
                    currentShirtAdd(shirt);
                    addCart(shirt);
                  }}
                >
                  <span className="relative z-10">Añadir al carrito</span>
                </button>
              </div>
            </div>
          )
      )}
    </article>
  );
}

export default Trend;
