import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white w-full h-20 flex flex-col justify-center items-center text-sm">
      <p>
        Desarrollado por{" "}
        <Link
          href="https://github.com/sebasdex"
          target="_blank"
          rel="noreferrer"
        >
          SebastianDC
        </Link>
      </p>
      <p>
        Basado en el diseño de{" "}
        <Link
          href="https://theme528-t-shirt.myshopify.com/"
          target="_blank"
          rel="noreferrer"
        >
          <q>Urban Tee</q>
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
