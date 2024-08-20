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
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHover(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHover(false);
    }, 300);
  };

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
      className={`w-full flex flex-col items-center justify-evenly sticky top-0 z-40 bg-[rgb(210,209,209)] transition-all duration-300 ease-out ${
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
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="uppercase hover:text-gray-600">Catálogo</button>
            {hover && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className=" transition-all duration-300 ease-in-out"
              >
                <CatalogMenu />
              </div>
            )}
          </li>
          <Link href="/categories/color" className="hover:text-gray-600">
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
      </article>
    </section>
  );
}

export default MenuLogo;
