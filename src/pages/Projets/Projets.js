import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import projets from "./projets-array";

export default function Projets() {
  return (
    <section id="projets" className="px-4 lg:px-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 lg:mb-12 text-center">
        Projets
      </h1>

      <div className="flex flex-col gap-20 items-center">
        {projets.map((projet, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-stretch justify-center gap-8 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            } w-full lg:w-4/5`}
          >
            <div className="w-full lg:w-2/3">
              <Carousel images={projet.images} />
            </div>

            <div className="w-full lg:w-1/3 flex flex-col justify-center gap-4 p-4 border-4 border-[#081c15] rounded-[25px]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#081c15] mb-4">
                {projet.title}
              </h2>
              <p
                className="text-base md:text-lg lg:text-xl text-[#081c15] text-center"
                dangerouslySetInnerHTML={{ __html: projet.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}