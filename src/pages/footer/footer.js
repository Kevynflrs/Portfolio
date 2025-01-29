import React from 'react';

export default function Footer() {
  return (
    <section id='footer' className="w-full border-t border-gray-300 py-8">
      <div className="flex flex-col lg:flex-row justify-between mx-6 items-center">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2">
            <img
              className="w-8 h-8"
              src={`${process.env.PUBLIC_URL}/icon/mail.png`}
              alt="Mail"
            />
            <p className="text-lg">kevyn.floresdacosta@outlook.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="w-8 h-8"
              src={`${process.env.PUBLIC_URL}/icon/telephone.png`}
              alt="Téléphone"
            />
            <p className="text-lg">+33 6 51 58 91 03</p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 mt-8 lg:mt-0">
          <p className="text-sm text-center">
            © 2025 Kevyn FLORES DA COSTA. Tous droits réservés.
          </p>
          <p className="text-sm text-center">
            Ce site et son contenu sont protégés par les lois relatives au droit d'auteur.
            <br />
            Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.
          </p>
        </div>

        <div className="flex items-center space-x-4 mt-8 lg:mt-0">
          <a href="https://github.com/Kevynflrs" target="_blank" rel="noopener noreferrer">
            <img
              className="w-16 h-16"
              src={`${process.env.PUBLIC_URL}/icon/github.png`}
              alt="GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/floreskevyn/" target="_blank" rel="noopener noreferrer">
            <img
              className="w-16 h-16"
              src={`${process.env.PUBLIC_URL}/icon/linkedin.png`}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </section>
  );
}