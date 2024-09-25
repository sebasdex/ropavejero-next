export interface Shirt {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  trend: boolean;
  popular: boolean;
  size: string[];
  stock: number;
  image: string;
}

export const dbShirts = [
  {
    id: 1,
    name: "White Fox Tee",
    description:
      "Una camiseta blanca clásica que ofrece estilo minimalista y comodidad para el uso diario.",
    price: 150,
    category: "teens",
    trend: true,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/teens/model-1.webp",
    available: true,
    barcode: "123456789012",
    color: ["white", "gray"],
    material: "cotton",
  },
  {
    id: 2,
    name: "Retro Animal Tee",
    description:
      "Camiseta inspirada en los 80s, con un toque retro que añade un estilo vintage a tu look.",
    price: 220,
    category: "teens",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/teens/model-2.webp",
    available: true,
    barcode: "234567890123",
    color: ["red", "white"],
    material: "polyester",
  },
  {
    id: 3,
    name: "Blue Cube Performance Tee",
    description:
      "Una camiseta deportiva de alto rendimiento que se seca rápido, ideal para actividades físicas.",
    price: 180,
    category: "teens",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/teens/model-3.webp",
    available: true,
    barcode: "345678901234",
    color: ["black", "blue"],
    material: "spandex",
  },
  {
    id: 4,
    name: "Floral Heart Tee",
    description:
      "Una camiseta de algodón con un encantador diseño floral, perfecta para días soleados y eventos casuales.",
    price: 250,
    category: "teens",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/teens/model-4.webp",
    available: true,
    barcode: "456789012345",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 5,
    name: "Basic Black Tee",
    description:
      "Una camiseta negra básica que nunca pasa de moda. Perfecta para combinar con cualquier outfit.",
    price: 120,
    category: "teens",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/teens/model-5.webp",
    available: true,
    barcode: "567890123456",
    color: ["black"],
    material: "cotton",
  },
  {
    id: 6,
    name: "Modern Figures Tee",
    description:
      "Camiseta con un diseño moderno de figuras geométricas, ideal para un look fresco y contemporáneo.",
    price: 200,
    category: "teens",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/teens/model-6.webp",
    available: true,
    barcode: "678901234567",
    color: ["blue", "white"],
    material: "cotton",
  },
  {
    id: 7,
    name: "Cool Blue Cube Tee",
    description:
      "Camiseta deportiva de secado rápido, diseñada para mantenerte fresco durante el ejercicio.",
    price: 175,
    category: "color",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/color/color-1.webp",
    available: true,
    barcode: "789012345678",
    color: ["blue", "gray"],
    material: "polyester",
  },
  {
    id: 8,
    name: "Vintage Red Animal Tee",
    description:
      "Añade un toque vintage a tu guardarropa con esta camiseta gráfica de estilo retro.",
    price: 190,
    category: "color",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/color/color-2.webp",
    available: true,
    barcode: "890123456789",
    color: ["red", "white"],
    material: "cotton",
  },
  {
    id: 9,
    name: "Pink Heart Tee",
    description:
      "Una camiseta ligera y fresca con un encantador diseño de corazón floral, ideal para el verano.",
    price: 130,
    category: "color",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/color/color-3.webp",
    available: true,
    barcode: "901234567890",
    color: ["pink", "white"],
    material: "cotton",
  },
  {
    id: 10,
    name: "Active Cube Tee",
    description:
      "Camiseta activa diseñada para deportes al aire libre, con tecnología de secado rápido.",
    price: 240,
    category: "color",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/color/color-4.webp",
    available: true,
    barcode: "012345678901",
    color: ["blue", "white"],
    material: "spandex",
  },
  {
    id: 11,
    name: "Bold Red Animal Tee",
    description:
      "Camiseta gráfica de animal en color rojo que aporta un estilo audaz a cualquier conjunto.",
    price: 160,
    category: "color",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/color/color-5.webp",
    available: true,
    barcode: "234567890987",
    color: ["red", "black"],
    material: "cotton",
  },
  {
    id: 12,
    name: "Blue Heart Tee",
    description:
      "Camiseta ligera con diseño de corazones, perfecta para los días de verano más cálidos.",
    price: 170,
    category: "color",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/color/color-6.webp",
    available: true,
    barcode: "123450987654",
    color: ["white", "blue"],
    material: "cotton",
  },
  {
    id: 13,
    name: "Performance Cube Tee",
    description:
      "Camiseta de alto rendimiento, ideal para el gimnasio o actividades al aire libre.",
    price: 230,
    category: "funny",
    trend: false,
    popular: true,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/funny/funny-1.webp",
    available: true,
    barcode: "098765432109",
    color: ["gray", "black"],
    material: "spandex",
  },
  {
    id: 14,
    name: "Retro Vibes Tee",
    description:
      "Camiseta gráfica con estilo retro para aquellos que buscan un look diferente.",
    price: 180,
    category: "funny",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/funny/funny-2.webp",
    available: true,
    barcode: "876543210987",
    color: ["red", "white"],
    material: "polyester",
  },
  {
    id: 15,
    name: "Dynamic Cube Tee",
    description:
      "Perfecta para un estilo de vida activo, esta camiseta ofrece confort y transpirabilidad.",
    price: 150,
    category: "funny",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/funny/funny-3.webp",
    available: true,
    barcode: "765432109876",
    color: ["blue", "black"],
    material: "spandex",
  },
  {
    id: 16,
    name: "Animal Energy Tee",
    description:
      "Camiseta gráfica que combina diseño retro con energía juvenil, ideal para un look casual.",
    price: 220,
    category: "funny",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/funny/funny-4.webp",
    available: true,
    barcode: "654321098765",
    color: ["red", "gray"],
    material: "cotton",
  },
  {
    id: 17,
    name: "Floral Fresh Tee",
    description:
      "Una camiseta con un diseño fresco de flores, perfecta para los amantes del estilo casual chic.",
    price: 160,
    category: "funny",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/funny/funny-5.webp",
    available: true,
    barcode: "543210987654",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 18,
    name: "Cube Rush Tee",
    description:
      "Camiseta diseñada para actividades físicas, ideal para deportes al aire libre o en interiores.",
    price: 170,
    category: "funny",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/funny/funny-6.webp",
    available: true,
    barcode: "432109876543",
    color: ["blue", "gray"],
    material: "polyester",
  },
  {
    id: 19,
    name: "Red Graphic Tee",
    description:
      "Camiseta gráfica en color rojo con un diseño moderno para los amantes del estilo urbano.",
    price: 250,
    category: "figures",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/figures/figure-1.webp",
    available: true,
    barcode: "321098765432",
    color: ["red", "black"],
    material: "cotton",
  },
  {
    id: 20,
    name: "Summer Heart Tee",
    description:
      "Camiseta ligera y cómoda con un diseño floral, perfecta para los días soleados de verano.",
    price: 200,
    category: "figures",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/figures/figure-2.webp",
    available: true,
    barcode: "210987654321",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 21,
    name: "Active Motion Tee",
    description:
      "Diseñada para el movimiento, esta camiseta deportiva garantiza transpirabilidad y confort.",
    price: 220,
    category: "figures",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/figures/figure-3.webp",
    available: true,
    barcode: "098765432123",
    color: ["blue", "black"],
    material: "spandex",
  },
  {
    id: 22,
    name: "Red Urban Animal Tee",
    description:
      "Una camiseta con un diseño audaz que combina el estilo urbano con lo retro.",
    price: 180,
    category: "figures",
    trend: false,
    popular: true,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/figures/figure-4.webp",
    available: true,
    barcode: "987654321012",
    color: ["red", "gray"],
    material: "polyester",
  },
  {
    id: 23,
    name: "Fresh Floral Tee",
    description:
      "Camiseta ligera de algodón con un delicado diseño floral, ideal para los días cálidos.",
    price: 140,
    category: "figures",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/figures/figure-5.webp",
    available: true,
    barcode: "876543210321",
    color: ["pink", "white"],
    material: "cotton",
  },
  {
    id: 24,
    name: "Outdoor Cube Tee",
    description:
      "Camiseta diseñada para mantenerte fresco durante las actividades al aire libre, con tecnología de secado rápido.",
    price: 200,
    category: "figures",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/figures/figure-6.webp",
    available: true,
    barcode: "765432109876",
    color: ["blue", "white"],
    material: "spandex",
  },
  {
    id: 25,
    name: "Red Bold Logo Tee",
    description:
      "Una camiseta gráfica con logo en un vibrante rojo, ideal para destacar en cualquier ocasión.",
    price: 180,
    category: "logo",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/logo/logo-1.webp",
    available: true,
    barcode: "654321098765",
    color: ["red", "black"],
    material: "cotton",
  },
  {
    id: 26,
    name: "Pink Floral Logo Tee",
    description:
      "Camiseta con un encantador diseño floral y logo, ideal para un look casual y moderno.",
    price: 150,
    category: "logo",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/logo/logo-2.webp",
    available: true,
    barcode: "543210987654",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 27,
    name: "Performance Logo Cube Tee",
    description:
      "Camiseta con logo de alto rendimiento para deportes, diseñada para transpirabilidad y confort.",
    price: 170,
    category: "logo",
    trend: true,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/logo/logo-3.webp",
    available: true,
    barcode: "432109876543",
    color: ["blue", "white"],
    material: "polyester",
  },
  {
    id: 28,
    name: "Urban Red Logo Tee",
    description:
      "Camiseta con logo y un estilo urbano audaz en color rojo, perfecta para un look casual.",
    price: 150,
    category: "logo",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/logo/logo-4.webp",
    available: true,
    barcode: "321098765432",
    color: ["red", "black"],
    material: "cotton",
  },
  {
    id: 29,
    name: "Fresh Pink Logo Tee",
    description:
      "Camiseta fresca con logo y un toque de color rosa, ideal para días soleados.",
    price: 240,
    category: "logo",
    trend: true,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/logo/logo-5.webp",
    available: true,
    barcode: "210987654321",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 30,
    name: "Active Logo Cube Tee",
    description:
      "Camiseta de alto rendimiento con logo, perfecta para actividades deportivas intensas.",
    price: 170,
    category: "logo",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/logo/logo-6.webp",
    available: true,
    barcode: "123456789321",
    color: ["blue", "white"],
    material: "spandex",
  },
  {
    id: 31,
    name: "Red Animal Men Tee",
    description:
      "Camiseta gráfica en color rojo para hombre, con un diseño inspirado en la moda retro.",
    price: 160,
    category: "men",
    trend: true,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/men/men-1.webp",
    available: true,
    barcode: "098765432345",
    color: ["red", "black"],
    material: "polyester",
  },
  {
    id: 32,
    name: "Fresh Heart Men Tee",
    description:
      "Camiseta ligera y fresca para hombre, con un encantador diseño de corazones.",
    price: 120,
    category: "men",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/men/men-2.webp",
    available: true,
    barcode: "987654321432",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 33,
    name: "Cube Fit Men Tee",
    description:
      "Camiseta ajustada y transpirable para hombre, perfecta para entrenamientos intensos.",
    price: 200,
    category: "men",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/men/men-3.webp",
    available: true,
    barcode: "876543210543",
    color: ["blue", "black"],
    material: "spandex",
  },
  {
    id: 34,
    name: "Urban Red Animal Men Tee",
    description:
      "Camiseta para hombre con un diseño gráfico animal en color rojo, ideal para un look urbano.",
    price: 230,
    category: "men",
    trend: true,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/men/men-4.webp",
    available: true,
    barcode: "765432109654",
    color: ["red", "gray"],
    material: "cotton",
  },
  {
    id: 35,
    name: "Floral Men Tee",
    description:
      "Camiseta con diseño floral para hombre, perfecta para quienes buscan un estilo único.",
    price: 190,
    category: "men",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/men/men-5.webp",
    available: true,
    barcode: "654321098765",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 36,
    name: "Cube Action Men Tee",
    description:
      "Camiseta activa para hombre, diseñada para proporcionar comodidad en actividades deportivas.",
    price: 180,
    category: "men",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/men/men-6.webp",
    available: true,
    barcode: "543210987876",
    color: ["blue", "white"],
    material: "polyester",
  },
  {
    id: 37,
    name: "Bold Red Animal Women Tee",
    description:
      "Camiseta gráfica en color rojo para mujer, con un estilo moderno y llamativo.",
    price: 250,
    category: "women",
    trend: false,
    popular: true,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/women/woman-1.webp",
    available: true,
    barcode: "432109876987",
    color: ["red", "white"],
    material: "cotton",
  },
  {
    id: 38,
    name: "Pink Heart Women Tee",
    description:
      "Camiseta con diseño de corazones para mujer, ideal para un look femenino y fresco.",
    price: 170,
    category: "women",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/women/woman-2.webp",
    available: true,
    barcode: "321098765876",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 39,
    name: "Performance Cube Women Tee",
    description:
      "Camiseta de alto rendimiento para mujer, diseñada para deportes al aire libre.",
    price: 220,
    category: "women",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/women/woman-3.webp",
    available: true,
    barcode: "210987654765",
    color: ["blue", "white"],
    material: "spandex",
  },
  {
    id: 40,
    name: "Red Animal Urban Women Tee",
    description:
      "Camiseta gráfica en color rojo para mujer, con un estilo urbano moderno.",
    price: 240,
    category: "women",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/women/woman-4.webp",
    available: true,
    barcode: "098765432123",
    color: ["red", "gray"],
    material: "cotton",
  },
  {
    id: 41,
    name: "Floral Fresh Women Tee",
    description:
      "Camiseta ligera y fresca con un diseño floral para mujer, perfecta para días soleados.",
    price: 200,
    category: "women",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/women/woman-5.webp",
    available: true,
    barcode: "876543210654",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 42,
    name: "Cube Performance Women Tee",
    description:
      "Camiseta de alto rendimiento para mujer, diseñada para un estilo de vida activo.",
    price: 160,
    category: "women",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/women/woman-6.webp",
    available: true,
    barcode: "765432109765",
    color: ["blue", "black"],
    material: "spandex",
  },
  {
    id: 43,
    name: "Red Animal Graphic Phrase Tee",
    description:
      "Camiseta gráfica con un diseño animal en rojo, perfecta para un look moderno y audaz.",
    price: 170,
    category: "phrase",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/phrase/text-1.webp",
    available: true,
    barcode: "654321098432",
    color: ["red", "black"],
    material: "cotton",
  },
  {
    id: 44,
    name: "Floral Heart Phrase Tee",
    description:
      "Camiseta con un encantador diseño floral, ideal para quienes buscan un look femenino.",
    price: 130,
    category: "phrase",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/phrase/text-2.webp",
    available: true,
    barcode: "543210987321",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 45,
    name: "Performance Cube Phrase Tee",
    description:
      "Camiseta de rendimiento diseñada para deportes, perfecta para mantenerte activo.",
    price: 180,
    category: "phrase",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/phrase/text-3.webp",
    available: true,
    barcode: "432109876543",
    color: ["blue", "white"],
    material: "polyester",
  },
  {
    id: 46,
    name: "Red Animal Retro Phrase Tee",
    description:
      "Camiseta gráfica con un diseño animal retro en color rojo, perfecta para un look casual.",
    price: 220,
    category: "phrase",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/phrase/text-4.webp",
    available: true,
    barcode: "321098765432",
    color: ["red", "gray"],
    material: "cotton",
  },
  {
    id: 47,
    name: "Floral Charm Phrase Tee",
    description:
      "Camiseta con diseño floral encantador, ideal para días soleados y ocasiones casuales.",
    price: 140,
    category: "phrase",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/phrase/text-5.webp",
    available: true,
    barcode: "210987654123",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 48,
    name: "Cube Rush Phrase Tee",
    description:
      "Camiseta activa diseñada para mantenerte fresco y cómodo durante tus entrenamientos.",
    price: 200,
    category: "phrase",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/phrase/text-6.webp",
    available: true,
    barcode: "098765432876",
    color: ["blue", "black"],
    material: "spandex",
  },
  {
    id: 49,
    name: "Unique Red Animal Tee",
    description:
      "Una camiseta única con diseño de animal en color rojo, ideal para quienes buscan algo diferente.",
    price: 230,
    category: "unique",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/unique/unique-1.webp",
    available: true,
    barcode: "876543210123",
    color: ["red", "white"],
    material: "cotton",
  },
  {
    id: 50,
    name: "Floral Unique Tee",
    description:
      "Camiseta única con un diseño floral en tonos suaves, perfecta para un look fresco.",
    price: 160,
    category: "unique",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/unique/unique-2.webp",
    available: true,
    barcode: "765432109876",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 51,
    name: "Unique Performance Cube Tee",
    description:
      "Camiseta de rendimiento con un diseño único, ideal para actividades físicas y deportes.",
    price: 240,
    category: "unique",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/unique/unique-3.webp",
    available: true,
    barcode: "654321098432",
    color: ["blue", "white"],
    material: "spandex",
  },
  {
    id: 52,
    name: "Red Unique Animal Tee",
    description:
      "Camiseta gráfica única con un diseño animal en color rojo, ideal para destacar.",
    price: 200,
    category: "unique",
    trend: true,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/unique/unique-4.webp",
    available: true,
    barcode: "543210987321",
    color: ["red", "gray"],
    material: "cotton",
  },
  {
    id: 53,
    name: "Floral Breeze Unique Tee",
    description:
      "Una camiseta única con un diseño floral fresco, perfecta para un estilo casual chic.",
    price: 170,
    category: "unique",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/unique/unique-5.webp",
    available: true,
    barcode: "432109876543",
    color: ["white", "pink"],
    material: "cotton",
  },
  {
    id: 54,
    name: "Unique Action Cube Tee",
    description:
      "Camiseta activa con un diseño único, ideal para deportes y actividades físicas.",
    price: 190,
    category: "unique",
    trend: false,
    popular: false,
    size: ["S", "M", "L", "XL"],
    stock: 10,
    image: "/unique/unique-6.webp",
    available: true,
    barcode: "321098765432",
    color: ["blue", "white"],
    material: "polyester",
  },
];

export const dbCollection = [
  {
    id: 1,
    name: "Color",
    bg: "bg-color",
    link: "/categories/color",
  },
  {
    id: 2,
    name: "Divertidas",
    bg: "bg-funny",
    link: "/categories/funny",
  },
  {
    id: 3,
    name: "Figuras",
    bg: "bg-images",
    link: "/categories/images",
  },
  {
    id: 5,
    name: "Logo",
    bg: "bg-logo",
    link: "/categories/logo",
  },
  {
    id: 6,
    name: "Hombres",
    bg: "bg-men",
    link: "/categories/men",
  },
  {
    id: 7,
    name: "Frases",
    bg: "bg-phrase",
    link: "/categories/phrase",
  },
  {
    id: 8,
    name: "Juvenil",
    bg: "bg-teens",
    link: "/categories/teens",
  },
  {
    id: 9,
    name: "Únicas",
    bg: "bg-unique",
    link: "/categories/unique",
  },
  {
    id: 10,
    name: "Mujeres",
    bg: "bg-women",
    link: "/categories/women",
  },
];
