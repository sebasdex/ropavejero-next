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
    <section className="relative w-full h-[24rem] sm:h-[28rem] md:h-[32rem] max-w-screen-2xl mx-auto overflow-hidden mt-24 md:mt-28 px-4 sm:px-6 md:px-8">
      <div className="relative w-full h-full rounded-2xl sm:rounded-3xl">
        {bannerImages.map((image, index) => (
          <Image
            key={index}
            width={1400}
            height={560}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full
              object-cover object-center transition-all duration-1000 ease-in-out 
              ${index === currentImageIndex
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-110 translate-y-10"
              }
            `}
            priority={index === 0}
          />
        ))}

        {/* Overlay con parallax */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/50 pointer-events-none" />
      </div>

      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 text-center px-4 sm:px-6 md:px-8">
        <h1
          className="text-white text-[clamp(1.5rem,5vw,3rem)] font-extrabold uppercase tracking-wider drop-shadow-2xl
            animate__animated animate__fadeIn animate__delay-1s transition-opacity duration-500 ease-out"
        >
          {bannerImages[currentImageIndex].alt}
        </h1>
        <p
          className="text-white/80 text-[clamp(0.875rem,2.5vw,1.25rem)] mt-2 sm:mt-3 md:mt-4 font-medium tracking-tight 
            animate__animated animate__fadeIn animate__delay-1.5s transition-opacity duration-500 ease-out"
        >
          Encuentra lo mejor para ti
        </p>
      </div>

      <div className="absolute top-0 right-0 h-full flex flex-col justify-center gap-3 z-10 pr-6 sm:pr-10 md:pr-12">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-500 ease-out
              hover:scale-125 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/50
              ${index === currentImageIndex
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
              }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Banner;
