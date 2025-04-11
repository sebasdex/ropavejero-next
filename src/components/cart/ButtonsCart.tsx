"use client";

import { useRouter } from "next/navigation";

export default function ButtonsCart() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
      <button
        onClick={() => router.push("/")}
        className="w-full sm:w-auto text-sm uppercase font-medium border border-black px-5 py-2 rounded-md hover:bg-black hover:text-white transition"
      >
        Seguir comprando
      </button>
      <button className="w-full sm:w-auto text-sm uppercase font-semibold bg-black text-white px-5 py-2 rounded-md hover:bg-neutral-800 transition">
        Proceder al pago
      </button>
    </div>
  );
}
