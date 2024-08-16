import Link from "next/link";

function MenuCategories({
  textMenu,
  myStyles,
}: {
  textMenu: string;
  myStyles: string;
}) {
  return (
    <section className="w-1/3 uppercase">
      <p className={myStyles}>{textMenu}</p>
      <ul className="flex flex-col gap-2 p-2 pl-4">
        <li className="hover:text-gray-600">
          <Link href={"/categories/color"}>Color</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/funny"}>Divertidas</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/images"}>Figuras</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/logo"}>Logo</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/men"}>Hombres</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/phrase"}>Frases</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/teens"}>Juvenil</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/unique"}>Únicas</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/women"}>Mujeres</Link>
        </li>
      </ul>
    </section>
  );
}

export default MenuCategories;
