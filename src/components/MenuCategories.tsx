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
      <ul className="flex flex-col gap-2 p-2">
        <li className="hover:text-gray-600">
          <Link href={"/categories/color"}>Color</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/men"}>Men</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/women"}>Women</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/teens"}>Teens</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/phrase"}>Phrase</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href={"/categories/images"}>Images</Link>
        </li>
      </ul>
    </section>
  );
}

export default MenuCategories;
