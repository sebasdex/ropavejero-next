"use client";
import useStore from "@/store/myState";
import Image from "next/image";

export default function TableCart() {
  const { cart, addToCart, minusFromCart, removeFromCart } = useStore();
  if (cart.length === 0) {
    return (
      <p className="text-center text-neutral-500">Tu carrito está vacío.</p>
    );
  }

  return (
    <>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 bg-white border border-neutral-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          {/* Imagen */}
          <Image
            src={item.image}
            alt={item.name}
            width={90}
            height={110}
            className="w-20 h-28 object-contain bg-neutral-100 rounded-md"
          />
          {/* Info */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            <div className="space-y-1">
              <h2 className="text-sm font-semibold uppercase truncate">
                {item.name}
              </h2>
              <p className="text-xs text-neutral-500 truncate">
                {item.category}
              </p>
              <p className="text-xs text-neutral-500 line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2 text-sm">
                <button
                  onClick={() => minusFromCart(item)}
                  className="w-6 h-6 rounded border border-neutral-400 hover:bg-black hover:text-white transition"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="w-6 h-6 rounded border border-neutral-400 hover:bg-black hover:text-white transition"
                >
                  +
                </button>
              </div>

              <div className="text-sm font-bold text-black">
                ${(item.price * item.quantity).toFixed(2)}MXN
              </div>
            </div>
            {/* Botones */}
            <div className="flex justify-between text-xs mt-2">
              <button
                onClick={() => removeFromCart(item)}
                className="text-red-600 hover:underline"
              >
                Eliminar
              </button>
              <span className="text-neutral-400">
                u: ${item.price.toFixed(2)}MXN
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
