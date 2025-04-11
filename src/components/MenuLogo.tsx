"use client";
import { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Catálogo", href: "/collection" },
  { label: "Colección", href: "/categories/color" },
  { label: "Ventas", href: "/sales" },
  { label: "Sobre nosotros", href: "/about" },
  { label: "Contáctanos", href: "/contact" },
];

export default function MenuLogo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 mt-[4.5rem] sm:mt-20 left-0 right-0 z-40 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center h-16">
          {/* Hamburger Menu */}
          <button
            className="md:hidden text-neutral-300 hover:text-white transition"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>

          {/*Desktop */}
          <ul className="hidden md:flex gap-10 text-neutral-300 text-sm font-medium">
            {menuItems.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-neutral-900 text-neutral-200 z-50 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-neutral-700">
          <span className="text-base font-semibold">Menú</span>
          <button onClick={() => setIsOpen(false)} aria-label="Cerrar">
            <CloseIcon className="w-6 h-6 text-neutral-400 hover:text-white transition" />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-4 gap-6 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-red-400 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
