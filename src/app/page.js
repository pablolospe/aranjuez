import Image from "next/image";

const MainContent = () => {
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
          <button className="px-8 py-3 mb-3 bg-white text-stone-800 text-lg rounded hover:bg-stone-100">
            Conocer Más
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
