import { dbShirts } from "@/db/db";
import { useState } from "react";
function PopularShirts() {
  const [popularShirt, setPopularShirt] = useState(dbShirts);
  return (
    <article className="flex gap-4 border w-full h-96">
      {popularShirt.map(
        (shirt) =>
          shirt.popular && (
            <div key={shirt.id} className="text-center w-full h-full">
              <img
                src={shirt.image}
                alt={shirt.name}
                className="object-cover h-full w-full"
              />
              <h3 className="">{shirt.name}</h3>
              <p className="">${shirt.price}</p>
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
