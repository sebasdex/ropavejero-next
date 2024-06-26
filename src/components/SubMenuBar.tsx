import React from "react";

function SubMenuBar() {
  return (
    <div className="bg-white text-black absolute top-8 right-0 w-28 lg:left-0 rounded-md shadow-lg text-sm">
      <ul className="flex flex-col gap-2 p-2 items-center justify-end">
        <li className="hover:bg-slate-200 w-full rounded-sm p-1">
          <button>Mi Perfíl</button>
        </li>
        <li className="hover:bg-slate-200 w-full rounded-sm p-1">
          <button>Mi Cuenta</button>
        </li>
        <li className="hover:bg-slate-200 w-full rounded-sm p-1">
          <button>Mi Historial</button>
        </li>
      </ul>
    </div>
  );
}

export default SubMenuBar;
