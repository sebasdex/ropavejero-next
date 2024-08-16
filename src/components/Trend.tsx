import { dbShirts } from "@/db/db";
import { useState } from "react";
import Image from "next/image";

function Trend() {
  const [trendShirt, setTrendShirt] = useState(dbShirts);
  return (
    <article className="flex flex-wrap justify-center gap-4 w-full">
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
              <h3 className="font-semibold tracking-wider pt-2">
                {shirt.name}
              </h3>
              <p className="py-2">${shirt.price}</p>
              <button className="bg-black text-white p-2 rounded-md hover:bg-gray-800 ease-in-out duration-200">
                Add to cart
              </button>
            </div>
          )
      )}
    </article>
  );
}

export default Trend;
