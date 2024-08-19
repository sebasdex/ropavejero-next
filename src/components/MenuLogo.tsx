"use client";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CatalogMenu from "./CatalogMenu";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

function MenuLogo() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`w-full flex flex-col items-center justify-evenly sticky top-0 z-50 bg-[rgb(210,209,209)] transition-all duration-300 ease-out ${
        isScrolled ? "h-20" : "h-60"
      }`}
    >
      <article
        className={`${
          bebas.className
        } leading-10 tracking-wider text-4xl flex flex-col items-center justify-center transition-opacity duration-300 ${
          isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
        }`}
        style={{ transition: "height 0.3s ease, opacity 0.3s ease" }}
      >
        <Link href="/">
          <img src="/logo.png" alt="logo" className="w-40 h-40" />
        </Link>
        <span className="-mt-3">Ropavejero</span>
      </article>
      <article className="w-full max-w-screen-lg font-semibold relative p-2 mt-2">
        <ul className="flex justify-between uppercase text-base tracking-wider ">
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
          <Link href="/about" className="hover:text-gray-600">
            <li>Sobre nosotros</li>
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            <li>Contáctanos</li>
          </Link>
        </ul>
        {open && (
          <div ref={menuRef}>
            <CatalogMenu />
          </div>
        )}
      </article>
    </section>
  );
}

export default MenuLogo;
