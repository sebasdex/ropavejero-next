"use client";
export default function BasicBreadcrumbs({
  nameCollection,
}: {
  nameCollection: string;
}) {
  return (
    <nav
      aria-label="breadcrumb"
      className="w-full max-w-7xl mx-auto px-4"
    >
      <ol className="flex flex-wrap items-center gap-1 text-[11px] sm:text-xs font-medium uppercase text-neutral-500 tracking-widest">
        <li>
          <a href="/" className="hover:underline hover:text-black transition">
            Inicio
          </a>
        </li>
        <li className="mx-1 select-none text-neutral-300">/</li>
        <li>
          <a href="/collection" className="hover:underline hover:text-black transition">
            Catálogo
          </a>
        </li>
        <li className="mx-1 select-none text-neutral-300">/</li>
        <li className="text-black font-semibold truncate max-w-[180px] sm:max-w-xs">
          {nameCollection}
        </li>
      </ol>
    </nav>
  );
}
