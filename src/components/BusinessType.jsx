

import React from 'react';
import { Check } from 'lucide-react';

const BusinessSection = () => {
  return (
    <div className="max-w-6xl h-auto relative mx-auto z-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="relative flex flex-col justify-center">

          <div className="relative">

            <div className="z-10">
              <img src="images/pseudo.png" className="w-20 h-auto absolute top-10 left-12 transform  z-0" alt="" />
              <h2 className="absolute capitalize text-8xl font-extrabold transform opacity-10 text-white">WHO</h2>
            </div>
            <div className="z-20 pb-50">
              <p className="absolute text-3xl text-white justify-between pl-5 pt-15">
                We're Awards Winning <br />
                Modern Business Solutions <br />
                Agency
              </p>
            </div>


            <p className="text-base sm:text-lg lg:text-xl text-white pl-2 sm:pl-5 pt-4 sm:pt-6 max-w-xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
              ab illo inventore veritatis architecto beatae.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
