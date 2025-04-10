import React from "react";
import Image from "next/image";

function Page() {
  const values = [
    {
      title: "Calidad",
      desc: "Prendas duraderas, seleccionadas con pasión y precisión.",
    },
    {
      title: "Servicio",
      desc: "Atención personalizada que pone al cliente primero.",
    },
    {
      title: "Sostenibilidad",
      desc: "Moda que cuida el planeta, paso a paso.",
    },
    {
      title: "Innovación",
      desc: "A la vanguardia, siempre un paso adelante.",
    },
    {
      title: "Comunidad",
      desc: "Apoyamos lo local, crecemos juntos.",
    },
  ]
  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-white to-gray-100 text-gray-900">
      <header className="max-w-5xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-gray-900 relative inline-block">
          Ropavejero
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gray-900 to-transparent rounded-full animate-fade-in"></span>
        </h1>
        <p className="mt-4 text-lg font-medium text-gray-700 italic">
          Donde la moda encuentra su alma
        </p>
      </header>
      <div className="max-w-5xl mx-auto space-y-20">
        <section className="relative flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight transform -rotate-2 bg-gray-200 inline-block px-4 py-2 rounded-md shadow-lg">
              Sobre nosotros
            </h2>
            <p className="text-gray-800 text-base leading-loose">
              En <span className="font-bold text-gray-900">Ropavejero</span>,
              somos una familia apasionada por la moda, dedicada a ofrecer
              piezas únicas que resuenan con tu estilo de vida. Desde 2012,
              hemos transformado la compra en una experiencia personal y
              auténtica, fusionando calidad y creatividad en cada prenda.
            </p>
          </div>
          <div className="flex-1 h-64">
            <Image
              width={400}
              height={400}
              src='/contact-logo.webp'
              alt="Ropavejero Logo"
              className="w-full h-full object-contain rounded-lg shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </section>
        <section className="relative">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight text-center">
            Nuestra historia
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-xl border-l-8 border-gray-900">
            <p className="text-gray-700 text-base leading-relaxed">
              Todo comenzó en México con un sueño: democratizar la moda de
              calidad. Desde un pequeño taller en 2012,{" "}
              <span className="font-bold text-gray-900">Ropavejero</span> ha
              crecido gracias a nuestra comunidad, convirtiéndose en un refugio
              digital para quienes buscan estilo, confort y durabilidad en cada
              costura. Somos la alternativa a lo masivo, con un toque humano.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Nuestra misión
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Crear ropa que hable por ti: tendencias frescas y clásicos
              eternos, diseñados para superar expectativas. En{" "}
              <span className="font-bold text-gray-900">Ropavejero</span>,
              cada prenda es una invitación a sentirte seguro y auténtico.
            </p>
            <span className="absolute -top-3 -left-3 w-6 h-6 bg-gray-900 rounded-full"></span>
          </div>
          <div className="relative bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Nuestra visión
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Ser un ícono de moda sostenible y ética, conectando lo global con
              lo local. Aspiramos a que{" "}
              <span className="font-bold text-gray-900">Ropavejero</span> sea tu
              elección para prendas que celebran tu unicidad.
            </p>
            <span className="absolute -bottom-3 -right-3 w-6 h-6 bg-gray-900 rounded-full"></span>
          </div>
        </section>
        <section className="relative">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight text-center">
            Nuestros valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-md shadow-md hover:-translate-y-2 transition-transform duration-300 border-t-4 border-gray-900"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </section>
        <footer className="mt-16 py-8 text-center border-t-2 border-gray-200">
          <p className="text-gray-800 text-lg font-medium leading-relaxed">
            Únete a la familia{" "}
            <span className="font-bold text-gray-900">Ropavejero</span>. Juntos,
            redefinimos la moda con estilo, propósito y corazón.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default Page;