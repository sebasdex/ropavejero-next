"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function page() {
  const dbCollection = [
    {
      id: 1,
      name: "Color",
      image: "/34.jpg",
      bg: "bg-color",
    },
    {
      id: 2,
      name: "Men",
      image: "/images/collections/men.png",
      bg: "bg-men",
    },
    {
      id: 3,
      name: "Women",
      image: "/images/collections/women.png",
      bg: "bg-women",
    },
    {
      id: 4,
      name: "Teens",
      image: "/images/collections/teens.png",
      bg: "bg-teens",
    },
    {
      id: 5,
      name: "Phrase",
      image: "/images/collections/phrase.png",
      bg: "bg-phrase",
    },
    {
      id: 6,
      name: "Images",
      image: "/images/collections/images.png",
      bg: "bg-images",
    },
    {
      id: 7,
      name: "Phrase",
      image: "/images/collections/phrase.png",
      link: "/collections/phrase",
    },
    {
      id: 8,
      name: "Images",
      image: "/images/collections/images.png",
      link: "/collections/images",
    },
    {
      id: 9,
      name: "Phrase",
      image: "/images/collections/phrase.png",
      link: "/collections/phrase",
    },
    {
      id: 10,
      name: "Images",
      image: "/images/collections/images.png",
      link: "/collections/images",
    },
  ];
  return (
    <main className="min-h-dvh m-6">
      <div role="presentation" className="">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Incio
          </Link>
          <Typography color="text.primary">Colecciones</Typography>
        </Breadcrumbs>
      </div>
      <h1 className="text-center uppercase font-medium tracking-wider p-4 w-full">
        Colecciones
      </h1>
      <section className="grid grid-cols-4 gap-4 place-items-center w-full  font-bold uppercase text-white text-2xl my-4">
        {dbCollection.map((item) => (
          <article
            key={item.name}
            className={`w-full h-80 border-2 border-black cursor-pointer hover:border-gray-600 flex flex-col items-center justify-center ${item.bg} bg-cover bg-center`}
          >
            <Link href={item.link} className="no-underline">
              <p className="text-center text-white ">{item.name}</p>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default page;
