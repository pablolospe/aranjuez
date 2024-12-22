'use client'

import { useState } from "react";
import Image from "next/image";

const MainContent = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <div className="relative h-full">
      <div className="absolute inset-0">
        <Image
          src="/aranjuez.jpg"
          alt="Restaurante Aranjuez"
          height={560}
          width={1920}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Bienvenidos a Aranjuez
          </h2>
          <p className="text-xl md:text-2xl text-stone-100 mb-8">
            Una experiencia gastronómica única en el corazón del Country Club
          </p>
          <button
            onClick={handleButtonClick}
            className="px-8 py-3 mb-3 bg-white text-stone-800 text-lg rounded hover:bg-stone-100 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-stone-300 transition-transform transform translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-0">Conocer Más</span>
          </button>
        </div>
      </div>
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-6 rounded shadow-lg text-center mx-10">
            <p className="text-xl font-bold z-50 ">

              Ubicado a menos de una hora de la ciudad de Buenos Aires, en el kilómetro 47,5 de la Panamericana, ramal Escobar, el country Aranjuez, cuyo paisaje evoca al sur de España, fue fundado en 1976 como un club de casas de fin de semana. Su arquitectura se inspira en los pueblos blancos españoles.
              <br />
              <br />
              Actualmente, este emprendimiento tiene un estricto código de construcción que obliga a diseñar todas las casas al estilo mediterráneo. Y sus calles parecen una postal tomada en un viaje por Andalucía: son de adoquines y las veredas de grandes baldosones color terracota.

              {/* Con casi 30 años de historia, 260 viviendas y alrededor de 170 familias residentes, todas las casas del complejo respetan a rajatabla las claves mediterráneas, a saber: techos a varias aguas con tejas españolas (bordó oscuro), paredes pintadas a la cal, pocas ventanas y arcos de medio punto. Los interiores siguen la misma línea. Los ambientes son amplios, con techos altos y detalles en la herrería de puertas y balcones. Igual que en los frentes, las paredes son rigurosamente blancas y están hechas a través de la técnica de “bolseado”, un ligero relieve con forma de ondas. */}


            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
