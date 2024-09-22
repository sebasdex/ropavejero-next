import { useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CatalogMenu from "../CatalogMenu";
import CollectionMenu from "../CollectionMenu";
import CloseIcon from "@mui/icons-material/Close";

function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const [hoverCollection, setHoverCollection] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timeOutRefCollection = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterCollection = () => {
    if (timeOutRefCollection.current) {
      clearTimeout(timeOutRefCollection.current);
    }
    if (window.innerWidth >= 768) {
      setHoverCollection(true);
    }
  };

  const handleMouseLeaveCollection = () => {
    timeOutRefCollection.current = setTimeout(() => {
      setHoverCollection(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (window.innerWidth >= 768) {
      setHover(true);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHover(false);
    }, 300);
  };
  return (
    <>
      <button
        className="p-4 flex gap-2 items-center"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <CloseIcon /> : <MenuIcon />}
        <span className="font-semibold">{openMenu ? "Cerrar" : "Menu"}</span>
      </button>
      {openMenu ? (
        <article className="w-full max-w-screen-lg font-semibold relative p-2 mt-2">
          <ul className="flex flex-col items-center justify-between uppercase text-base tracking-wide leading-7 md:flex-row md:justify-start ">
            <Link href="/" className="hover:text-gray-600">
              <li>Home</li>
            </Link>
            <Link href="/collection" className="hover:text-gray-600">
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="uppercase hover:text-gray-600"
                  onClick={() => window.innerWidth >= 768 && setHover(!hover)}
                >
                  Catálogo
                </button>
              </li>
            </Link>
            {hover && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
              >
                <CatalogMenu setHover={setHover} />
              </div>
            )}
            <Link href="/categories/color" className="hover:text-gray-600">
              <li
                onMouseEnter={handleMouseEnterCollection}
                onMouseLeave={handleMouseLeaveCollection}
              >
                <button
                  className="uppercase hover:text-gray-600"
                  onClick={() =>
                    window.innerWidth >= 768 &&
                    setHoverCollection(!hoverCollection)
                  }
                >
                  Colección
                </button>
              </li>
            </Link>
            {hoverCollection && (
              <div
                onMouseEnter={handleMouseEnterCollection}
                onMouseLeave={handleMouseLeaveCollection}
                className="absolute top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
              >
                <CollectionMenu setHoverCollection={setHoverCollection} />
              </div>
            )}
            <Link href="/sales" className="hover:text-gray-600">
              <li>Ventas</li>
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              <li>Sobre nosotros</li>
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              <li>Contáctanos</li>
            </Link>
          </ul>
        </article>
      ) : null}
    </>
  );
}

export default HamburgerMenu;
