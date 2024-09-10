"use client";
import TableCart from "@/components/cart/TableCart";
import BreadcrumbsCart from "@/components/ui/BreadcrumbsCart";

function page() {
  return (
    <div className="m-8">
      <BreadcrumbsCart />
      <h1 className="text-lg tracking-widest font-bold uppercase mt-8 text-center">
        Tu carrito de compras
      </h1>
      <section className="flex flex-col gap-4 mt-8">
        <TableCart />
        <label htmlFor="" className="text-sm text-gray-500">
          Agrega una nota a tu orden
        </label>
        <textarea
          name=""
          id=""
          className="w-full p-2 mt-2 text-sm h-24 bg-gray-200"
        ></textarea>
        <div className="flex justify-between text-white border-y py-4">
          <button className="btn btn-primary bg-black p-2 hover:bg-gray-800">
            Continuar comprando
          </button>
          <button className="btn btn-secondary bg-black p-2 hover:bg-gray-800">
            Proceder al pago
          </button>
        </div>
      </section>
    </div>
  );
}

export default page;
