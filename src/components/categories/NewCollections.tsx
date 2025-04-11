import React from "react";
import { dbShirts } from "@/db/db";
import Image from "next/image";
import Link from "next/link";

function NewCollections() {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-lg">
      {/* Encabezado*/}
      <div className="bg-black text-white px-6 py-4 uppercase font-bold text-xs tracking-widest border-b border-white/10">
        Nuevas colecciones destacadas
      </div>

      {/* Banner */}
      <div className="relative w-full h-56 bg-menGrid bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <p className="text-white text-lg sm:text-xl font-semibold leading-snug">
            Estilo renovado.<br />
            Mismo flow. <span className="opacity-80 text-sm block mt-1">¡Descúbrelo!</span>
          </p>
        </div>
      </div>

      {/* Lista de productos */}
      <div className="p-6 space-y-6">
        {dbShirts.slice(0, 3).map((shirt) => (
          <div
            key={shirt.id}
            className="flex gap-4 items-start border-b last:border-b-0 border-gray-100 pb-4"
          >
            <div className="w-20 h-24 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200">
              <Image
                width={80}
                height={96}
                src={shirt.image}
                alt={shirt.name}
                className="w-full h-full object-cover object-bottom"
              />
            </div>

            <div className="flex flex-col justify-between text-sm w-full">
              <div>
                <p className="font-semibold uppercase text-black">
                  {shirt.name}
                </p>
                <p className="text-gray-500 mt-0.5 line-clamp-2">
                  {shirt.description}
                </p>
              </div>

              {/* Precio y link */}
              <div className="mt-3 flex flex-col items-start gap-1">
                <span className="text-black font-bold text-sm">
                  ${shirt.price.toFixed(2)} MXN
                </span>
                <Link
                  href={`/collection/${shirt.id}`}
                  className="text-xs font-medium underline underline-offset-4 text-neutral-700 hover:text-black transition"
                >
                  Ver producto
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewCollections;
