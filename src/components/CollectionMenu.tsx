import { dbCollection } from "@/db/db";
import Link from "next/link";

function CollectionMenu({
  setHoverCollection,
}: {
  setHoverCollection: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <nav className="flex flex-col absolute z-10 top-10 left-0 right-0 bg-white p-2 w-full shadow-md transition-all duration-300 ease-out">
      <ul className="grid grid-cols-3 lg:grid-cols-4 gap-2 p-2">
        {dbCollection.map((item) => (
          <li key={item.id} className="w-60 h-40 p-1">
            <Link
              href={item.link}
              className={`${item.bg} relative text-white bg-cover bg-center w-full h-full flex items-center justify-center
              before:block before:absolute before:-inset-0 before:bg-black before:opacity-0 hover:before:opacity-30 before:transition-opacity before:duration-300 before:ease-in-out
              `}
              onClick={() => setHoverCollection(false)}
            >
              <p className="relative">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CollectionMenu;
