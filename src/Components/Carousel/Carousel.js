import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center">
      <button
        className="absolute left-4 z-10 bg-white p-2 rounded-full shadow-md"
        onClick={handlePrev}
      >
        <FaChevronLeft size={24} />
      </button>
      <img
        src={`${process.env.PUBLIC_URL}${images[currentIndex]}`}
        alt="carousel-item"
        className="w-full h-full object-cover object-center rounded-[28px]"
      />
      <button
        className="absolute right-4 z-10 bg-white p-2 rounded-full shadow-md"
        onClick={handleNext}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}