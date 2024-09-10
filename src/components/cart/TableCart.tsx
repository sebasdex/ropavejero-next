import useStore from "@/store/myState";
import React from "react";

function TableCart() {
  const { cart, removeFromCart, addToCart, minusFromCart } = useStore();
  return (
    <table className="table-auto w-full border-collapse">
      <thead className="border-b">
        <tr>
          <th className="text-start">Nombre</th>
          <th className="text-start">Precio</th>
          <th className="text-start">Cantidad</th>
          <th className="text-start">Total</th>
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

                  <span className="text-gray-500">
                    <p className="py-4 text-black font-bold">{shirt.name}</p>
                    <p className="capitalize">{shirt.category}</p>
                    <p className="truncate w-44">{shirt.description}</p>
                    <p>{shirt.trend}</p>
                    <button
                      className="bg-black p-2 hover:bg-gray-800 text-white uppercase text-sm px-4 my-2"
                      onClick={() => removeFromCart(shirt)}
                    >
                      Eliminar
                    </button>
                  </span>
                </div>
              )}
            </td>
            <td className="p-4">
              <p>${(shirt.price * shirt.quantity).toFixed(2)}</p>
            </td>
            <td className="p-4 font-bold text-gray-500">
              <div className="flex items-center gap-2">
                <button
                  className="border border-gray-400 px-2"
                  onClick={() => minusFromCart(shirt)}
                >
                  -
                </button>
                <p className="border border-gray-400 px-2 font-normal">
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
            <td className="p-4">
              ${(shirt.price * shirt.quantity).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="border-y">
        <tr>
          <td className="text-start font-bold text-gray-500 py-2">Total</td>
          <td className="text-start"></td>
          <td className="text-start"></td>
          <td className="text-start font-bold">
            $
            {cart
              .reduce((total, shirt) => total + shirt.price * shirt.quantity, 0)
              .toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default TableCart;
