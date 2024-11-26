import React from "react";

const HeroContent = () => {
  return (
    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
        Let's Get Planting
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Break the cycle of hunger, poverty, and environmental destruction. With
        your help, Trees for the Future (TREES) restores landscapes in
        developing communities.
      </p>
      <a
        href="/donate"
        className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md text-lg font-medium"
      >
        Donate Now
      </a>
    </div>
  );
};

export default HeroContent;
