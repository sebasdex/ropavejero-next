"use client";
import { useRouter } from "next/navigation";

function ButtonsCart() {
  const router = useRouter();
  return (
    <div className="flex justify-between text-white py-2">
      <button
        className="bg-black p-2 hover:bg-gray-800 text-xs sm:text-sm md:text-base"
        onClick={() => router.push("/")}
      >
        Continuar comprando
      </button>
      <button className="bg-black p-2 hover:bg-gray-800 text-xs sm:text-sm md:text-base">
        Proceder al pago.
      </button>
    </div>
  );
}

export default ButtonsCart;
