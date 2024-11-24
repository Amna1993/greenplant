import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="focus:outline-none"
          >
            🌱 GreenFuture
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Call to Action Button */}
        <a
          href="#donate"
          className="hidden md:inline-block bg-white text-green-500 px-6 py-2 rounded-full shadow-md font-bold hover:bg-gray-200 transition duration-300"
        >
          Donate
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-green-600">
          <ul className="flex flex-col space-y-2 px-4 py-2 text-lg">
            <li>
              <a
                href="#home"
                className="block hover:text-gray-200 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:text-gray-200 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block hover:text-gray-200 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-gray-200 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#donate"
                className="block bg-white text-green-500 text-center px-6 py-2 rounded-full shadow-md font-bold hover:bg-gray-200 transition duration-300"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
