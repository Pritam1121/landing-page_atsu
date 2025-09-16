import Contactform from "../components/Contactform";
import React, { Component } from "react";
import Footer from "../components/Footer";
import { Check } from "lucide-react";
import Carousel from "../components/Carousel ";
import FeatureApp from "../components/FeatureItem";
import BusinessSection from "../components/BusinessType";
import DevlopmentCard from "../components/Development";
import ProjectCard from "../components/Project";
import Accordianfaq from "../components/Accordianfaq";
import PlayButton from "../components/PlayButton";
import InfoCard from "../components/StatisticsCard";
import Review from "../components/Review";

const home = () => {
    return (
        <div className="w-full h-100vh relative bg-[#000A1F]">
            <div className="w-full h-96 absolute inset-0 bg-[url('/images/Grid.png')] bg-cover bg-center opacity-100"></div>

            {/* 1st section */}
            <div className="max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white pb-5 bg-[url('/images/object-4.png')] bg-no-repeat bg-right">
                            We Provide <br />
                            Smart Business <br />
                            Solutions
                        </h1>
                        <p className="text-base sm:text-lg text-white">
                            Grow your Business With Us — Best Business Solutions
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-start">
                        <img
                            src="images/Image_Forground.png"
                            className="w-full max-w-md h-auto"
                            alt="Business Illustration"
                        />
                    </div>
                </div>
            </div>

            {/* 2nd section */}
            <div className="max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-8 relative z-0 bg-[#000A1F]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-700 ">
                            BRAND
                        </h1>
                        <p className="text-xl sm:text-2xl text-white uppercase mt-0">
                            <img src="images/pseudo.png" className="w-20 h-auto absolute top-26 left-12 transform  z-0" alt="Icon" />
                            <br />
                            We’ve More Than 254+ <br />
                            Global Partners
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-start">
                        <p className="text-base sm:text-lg text-white max-w-md">
                            Sed ut perspiciatis unde omnis natus error voluptatem santium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab nllo inventore veritatis quasi architecto beatae vitae.
                        </p>
                    </div>
                </div>

                <hr className="my-10 border-gray-700" />

                <div className="relative z-0">
                    <Carousel />
                </div>
            </div>

            {/* new Section */}
            <div className="max-w-6xl mx-auto pt-20 relative z-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 max-w-full">
                        <img
                            src="images/section-03-02.png"
                            className="w-16 sm:w-24 md:w-32 lg:w-40 h-auto max-w-full"
                            alt=""
                        />
                        <img
                            src="images/section-03-01.png"
                            className="w-28 sm:w-40 md:w-56 lg:w-72 h-auto max-w-full"
                            alt=""
                        />
                    </div>
                    <div className="relative flex flex-col justify-center px-4 md:px-0 max-w-full">
                        <img
                            src="images/pseudo.png"
                            className="w-12 sm:w-16 absolute top-8 left-6 sm:left-8 md:left-10 opacity-50 z-0"
                            alt=""
                        />
                        <h2 className="absolute text-4xl sm:text-6xl md:text-8xl font-extrabold text-white opacity-10 uppercase top-4 left-4 sm:left-8 select-none pointer-events-none whitespace-nowrap">
                            FEATURES
                        </h2>

                        <p className="relative text-white text-lg sm:text-xl md:text-2xl pt-16 sm:pt-20 max-w-md">
                            Explore Our Professional <br />
                            Business Solutions
                        </p>

                        <div className="mt-8 max-w-full">
                            <FeatureApp />
                        </div>
                    </div>
                </div>
            </div>



            {/* 3rd section */}
            <div className="max-w-6xl h-auto relative mx-auto align-center justify-center pt-20 z-10">
                <div className="mb-16">
                    <BusinessSection />
                </div>
                <div className="mb-16">
                    <DevlopmentCard />
                </div>
                <div className="mb-16">
                    <ProjectCard />
                </div>
                <div>
                    <Accordianfaq />
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-20 bg-[#000A1F] z-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="relative px-4 sm:px-6 md:px-8">
                        <div className="relative z-0">
                            <img
                                src="images/pseudo.png"
                                className="w-16 sm:w-20 h-auto absolute top-6 left-4 sm:top-10 sm:left-12"
                                alt=""
                            />
                            <h2 className="absolute text-6xl sm:text-8xl font-extrabold uppercase opacity-10 text-white top-10 left-0 select-none pointer-events-none">
                                FACT
                            </h2>
                        </div>

                        <div className="absolute top-24 sm:top-28 left-5 sm:left-8 z-10">
                            <p className="text-2xl sm:text-3xl text-white font-semibold leading-tight">
                                Let’s See Our Company <br /> Achievement
                            </p>
                        </div>
                        <div className="relative z-10 mt-48 sm:mt-52 md:mt-56 pl-5">
                            <p className="text-sm sm:text-base text-gray-400 max-w-md">
                                Sed ut perspiciatis unde omnis iste natus error sit ways voluptatem
                                accusantium doloremque laudantium totam rem aperiam eaque epsa quae ab
                                illo inventore.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center px-4 sm:px-6">
                        <PlayButton />
                    </div>
                </div>
                <div className="mt-16 flex flex-wrap justify-start gap-x-5 gap-y-10">
                    <InfoCard />
                </div>
            </div>


            {/* 8th section */}

            <div className="max-w-6xl h-auto relative mx-auto align-center justify-center pt-20 z-10">
                <Review />
            </div>



            {/* last Section */}
            <div
                className="max-w-6xl relative mx-auto align-center justify-center pt-20 z-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center justify-center">
                        <img src="images/Home5-12-7.png" className="w-80 h-auto px-4" alt="" />
                    </div>
                    <div className="relative flex items-left justify-left mb-90">
                        <div className="z-10">
                            <img src="images/pseudo.png" className="w-20 h-auto absolute top-10 left-12 transform  z-0" alt="" />
                            <h2 className="absolute capitalize text-8xl font-extrabold transform opacity-10 text-white">CALL</h2>
                        </div>
                        <div className="z-20 pb-60">
                            <p className="absolute text-3xl text-white justify-between pl-5 pt-15">
                                Ready to Work Together
                                <br />
                                In News Projects?
                            </p>
                        </div>

                        <div className="absolute inset-0 flex flex-col items-left justify-left text-left px-4 pt-40 gap-10">
                            <Contactform />
                        </div>
                    </div>
                </div>
            </div>
            <Footer className="w-full bg-gray-700 rounded-2xl" />
        </div>
    );
};

export default home;
