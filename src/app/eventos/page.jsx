import React from 'react';
import Image from 'next/image';

function EventosPage() {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0">
        <Image
          src="/berna.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">GOTCHA!</h1>
      </div>
    </div>
  );
}

export default EventosPage;