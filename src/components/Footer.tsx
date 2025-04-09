import Link from "next/link";
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-24 mt-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
            Ropavejero
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            Proyecto personal iniciado en 2012 como una idea escolar centrada en moda reciclada. Desde entonces, ha evolucionado como un espacio de exploración creativa, donde diseño, frontend y visión de marca se encuentran para seguir creciendo.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Parte del diseño visual fue desarrollado con apoyo de inteligencia artificial usando <strong>Fooocus Colab</strong> para generar ideas gráficas y <strong>DALL·E</strong> para la creación de imágenes del banner. Esta integración permitió transformar por completo la estética original del proyecto.
          </p>
          <p className="text-white/40 text-xs italic">
            Todos los datos aquí presentados son ficticios y fueron creados únicamente con fines demostrativos.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-1">
            <p className="uppercase text-white font-semibold tracking-wider text-xs">
              Contacto
            </p>
            <p className="text-sm text-white/70">
              Email:{" "}
              <a
                href="mailto:sebasd3x@gmail.com"
                className="hover:text-white transition"
              >
                sebasd3x@gmail.com
              </a>
            </p>
            <p className="text-sm text-white/70">
              GitHub:{" "}
              <Link
                href="https://github.com/sebasdex"
                target="_blank"
                className="hover:text-white transition"
              >
                @sebasdex
              </Link>
            </p>
          </div>

          <div className="space-y-1">
            <p className="uppercase text-white font-semibold tracking-wider text-xs">
              Inspiración visual
            </p>
            <Link
              href="https://theme528-t-shirt.myshopify.com/"
              target="_blank"
              className="italic text-sm text-white/70 hover:text-white transition"
            >
              “Urban Tee”
            </Link>
          </div>

          <div className="space-y-1">
            <p className="uppercase text-white font-semibold tracking-wider text-xs">
              Herramientas utilizadas
            </p>
            <ul className="text-sm text-white/70 space-y-1">
              <li>
                <Link
                  href="https://nextjs.org"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Next.js
                </Link>
              </li>
              <li>
                <Link
                  href="https://tailwindcss.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Tailwind CSS
                </Link>
              </li>
              <li className="text-white/50">
                Fooocus Colab · DALL·E (IA creativa)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-white/40 text-xs">
        2012 – {currentYear} | Elaborado con ❤️ por{" "}
        <Link
          href="https://github.com/sebasdex"
          target="_blank"
          className="hover:text-white"
        >
          SebastianDC
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
