import React from "react";

function BannerCategory({
  categoryName,
  categoryBG,
}: {
  categoryName: string;
  categoryBG: string;
}) {
  return (
    <section
      className={`w-full h-72 flex flex-col items-center justify-center bg-cover bg-center ${categoryBG}`}
    >
      <h1 className="text-center text-4xl font-semibold text-white">
        {categoryName}
      </h1>
    </section>
  );
}

export default BannerCategory;
