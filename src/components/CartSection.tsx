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
    <section className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-neutral-900/95 backdrop-blur-md text-white rounded-2xl shadow-2xl px-5 py-6 sm:p-6 md:p-8 border border-white/10 space-y-6">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <h2 className="text-lg sm:text-xl font-bold tracking-wide">Tu carrito</h2>
        <button
          onClick={() => setCartButton(false)}
          className="text-white/50 hover:text-white transition"
          aria-label="Cerrar carrito"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="max-h-[30vh] lg:max-h-[20vh] overflow-y-auto space-y-6 pr-1">
        {cart.length > 0 ? (
          cart.map((item) => (
            <article
              key={item.id}
              className="flex gap-4 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-lg object-cover w-16 h-16 border border-white/10 flex-shrink-0"
              />

              <div className="flex-1 flex flex-col justify-between min-w-0 gap-2">
                <h3 className="text-sm font-semibold text-white line-clamp-1 break-words">
                  {item.name}
                </h3>
                <p className="text-xs text-white/60">
                  ${item.price.toFixed(2)}{' '}MXN x {item.quantity}
                </p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm font-semibold text-white">
                    ${(item.price * item.quantity).toFixed(2)}{' '}
                    <span className="text-xs text-white/60">MXN</span>
                  </p>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500/20 text-white/70 hover:text-red-400 transition"
                    aria-label={`Eliminar ${item.name}`}
                  >
                    <DeleteIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-center h-40 gap-4">
            <ShoppingCartIcon className="w-10 h-10 text-white/30" />
            <p className="text-sm text-white/60">Tu carrito está vacío</p>
            <button
              onClick={() => setCartButton(false)}
              className="px-4 py-2 bg-white/10 text-white rounded-full text-sm hover:bg-white/20 transition"
            >
              Seguir comprando
            </button>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <footer className="pt-5 border-t border-white/10 space-y-4">
          <div className="flex justify-between text-sm text-white/80">
            <span>Total</span>
            <span className="text-lg font-bold text-white">${total}{' '}MXN</span>
          </div>
          <button
            onClick={() => {
              router.push("/cart");
              setCartButton(false);
            }}
            className="w-full bg-red-500 hover:bg-red-400 text-white text-sm font-semibold py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
          >
            Pagar ahora
          </button>
        </footer>
      )}
    </section>
  );
}

export default CartSection;
