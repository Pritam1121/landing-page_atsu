import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {

  return (
    <>
      <nav className="sticky top-0 z-10 w-full bg-[#000A1F] shadow-sm">
        <div className="absolute inset-0 bg-[url('/images/Grid.png')] bg-cover bg-center opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-around h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative p-2 rounded-xl group-hover:scale-105 transition-transform duration-200">
                <img src="./ATS_Logo.png" className="h-auto w-24" alt="Information Technology Services" />
              </div>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                to="/problems"
                className="px-4 py-2 text-xl font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                Home
              </Link>
              <Link
                to="/sheets"
                className="px-4 py-2 text-xl font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                Client
              </Link>
              <Link
                to="/terms"
                className="px-4 py-2 text-xl font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                Services
              </Link>

              <Link
                to="/privacy"
                className="px-4 py-2 text-xl font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                Projects
              </Link>
              <Link
                to="/privacy"
                className="px-4 py-2 text-xl font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                About
              </Link>
              <Link
                to="/privacy"
                className="px-4 py-2 text-xl font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                contact
              </Link>
            </div>

          </div>
        </div>
      </nav>



      
      
    </>
  );
};

export default Navbar;