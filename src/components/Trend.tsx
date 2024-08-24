import { dbShirts } from "@/db/db";
import { useState } from "react";
import Image from "next/image";
import useStore from "@/store/myState";

function Trend() {
  const [trendShirt, setTrendShirt] = useState(dbShirts);
  const { addToCart } = useStore();

  return (
    <article className="flex flex-wrap justify-center gap-4 w-full mb-12">
      {trendShirt.map(
        (shirt) =>
          shirt.trend && (
            <div
              key={shirt.id}
              className="text-center pb-4 flex flex-col justify-center items-center w-[25.9rem] h-full"
            >
              <Image
                width={300}
                height={300}
                src={shirt.image}
                alt={shirt.name}
                className="object-cover w-full h-full"
              />
              <h3 className="pt-2">{shirt.name}</h3>
              <p className="py-2 font-semibold">${shirt.price}</p>
              <button
                className="bg-black text-white p-2 hover:bg-gray-600 ease-in-out duration-300"
                onClick={() => addToCart(shirt)}
              >
                Añadir al carrito
              </button>
            </div>
          )
      )}
    </article>
  );
}

export default Trend;
