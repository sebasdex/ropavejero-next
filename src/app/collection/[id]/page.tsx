"use client";
import { dbShirts } from "@/db/db";
import Image from "next/image";
import InfoClothes from "@/components/clothes-details/InfoClothes";
import BasicBreadcrumbs from "@/components/ui/Breadcrumbs";
import RelatedProducts from "@/components/RelatedProducts";

function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const shirt = dbShirts.find((s) => s.id === Number(id));

  if (!shirt) {
    return <div className="text-center py-20 text-neutral-400">Producto no encontrado</div>;
  }

  return (
    <main className="w-full bg-white min-h-screen font-sans pt-8">
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-[11px] text-neutral-400 uppercase tracking-widest">
        <BasicBreadcrumbs nameCollection={shirt.name} />
      </div>
      {/* Imagen + Info */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10">
        <div className="h-[460px] bg-neutral-100 rounded-xl border border-neutral-200 overflow-hidden shadow-sm flex items-center justify-center">
          <Image
            src={shirt.image}
            alt={shirt.name}
            width={800}
            height={800}
            className="object-contain w-full h-full p-6"
          />
        </div>
        <div className="bg-white border border-neutral-200 rounded-xl px-6 pt-6 shadow-sm">
          <InfoClothes shirt={shirt} />
        </div>
      </section>

      {/* Texto */}
      <section className="w-full bg-neutral-100 px-4 py-20">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight tracking-tight text-black">
            No es una prenda.
            <br />
            Es una declaración.
          </h2>
          <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-3xl">
            Diseñada para destacar sin gritar. Hecha con materiales duraderos,
            detalles cuidados, y una intención clara: expresar sin decir una palabra.
          </p>
        </div>
      </section>
      {/* Productos relacionados */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <RelatedProducts currentId={shirt.id} />
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
