"use client";

function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      className=" flex flex-col gap-6 w-full mx-auto"
      onSubmit={handleSubmit}
    >
      <legend className="text-xl font-semibold uppercase">Contáctanos</legend>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          id="name"
          name="name"
          className="w-full border border-gray-500 p-3 outline-none focus:border-gray-500 transition duration-300 bg-transparent placeholder-gray-700"
          placeholder="Nombre"
        />
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border border-gray-500 p-3 outline-none focus:border-gray-500 transition duration-300 bg-transparent placeholder-gray-700"
          placeholder="Email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <textarea
          id="message"
          name="message"
          className="w-full min-h-32 border border-gray-500 p-3 outline-none focus:border-gray-500 transition duration-300 bg-transparent resize-none placeholder-gray-700"
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
  );
}

export default Form;
