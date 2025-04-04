function Offer() {
  return (
    <section className="w-full text-center text-white bg-black p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        <div className="w-full h-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-70 transform -rotate-3"></div>
      </div>
      <h1 className="relative z-10 text-2xl md:text-3xl font-bold uppercase tracking-widest">
        <span className="inline-block bg-white text-black px-3 py-1 rounded-md mr-2 transform -rotate-2 shadow-md">
          Envío gratis
        </span>
        en compras mínimas de $500
      </h1>
      <div className="absolute top-0 left-0 w-16 h-16 bg-gray-800 rounded-br-full opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-800 rounded-tl-full opacity-50"></div>
    </section>
  );
}

export default Offer;
