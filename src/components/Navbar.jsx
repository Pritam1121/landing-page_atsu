import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#000A1F] shadow-sm">
        <div className="absolute inset-0 bg-[url('/images/Grid.png')] bg-cover bg-center opacity-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-around h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative p-2 rounded-xl group-hover:scale-105 transition-transform duration-200">
                <img src="./ATS_Logo.png" className="h-auto w-24" alt="Information Technology Services" />
              </div>
            </Link>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {["Home", "Client", "Services", "Projects", "About", "Contact"].map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase()}`}
                  className="px-4 py-2 text-xl font-medium text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

        
          {isMenuOpen && (
            <div className="lg:hidden mt-2 space-y-2">
              {["Home", "Client", "Services", "Projects", "About", "Contact"].map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase()}`}
                  className="block px-4 py-2 text-white bg-[#001A3F] rounded-md hover:bg-blue-600 transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
