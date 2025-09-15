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
      prev - logosPerView < 0 ? Math.max(logos.length - logosPerView, 0) : prev - logosPerView
    );
  };

  const handleNext = () => {
    setStartIndex(prev =>
      prev + logosPerView >= logos.length ? 0 : prev + logosPerView
    );
  };

  const visibleLogos = logos.slice(startIndex, startIndex + logosPerView);

  return (
    <div className="w-6xl mx-auto flex items-center justify-center p-4 relative">
      
      <button
        onClick={handlePrev} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 border-2  border-fuchsia-800 hover:bg-gray-300 p-2 rounded-full"
        aria-label="Previous"
      >
        <ChevronLeft className='text-fuchsia-800' />
      </button>

      <div className="flex flex-wrap justify-center gap-4 px-12">
        {visibleLogos.map((logo, index) => (
          <div key={index} className="w-48 h-48 flex items-center justify-center p-2">
            <img src={logo} alt={`Logo ${index + 1}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 border-2  border-fuchsia-800 hover:bg-gray-300 p-2 rounded-full"
        aria-label="Next"
      >
        <ChevronRight className='text-fuchsia-800' />
      </button>
    </div>
  );
};

export default LogoCarousel;

