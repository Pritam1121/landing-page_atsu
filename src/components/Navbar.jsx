
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#000A1F] shadow-sm">
      <div className="absolute inset-0 bg-[url('/images/Grid.png')] bg-cover bg-center opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-around h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative p-2 rounded-xl group-hover:scale-105 transition-transform duration-200">
              <img
                src="./ATS_Logo.png"
                className="h-auto w-24"
                alt="Information Technology Services"
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="#"
              className="px-4 py-2 text-xl font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="#"
              className="px-4 py-2 text-xl font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Client
            </Link>
            <Link
              to="#"
              className="px-4 py-2 text-xl font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Services
            </Link>
            <Link
              to="#"
              className="px-4 py-2 text-xl font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Projects
            </Link>
            <Link
              to="#"
              className="px-4 py-2 text-xl font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              About
            </Link>
            <Link
              to="#"
              className="px-4 py-2 text-xl font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Contact
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#000A1F] px-4 pt-2 pb-4 space-y-2">
          <Link
            to="#"
            className="block px-4 py-2 text-base font-medium text-white hover:text-blue-600 hover:bg-gray-800 rounded-lg transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-base font-medium text-white hover:text-blue-600 hover:bg-gray-800 rounded-lg transition-all duration-200"
          >
            Client
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-base font-medium text-white hover:text-blue-600 hover:bg-gray-800 rounded-lg transition-all duration-200"
          >
            Services
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-base font-medium text-white hover:text-blue-600 hover:bg-gray-800 rounded-lg transition-all duration-200"
          >
            Projects
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-base font-medium text-white hover:text-blue-600 hover:bg-gray-800 rounded-lg transition-all duration-200"
          >
            About
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-base font-medium text-white hover:text-blue-600 hover:bg-gray-800 rounded-lg transition-all duration-200"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
