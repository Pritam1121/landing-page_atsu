import React from 'react';
import { ArrowRight } from "lucide-react";

const DevlopmentCard = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col items-center text-center">
        <div className="z-10">
          <div className="relative flex flex-col items-center justify-center text-center mb-12">
          <h2 className="absolute capitalize text-8xl font-extrabold transform opacity-10 text-white">SERVICES</h2>
          </div>
          <div className="z-10 mt-[-60px]">
            <img src="images/pseudo.png" className="w-20 h-auto mx-auto mb-4" alt="Icon" />
            <p className="text-3xl text-white">
              Great Features To Do Your Business <br /> Growth & Development
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="flex items-center justify-center">
          <img
            src="images/bg-icon-two-dark.png"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-30"
            alt="About"
          />
        </div>

        <div className="relative flex flex-col justify-center">
          <div className="relative">
            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="pl-10 transform hover:scale-105 hover:rotate-1 transition duration-300">
                <div className="px-4 py-3 bg-gray-700 w-100 hover:bg-gray-400 transition-colors duration-300 rounded-md">
                  <div className="flex items-center gap-2">
                    <img src="images/service1.png" />
                    <div className='grid w-60'>
                      <h2 className='text-white text-xl font-bold'>Graphics Design</h2>
                      <p className='text-gray-500 align-left' >Sed perspiciatis unde omnis natus error voluptatem</p>
                    </div>
                    <p className="text-sm text-white"></p>
                    <ArrowRight className="w-10 h-auto bg-gray-800 rounded-full text-white p-1" />
                  </div>
                </div>
              </div>
              <div className="pl-20 transform hover:scale-105 hover:rotate-1 transition duration-300">
                <div className="px-4 py-3 bg-gray-700 w-100 hover:bg-gray-400 transition-colors duration-300 rounded-md">
                  <div className="flex items-center gap-2">
                    <img src="images/service2.png" />
                    <div className='grid w-60'>
                      <h2 className='text-white text-xl font-bold'>Ideation & Evaluation</h2>
                      <p className='text-gray-500 align-left' >Sed perspiciatis unde omnis natus error voluptatem</p>
                    </div>
                    <p className="text-sm text-white"></p>
                    <ArrowRight className="w-10 h-auto bg-gray-800 rounded-full text-white p-1" />
                  </div>
                </div>
              </div>
              <div className="pl-30 transform hover:scale-105 hover:rotate-1 transition duration-300">
                <div className="px-4 py-3 bg-gray-700 w-100 hover:bg-gray-400 transition-colors duration-300 rounded-md">
                  <div className="flex items-center gap-2">
                    <img src="images/service3.png" />
                    <div className='grid w-60'>
                      <h2 className='text-white text-xl font-bold'>Brand Identity</h2>
                      <p className='text-gray-500 align-left' >Sed perspiciatis unde omnis natus error voluptatem</p>
                    </div>
                    <p className="text-sm text-white"></p>
                    <ArrowRight className="w-10 h-auto bg-gray-800 rounded-full text-white p-1" />
                  </div>
                </div>
              </div>
              <div className="pl-15 transform hover:scale-105 hover:rotate-1 transition duration-300">
                <div className="px-4 py-3 bg-gray-700 w-100 hover:bg-gray-400 transition-colors duration-300 rounded-md">
                  <div className="flex items-center gap-2">
                    <img src="images/service4.png" />
                    <div className='grid w-60'>
                      <h2 className='text-white text-xl font-bold'>Custome Service</h2>
                      <p className='text-gray-500 align-left' >Sed perspiciatis unde omnis natus error voluptatem</p>
                    </div>
                    <p className="text-sm text-white"></p>
                    <ArrowRight className="w-10 h-auto bg-gray-800 rounded-full text-white p-1" />
                  </div>
                </div>
              </div>
              <div className="pl-0 transform hover:scale-105 hover:rotate-1 transition duration-300">
                <div className="px-4 py-3 bg-gray-700 w-100 hover:bg-gray-400 transition-colors duration-300 rounded-md">
                  <div className="flex items-center gap-2">
                    <img src="images/service5.png" />
                    <div className='grid w-60'>
                      <h2 className='text-white text-xl font-bold'>Web Strategy</h2>
                      <p className='text-gray-500 align-left' >Sed perspiciatis unde omnis natus error voluptatem</p>
                    </div>
                    <p className="text-sm text-white"></p>
                    <ArrowRight className="w-10 h-auto bg-gray-800 rounded-full text-white p-1" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default DevlopmentCard;


