import { dbShirts } from "@/db/db";
function ColorElements() {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {dbShirts.map((shirt) => (
          <div key={shirt.id} className="flex flex-col gap-4 p-4 rounded-md">
            <img src={shirt.image} alt={shirt.name} className="w-full" />
            <div className="flex flex-col gap-2 items-center">
              <h2 className="text-base font-bold">{shirt.name}</h2>
              <p className="text-sm text-gray-500">
                ${shirt.price.toFixed(2)} MXN
              </p>
              <button className="bg-black text-white w-fit p-2 rounded-sm hover:bg-gray-500">
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ColorElements;
