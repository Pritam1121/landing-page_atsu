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
            <div className="w-full h-96 absolute inset-0 bg-[url('/images/Grid.png')] bg-cover bg-center opacity-50"></div>
            <div
                className="w-100% h-100 absolute inset-0 bg-[url('/images/ImageBackground.png')] bg-cover bg-center opacity-30 z-1"
            ></div>
            {/* 1st section */}
            <div className="max-w-6xl relative mx-auto align-center justify-center pt-20 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className=" items-center justify-center">
                        <h1 className="text-6xl font-bold text-white pb-5 bg-[url('/images/object-4.png')] bg-no-repeat bg-right">
                            We Provide <br />
                            Smart Business <br />
                            Solutions
                        </h1>
                        <p className="text-lg text-white">Grow your Business With Us Best Business Solutions</p>
                    </div>
                    <div className=" items-center justify-left">
                        <img src="images/Image_Forground.png" className="w-100 h-auto items-left" alt="" />
                    </div>
                </div>
            </div>
            {/* 2nd section */}
            <div className="max-w-6xl h-auto relative mx-auto align-center justify-center pt-20 z-10 bg-[#000A1F]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className=" items-center justify-center">

                        <h1 className=" text-8xl font-bold text-gray-700 font-stretch-100% border-1px border-solid">BRAND</h1>
                        <p className="text-2xl text-uppercase text-white" >We’ve More Then 254+ <br />
                            Global Partners</p>
                        {/* <br /><br /> */}

                    </div>
                    <div className=" items-center justify-center">

                        <p className="text-lg text-white">
                            Sed ut perspiciatis unde omnis natus error voluptatem santium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab nllo inventore veritatis quasi architecto beatae vitae
                        </p>
                    </div>
                </div>
                <hr className="text-gray-700 text-6xl h-4" />
                <Carousel />
            </div>

            <div className="max-w-6xl h-auto relative mx-auto align-center justify-center pt-20 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className=" items-center flex justify-center">
                        <div>

                            <img src="images/section-03-02.png" className="w-30 h-auto" alt="" />
                        </div>
                        <div>
                            <img src="images/section-03-01.png" className="w-70 h-auto " alt="" />
                        </div>


                    </div>
                    <div className=" items-center justify-center  ">
                        <div className="z-10">
                            <img src="images/pseudo.png" className="w-20 h-auto absolute top-30 left-150 transform  z-0" alt="" />
                            <h2 className="absolute capitalize text-8xl font-extrabold transform opacity-10 text-white">FEATURES</h2>
                        </div>
                        <div className="z-20 pb-50">
                            <p className="absolute text-2xl text-white justify-between pl-5 pt-15">Explore Our Professional <br></br>
                                Business Solutions</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <FeatureApp />
                        </div>
                    </div>
                </div>

            </div>
            {/* 3rd section */}
            <div className="max-w-6xl h-auto relative mx-auto align-center justify-center pt-20 z-10">
                <BusinessSection />

            </div>
            {/*  4th section */}
            <div className="max-w-6xl h-auto relative mx-auto align-center justify-center pt-20 z-10">
                <DevlopmentCard />
                {/* <DemoSection /> */}
            </div>
            {/* 5th Section */}
            <div className="max-w-6xl h-auto relative mx-auto align-center justify-center pt-20 z-10">
                <ProjectCard />
            </div>
            {/* 6th Section */}
            <div className="max-w-6xl h-auto relative mx-auto align-center justify-center pt-20 z-10">
                <Accordianfaq />
            </div>
            {/* 7th Section */}
            <div className="max-w-6xl h-auto relative mx-auto align-center justify-center pt-20 z-10 bg-[#000A1F]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className=" items-center justify-center">


                        <div className="z-10">
                            <img src="images/pseudo.png" className="w-20 h-auto absolute top-30 left-12 transform  z-0" alt="" />
                            <h2 className="absolute capitalize text-8xl font-extrabold transform opacity-10 text-white">FACT</h2>
                        </div>
                        <div className="z-20 pb-40">
                            <p className="absolute text-3xl text-white justify-between pl-5 pt-15">
                                Let’s See Our Company <br />
                                Achievement
                            </p>
                        </div>
                        <p className="text-lg text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit ways
                            voluptatem accusantium doloremque laudantium totam rem
                            aperiam eaque epsa quae abillo inventore
                        </p>

                    </div>
                    <div className=" items-center justify-center">
                        <PlayButton />

                    </div>
                </div>
                <div className="flex flex-wrap justify-start gap-x-[20px] gap-y-10">
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
                        <img src="images/Home5-12-7.png" className="w-70 h-auto" alt="" />
                    </div>
                    <div className="relative flex items-left justify-left mb-90">
                    <div className="z-10">
                            <img src="images/pseudo.png" className="w-20 h-auto absolute top-10 left-12 transform  z-0" alt="" />
                            <h2 className="absolute capitalize text-8xl font-extrabold transform opacity-10 text-white">CALL</h2>
                        </div>
                        <div className="z-20 pb-40">
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
