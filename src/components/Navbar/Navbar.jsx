import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white py-4 px-6 lg:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          TreeFuture
        </a>

        {/* Menu */}
        <ul className="hidden lg:flex space-x-6 text-sm uppercase font-medium">
          <li>
            <a href="/why-trees" className="hover:text-green-300">
              Why Trees
            </a>
          </li>
          <li>
            <a href="/our-work" className="hover:text-green-300">
              Our Work
            </a>
          </li>
          <li>
            <a href="/about-us" className="hover:text-green-300">
              About Us
            </a>
          </li>
        </ul>

        {/* Call-to-Action */}
        <a
          href="/donate"
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm"
        >
          Donate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
