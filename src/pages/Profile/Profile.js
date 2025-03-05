import React from 'react';
import ButtonComponent from '../../Components/Common/Button/ButtonComponent';
import ProfileText from './ProfileText';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id='#preview' className="container mx-auto p-4 lg:p-10 mt-24 md:mt-0">
      <div className="flex flex-col max-w-[1280px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 lg:mb-12 text-center">
          Profil
        </h1>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="w-full lg:w-[360px] flex flex-col items-center lg:items-start space-y-8 mb-8 lg:mb-0">
            <img
              src={`${process.env.PUBLIC_URL}/Pro/PP.png`}
              alt="Profile"
              className="rounded-[15px] border-[#081C15] border w-full max-w-[360px] h-auto aspect-[360/506] object-cover"
            />
            <ButtonComponent
              label="Voir CV"
              icon={`${process.env.PUBLIC_URL}/icon/arrow.png`}
              iconName="view"
              actionType="navigate"
              actionValue={`${process.env.PUBLIC_URL}/Pro/Cv.pdf`}
              target="_blank"
            />
          </div>
          <div className="lg:flex-1">
            <ProfileText />
          </div>
        </div>
      </div>
    </section>
  );
}