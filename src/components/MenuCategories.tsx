import Link from "next/link";

function MenuCategories() {
  return (
    <section className="w-1/3 uppercase">
      <p className="bg-black text-white p-2 font-semibold">Categories</p>
      <ul className="flex flex-col gap-2 p-2">
        <li>
          <Link href={"/color"}>Color</Link>
        </li>
        <li>
          <Link href={"/men"}>Men</Link>
        </li>
        <li>
          <Link href={"/women"}>Women</Link>
        </li>
        <li>
          <Link href={"/teens"}>Teens</Link>
        </li>
        <li>
          <Link href={"/phrase"}>Phrase</Link>
        </li>
        <li>
          <Link href={"/images"}>Images</Link>
        </li>
      </ul>
    </section>
  );
}

export default MenuCategories;
