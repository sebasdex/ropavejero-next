import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

function MenuLogo() {
  const menuoptions = [
    {
      id: 1,
      option: "Home",
      src: "/",
    },
    {
      id: 2,
      option: "Catálogo",
      src: "/catalog",
    },
    {
      id: 3,
      option: "Colección",
      src: "/collection",
    },
    {
      id: 4,
      option: "Ventas",
      src: "/sales",
    },
    {
      id: 5,
      option: "Blog",
      src: "/blog",
    },
    {
      id: 6,
      option: "Sobre nosotros",
      src: "/about",
    },
    {
      id: 7,
      option: "Contáctanos",
      src: "/contact",
    },
  ];

  return (
    <section
      className={
        "min-h-60 max-h-72 flex flex-col items-center justify-evenly gap-2 p-1"
      }
    >
      <article
        className={`${bebas.className} mt-1 leading-10 tracking-wider text-4xl flex flex-col items-center justify-center`}
      >
        <a href="">
          <img src="/logo.png" alt="logo" className="w-40 h-40" />
        </a>
        <span className="-mt-3">Ropavejero</span>
      </article>
      <article
        className={`w-full max-w-screen-lg font-semibold tracking-wider text-xl ${bebas.className}`}
      >
        <ul className="flex p-2 justify-between uppercase">
          {menuoptions.map((option) => {
            return (
              <a
                href={option.src}
                key={option.id}
                className="hover:text-gray-600"
              >
                <li>{option.option}</li>
              </a>
            );
          })}
        </ul>
      </article>
    </section>
  );
}

export default MenuLogo;
