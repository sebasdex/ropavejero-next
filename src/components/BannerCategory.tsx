import React from "react";

function BannerCategory({
  categoryName,
  categoryBG,
}: {
  categoryName: string;
  categoryBG: string;
}) {
  return (
    <section
      className={`relative w-full h-[300px] bg-cover bg-center rounded-xl overflow-hidden flex items-center justify-start ${categoryBG}`}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 pl-8 sm:pl-12 max-w-xl">
        <h1 className="text-white text-4xl sm:text-5xl font-semibold uppercase leading-snug tracking-wider">
          {categoryName}
        </h1>
        <p className="mt-2 text-white/70 text-base sm:text-lg">
          Una mirada visual a esta categoría, donde el estilo se siente desde la entrada.
        </p>
      </div>
    </section>
  );
}

export default BannerCategory;
