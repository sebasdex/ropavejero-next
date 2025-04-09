import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { dbShirts, Shirt } from "@/db/db";
import useStore from "@/store/myState";

function Trend() {
  const [trendShirt] = useState<Shirt[]>(dbShirts);
  const { addToCart, currentShirtAdd, openModal } = useStore();

  const addCart = (shirt: Shirt) => {
    addToCart(shirt);
    openModal();
  };

  return (
    <section className="mx-auto px-6 py-16 max-w-screen-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {trendShirt
          .filter((shirt) => shirt.trend)
          .map((shirt) => (
            <div
              key={shirt.id}
              className="relative rounded-xl bg-white border border-neutral-200 shadow-sm overflow-hidden transition-all hover:shadow-xl"
            >
              {/* Imagen */}
              <Link href={`/collection/${shirt.id}`} className="block overflow-hidden group relative">
                <div className="w-full h-72 bg-neutral-100 flex items-center justify-center">
                  <Image
                    width={500}
                    height={500}
                    src={shirt.image}
                    alt={shirt.name}
                    className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Badge */}
                <span className="absolute top-3 left-3 bg-neutral-100 text-neutral-900 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm ring-1 ring-black/10 flex items-center gap-1">
                  <span className="text-[12px]">🔥</span> Trend
                </span>
                {/* Overlay */}
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[11px] text-black font-semibold tracking-wide shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver más detalles
                </div>
              </Link>

              {/* Contenido */}
              <div className="p-6 flex flex-col justify-between h-[200px]">
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {shirt.name}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1 line-clamp-2">
                    {shirt.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-black">
                    ${shirt.price.toFixed(2)} MXN
                  </span>
                  <button
                    onClick={() => {
                      currentShirtAdd(shirt);
                      addCart(shirt);
                    }}
                    className="px-4 py-1.5 text-xs rounded-full bg-black text-white font-medium hover:bg-neutral-800 transition"
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Trend;
