import React, { useState } from 'react';
import reviewDetails from '../data/Review_Data';

const ReviewCarousel = () => {
  const [activePage, setActivePage] = useState(0);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(reviewDetails.length / cardsPerPage);

  const handleIndicatorClick = (pageIndex) => {
    setActivePage(pageIndex);
  };

  const visibleCards = reviewDetails.slice(
    activePage * cardsPerPage,
    activePage * cardsPerPage + cardsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="relative flex flex-col items-center justify-center text-center mb-12">
          <h2 className="absolute capitalize text-8xl font-extrabold transform opacity-10 text-white">SAY'S</h2>
        </div>
        <div className="z-10 mt-[-60px]">
          <img src="images/pseudo.png" className="w-20 h-auto mx-auto mb-4" alt="Icon" />
          <p className="text-3xl text-white">
            People's Say About Our <br /> Support & Services
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleCards.map((review, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-xl p-6 shadow-lg flex flex-col justify-between h-[300px]"
          >
            <div>
              <img
                src="images/span.icon.png"
                alt="icon"
                className="w-10 h-auto mb-4"
              />
              <p className="text-gray-300 mb-4">{review.description}</p>
            </div>
            <hr className="border-gray-600 mb-4" />
            <div className="flex justify-between items-center text-gray-400">
              <div>
                <h4 className="font-semibold text-2xl">{review.name}</h4>
                <p className="text-sm">{review.role}</p>
              </div>
              <img
                src="images/icon-chat.png"
                alt="chat"
                className="w-15 h-auto"
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
            className={`w-3 h-3 rounded-full transition-all ${
              activePage === index
                ? 'bg-white scale-110'
                : 'bg-white opacity-40'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
