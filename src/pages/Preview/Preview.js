import React from 'react';
import ButtonComponent from '../../Components/Common/Button/ButtonComponent';

export default function Preview() {
    return (
        <div id='preview' className="h-full w-full flex items-center justify-center">
            <div className="w-full max-w-4xl px-6">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <h1 className="font-sans text-3xl md:text-5xl font-normal">
                            FLORES DA COSTA
                            <br />
                            Kevyn
                        </h1>
                        <div className="text-lg md:text-2xl space-y-2">
                            <p>Etudiant à EPSI Lyon</p>
                            <p>Bienvenue sur mon Portfolio !</p>
                        </div>
                        <div className="mt-4 md:mt-6">
                            <ButtonComponent 
                                label="Contactez Moi" 
                                icon={`${process.env.PUBLIC_URL}/send.png`} 
                                iconName="Envoyer"
                                actionType="navigate" 
                                actionValue="#footer" 
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            className="rounded-full w-48 h-48 md:w-80 md:h-80 object-cover border-4 border-[#081C15]"
                            src={`${process.env.PUBLIC_URL}/photoCV.JPG`} 
                            alt="Flores da Costa Kevyn"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}