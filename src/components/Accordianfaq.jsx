import React from 'react';
import Accordion from './Accordian';

const Accordianfaq = () => {
  return (
    <div className="max-w-6xl h-auto relative mx-auto z-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      
        <div className="relative flex flex-col justify-center">
          <div className="relative flex flex-col items-center justify-center text-center mb-12">
            <h2 className="absolute capitalize text-8xl pr-12 md:pr-60 font-extrabold transform opacity-10 text-white">
              SEO
            </h2>
          </div>

          <div className="relative z-10 mt-[-60px] pl-4 md:pl-12">
            <img
              src="images/pseudo.png"
              className="w-20 h-auto absolute top-0 left-4 md:left-12"
              alt="Icon"
            />
            <br />
            <p className="text-3xl text-white pl-0 md:pl-20">
              Manage Business SEO <br /> Optimization Easily
            </p>
          </div>

          <div className="relative pt-4 sm:pt-6">
            <p className="text-base sm:text-lg lg:text-xl text-white pl-0 sm:pl-5 max-w-xl">
              Quis autem vel eum iure reprehenderit qui in ea voluptates
              velit esse quam molestiae consequatur velillum
            </p>
            <div className="mt-8 transition-all duration-300 ease-in-out">
              <Accordion />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 sm:px-0">
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
