import Link from "next/link";
import React from "react";

function Categories() {
  return (
    <section className="flex flex-wrap justify-center gap-4 p-4 font-bold uppercase text-white text-2xl">
      <article className="h-60 relative w-60 flex flex-col items-center justify-center bg-menGrid bg-cover bg-center before:block before:absolute before:-inset-0 before:bg-black before:opacity-20 hover:before:opacity-30">
        <span className="relative">
          <Link href={"/men"}>Men</Link>
        </span>
      </article>
      <article className="h-60 relative w-60  flex flex-col items-center justify-center bg-phrase bg-cover bg-bottom before:block before:absolute before:-inset-0 before:bg-black before:opacity-20 hover:before:opacity-30">
        <span className="relative">
          <Link href={"/women"}>Women</Link>
        </span>
      </article>
      <article className="h-60 relative w-60  flex flex-col items-center justify-center bg-teens bg-cover bg-center before:block before:absolute before:-inset-0 before:bg-black before:opacity-20 hover:before:opacity-30">
        <span className="relative">
          <Link href={"/teens"}>Teens</Link>
        </span>
      </article>
    </section>
  );
}

export default Categories;