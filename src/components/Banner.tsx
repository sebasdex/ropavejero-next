import { useState } from "react";

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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="container mx-auto m-8 flex relative h-[35rem] w-9/12">
      {bannerImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`w-full h-full rounded-md object-cover object-top  absolute transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <button
        onClick={prevImage}
        className="bg-black text-white border rounded-md px-4 py-2 font-semibold absolute 
      top-1/2 left-0 transform -translate-y-1/2 m-4"
      >
        {"<"}
      </button>
      <button
        onClick={nextImage}
        className="bg-black text-white border rounded-md px-4 py-2 font-semibold absolute 
      top-1/2 right-0 transform -translate-y-1/2 m-4"
      >
        {">"}
      </button>
    </section>
  );
}

export default Banner;
