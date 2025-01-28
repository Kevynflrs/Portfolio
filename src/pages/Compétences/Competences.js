import React from "react";
import SkillSection from "./tmpl/SkillSection";

export default function Competences() {
    const frontendSkills = [
      { name: "HTML", percentage: 95 },
      { name: "CSS", percentage: 95 },
      { name: "JavaScript", percentage: 75 },
      { name: "React", percentage: 70 },
      { name: "Angular", percentage: 50 },
    ];
  
    const backendSkills = [
      { name: "PHP", percentage: 70 },
      { name: "Node Js", percentage: 50 },
      { name: "Python", percentage: 90 },
      { name: "SQL", percentage: 80 },
    ];
  
    return (
      <div className="flex flex-col items-center justify-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-10 text-center">
          Compétences
        </h1>
  
        <div className="flex flex-col lg:flex-row w-full max-w-4xl justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <SkillSection 
            title="Frontend" 
            icon={`${process.env.PUBLIC_URL}/code.png`} 
            skills={frontendSkills} 
          />
          <SkillSection 
            title="Backend" 
            icon={`${process.env.PUBLIC_URL}/server.png`} 
            skills={backendSkills} 
          />
        </div>
      </div>
    );
}