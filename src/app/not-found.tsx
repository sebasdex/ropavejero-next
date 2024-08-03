import React from "react";

function notFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="font-semibold">La página que buscas no existe.</p>
    </div>
  );
}

export default notFound;
