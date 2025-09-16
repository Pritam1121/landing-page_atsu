

import React, { useState, useEffect } from "react";
import ProjectDetails from "../data/Project_Data";

const ProjectCard = () => {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2); 
      } else {
        setCardsPerPage(3);
      }
      setActiveIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(ProjectDetails.length / cardsPerPage);

  const handleDotClick = (index) => {
    setActiveIndex(index * cardsPerPage);
  };

 
  const cardWidthPercent = 100 / cardsPerPage - 4; 

  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative flex flex-col items-center justify-center text-center mb-12 w-full">
           
            <h2
              className="absolute capitalize font-extrabold transform opacity-10 text-white
              text-4xl sm:text-6xl md:text-8xl whitespace-nowrap"
            >
              PROJECTS
            </h2>
          </div>
          <div className="z-10 mt-[-60px]">
            <img
              src="images/pseudo.png"
              className="w-12 sm:w-16 md:w-20 h-auto mx-auto mb-4"
              alt="Icon"
            />
            <p className="text-xl sm:text-2xl md:text-3xl text-white leading-tight">
              Checkout our Recently <br /> Completed Projects
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 p-6 sm:p-8">
          {ProjectDetails.slice(activeIndex, activeIndex + cardsPerPage).map(
            (value, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden"
                style={{
                  flexBasis: `${cardWidthPercent}%`,
                  aspectRatio: "3 / 4",
                  backgroundImage: `url(${value.cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minWidth: 0,
                  height: "auto",
                }}
              >
                <div className="absolute bottom-4 left-4 w-[80%]">
                  <div className="flex flex-col items-start">
                   
                    <p className="text-sm bg-gradient-to-r from-pink-800 to-blue-700 text-white px-4 py-2 w-1/2">
                      {value.tagname}
                    </p>
                    <h3 className="text-lg font-semibold bg-gray-900 text-white px-4 py-2 w-full">
                      {value.title}
                    </h3>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition ${
                activeIndex / cardsPerPage === index
                  ? "bg-white scale-110"
                  : "bg-white opacity-50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
