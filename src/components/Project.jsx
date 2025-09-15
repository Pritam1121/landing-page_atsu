import React, { useState } from "react";
import ProjectDetails from "../data/Project_Data";

const ProjectCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(ProjectDetails.length / cardsPerPage);

  const handleDotClick = (index) => {
    setActiveIndex(index * cardsPerPage);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
        <div className="relative flex flex-col items-center justify-center text-center mb-12">
          <h2 className="absolute capitalize text-8xl font-extrabold transform opacity-10 text-white">PROJECTS</h2>
          </div>
          <div className="z-10 mt-[-60px]">
            <img src="images/pseudo.png" className="w-20 h-auto mx-auto mb-4" alt="Icon" />
            <p className="text-3xl text-white">
            Checkout our Recently <br /> Completed Projects
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 p-8">
          {ProjectDetails.slice(activeIndex, activeIndex + cardsPerPage).map(
            (value, index) => (
              <div
                key={index}
                className="relative w-full sm:w-[300px] h-[50vh] bg-white rounded-xl shadow-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${value.cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
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
