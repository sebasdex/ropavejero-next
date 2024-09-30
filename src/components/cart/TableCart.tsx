import useStore from "@/store/myState";
import Image from "next/image";
import React from "react";

function TableCart() {
  const { cart, removeFromCart, addToCart, minusFromCart } = useStore();

  return (
    <div>
      {/* Tabla para pantallas medianas y grandes */}
      <div className="overflow-x-auto hidden md:block">
        <table className="table-auto w-full border-collapse">
          <thead className="">
            <tr>
              <th className="text-start">Nombre</th>
              <th className="text-start">Precio</th>
              <th className="text-start">Cantidad</th>
              <th className="text-start">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((shirt) => (
              <tr key={shirt.id} className="">
                <td className="py-4">
                  {shirt.image && (
                    <div className="flex items-center gap-4">
                      <img
                        src={shirt.image}
                        alt={shirt.name}
                        className="w-24 h-32 object-contain"
                      />
                      <div>
                        <p className="text-black font-bold">{shirt.name}</p>
                        <p className="capitalize text-gray-500">
                          {shirt.category}
                        </p>
                        <p className="truncate w-40 text-gray-500">
                          {shirt.description}
                        </p>
                        <p className="text-gray-500">{shirt.trend}</p>
                        <button
                          className="bg-black p-2 hover:bg-gray-800 text-white uppercase text-sm px-4 my-2"
                          onClick={() => removeFromCart(shirt)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  )}
                </td>
                <td className="py-4">
                  <p>${shirt.price.toFixed(2)}</p>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <button
                      className="border border-gray-400 px-2"
                      onClick={() => minusFromCart(shirt)}
                    >
                      -
                    </button>
                    <p className="border border-gray-400 px-2">
                      {shirt.quantity}
                    </p>
                    <button
                      className="border border-gray-400 px-2"
                      onClick={() => addToCart(shirt)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4">
                  ${(shirt.price * shirt.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="">
            <tr>
              <td className="text-start font-bold text-gray-500 py-2">Total</td>
              <td></td>
              <td></td>
              <td className="text-start font-bold">
                $
                {cart
                  .reduce(
                    (total, shirt) => total + shirt.price * shirt.quantity,
                    0
                  )
                  .toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Tarjetas para pantallas pequeñas */}
      <div className="md:hidden">
        {cart.map((shirt) => (
          <div key={shirt.id} className="py-4">
            <div className="flex items-start gap-4">
              <Image
                width={100}
                height={100}
                src={shirt.image}
                alt={shirt.name}
                className="w-24 h-32 object-contain"
              />
              <div>
                <p className="text-black font-bold">{shirt.name}</p>
                <p className="capitalize text-gray-500">{shirt.category}</p>
                <p className="truncate w-40 text-gray-500">
                  {shirt.description}
                </p>
                <p className="text-gray-500">{shirt.trend}</p>
                <p className="text-gray-500">
                  Precio: ${shirt.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="border border-gray-400 px-2"
                    onClick={() => minusFromCart(shirt)}
                  >
                    -
                  </button>
                  <p className="border border-gray-400 px-2">
                    {shirt.quantity}
                  </p>
                  <button
                    className="border border-gray-400 px-2"
                    onClick={() => addToCart(shirt)}
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-500 mt-2">
                  Total: ${(shirt.price * shirt.quantity).toFixed(2)}
                </p>
                <button
                  className="bg-black p-2 hover:bg-gray-800 text-white uppercase text-sm px-4 my-2"
                  onClick={() => removeFromCart(shirt)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Total */}
        <div className="">
          <p className="text-start font-bold text-gray-500">
            Total: $
            {cart
              .reduce((total, shirt) => total + shirt.price * shirt.quantity, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TableCart;
