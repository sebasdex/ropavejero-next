import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white w-full h-20 flex justify-center items-center">
      <p className="text-center text-sm">
        Desarrollado por{" "}
        <Link
          href="https://github.com/sebasdex"
          className="hover:text-gray-600"
          target="_blank"
          rel="noreferrer"
        >
          SebastianDC
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
