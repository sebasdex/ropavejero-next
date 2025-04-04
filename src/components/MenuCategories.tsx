import Link from "next/link";

// Arreglo de categorías
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

function MenuCategories({
  textMenu,
}: {
  textMenu: string;
}) {
  return (
    <section className="w-full h-full bg-black text-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl p-6 relative">
      <p
        className={`text-lg font-bold tracking-widest bg-gray-800/80 py-3 px-6 rounded-t-lg -mt-6 -mx-6 mb-4 shadow-md text-center`}
      >
        {textMenu}
      </p>
      <ul className="flex flex-col gap-3 font-medium text-sm">
        {categories.map((category) => (
          <li key={category.href} className="group">
            <Link
              href={category.href}
              className="text-white hover:text-gray-200 transition-all duration-300 flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-800/80"
            >
              <span>{category.label}</span>
              <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-125"></span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 opacity-50"></div>
    </section>
  );
}

export default MenuCategories;