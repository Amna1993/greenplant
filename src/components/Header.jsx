import React from "react";

const Header = ({ onToggleMobileNav, mobileNavOpen }) => {
  return (
    <header
      className={`sticky top-0 z-40 bg-white shadow-md ${
        mobileNavOpen ? "translate-y-0" : "lg:-translate-y-full"
      } transition-transform`}
    >
      <div className="container flex items-center justify-between p-4">
        <a href="https://trees.org/" className="text-green-700 font-bold">
          Trees for the Future
        </a>
        <nav className="hidden lg:flex space-x-8">
          <a href="https://trees.org/why-trees/" className="hover:text-green-700">
            Why Trees?
          </a>
          <a href="https://trees.org/our-work/" className="hover:text-green-700">
            Our Work
          </a>
          <a href="https://trees.org/about-us/" className="hover:text-green-700">
            About Us
          </a>
        </nav>
        <div className="lg:hidden">
          <button onClick={onToggleMobileNav} className="p-2 text-green-700">
            {mobileNavOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
