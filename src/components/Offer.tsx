function Offer() {
  return (
    <section className="w-full bg-black text-white py-12 px-6 sm:px-12 mt-12 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30 pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest leading-snug">
          <span className="inline-block bg-white text-black px-4 py-1 rounded-md shadow-sm mr-2">
            Envío gratis
          </span>
          en compras mínimas de $500
        </h2>

        <p className="mt-4 text-sm sm:text-base text-white/80">
          Se aplica automáticamente al finalizar tu compra.
        </p>
      </div>
    </section>
  );
}

export default Offer;
