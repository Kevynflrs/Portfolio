import React, { useState } from "react";
import SkillBar from "./SkillBar";

export default function SkillSection({ title, icon, skills }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
      <div className="flex flex-col items-start w-full sm:w-11/12 lg:w-1/2 mx-auto px-4 py-4">
        <div 
          className="flex items-center mb-4 cursor-pointer transition-transform duration-300 hover:scale-105" 
          onClick={toggleDropdown}
        >
          <img src={icon} alt={title} className="w-8 h-8 mr-4" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1e2c2c] flex-grow text-left">
            {title}
          </h2>
          <img 
            src={isOpen ? `${process.env.PUBLIC_URL}/up.png` : `${process.env.PUBLIC_URL}/down.png`} 
            alt="toggle" 
            className="w-6 h-6 ml-36 lg:ml-48 transition-transform duration-300"
            style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
          />
        </div>
        {isOpen && (
          <div className="transition-all duration-300 w-full pl-4">
            {skills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        )}
      </div>
    );
}