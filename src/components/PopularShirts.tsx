import { dbShirts } from "@/db/db";
import { useState } from "react";
function PopularShirts() {
  const [popularShirt, setPopularShirt] = useState(dbShirts);
  return (
    <article className="flex justify-center gap-4 w-full">
      {popularShirt.map(
        (shirt) =>
          shirt.popular && (
            <div
              key={shirt.id}
              className="text-center w-full h-full pb-4 flex flex-col justify-center items-center"
            >
              <img
                src={shirt.image}
                alt={shirt.name}
                className="object-cover"
              />
              <h3 className="font-semibold tracking-wider pt-2">
                {shirt.name}
              </h3>
              <p className="py-2">${shirt.price}</p>
              <button className="bg-black text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          )
      )}
    </article>
  );
}

export default PopularShirts;
