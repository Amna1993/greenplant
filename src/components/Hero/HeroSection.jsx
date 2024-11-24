import React from 'react';
import heroImage1 from '../../assets/hero1.jpg';
import heroImage2 from '../../assets/hero2.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden">
      {/* First Image (Left) */}
      <div className="relative w-full md:w-3/5 h-1/2 md:h-4/5 z-20">
        <img
          src={heroImage1}
          alt="Empower Communities"
          className="w-full h-full object-cover rounded-br-[10%] transform transition-transform duration-1000 hover:scale-105 animate-slideInLeft"
        />
        <div className="absolute"></div>
        <div className="absolute bottom-10 left-10 text-white z-30">
          <h2 className="text-4xl font-extrabold drop-shadow-lg">Empower Communities</h2>
          <p className="mt-2 text-lg drop-shadow-md">Join us in making a difference.</p>
        </div>
      </div>

      {/* Second Image (Right) */}
      <div className="relative w-full md:w-3/5 h-1/2 md:h-full z-10">
        <img
          src={heroImage2}
          alt="Plant a Tree Today"
          className="w-full h-full object-cover rounded-bl-[10%] transform transition-transform duration-1000 hover:scale-105 animate-slideInRight"
        />
        <div className="absolute"></div>
        <div className="absolute top-10 right-10 text-white z-20">
          <h2 className="text-4xl font-extrabold drop-shadow-lg">Plant a Tree Today</h2>
          <p className="mt-2 text-lg drop-shadow-md">Your contribution matters.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
