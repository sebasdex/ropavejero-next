"use client";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SubMenuBar from "./SubMenuBar";
import { useState, useRef, useEffect } from "react";
import CartSection from "./CartSection";
import useStore from "@/store/myState";

function Menubar() {
  const [userButton, setUserButton] = useState<boolean>(false);
  const [cartButton, setCartButton] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuRefCart = useRef<HTMLDivElement>(null);
  const { cart, initializeCart } = useStore();

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setUserButton(false);
    }
  };
  const handleClickOutsideCart = (event: MouseEvent) => {
    if (
      menuRefCart.current &&
      !menuRefCart.current.contains(event.target as Node)
    ) {
      setCartButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideCart);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCart);
    };
  }, []);

  useEffect(() => {
    initializeCart();
  }, []);

  return (
    <>
      <nav className="bg-black text-white z-50">
        <ul className="flex gap-3 p-2 items-center justify-end mx-auto min-w-32 max-w-screen-lg">
          <li
            className={`${"hover:bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center relative"} ${
              userButton ? "bg-gray-900" : ""
            }`}
          >
            <button onClick={() => setUserButton(!userButton)}>
              <PersonIcon fontSize="small" />
            </button>
            {userButton ? (
              <div ref={menuRef}>
                <SubMenuBar />
              </div>
            ) : null}
          </li>
          <li className="hover:bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center">
            <button onClick={() => setCartButton(!cartButton)}>
              <ShoppingCartOutlinedIcon fontSize="small" />
            </button>
            {cartButton ? (
              <div ref={menuRefCart} className="relative">
                <CartSection setCartButton={setCartButton} />
              </div>
            ) : null}
            <span className="text-xs">{cart.length > 0 ? cart.length : 0}</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menubar;
