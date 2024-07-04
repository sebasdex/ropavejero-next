function Banner() {
  return (
    <section className="container mx-auto m-8 flex relative border h-[35rem]">
      <button
        className="bg-black text-white border rounded-md px-4 py-2 font-semibold absolute 
      top-64 left-0 m-4"
      >
        {"<"}
      </button>
      <button
        className="bg-black text-white border rounded-md px-4 py-2 font-semibold absolute 
      top-64 right-0 m-4"
      >
        {">"}
      </button>
    </section>
  );
}

export default Banner;
