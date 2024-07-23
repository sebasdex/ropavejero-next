import { dbShirts } from "@/db/db";
import { useState } from "react";
function PopularShirts() {
  const [popularShirt, setPopularShirt] = useState(dbShirts);
  return (
    <article className="flex gap-4 border">
      {popularShirt.map(
        (shirt) =>
          shirt.popular && (
            <div key={shirt.id} className="">
              <img
                src={shirt.image}
                alt={shirt.name}
                className="w-96 h-96 object-cover"
              />
              <h3>{shirt.name}</h3>
              <p>{shirt.price}</p>
            </div>
          )
      )}
    </article>
  );
}

export default PopularShirts;
