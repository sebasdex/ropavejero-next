"use client";
import { useState, useRef, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import Link from "next/link";
import useStore from "@/store/myState";
import SubMenuBar from "./SubMenuBar";
import CartSection from "./CartSection";

function Menubar() {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const userRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const { cart, initializeCart } = useStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userRef.current &&
        !userRef.current.contains(event.target as Node) &&
        cartRef.current &&
        !cartRef.current.contains(event.target as Node)
      ) {
        setIsUserOpen(false);
        setIsCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    initializeCart();
  }, [initializeCart]);

  const toggleUserMenu = () => {
    setIsUserOpen((prev) => !prev);
    if (isCartOpen) setIsCartOpen(false);
  };

  const toggleCartMenu = () => {
    setIsCartOpen((prev) => !prev);
    if (isUserOpen) setIsUserOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-neutral-900/95 backdrop-blur-sm pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between relative">
        {/* Botón usuario */}
        <button
          onClick={toggleUserMenu}
          className="p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all duration-200"
          aria-label="User menu"
        >
          <PersonIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="Ropavejero Logo"
            width={36}
            height={36}
            className="rounded-full border border-neutral-700 shadow-sm sm:w-10 sm:h-10 object-contain"
          />
          <span className="hidden sm:block text-white font-semibold text-lg sm:text-xl tracking-tight">
            Ropavejero
          </span>
        </Link>

        {/* Botón carrito */}
        <button
          onClick={toggleCartMenu}
          className="p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all duration-200 relative"
          aria-label="Cart"
        >
          <ShoppingCartOutlinedIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-[10px] sm:text-xs font-semibold rounded-full flex items-center justify-center shadow-md">
              {cart.length}
            </span>
          )}
        </button>

        {/* Submenús */}
        {isUserOpen && (
          <div
            ref={userRef}
            className="absolute top-full left-4 sm:left-6 mt-2 w-60 sm:w-72"
          >
            <SubMenuBar />
          </div>
        )}

        {isCartOpen && (
          <div
            ref={cartRef}
            className="absolute top-full right-4 sm:right-6 mt-2 w-64 sm:w-80"
          >
            <CartSection setCartButton={setIsCartOpen} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Menubar;
