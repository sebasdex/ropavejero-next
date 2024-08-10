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
      name: "Mújeres",
      bg: "bg-women",
      link: "/categories/women",
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
      <section className="grid grid-cols-4 gap-4 place-items-center w-full font-bold uppercase text-white text-2xl my-4">
        {dbCollection.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            underline="none"
            className="w-full"
          >
            <article
              key={item.name}
              className={`relative w-full h-72 cursor-pointer hover:border-gray-600 flex flex-col items-center justify-center ${item.bg} bg-cover bg-bottom
            before:block before:absolute before:-inset-0 before:bg-black before:opacity-0 hover:before:opacity-30 before:transition-opacity before:duration-300 before:ease-in-out`}
            >
              <p className="text-center text-white relative font-bold uppercase text-5xl break-words w-64">
                {item.name}
              </p>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default page;
