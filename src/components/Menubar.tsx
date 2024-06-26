import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SubMenuBar from "./SubMenuBar";
import { useState, useRef, useEffect } from "react";

function Menubar() {
  const [userButton, setUserButton] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setUserButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-black text-white">
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
            <button>
              <ShoppingCartOutlinedIcon fontSize="small" />
            </button>
            <span className="text-xs">{0}</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menubar;
