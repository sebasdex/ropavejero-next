"use client";
import { dbShirts } from "@/db/db";
import BasicBreadcrumbs from "@/components/ui/Breadcrumbs";
import InfoClothes from "@/components/clothes-details/InfoClothes";
import Image from "next/image";

function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const idParse = Number(id);
  const shirt = dbShirts.find((shirt) => shirt.id === idParse);

  return (
    <div className="">
      {shirt ? (
        <>
          <div className="flex md:w-9/12 lg:mx-auto p-4">
            <BasicBreadcrumbs nameCollection={shirt?.name.toString()} />
          </div>
          <section className="flex flex-col md:flex-row justify-center gap-6 w-full mx-auto p-4">
            <Image
              src={shirt.image}
              alt={` ${shirt.id}`}
              className="w-full max-w-sm object-contain"
              width={500}
              height={500}
            />
            <InfoClothes shirt={shirt} />
          </section>
        </>
      ) : (
        <p>Shirt not found</p>
      )}
      <section className="p-4 m-auto w-full max-w-screen-lg text-gray-500 text-sm space-y-4">
        <p>
          En nuestra tienda, nos especializamos en ofrecer ropa que combina
          calidad excepcional con diseños únicos. Cada una de nuestras prendas
          está confeccionada con materiales de alta durabilidad, suaves al tacto
          y diseñadas para brindar la máxima comodidad durante todo el día. Nos
          enfocamos en los detalles, desde las costuras precisas hasta los
          estampados exclusivos, para que cada prenda sea un reflejo de tu
          estilo personal.
        </p>
        <p>
          Ya sea que busques algo casual para el día a día o una opción moderna
          y elegante, nuestras colecciones están diseñadas para adaptarse a ti.
          Destacamos no solo por la durabilidad de nuestras prendas, sino
          también por su diseño atemporal que complementa cualquier estilo.
          Además, utilizamos procesos responsables y sostenibles, porque creemos
          que la moda también debe cuidar el medio ambiente. ¡Descubre la
          diferencia, elige nuestras prendas y siéntete seguro y cómodo en cada
          ocasión!
        </p>
      </section>
    </div>
  );
}

export default page;
