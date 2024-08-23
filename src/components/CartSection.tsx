import { dbShirts } from "@/db/db";
import Image from "next/image";

function CartSection() {
  return (
    <section className="absolute top-12 p-4 right-0 w-96 max-h-96 overflow-y-scroll lg:right-40 rounded-md shadow-lg text-sm z-50 bg-white text-black m-1">
      {dbShirts
        .map((shirt) => (
          <article key={shirt.id} className="flex gap-8 py-2 px-2 border-b">
            <Image
              src={shirt.image}
              alt={shirt.name}
              width={300}
              height={300}
              className="object-cover w-14 h-full"
            />
            <div className="flex flex-col gap-2">
              <h3>{shirt.name}</h3>
              <p className="font-semibold">${shirt.price}</p>
            </div>
          </article>
        ))
        .slice(0, 4)}
      <footer className="flex justify-between items-center gap-4 p-2">
        <span className="flex gap-2 justify-between items-center">
          Total:
          <p className="text-2xl text-gray-300">
            ${dbShirts.reduce((acc, shirt) => acc + shirt.price, 0)}
          </p>
        </span>
        <button className="bg-black text-white  px-4 py-2 text-sm font-semibold hover:bg-gray-300">
          Checkout
        </button>
      </footer>
    </section>
  );
}

export default CartSection;
