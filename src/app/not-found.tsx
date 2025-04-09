"use client";
function NotFound() {
  return (
    <div className="min-h-[calc(100vh-14rem)] p-4 mx-4 bg-white flex items-center justify-center px-6 relative overflow-hidden font-sans">
      <div className="absolute -top-28 -left-24 w-72 h-72 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tr from-cyan-100 to-purple-100 rounded-full blur-2xl opacity-30 animate-pulse" />

      <div className="z-10 text-center max-w-xl w-full space-y-8">
        <h1 className="text-[5rem] sm:text-[6rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-600">
          404
        </h1>
        <div className="relative mx-auto w-28 h-28 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center shadow-md bg-gray-50">
          <span className="text-xs text-gray-400 italic">sin contenido</span>
          <div className="absolute -inset-1 blur-lg bg-gray-300 opacity-10 rounded-full animate-pulse" />
        </div>
        <p className="text-gray-700 text-lg sm:text-xl font-light tracking-wide leading-relaxed">
          La página que buscas no está disponible.
          <br />
          Es posible que el enlace esté roto o que el producto ya no exista.
        </p>
        <div className="inline-block px-4 py-1 border border-gray-800 text-gray-800 uppercase text-xs font-semibold rounded-full tracking-widest">
          Página no encontrada
        </div>
        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-8 py-3 bg-black text-white rounded-full font-bold uppercase tracking-wide hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
