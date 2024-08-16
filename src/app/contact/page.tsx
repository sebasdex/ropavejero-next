import React from "react";

function page() {
  return (
    <section className="">
      <form className="m-4 mt-8 flex flex-col gap-6 p-8 bg-white rounded-lg w-[30rem] shadow-lg mx-auto text-gray-700 font-light">
        <legend className="text-xl font-semibold mb-4 uppercase tracking-wide">
          Contáctanos
        </legend>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
            placeholder="Tu nombre"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
            placeholder="Tu email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-medium">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full min-h-32 border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 resize-none"
            placeholder="Escribe tu mensaje"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-900 transition duration-300"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default page;
