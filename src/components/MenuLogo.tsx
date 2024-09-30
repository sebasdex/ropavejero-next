"use client";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import HamburgerMenu from "./menu-logo/HamburgerMenu";
import Image from "next/image";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

function MenuLogo() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const prevScrollPos = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > prevScrollPos.current) {
        // Desplazándose hacia abajo
        if (scrollPosition > 80 && !isScrolled) {
          setIsScrolled(true);
        }
      } else {
        // Desplazándose hacia arriba
        if (scrollPosition < 80 && isScrolled) {
          setIsScrolled(false);
        }
      }

      prevScrollPos.current = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <section className="w-full sticky top-12 z-40 bg-[rgb(210,209,209)] overflow-visible md:py-4 md:shadow-sm">
      <div
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden h-fit`}
      >
        <article
          className={`${bebas.className} leading-10 tracking-wider text-4xl flex flex-col items-center justify-center`}
        >
          {isScrolled ? null : (
            <>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="logo"
                  className={`w-20 h-20 object-contain`}
                  width={100}
                  height={100}
                />
              </Link>
              <span className="mt-0 md:-mt-2 text-2xl">Ropavejero</span>
            </>
          )}
        </article>
      </div>
      <HamburgerMenu />
    </section>
  );
}

export default MenuLogo;
