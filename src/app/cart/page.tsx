"use client";
import BreadcrumbsCart from "@/components/ui/BreadcrumbsCart";
import useStore from "@/store/myState";

function page() {
  const { cart } = useStore();
  return (
    <div className="m-8">
      <BreadcrumbsCart />
      <h1 className="text-lg tracking-widest font-bold uppercase mt-8 text-center">
        Tu carrito de compras
      </h1>
      <section className="flex flex-col gap-4 mt-8">
        <table className="table-auto w-full border-collapse">
          <thead className="border-b">
            <tr>
              <th className="text-start p-4">Nombre</th>
              <th className="text-start p-4">Precio</th>
              <th className="text-start p-4">Cantidad</th>
              <th className="text-start p-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((shirt) => (
              <tr key={shirt.id} className="border-b">
                <td className="p-4">
                  {shirt.image && (
                    <div className="flex items-center gap-2">
                      <img
                        src={shirt.image}
                        alt={shirt.name}
                        className="w-48 h-56 object-contain"
                      />
                      <p>{shirt.name}</p>
                    </div>
                  )}
                </td>
                <td className="p-4">${shirt.price.toFixed(2)}</td>
                <td className="p-4">{shirt.quantity}</td>
                <td className="p-4">
                  ${(shirt.price * shirt.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default page;
