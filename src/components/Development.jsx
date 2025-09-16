import React from 'react';
import { ArrowRight } from "lucide-react";

const DevlopmentCard = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
    
      <div className="flex flex-col items-center text-center mb-12">
        <div className="relative flex flex-col items-center justify-center">
          <h2 className="absolute capitalize text-6xl md:text-8xl font-extrabold opacity-10 text-white">
            SERVICES
          </h2>
        </div>
        <div className="z-10 -mt-16">
          <img
            src="images/pseudo.png"
            className="w-20 h-auto mx-auto mb-4"
            alt="Icon"
          />
          <p className="text-xl md:text-3xl text-white">
            Great Features To Do Your Business <br /> Growth & Development
          </p>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row gap-10">
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="images/bg-icon-two-dark.png"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            alt="About"
          />
        </div>

       
        <div className="w-full md:w-1/2 flex flex-col gap-6">
        
          <div className="pl-0 md:pl-10 transform hover:scale-105 hover:rotate-1 transition duration-300">
            <div className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-400 transition-colors duration-300 rounded-md">
              <div className="flex flex-wrap items-center gap-2">
                <img src="images/service1.png" alt="Graphics Design" />
                <div className="grid w-full sm:w-60">
                  <h2 className="text-white text-xl font-bold">Graphics Design</h2>
                  <p className="text-gray-500">Sed perspiciatis unde omnis natus error voluptatem</p>
                </div>
                <ArrowRight className="w-10 h-auto bg-gray-800 rounded-full text-white p-1" />
              </div>
            </div>
          </div>

        
          <div className="pl-0 md:pl-10 transform hover:scale-105 hover:rotate-1 transition duration-300">
            <div className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-400 transition-colors duration-300 rounded-md">
              <div className="flex flex-wrap items-center gap-2">
                <img src="images/service2.png" alt="Ideation" />
                <div className="grid w-full sm:w-60">
                  <h2 className="text-white text-xl font-bold">Ideation & Evaluation</h2>
                  <p className="text-gray-500">Sed perspiciatis unde omnis natus error voluptatem</p>
                </div>
                <ArrowRight className="w-10 h-auto bg-gray-800 rounded-full text-white p-1" />
              </div>
            </div>
          </div>

       
          <div className="pl-0 md:pl-10 transform hover:scale-105 hover:rotate-1 transition duration-300">
            <div className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-400 transition-colors duration-300 rounded-md">
              <div className="flex flex-wrap items-center gap-2">
                <img src="images/service3.png" alt="Brand Identity" />
                <div className="grid w-full sm:w-60">
                  <h2 className="text-white text-xl font-bold">Brand Identity</h2>
                  <p className="text-gray-500">Sed perspiciatis unde omnis natus error voluptatem</p>
                </div>
                <ArrowRight className="w-10 h-auto bg-gray-800 rounded-full text-white p-1" />
              </div>
            </div>
          </div>

         
          <div className="pl-0 md:pl-10 transform hover:scale-105 hover:rotate-1 transition duration-300">
            <div className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-400 transition-colors duration-300 rounded-md">
              <div className="flex flex-wrap items-center gap-2">
                <img src="images/service4.png" alt="Customer Service" />
                <div className="grid w-full sm:w-60">
                  <h2 className="text-white text-xl font-bold">Custom Service</h2>
                  <p className="text-gray-500">Sed perspiciatis unde omnis natus error voluptatem</p>
                </div>
                <ArrowRight className="w-10 h-auto bg-gray-800 rounded-full text-white p-1" />
              </div>
            </div>
          </div>

        
          <div className="pl-0 md:pl-10 transform hover:scale-105 hover:rotate-1 transition duration-300">
            <div className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-400 transition-colors duration-300 rounded-md">
              <div className="flex flex-wrap items-center gap-2">
                <img src="images/service5.png" alt="Web Strategy" />
                <div className="grid w-full sm:w-60">
                  <h2 className="text-white text-xl font-bold">Web Strategy</h2>
                  <p className="text-gray-500">Sed perspiciatis unde omnis natus error voluptatem</p>
                </div>
                <ArrowRight className="w-10 h-auto bg-gray-800 rounded-full text-white p-1" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DevlopmentCard;
