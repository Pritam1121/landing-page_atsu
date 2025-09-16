import React from 'react';
import featureData from '../data/Features_Data';

const FeatureApp = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-full sm:max-w-3xl mx-auto">
      {featureData.map((value, index) => (
        <div
          key={index}
          className="flex items-start w-full max-w-[280px]"
        >
          <img
            src={value.image}
            alt={value.title}
            className="w-16 sm:w-20 h-auto flex-shrink-0 pr-4 sm:pr-5"
          />
          <div>
            <h2 className="text-white font-semibold text-base sm:text-lg">{value.title}</h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureApp;

