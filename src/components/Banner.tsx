import Image from "next/image";
import { useState, useEffect } from "react";

interface BannerImage {
  src: string;
  alt: string;
}

function Banner() {
  const bannerImages: BannerImage[] = [
    { src: "/banner/1.webp", alt: "Descubre tu estilo" },
    { src: "/banner/2.webp", alt: "Playeras para todos" },
    { src: "/banner/3.webp", alt: "Nuevos diseños ahora" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4500);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative w-full h-[30rem] max-w-screen-2xl mx-auto overflow-hidden">
      <div className="relative w-full h-full">
        {bannerImages.map((image, index) => (
          <Image
            key={index}
            width={1200}
            height={480}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-800 ease-in-out ${index === currentImageIndex
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
              }`}
            priority={index === 0}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold uppercase tracking-widest drop-shadow-lg animate-fadeIn">
          {bannerImages[currentImageIndex].alt}
        </h1>
      </div>

      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-8 rounded-full transition-all duration-300 hover:h-10 focus:outline-none focus:ring-2 focus:ring-white ${index === currentImageIndex ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Banner;