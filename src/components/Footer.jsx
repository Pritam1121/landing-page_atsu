import {Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Footer=()=>{
    return (
        <footer style={{ backgroundColor: "#000A1F" }} className="dark:bg-black dark:text-white py-16">
            <div className="max-w-6xl mx-auto justify-around px-4 sm:px-6 lg:px-8 ">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="col-span-1 md:col-span-2"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-auto h-auto">
                                <img src="./ATS_Logo.png" className="h-auto w-24" alt="Information Technology Services" />
                            </div>


                        </div>
                        <p className="text-white font-medium dark:text-white mb-6 max-w-md">
                            Follow
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors cursor-pointer"
                            >
                                <Twitter className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors cursor-pointer"
                            >
                                <Github className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors cursor-pointer"
                            >
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors cursor-pointer"
                            >
                                <Mail className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-white dark:text-white">
                            Services
                        </h3>
                        <ul className="space-y-2 text-slate-300">
                            <li>
                                <Link
                                    to="#"
                                    className="text-white dark:text-white hover:text-gray-500 transition-colors"
                                >
                                    Product Design
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    className="text-white dark:text-white hover:text-gray-500 transition-colors"
                                >
                                    Business Consulting
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="#"
                                    className="text-white dark:text-white hover:text-gray-500 transition-colors"
                                >
                                    Custome Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="text-white dark:text-white hover:text-gray-500 transition-colors"
                                >
                                    Brand Identity
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="text-white dark:text-white hover:text-gray-500 transition-colors"
                                >
                                    SEO Optimization
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-white dark:text-white">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-slate-300">
                            <li >
                                <Link to="https://www.google.com/maps/search/?api=1&query=785+Main+Street,+2nd+Block,+Melbourne,+Australia"
                                    className="text-white dark:text-white hover:text-gray-500 transition-colors">
                                    785 Main Street, 2nd Block
                                    melbourne, australia
                                </Link>
                            </li>

                            <li className="text-white dark:text-white hover:text-gray-500 transition-colors">
                                <Link
                                    to="mailto:support@gmail.com"
                                    className="text-white dark:text-white hover:text-gray-500 transition-colors"
                                >
                                    support@gmail.com
                                </Link>
                            </li>
                            <li className="text-white dark:text-white hover:text-gray-500 transition-colors">
                                <Link
                                    to="callto:+000 (123) 456 88"
                                    className="text-white dark:text-white hover:text-gray-500 transition-colors"
                                >
                                    +000 (123) 456 88
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-white dark:text-white">
                            Newsletter
                        </h3>
                        <ul className="space-y-2 text-slate-300">
                            <li className="text-white dark:text-white hover:text-gray-500 transition-colors">

                                Get Every Single Update to
                                Join Our Newsletter

                            </li>

                            <li >
                                <div className="grid grid-cols-2 gap-10 w-80">
                                    <div className="flex felx-justify-center justify-items-center grid-cols-1 gap-1">
                                        <li ><Mail /></li>
                                        <li className="text-sm text-white dark:text-white hover:text-gray-500 transition-colors">Email Address</li>
                                    </div>
                                    <div>
                                        <li>                                         
                                        <Link to="#" className="text-white dark:text-white hover:text-gray-500 transition-colors">
                                        Sign Up
                                        </Link>
                                    </li>
                                    </div>
                                    <hr className="w-60 pt-0"/>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="col-span-1 md:col-span-2"
                    >
                        <p className="text-sm text-white text-xl dark:text-white"> Copy@ 2025 Atsu. All Rights reserved</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                       
                    </motion.div>

                    {/* <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                       
                      
                    </motion.div> */}
                    
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                     <div className="grid grid-cols-2 gap-4 w-150">
                            <ul className="justify-items-center text-center flex space-x-4 text-white">
                            <li>Setting & Privacy</li>
                        <li>Faqs</li>
                        <li>Contact</li>
                            </ul>
                    
                     </div>
                    </motion.div>
                </div>

                <motion.div
                       whileInView={{ opacity: 1, y: 0 }}                    
                    className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400"
                >
                    
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;