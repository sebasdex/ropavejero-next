"use client";
import Link from "next/link";

function SubMenuBar() {
  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg overflow-hidden">
      <ul className="flex flex-col divide-y divide-neutral-700">
        <li>
          <Link
            href="/perfil"
            className="block px-4 py-3 text-sm text-neutral-200 hover:bg-neutral-700 transition-all"
          >
            Mi perfil
          </Link>
        </li>
        <li>
          <Link
            href="/pedidos"
            className="block px-4 py-3 text-sm text-neutral-200 hover:bg-neutral-700 transition-all"
          >
            Mis pedidos
          </Link>
        </li>
        <li>
          <Link
            href="/configuracion"
            className="block px-4 py-3 text-sm text-neutral-200 hover:bg-neutral-700 transition-all"
          >
            Configuración
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SubMenuBar;
