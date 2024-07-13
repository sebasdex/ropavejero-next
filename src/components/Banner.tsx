import { useState, useRef } from "react";
function Banner() {
  const bannerImages = [
    {
      src: "/banner/1.webp",
      alt: "banner1",
    },
    {
      src: "/banner/2.webp",
      alt: "banner2",
    },
    {
      src: "/banner/3.webp",
      alt: "banner3",
    },
  ];

  return (
    <section className="container mx-auto m-8 flex relative border h-[35rem]">
      {bannerImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover absolute overflow-hidden"
        />
      ))}
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
