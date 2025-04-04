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
    <article className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 flex-wrap lg:flex-nowrap w-full px-6 py-8">
      {popularShirt.map(
        (shirt) =>
          shirt.popular && (
            <div
              key={shirt.id}
              className="w-full mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full group">
                <Link href={`/collection/${shirt.id}`} className="block relative custom-hover">
                  <div className="relative w-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      width={300}
                      height={300}
                      src={shirt.image}
                      alt={shirt.name}
                      className="object-contain w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-1 bg-gray-900 bg-opacity-80 rounded-full flex items-center space-x-2">
                        <span>Más detalles</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-2 bg-black opacity-80"></div>
                </Link>
              </div>
              <div className="text-center px-4 pt-6 pb-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight line-clamp-1">
                  {shirt.name}
                </h3>
                <p className="text-base font-bold text-gray-800">
                  ${shirt.price.toFixed(2)}
                </p>
                <button
                  className="w-full bg-black text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-600 active:bg-gray-900 transition-all duration-300 ease-in-out relative overflow-hidden"
                  onClick={() => {
                    addCart(shirt);
                    currentShirtAdd(shirt);
                  }}
                >
                  <span className="relative z-10">Añadir al carrito</span>
                  <div className="absolute inset-0 bg-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          )
      )}
    </article>
  );
}

export default PopularShirts;
