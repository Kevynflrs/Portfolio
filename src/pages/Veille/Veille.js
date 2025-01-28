import React, { useState } from "react";
import Technologique from "./Popup/Technologique";
import Juridique from "./Popup/Juridique";

export default function Veille() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const items = [
    {
      title: "Technologique",
      image: "/Technologique.png",
      content: <Technologique />,
    },
    {
      title: "Juridique",
      image: "/Juridique.png",
      content: <Juridique />,
    },
  ];

  const openPopup = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };

  return (
    <div id="veille" className="flex flex-col items-center">
      <h1 className="text-center font-sans text-4xl font-bold mt-8">Veille</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-80 h-48 cursor-pointer flex flex-col items-center justify-center m-4 border-2 border-[#081c15] rounded-lg"
            onClick={() => openPopup(item.content)}
          >
            <div className="text-xl font-medium text-center">{item.title}</div>
            <img
              className="w-10 h-10 mt-2"
              src={`${process.env.PUBLIC_URL}${item.image}`}
              alt={item.title}
            />
          </div>
        ))}
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-2/3 h-2/3 max-w-3xl max-h-[80vh] overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 text-2xl font-bold"
              onClick={closePopup}
            >
              ×
            </button>
            <div className="text-xs md:text-lg">{popupContent}</div>
          </div>
        </div>
      )}
    </div>
  );
}
