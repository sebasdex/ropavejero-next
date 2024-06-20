import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SubMenuBar from "./SubMenuBar";

function Menubar() {
  return (
    <>
      <nav className="bg-black text-white">
        <ul className="flex gap-3 p-2 items-center justify-end mx-auto min-w-32 max-w-screen-lg">
          <li className="hover:bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center relative">
            <button>
              <PersonIcon fontSize="small" />
            </button>
            <SubMenuBar />
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
