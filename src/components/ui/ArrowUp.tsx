"use client";

import React, { useEffect, useState } from "react";

function ArrowUp() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-20 right-6 z-50 hidden md:block">
      <button
        aria-label="Volver arriba"
        title="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`transform transition-all duration-500 ease-in-out ${isScrolled ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          className="w-12 h-12 p-3 rounded-full bg-black/70 text-white hover:bg-black transition duration-300 shadow-lg backdrop-blur-sm"
        >
          <title>Volver arriba</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default ArrowUp;
