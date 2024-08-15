import { dbShirts, dbCollection } from "@/db/db";
import Image from "next/image";
import Link from "next/link";
function CatalogMenu() {
  return (
    <nav className="flex flex-col absolute z-10 top-14 left-0 right-0 bg-white p-2 w-full">
      <ul className="grid grid-cols-4">
        {dbShirts
          .sort(() => Math.random() - 0.5)
          .slice(0, 4)
          .map((item) => (
            <li key={item.id} className="w-60 h-40 p-1">
              <Image
                width={600}
                height={400}
                src={item.image}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </li>
          ))}
      </ul>
      <ul className=" w-full my-2 grid grid-cols-4 gap-1">
        {dbCollection.map((item) => (
          <li
            key={item.id}
            className="capitalize text-gray-500 font-normal text-sm px-2 h-fit"
          >
            <Link href={item.link} className="hover:text-black">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CatalogMenu;
