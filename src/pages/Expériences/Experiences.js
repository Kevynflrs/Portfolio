import React from 'react';
import expArray from './exp-array';

export default function Experience() {
  return (
    <section id='experiences' className="flex flex-col items-center px-4">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-10 text-center">
        Expériences
      </h1>
      {expArray.map((experience, index) => (
        <div key={index} className="mb-8 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center">
            {experience.name}
          </h2>
          <p className="text-sm text-center">
            {experience.date}
          </p>
          <p className="text-lg font-semibold text-center">
            {experience.libelle}
          </p>
          <div className="text-base text-left">
            <p dangerouslySetInnerHTML={{ __html: experience.description }} />
          </div>
          <div className="flex justify-center mt-4 mb-4">
            <img
              src={`${process.env.PUBLIC_URL}${experience.image}`}
              alt={experience.name}
              className="w-full md:max-w-7xl h-auto"
            />
          </div>
        </div>
      ))}
    </section>
  );
}