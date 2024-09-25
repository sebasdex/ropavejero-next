"use client";
import { dbShirts, Shirt } from "@/db/db";
import useStore from "@/store/myState";
import Image from "next/image";
import Link from "next/link";
function ColorElements({ nameElement }: { nameElement: string }) {
  const { addToCart, currentShirtAdd, openModal } = useStore();
  const addCart = (shirt: Shirt) => {
    addToCart(shirt);
    openModal();
  };
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {dbShirts.map(
          (shirt) =>
            shirt.category === nameElement && (
              <div
                key={shirt.id}
                className="flex flex-col gap-4 p-4 rounded-md"
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
                <div className="flex flex-col gap-2 items-center">
                  <h2 className="text-base font-bold">{shirt.name}</h2>
                  <p className="text-sm text-gray-500">
                    ${shirt.price.toFixed(2)} MXN
                  </p>
                  <button
                    className="bg-black text-white w-fit p-2 rounded-sm hover:bg-gray-500"
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
      </div>
    </section>
  );
}

export default ColorElements;
