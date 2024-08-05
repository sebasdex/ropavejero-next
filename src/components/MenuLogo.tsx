import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

function MenuLogo() {
  return (
    <section
      className={
        "min-h-60 max-h-72 w-full flex flex-col items-center justify-evenly"
      }
    >
      <article
        className={`${bebas.className} mt-1 leading-10 tracking-wider text-4xl flex flex-col items-center justify-center`}
      >
        <Link href="/">
          <img src="/logo.png" alt="logo" className="w-40 h-40" />
        </Link>
        <span className="-mt-3">Ropavejero</span>
      </article>
      <article className="w-full max-w-screen-lg font-semibold">
        <ul className="flex p-2 justify-between ">
          <Link href="/" className="hover:text-gray-600">
            <li>Home</li>
          </Link>
          <Link href="/catalog" className="hover:text-gray-600">
            <li>Catálogo</li>
          </Link>
          <Link href="/collection" className="hover:text-gray-600">
            <li>Colección</li>
          </Link>
          <Link href="/sales" className="hover:text-gray-600">
            <li>Ventas</li>
          </Link>
          <Link href="/blog" className="hover:text-gray-600">
            <li>Blog</li>
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            <li>Sobre nosotros</li>
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            <li>Contáctanos</li>
          </Link>
        </ul>
      </article>
    </section>
  );
}

export default MenuLogo;
