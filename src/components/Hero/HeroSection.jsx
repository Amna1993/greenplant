import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroContent from "../HeroContent";
import HeroImage from "../HeroImage";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between py-16 px-6 lg:px-12">
        {/* Left Content */}
        <HeroContent />

        {/* Right Image */}
        <HeroImage />
      </div>
    </section>
  );
};

export default HeroSection;
