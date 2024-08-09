import Link from "next/link";
import React from "react";

function Categories() {
  const categoriesMain = [
    {
      name: "Men",
      href: "/categories/men",
      bg: "bg-menGrid",
    },
    {
      name: "Women",
      href: "/categories/women",
      bg: "bg-women",
    },
    {
      name: "Teens",
      href: "/categories/teens",
      bg: "bg-teens",
    },
  ];
  return (
    <section
      className="
     grid grid-cols-3 gap-4 place-items-center w-full h-96 font-bold uppercase text-white text-2xl"
    >
      {categoriesMain.map((category, index) => {
        return (
          <Link href={category.href} key={index} className="w-full h-full">
            <article
              className={`w-full h-full relative flex flex-col items-center justify-center bg-cover bg-bottom before:block before:absolute before:-inset-0 before:bg-black before:opacity-20 hover:before:opacity-30 before:transition-opacity before:duration-300 before:ease-in-out cursor-pointer ${category.bg}`}
            >
              <span className="relative">
                <p>{category.name}</p>
              </span>
            </article>
          </Link>
        );
      })}
    </section>
  );
}

export default Categories;
