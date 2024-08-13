"use client";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import CatalogMenu from "./CatalogMenu";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

function MenuLogo() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section
      className={
        "min-h-60 max-h-72 w-full flex flex-col items-center justify-evenly"
      }
    >
      <article
        className={`${bebas.className} mt-1 leading-10 tracking-wider text-4xl flex flex-col items-center justify-center`}
      >
        <Link href="/">
          <img src="/logo.png" alt="logo" className="w-40 h-40" />
        </Link>
        <span className="-mt-3">Ropavejero</span>
      </article>
      <article className="w-full max-w-screen-lg font-semibold relative p-2 mt-2">
        <ul className="flex p-2 justify-between uppercase text-sm">
          <Link href="/" className="hover:text-gray-600">
            <li>Home</li>
          </Link>
          <li className="hover:text-gray-600">
            <button className="uppercase" onClick={handleClick}>
              Catálogo
            </button>
          </li>
          <Link href="/collection" className="hover:text-gray-600">
            <li>Colección</li>
          </Link>
          <Link href="/sales" className="hover:text-gray-600">
            <li>Ventas</li>
          </Link>
          <Link href="/blog" className="hover:text-gray-600">
            <li>Blog</li>
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            <li>Sobre nosotros</li>
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            <li>Contáctanos</li>
          </Link>
        </ul>
        {open && <CatalogMenu />}
      </article>
    </section>
  );
}

export default MenuLogo;
