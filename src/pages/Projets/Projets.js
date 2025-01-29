import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import projets from "./projets-array";

export default function Projets() {
  return (
    <section>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 lg:mb-12 text-center">
        Projets
      </h1>

      <div className="flex flex-col gap-20">
        {projets.map((projet, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <Carousel images={projet.images} />
            </div>

            <div className="flex-1 flex flex-col justify-center gap-4 p-4 border-4 border-[#081c15] rounded-[25px]">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#081c15]">
                {projet.title}
              </h2>
              <p className="text-base lg:text-lg text-[#081c15]">
                {projet.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
