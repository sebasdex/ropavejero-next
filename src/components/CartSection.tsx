"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useStore from "@/store/myState";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CartSection({ setCartButton }: { setCartButton: (value: boolean) => void }) {
  const { cart, removeFromCart } = useStore();
  const router = useRouter();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <section className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto bg-white text-neutral-900 rounded-2xl shadow-2xl px-6 py-6 border border-neutral-200 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-neutral-200 pb-4">
        <h2 className="text-xl font-bold tracking-tight">Tu carrito</h2>
        <button
          onClick={() => setCartButton(false)}
          aria-label="Cerrar carrito"
          className="text-neutral-500 hover:text-black transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* List */}
      <div className="overflow-y-auto max-h-[320px] space-y-4 pr-1 custom-scrollbar">
        {cart.length > 0 ? (
          [...cart].reverse().map((item) => (
            <article
              key={item.id}
              className="flex gap-4 items-start bg-neutral-50 hover:bg-neutral-100 rounded-xl p-4 border border-neutral-200 transition-all group"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="w-16 h-16 object-cover rounded-md border border-neutral-200 flex-shrink-0"
              />
              <div className="flex-1 min-w-0 space-y-1">
                <h3 className="text-sm font-semibold line-clamp-1">{item.name}</h3>
                <p className="text-xs text-neutral-500">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-sm font-bold">
                    ${(item.price * item.quantity).toFixed(2)}{" "}
                    <span className="text-xs text-neutral-500">MXN</span>
                  </span>
                  <button
                    onClick={() => removeFromCart(item)}
                    aria-label="Eliminar"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-red-100 text-neutral-600 hover:text-red-500 transition"
                  >
                    <DeleteIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-center h-44 gap-4">
            <ShoppingCartIcon className="w-10 h-10 text-neutral-300" />
            <p className="text-sm text-neutral-500">Tu carrito está vacío</p>
            <button
              onClick={() => setCartButton(false)}
              className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm hover:bg-neutral-200 transition"
            >
              Seguir comprando
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <footer className="pt-4 border-t border-neutral-200 space-y-4">
          <div className="flex justify-between items-center text-sm text-neutral-700">
            <span>Total</span>
            <span className="text-lg font-bold text-black">${total} MXN</span>
          </div>
          <button
            onClick={() => {
              router.push("/cart");
              setCartButton(false);
            }}
            className="w-full py-3 rounded-full bg-black text-white text-sm font-semibold tracking-wide hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.01] active:scale-95"
          >
            Pagar ahora
          </button>
        </footer>
      )}
    </section>
  );
}

export default CartSection;
