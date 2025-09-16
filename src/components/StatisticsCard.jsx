import React from 'react';
import InfoCardDetails from '../data/InfoCard_Data';

const InfoCardList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[40px]">
        {InfoCardDetails.map((value, index) => (
          <div
            key={index}
            className="relative w-full flex items-center justify-center rounded-3xl group transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <div className="absolute top-0 left-1/2 w-[90%] h-full bg-gray-800 
            rounded-3xl -translate-x-1/2 z-0 origin-bottom rotate-[-8deg] transition-all 
            duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-[5deg]
            //  group-hover:bg-gray-400
            group-hover:bg-gradient-to-r group-hover:from-[#E100FF] group-hover:to-[#7F00FF]
            "></div>

            <div className="relative z-10 flex flex-col items-center gap-6 p-9 text-center">
              <img src={value.icon} alt="icon" className="w-10 h-10" />
              <p className="text-lg leading-relaxed text-white">{value.count}</p>
              <h2 className="text-4xl font-bold text-white">{value.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCardList;

