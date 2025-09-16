import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const logos = [
  '/images/logos/1.png',
  '/images/logos/2.png',
  '/images/logos/3.png',
  '/images/logos/5.png',
  '/images/logos/6.png',
  '/images/logos/1.png',
  '/images/logos/2.png',
];

const LogoCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const logosPerView = 5;

  const handlePrev = () => {
    setStartIndex(prev =>
      prev === 0 ? logos.length - logosPerView : prev - 1
    );
  };


  const handleNext = () => {
    setStartIndex(prev =>
      prev + logosPerView >= logos.length ? 0 : prev + 1
    );
  };


  const visibleLogos = logos.slice(startIndex, startIndex + logosPerView);

  return (
    <div className="max-w-6xl w-full mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 relative">
  <button
    onClick={handlePrev}
    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 border-2 border-fuchsia-800 hover:bg-gray-300 p-2 rounded-full z-10"
    aria-label="Previous"
  >
    <ChevronLeft className="text-fuchsia-800" size={24} />
  </button>

  <div className="flex justify-center gap-4 px-8 sm:px-12 w-full">
    {visibleLogos.map((logo, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-1/5 p-2 flex items-center justify-center h-24 sm:h-28 md:h-32"
      >
        <img
          src={logo}
          alt={`Logo ${startIndex + index + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    ))}
  </div>

  <button
    onClick={handleNext}
    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 border-2 border-fuchsia-800 hover:bg-gray-300 p-2 rounded-full z-10"
    aria-label="Next"
  >
    <ChevronRight className="text-fuchsia-800" size={24} />
  </button>
</div>
  );
};

export default LogoCarousel;
