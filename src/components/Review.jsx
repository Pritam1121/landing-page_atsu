import React, { useState, useEffect } from 'react';
import reviewDetails from '../data/Review_Data';

const ReviewCarousel = () => {
  const [activePage, setActivePage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);


  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(2);
      }
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(reviewDetails.length / cardsPerPage);

  const handleIndicatorClick = (pageIndex) => {
    setActivePage(pageIndex);
  };

  const visibleCards = reviewDetails.slice(
    activePage * cardsPerPage,
    activePage * cardsPerPage + cardsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="flex flex-col items-center text-center mb-10 px-4">
        <div className="relative flex flex-col items-center justify-center text-center mb-12">
          <h2 className="absolute capitalize text-5xl sm:text-6xl md:text-8xl font-extrabold transform opacity-10 text-white">
            SAY'S
          </h2>
        </div>

        <div className="z-10 -mt-12 sm:-mt-16 md:-mt-[60px]">
          <img
            src="images/pseudo.png"
            className="w-16 sm:w-20 h-auto mx-auto mb-4"
            alt="Icon"
          />
          <p className="text-lg sm:text-xl md:text-3xl text-white leading-snug">
            People's Say About Our <br /> Support & Services
          </p>
        </div>
      </div>

      <div className={`grid gap-8 ${cardsPerPage === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
        {visibleCards.map((review, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-xl hover:border-2 border-purple-800 hover:bg-gray-700 p-6 shadow-lg flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <img
                src="images/span.icon.png"
                alt="icon"
                className="w-8 md:w-10 h-auto mb-4"
              />
              <p className="text-gray-300 mb-4">{review.description}</p>
            </div>
            <hr className="border-gray-600 mb-4" />
            <div className="flex justify-between items-center ">
              <div>
                <h4 className="font-semibold text-lg md:text-2xl text-white">{review.name}</h4>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
              <img
                src="images/icon-chat.png"
                alt="chat"
                className="w-8 md:w-10 h-auto"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${activePage === index
              ? 'bg-white scale-110'
              : 'bg-white opacity-40'
              }`}
            aria-label={`Go to page ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
