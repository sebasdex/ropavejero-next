import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

function MenuLogo() {
  return (
    <section
      className={"min-h-60 max-h-72 flex flex-col items-center justify-evenly"}
    >
      <article
        className={`${bebas.className} mt-1 leading-10 tracking-wider text-4xl flex flex-col items-center justify-center`}
      >
        <a href="">
          <img src="/logo.png" alt="logo" className="w-40 h-40" />
        </a>
        <span className="-mt-3">Ropavejero</span>
      </article>
      <article className="w-full max-w-screen-lg font-semibold">
        <ul className="flex p-2 justify-between ">
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>Catálogo</li>
          </a>
          <a href="">
            <li>Colección</li>
          </a>
          <a href="">
            <li>Ventas</li>
          </a>
          <a href="">
            <li>Blog</li>
          </a>
          <a href="">
            <li>Sobre nosotros</li>
          </a>
          <a href="">
            <li>Contáctanos</li>
          </a>
        </ul>
      </article>
    </section>
  );
}

export default MenuLogo;
