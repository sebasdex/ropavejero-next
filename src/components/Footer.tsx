import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white w-full h-20 flex flex-col justify-center items-center text-sm">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-sm font-medium tracking-wide">
          Desarrollado por{" "}
          <Link
            href="https://github.com/sebasdex"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white hover:text-white/80 transition-colors duration-300"
          >
            SebastianDC
          </Link>
        </p>
        <p className="text-sm font-medium tracking-wide">
          Basado en el diseño de{" "}
          <Link
            href="https://theme528-t-shirt.myshopify.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white hover:text-white/80 transition-colors duration-300 italic"
          >
            <q>Urban Tee</q>
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
