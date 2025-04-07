import Link from "next/link";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 border-t border-white/10 w-full">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm tracking-wide">
        {/* Recursos */}
        <div>
          <h3 className="text-base font-bold uppercase mb-3">Recursos</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://nextjs.org/"
                target="_blank"
                className="hover:underline hover:text-white/80 transition duration-300"
              >
                Next.js
              </Link>
            </li>
            <li>
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                className="hover:underline hover:text-white/80 transition duration-300"
              >
                Tailwind CSS
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-base font-bold uppercase mb-3">Contacto</h3>
          <ul className="space-y-2 text-white/70">
            <li>
              <span className="text-white">Email:</span>{" "}
              <a
                href="mailto:sebasdev@correo.com"
                className="hover:underline hover:text-white/80 transition duration-300"
              >
                sebasd3x@gmail.com
              </a>
            </li>
            <li>
              <span className="text-white">GitHub:</span>{" "}
              <Link
                href="https://github.com/sebasdex"
                target="_blank"
                className="hover:underline hover:text-white/80 transition duration-300"
              >
                @sebasdex
              </Link>
            </li>
          </ul>
        </div>

        {/* Créditos */}
        <div>
          <h3 className="text-base font-bold uppercase mb-3">Créditos</h3>
          <p className="text-white/70">
            Desarrollado por{" "}
            <Link
              href="https://github.com/sebasdex"
              target="_blank"
              className="font-semibold hover:underline hover:text-white/90 transition duration-300"
            >
              SebastianDC
            </Link>
            .
          </p>
          <p className="mt-2 text-white/50">
            Inspirado en{" "}
            <Link
              href="https://theme528-t-shirt.myshopify.com/"
              target="_blank"
              className="italic hover:underline hover:text-white/80"
            >
              “Urban Tee”
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
