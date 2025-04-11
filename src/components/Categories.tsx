import Link from "next/link";
import React from "react";

function Categories() {
  const categoriesMain = [
    {
      name: "Hombres",
      href: "/categories/men",
      bg: "bg-menGrid",
    },
    {
      name: "Mujeres",
      href: "/categories/women",
      bg: "bg-women",
    },
    {
      name: "Juvenil",
      href: "/categories/teens",
      bg: "bg-teens",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 sm:p-6 md:p-8 w-full h-auto min-h-[20rem]  perspective-1500">
      {categoriesMain.map((category, index) => (
        <Link
          href={category.href}
          key={index}
          className="group w-full h-60 sm:h-72 md:h-96 lg:h-full transition-transform duration-500 ease-out hover:-translate-y-2 md:hover:-translate-y-3"
        >
          <article
            className={`
              relative w-full h-full 
              bg-cover bg-center 
              rounded-xl sm:rounded-2xl overflow-hidden 
              shadow-lg 
              ${category.bg}
              before:absolute before:inset-0 
              before:bg-gray-900/50 
              before:transition-opacity before:duration-500 before:ease-out
              group-hover:before:bg-gray-900/30
            `}
          >
            <div
              className="
                absolute inset-0 
                opacity-0 group-hover:opacity-15 
                transition-opacity duration-500 ease-out
                bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)]
                bg-[length:16px_16px] sm:bg-[length:20px_20px]
              "
            />
            <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
              <h2
                className="
                  text-white text-[clamp(1.75rem,4.5vw,3.75rem)] 
                  font-extrabold uppercase 
                  tracking-tight sm:tracking-wide
                  relative
                  transition-colors duration-300 ease-out
                  group-hover:text-white/90
                  leading-tight
                "
              >
                <span className="relative z-10">{category.name}</span>
                <span
                  className="
                    absolute -bottom-1 left-1/2 
                    w-0 h-0.5 
                    bg-white/70 
                    transform -translate-x-1/2 
                    transition-all duration-500 ease-out
                    group-hover:w-2/3
                  "
                />
                <span
                  className="
                    absolute -bottom-[0.625rem] left-1/2 
                    w-0 h-0.5 
                    bg-white/30 
                    transform -translate-x-1/2 
                    transition-all duration-500 ease-out delay-100
                    group-hover:w-1/3
                  "
                />
              </h2>
              <p
                className="
                  text-white/80 text-[clamp(0.875rem,2.25vw,1rem)] 
                  mt-[clamp(0.5rem,1.5vw,1rem)] 
                  opacity-0 group-hover:opacity-100
                  translate-y-[clamp(0.5rem,1vw,0.75rem)] group-hover:translate-y-0
                  transition-all duration-300 ease-out
                  font-semibold
                  tracking-tight
                "
              >
                Explora la colección
              </p>
            </div>
            <div
              className="
                absolute inset-0 
                rounded-2xl sm:rounded-3xl 
                opacity-0 group-hover:opacity-70
                transition-opacity duration-500 ease-out
                pointer-events-none
              "
            >
              <div
                className="
                  absolute inset-0 
                  bg-gradient-to-r from-transparent via-white/15 to-transparent
                  transform translate-x-full 
                  animate-shine
                "
              />
            </div>
            <div
              className="
                absolute inset-0 
                opacity-0 group-hover:opacity-15 
                transition-opacity duration-500 ease-out
                pointer-events-none
              "
            >
              <span className="absolute top-2 sm:top-3 left-2 sm:left-3 w-4 sm:w-6 h-4 sm:h-6 border-t border-l border-white/40 rounded-tl-md" />
              <span className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-4 sm:w-6 h-4 sm:h-6 border-b border-r border-white/40 rounded-br-md" />
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default Categories;