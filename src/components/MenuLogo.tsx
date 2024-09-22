"use client";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import HamburgerMenu from "./menu-logo/HamburgerMenu";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

function MenuLogo() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
      className={`w-full my-2 sticky top-0 z-40 bg-[rgb(210,209,209)] transition-all duration-300 ease-out ${
        isScrolled ? "md:h-20" : "md:h-60"
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
          <img
            src="/logo.png"
            alt="logo"
            className="w-20 h-20 md:w-40 md:h-40"
          />
        </Link>
        <span className="mt-0 md:-mt-3 text-2xl md:text-4xl">Ropavejero</span>
      </article>
      <HamburgerMenu />
    </section>
  );
}

export default MenuLogo;
