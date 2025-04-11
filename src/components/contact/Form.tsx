"use client";

function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-black rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <h2 className="text-2xl font-bold uppercase mb-8 tracking-wide">
        Escríbenos
        <span className="block w-10 h-1 bg-black mt-2" />
      </h2>

      <p className="text-sm text-gray-600 mb-6">
        Te responderemos lo antes posible. Gracias por comunicarte con nosotros.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          required
          className="border border-gray-300 p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="border border-gray-300 p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition"
        />
      </div>

      <textarea
        name="message"
        rows={6}
        placeholder="Cuéntanos cómo podemos ayudarte..."
        required
        className="w-full border border-gray-300 p-3 rounded-md placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black transition mb-6"
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300"
      >
        Enviar mensaje
      </button>
    </form>
  );
}

export default Form;
