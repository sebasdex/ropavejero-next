"use client";

export default function BreadcrumbsCart() {
  return (
    <nav
      className="w-full max-w-7xl mx-auto mb-10 px-4 sm:px-6 lg:px-8"
      aria-label="breadcrumb"
    >
      <ol className="flex items-center gap-2 text-[13px] sm:text-sm text-neutral-500 font-medium tracking-wide uppercase">
        <li>
          <a
            href="/"
            className="hover:underline hover:text-black transition-colors"
          >
            Inicio
          </a>
        </li>
        <li className="text-neutral-400">/</li>
        <li className="text-neutral-700 font-semibold">Tu orden</li>
      </ol>
    </nav>
  );
}
