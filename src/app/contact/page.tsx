import React from "react";
import InfoContact from "@/components/contact/InfoContact";
import Form from "@/components/contact/Form";
import SocialMedia from "@/components/contact/SocialMedia";

function page() {
  return (
    <section className="min-h-screen my-28 bg-white text-black px-6 py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-extrabold uppercase relative">
            Estamos para ayudarte
            <span className="block mt-4 w-24 h-1 bg-black mx-auto" />
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            ¿Tienes dudas, sugerencias o simplemente quieres saludar? Estamos siempre listos para escucharte. Utiliza el formulario, visita nuestras oficinas o conéctate con nosotros en redes sociales.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <InfoContact />
          </div>

          <div className="lg:col-span-3">
            <Form />
          </div>
        </div>

        <div className="mt-20 border-t border-gray-300 pt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">¿Dónde encontrarnos?</h2>
            <p className="text-gray-700">
              Nuestra tienda física es el corazón de lo que hacemos. Ven a conocernos, revisar nuestros productos en vivo o simplemente tomar un café con nosotros.
            </p>
            <p className="text-gray-600">
              📍 Calle Estilo 42, Plaza Central, Ciudad Moda<br />
              ☎️ +56 2345 678 910<br />
              ✉️ contacto@ropavejero.com
            </p>
          </div>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}

export default page;