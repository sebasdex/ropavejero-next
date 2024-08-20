"use client";
import React, { useEffect, useState } from "react";

function ArrowUp() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const arrowUp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-12 p-3 cursor-pointer bg-[rgba(197,195,195,0.9)] hover:bg-gray-700 rounded-full transition-all duration-200"
      color="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-20 right-10 z-50 hidden md:block">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={` transform transition-all duration-500 ease-in-out ${
          isScrolled ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {arrowUp}
      </button>
    </div>
  );
}

export default ArrowUp;
