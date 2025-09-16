import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#000A1F" }} className="dark:bg-black dark:text-white py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <img src="./ATS_Logo.png" className="h-auto w-24" alt="Information Technology Services" />
                        </div>
                        <p className="text-white font-medium mb-6 max-w-md">Follow</p>
                        <div className="flex space-x-4">
                            {[Twitter, Github, Linkedin, Mail].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#d9a7c7] transition-colors"
                                >
                                    <Icon className="w-5 h-5 text-white" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
                        <ul className="space-y-2 text-slate-300">
                            {["Product Design", "Business Consulting", "Custome Service", "Brand Identity", "SEO Optimization"].map(
                                (service, index) => (
                                    <li key={index}>
                                        <Link to="#" className="text-white hover:text-gray-500 transition-colors">
                                            {service}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
                        <ul className="space-y-2 text-slate-300">
                            <li>
                                <Link
                                    to="https://www.google.com/maps/search/?api=1&query=785+Main+Street,+2nd+Block,+Melbourne,+Australia"
                                    className="text-white hover:text-gray-500 transition-colors"
                                >
                                    785 Main Street, 2nd Block Melbourne, Australia
                                </Link>
                            </li>
                            <li>
                                <Link to="mailto:support@gmail.com" className="text-white hover:text-gray-500 transition-colors">
                                    support@gmail.com
                                </Link>
                            </li>
                            <li>
                                <Link to="callto:+000 (123) 456 88" className="text-white hover:text-gray-500 transition-colors">
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
                        <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
                        <p className="text-white mb-4">Get every single update — join our newsletter</p>
                        <div className="flex items-center space-x-3">
                            <Mail className="text-white" />
                            <span className="text-sm text-white">Email Address</span>
                        </div>
                        <div className="mt-4">
                            <Link to="#" className="text-white hover:text-gray-500 transition-colors">
                                Sign Up
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-2"
                    >
                        <p className="text-lg text-white">© 2025 ATSU. All Rights Reserved</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-3"
                    >
                        <ul className="flex flex-wrap gap-4 text-white justify-start md:justify-end">
                            <li>Setting & Privacy</li>
                            <li>FAQs</li>
                            <li>Contact</li>
                        </ul>
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
};

export default Footer;
