import React from 'react';
import { Check } from 'lucide-react';

const BusinessSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col justify-center space-y-8">

          <div className="flex items-center space-x-4">
            <img
              src="images/pseudo.png"
              className="w-12 sm:w-16 h-auto"
              alt="Decorative"
            />
            <h2 className="text-6xl sm:text-8xl font-extrabold text-white opacity-10 select-none pointer-events-none whitespace-nowrap">
              WHO
            </h2>
          </div>

          <p className="text-2xl sm:text-3xl text-white leading-snug max-w-md ">
            We're Awards Winning <br />
            Modern Business Solutions <br />
            Agency
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-white max-w-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis architecto beatae.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-xl">
            {[
              'Tech Solution',
              'IT Consulting',
              'Business Growth',
              'Product Design',
              'Web Solutions',
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-700 hover:bg-gray-400 transition-colors duration-300 rounded-md"
              >
                <div className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 bg-gradient-to-r from-[#40c9ff] to-[#e81cff] rounded-full text-white p-1" />
                    <p className="text-sm text-white">{service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="images/about.png"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            alt="About"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
