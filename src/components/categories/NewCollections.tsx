import React from "react";
import { dbShirts } from "@/db/db";

function NewCollections() {
  return (
    <>
      <article className="w-80 flex-2 lg:flex-1 rounded-lg p-4 flex flex-col gap-4">
        <div className="relative flex items-center justify-center w-72 h-96 bg-menGrid bg-cover bg-bottom border before:block before:absolute before:-inset-0 before:bg-black before:opacity-20">
          <p className="relative opacity-90 text-center text-white uppercase text-xl font-semibold">
            Nuevas colecciones de ropa de moda
          </p>
        </div>
      </article>
      <article>
        <p className="uppercase font-medium p-1 tracking-wider text-gray-500 text-sm">
          Products
        </p>
        <div className="flex flex-col">
          {dbShirts.slice(0, 3).map((shirt) => (
            <div key={shirt.id} className=" flex gap-2 items-center p-2 ">
              <img
                src={shirt.image}
                alt={shirt.name}
                className="w-24 h-28 object-cover object-bottom"
              />
              <div className="flex flex-col gap-1 text-base">
                <span>
                  <p>{shirt.name}</p>
                  <p className="truncate w-40 capitalize">
                    {shirt.description}
                  </p>
                </span>
                <p className="font-semibold text-sm">
                  ${shirt.price.toFixed(2)} MXN
                </p>
                <button className="bg-black text-white text-xs w-fit px-2 py-1 hover:bg-gray-500 uppercase">
                  Ver
                </button>
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default NewCollections;
