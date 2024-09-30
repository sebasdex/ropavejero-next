"use client";
import TableCart from "@/components/cart/TableCart";
import BreadcrumbsCart from "@/components/ui/BreadcrumbsCart";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <div className="min-h-screen mx-6 my-2 md:my-8">
      <BreadcrumbsCart />
      <h1 className="tracking-widest font-bold uppercase text-center sm:text-2xl md:text-3xl lg:text-4xl py-4 md:my-10">
        Tu carrito de compras
      </h1>
      <section className="flex flex-col gap-2">
        <TableCart />
        <label htmlFor="" className="text-sm text-gray-500">
          Agrega una nota a tu orden
        </label>
        <textarea
          name=""
          id=""
          className="w-full p-2 mt-2 text-sm h-24 bg-gray-200"
        ></textarea>
        <div className="flex justify-between text-white py-2">
          <button
            className="bg-black p-2 hover:bg-gray-800 text-xs sm:text-sm md:text-base lg:text-lg"
            onClick={() => router.push("/")}
          >
            Continuar comprando
          </button>
          <button className="bg-black p-2 hover:bg-gray-800 text-xs sm:text-sm md:text-base lg:text-lg">
            Proceder al pago
          </button>
        </div>
      </section>
    </div>
  );
}

export default page;
