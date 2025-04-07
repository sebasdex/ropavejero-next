"use client";
import * as React from "react";
import { dbCollection } from "@/db/db";

function Page() {
  return (
    <main className="min-h-screen px-8 py-20 bg-white text-black my-24">
      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto mb-12" aria-label="breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-neutral-600 font-medium uppercase tracking-wide">
          <li>
            <a
              href="/"
              className="hover:underline hover:text-black transition-colors"
            >
              Inicio
            </a>
          </li>
          <li>
            <span className="mx-2 text-neutral-400">→</span>
          </li>
          <li className="text-neutral-800">Colecciones</li>
        </ol>
      </nav>

      {/* Title */}
      <header className="max-w-6xl mx-auto mb-16 relative text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-center leading-none relative z-10">
          Colecciones
        </h1>

        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
          <span className="text-[10rem] md:text-[12rem] font-black text-black opacity-5 tracking-tighter">
            C
          </span>
        </div>
        <div className="mt-6">
          <p className="text-base italic tracking-wide text-neutral-600 max-w-2xl mx-auto">
            Explora nuestras colecciones cuidadosamente seleccionadas. Cada pieza refleja elegancia, estilo y atención al detalle para quienes aprecian el diseño con propósito.
          </p>
        </div>
      </header>

      {/* Collections Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {dbCollection.map((item) => (
          <a
            href={item.link}
            key={item.name}
            className="group relative block w-full h-[26rem] overflow-hidden border-t-4 border-b-4 border-black rounded-xl shadow-md transition-all duration-500"
          >
            <div
              className={`absolute inset-0 ${item.bg} bg-cover bg-center transition-all duration-700 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition-opacity duration-300" />
            <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono uppercase tracking-wider bg-white/20 text-white px-2 py-1 rounded group-hover:bg-white/30 transition-colors duration-300">
                  {item.name.slice(0, 3)}
                </span>
                <div className="w-4 h-4 border-2 border-white rounded-full group-hover:rotate-45 transition-all duration-300" />
              </div>
              <p className="text-3xl md:text-4xl font-black uppercase text-center break-words max-w-xs leading-tight tracking-tight text-white drop-shadow-md">
                {item.name}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver
                </span>
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-100" />
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-200" />
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-white group-hover:h-24 transition-all duration-300 pointer-events-none" />
          </a>
        ))}
      </section>
    </main>
  );
}

export default Page;
