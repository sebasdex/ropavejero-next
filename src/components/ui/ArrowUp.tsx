"use client";
import React, { use, useEffect, useState } from "react";

function ArrowUp() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const arrowUp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-14 cursor-pointer hover:text-gray-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
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
    <div className="fixed bottom-0 right-40 z-50">
      <button
        className={`p-8 transform transition-all duration-500 ease-in-out ${
          isScrolled ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {arrowUp}
      </button>
    </div>
  );
}

export default ArrowUp;
