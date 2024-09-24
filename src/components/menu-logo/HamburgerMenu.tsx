import { useState, useRef, useEffect } from "react";
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
  const timeoutRefCollection = useRef<NodeJS.Timeout | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    // Function to update the window width state
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (timeoutRefCollection.current) {
        clearTimeout(timeoutRefCollection.current);
      }
    };
  }, []);

  const handleMouseEnterCollection = () => {
    if (timeoutRefCollection.current) {
      clearTimeout(timeoutRefCollection.current);
    }
    if (isDesktop) {
      setHoverCollection(true);
    }
  };

  const handleMouseLeaveCollection = () => {
    timeoutRefCollection.current = setTimeout(() => {
      setHoverCollection(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (isDesktop) {
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
        className="p-4 flex gap-2 items-center md:hidden"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <CloseIcon /> : <MenuIcon />}
        <span className="font-semibold">{openMenu ? "Cerrar" : "Menu"}</span>
      </button>
      {(openMenu || isDesktop) && (
        <article className="w-full max-w-screen-lg font-semibold relative p-2 mx-auto">
          <ul className="flex flex-col items-center justify-between uppercase text-base tracking-wide leading-7 md:flex-row md:justify-between md:px-4">
            <li className="hover:text-gray-600">
              <Link href="/">Home</Link>
            </li>
            <Link href="/collection" className="hover:text-gray-600">
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="uppercase hover:text-gray-600"
                  onClick={() => isDesktop && setHover(!hover)}
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
                    isDesktop && setHoverCollection(!hoverCollection)
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
            <li className="hover:text-gray-600">
              <Link href="/sales">Ventas</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link href="/about">Sobre nosotros</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link href="/contact">Contáctanos</Link>
            </li>
          </ul>
        </article>
      )}
    </>
  );
}

export default HamburgerMenu;
