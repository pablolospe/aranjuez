import Image from 'next/image';

export const metadata = {
  title: 'Eventos | Aranjuez',
  description: 'Eventos | Aranjuez',
 };
 
function EventosPage() {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0">
        <Image
          src="/berna.jpg"
          alt="Background"
          fill
          style={{ objectFit: "contain" }}
          priority
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="relative h-full flex items-end justify-center text-center px-4">
        <h1 className="text-6xl font-bold text-white">GOTCHA!</h1>
      </div>
    </div>
  );
}

export default EventosPage;