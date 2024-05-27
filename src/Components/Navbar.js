import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png"; // Update with the correct path to your logo

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white bg-opacity-50 rounded-md"></div>
            <img src={logo} alt="Logo" className="relative h-10 w-auto p-1" />
          </div>
          <span className="text-lg md:text-xl font-bold font-merriweather text-sm text-shadow-lg">
            Rotaract Club of Delhi Rajdhani
          </span>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="hover:text-secondary font-merriweather text-sm text-shadow-lg"
          >
            Home
          </Link>
          <Link
            to="/newsletter"
            className="hover:text-secondary font-merriweather text-sm text-shadow-lg"
          >
            Our Newsletter
          </Link>
          <Link
            to="/team"
            className="hover:text-secondary font-merriweather text-sm text-shadow-lg"
          >
            Team
          </Link>
          <Link
            to="/about"
            className="hover:text-secondary font-merriweather text-sm text-shadow-lg"
          >
            About Us
          </Link>
          <Link
            to="/events"
            className="hover:text-secondary font-merriweather text-sm text-shadow-lg"
          >
            Events
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-2`}>
        <div className="flex flex-col space-y-2">
          <Link
            to="/"
            className="hover:text-secondary py-2 font-merriweather text-sm text-shadow-lg"
          >
            Home
          </Link>
          <Link
            to="/newsletter"
            className="hover:text-secondary py-2 font-merriweather text-sm text-shadow-lg"
          >
            Our Newsletter
          </Link>
          <Link
            to="/team"
            className="hover:text-secondary py-2 font-merriweather text-sm text-shadow-lg"
          >
            Team
          </Link>
          <Link
            to="/about"
            className="hover:text-secondary py-2 font-merriweather text-sm text-shadow-lg"
          >
            About Us
          </Link>
          <Link
            to="/events"
            className="hover:text-secondary py-2 font-merriweather text-sm text-shadow-lg"
          >
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
