"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { href: "/categories/color", label: "Color" },
  { href: "/categories/funny", label: "Divertidas" },
  { href: "/categories/images", label: "Figuras" },
  { href: "/categories/logo", label: "Logo" },
  { href: "/categories/men", label: "Hombres" },
  { href: "/categories/phrase", label: "Frases" },
  { href: "/categories/teens", label: "Juvenil" },
  { href: "/categories/unique", label: "Únicas" },
  { href: "/categories/women", label: "Mujeres" },
];

function MenuCategories({ textMenu }: { textMenu: string }) {
  const pathname = usePathname();

  return (
    <section className="w-full h-fit bg-black text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl p-6 relative">
      <p className="text-lg font-bold tracking-widest bg-gray-800/80 py-3 px-6 rounded-t-lg -mt-6 -mx-6 mb-4 shadow-md text-center">
        {textMenu}
      </p>

      <ul className="flex lg:flex-col gap-3 font-medium text-sm overflow-x-auto lg:overflow-visible scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent pb-1">
        {categories.map((category) => {
          const isActive = pathname === category.href;
          return (
            <li key={category.href} className="flex-shrink-0">
              <Link
                href={category.href}
                className={`block py-2 px-4 rounded-md whitespace-nowrap transition-all duration-300 ${isActive
                    ? "bg-gray-700 text-white font-semibold"
                    : "text-white hover:text-gray-200 hover:bg-gray-800/80"
                  }`}
              >
                {category.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 opacity-50"></div>
    </section>
  );
}

export default MenuCategories;
