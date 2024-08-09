import Link from "next/link";
import React from "react";

function Categories() {
  return (
    <section
      className="
     grid grid-cols-3 gap-4 place-items-center w-full h-96 font-bold uppercase text-white text-2xl"
    >
      <article className="w-full h-full relative flex flex-col items-center justify-center bg-menGrid bg-cover bg-bottom before:block before:absolute before:-inset-0 before:bg-black before:opacity-20 hover:before:opacity-30 before:transition-opacity before:duration-300 before:ease-in-out cursor-pointer">
        <span className="relative">
          <Link href={"/men"}>Men</Link>
        </span>
      </article>
      <article className="w-full h-full relative  flex flex-col items-center justify-center bg-women bg-cover bg-bottom before:block before:absolute before:-inset-0 before:bg-black before:opacity-20 hover:before:opacity-30 before:transition-opacity before:duration-300 before:ease-in-out cursor-pointer">
        <span className="relative">
          <Link href={"/women"}>Women</Link>
        </span>
      </article>
      <article className="w-full h-full relative flex flex-col items-center justify-center bg-teens bg-cover bg-center before:block before:absolute before:-inset-0 before:bg-black before:opacity-20 hover:before:opacity-30 before:transition-opacity before:duration-300 before:ease-in-out cursor-pointer">
        <span className="relative">
          <Link href={"/teens"}>Teens</Link>
        </span>
      </article>
    </section>
  );
}

export default Categories;
