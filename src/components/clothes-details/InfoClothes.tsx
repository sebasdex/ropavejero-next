import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Link from "next/link";
import { Shirt } from "@/db/db";

function InfoClothes({ shirt }: { shirt: Shirt }) {
  return (
    <article className="px-4 w-full max-w-lg space-y-2">
      <h1 className="text-2xl font-bold uppercase tracking-wider mb-6">
        {shirt.name}
      </h1>
      <p className="font-bold text-sm">
        Stock:
        <span
          className={
            shirt.available ? "text-green-700 font-normal" : "text-red-500"
          }
        >
          {" "}
          {shirt.available ? "Disponible" : "No Disponible"}
        </span>
      </p>
      <p className="font-bold text-sm">
        Coleccion:{" "}
        <span className="font-normal capitalize">{shirt.category}</span>
      </p>
      <p className="font-bold text-sm">
        Codigo: <span className="font-normal capitalize">{shirt.barcode}</span>
      </p>
      <p className="font-bold text-sm">
        Descripción:{" "}
        <span className="font-normal capitalize">{shirt.description}</span>
      </p>
      <p className="font-bold text-sm">
        Material:{" "}
        <span className="font-normal capitalize">{shirt.material}</span>
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between py-4">
        <p className="font-bold text-2xl">${shirt.price.toFixed(2)} MXN</p>
        <div className="flex items-center space-x-2">
          <p>Cantidad:</p>
          <button
            className="border border-gray-400 px-2 font-bold text-xl hover:bg-gray-800 hover:text-white hover:border-gray-800
                transition-all duration-300 ease-in-out"
          >
            -
          </button>
          <p className="text-lg text-gray-500 border px-2 border-gray-400">1</p>
          <button
            className="border border-gray-400 px-2 font-bold text-xl hover:bg-gray-800 hover:text-white hover:border-gray-800
                transition-all duration-300 ease-in-out"
          >
            +
          </button>
        </div>
      </div>
      <button className="bg-black text-white p-3 uppercase font-bold hover:bg-gray-800 transition-all duration-300 ease-in-out">
        Agregar al carrito
      </button>
      <div className="flex gap-4">
        <Link
          href={"https://www.facebook.com"}
          target="_blank"
          rel="noreferrer"
        >
          <FacebookRoundedIcon className=" w-10 h-10 text-gray-500 hover:text-black transition-all duration-300 ease-in-out my-8" />
        </Link>
        <Link
          href={"https://www.instagram.com"}
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className=" w-10 h-10 text-gray-500 hover:text-black transition-all duration-300 ease-in-out my-8" />
        </Link>
        <Link href={"https://www.x.com"} target="_blank" rel="noreferrer">
          <XIcon className=" w-10 h-10 text-gray-500 hover:text-black transition-all duration-300 ease-in-out my-8" />
        </Link>
        <Link
          href={"https://www.pinterest.com"}
          target="_blank"
          rel="noreferrer"
        >
          <PinterestIcon className=" w-10 h-10 text-gray-500 hover:text-black transition-all duration-300 ease-in-out my-8" />
        </Link>
      </div>
    </article>
  );
}

export default InfoClothes;
