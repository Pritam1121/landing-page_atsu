import React from 'react';
import { Check } from 'lucide-react';

import Accordion from './Accordian';

const Accordianfaq = () => {
  return (
    <div className="max-w-6xl h-auto relative mx-auto z-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
        <div className="relative flex flex-col justify-center">
        <div className="relative flex flex-col items-center justify-center text-center mb-12">
          <h2 className="absolute capitalize text-8xl pr-60 font-extrabold transform opacity-10 text-white">SEO</h2>
          </div>
          <div className="z-10 mt-[-60px]">
            <img src="images/pseudo.png" className="w-20 h-auto absolute top-0 left-12 transform  z-0" alt="Icon" />
            <br />
            <p className="text-3xl text-white pl-20">
            Manage Business SEO <br /> Optimization Easily
            </p>
          </div>
          
          <div className="relative">
            {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white pl-2 sm:pl-5 pt-6 sm:pt-10">
              Manage Business SEO <br /> Optimization Easily
            </h1> */}
            <p className="text-base sm:text-lg lg:text-xl text-white pl-26 sm:pl-5 pt-4 sm:pt-6 max-w-xl">
              Quis autem vel eum iure reprehenderit qui in ea voluptates
              velit esse quam molestiae consequatur velillum
            </p>
            <div className="mt-8">
              <Accordion /> 
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="images/faq.png"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            alt="About"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordianfaq;
