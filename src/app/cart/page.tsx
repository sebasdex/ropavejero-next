"use client";
import BreadcrumbsCart from "@/components/ui/BreadcrumbsCart";
import TableCart from "@/components/cart/TableCart";
import ButtonsCart from "@/components/cart/ButtonsCart";
import RelatedProducts from "@/components/RelatedProducts";
import useStore from "@/store/myState";

export default function Page() {
  const { cart } = useStore();
  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  const isEmpty = cart.length === 0;
  const isSingle = cart.length === 1;
  const randomProduct = cart[Math.floor(Math.random() * cart.length)];

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <BreadcrumbsCart />

      {!isEmpty && (
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-widest">
            Tu orden
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Revisa los productos seleccionados y finaliza tu compra
          </p>
        </header>
      )}

      {isEmpty ? (
        <div className="w-full flex flex-col items-center justify-center py-24 text-center text-neutral-400 space-y-6">
          <h1 className="text-2xl font-semibold tracking-wide text-black">
            No hay productos añadidos
          </h1>
          <p className="text-sm text-neutral-500">
            Aún no has agregado nada a tu orden.
          </p>
          <a
            href="/"
            className="text-sm text-black border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
          >
            Seguir comprando
          </a>
        </div>
      ) : (
        <>
          {isSingle ? (
            <div className="w-full max-w-7xl mx-auto space-y-8">
              <TableCart />
              <section className="space-y-4 border-t pt-8">
                <div className="flex justify-between text-sm font-semibold text-neutral-800">
                  <span>Total:</span>
                  <span className="text-lg font-bold text-black">${total}</span>
                </div>

                <div>
                  <label
                    htmlFor="note"
                    className="text-sm font-medium text-neutral-600 block mb-2"
                  >
                    Nota para el pedido:
                  </label>
                  <textarea
                    id="note"
                    placeholder="Ej. Entregar después de las 6pm..."
                    className="w-full bg-neutral-100 border border-neutral-300 rounded-md p-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-black transition"
                  />
                </div>
                <ButtonsCart />
                <p className="text-xs text-neutral-500 mt-4">
                  💳 Aceptamos tarjetas de crédito, débito y pagos seguros.
                </p>
              </section>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TableCart />
                </div>
              </div>

              <aside className="sticky top-24 self-start space-y-6 p-6 rounded-xl border border-neutral-200 shadow-md bg-white/70 backdrop-blur-md h-fit">
                <h2 className="text-lg font-bold uppercase tracking-wider">
                  Detalles del pedido
                </h2>

                <div className="flex justify-between text-sm border-b pb-2 text-neutral-700">
                  <span>Total:</span>
                  <span className="font-extrabold text-black text-lg">${total}MXN</span>
                </div>

                <div className="space-y-3">
                  <label htmlFor="note" className="text-sm font-medium text-neutral-600">
                    Nota para el pedido:
                  </label>
                  <textarea
                    id="note"
                    placeholder="Ej. Entregar después de las 6pm..."
                    className="w-full bg-neutral-100 border border-neutral-300 rounded-md p-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-black transition"
                  />
                </div>

                <ButtonsCart />

                <p className="text-xs text-neutral-500 text-center mt-4">
                  💳 Aceptamos tarjetas de crédito, débito y pagos seguros.
                </p>
              </aside>

            </div>
          )}
          {/* Separador */}
          <div className="my-14 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          {/* Sugerencias */}
          {randomProduct && (
            <RelatedProducts
              category={randomProduct.category}
              excludeIds={cart.map((item) => item.id)}
            />
          )}
          {/* Sugerencias */}
          <section className="my-20 bg-neutral-50 border border-neutral-200 rounded-xl py-14 px-6 sm:px-10 text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')] bg-cover pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h4 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-neutral-900 mb-4">
                ¿Listo para descubrir más?
              </h4>
              <p className="text-sm sm:text-base text-neutral-500 max-w-xl mx-auto leading-relaxed mb-6">
                Inspírate, explora y encuentra ese look que va con tu esencia. Nuestras colecciones están pensadas para destacar lo que te hace único.
              </p>
              <a
                href="/collection"
                className="inline-block border border-black text-black text-sm sm:text-base uppercase tracking-wide font-semibold px-6 py-2 rounded-full hover:bg-black hover:text-white transition duration-300"
              >
                Ver colecciones
              </a>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
