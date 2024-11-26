import React, { useState } from "react";

const ProblemCauseSolution = () => {
  const [tab, setTab] = useState("the-problem");

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-10">
        <button
          onClick={() => setTab("the-problem")}
          className={`px-4 py-2 font-bold text-sm uppercase border-b-2 ${
            tab === "the-problem" ? "border-green-500 text-green-600" : "border-gray-300 text-gray-600"
          }`}
        >
          The Problem
        </button>
        <button
          onClick={() => setTab("the-cause")}
          className={`px-4 py-2 font-bold text-sm uppercase border-b-2 ${
            tab === "the-cause" ? "border-green-500 text-green-600" : "border-gray-300 text-gray-600"
          }`}
        >
          The Cause
        </button>
        <button
          onClick={() => setTab("the-solution")}
          className={`px-4 py-2 font-bold text-sm uppercase border-b-2 ${
            tab === "the-solution" ? "border-green-500 text-green-600" : "border-gray-300 text-gray-600"
          }`}
        >
          The Solution
        </button>
      </div>

      {/* Tab Content */}
      <div className="relative">
        {/* The Problem Tab */}
        <div
          className={`items-center flex-wrap relative flex ${
            tab === "the-problem" ? "flex" : "hidden"
          }`}
        >
          <div
            className="transform -translate-x-10 rounded-br-[20%] rounded-tl-[20%] absolute top-0 left-0 w-[45%] h-[37%] md:w-[60%] md:h-[50%] bg-green-100 opacity-30 -z-10"
            aria-hidden="true"
          ></div>

          <div className="w-full md:w-1/2">
            <div className="md:mr-10 lg:mx-20">
              <p className="mb-2 text-green-600 text-base uppercase font-bold">
                The Problem
              </p>
              <h2 className="text-2xl lg:text-4xl">
                Hunger, poverty, and environmental decay
              </h2>
              <p className="mt-4">
                Around the world, landscapes are deteriorating and ecosystems
                are collapsing. The farming families that rely on the land to
                survive are trapped in cycles of hunger and poverty.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:mt-10 md:mb-5">
            <div className="rounded-tr-[20%] md:rounded-tr-[25%] rounded-bl-[20%] md:rounded-bl-[25%] overflow-hidden pb-[63.7%] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  src="https://trees.org/wp-content/uploads/2022/03/Dirt-Blowing-1-2-1024x683.jpg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Cause Tab */}
        <div
          className={`items-center flex-wrap relative flex ${
            tab === "the-cause" ? "flex" : "hidden"
          }`}
        >
          <div
            className="transform -translate-x-10 rounded-br-[20%] rounded-tl-[20%] absolute top-0 left-0 w-[45%] h-[37%] md:w-[60%] md:h-[50%] bg-green-100 opacity-30 -z-10"
            aria-hidden="true"
          ></div>

          <div className="w-full md:w-1/2">
            <div className="md:mr-10 lg:mx-20">
              <p className="mb-2 text-green-600 text-base uppercase font-bold">
                The Cause
              </p>
              <h2 className="text-2xl lg:text-4xl">Unsustainable land use</h2>
              <p className="mt-4">
                Deforestation, soil degradation, and biodiversity loss are all
                tied to our global food system. Farmers are encouraged to clear
                their land of trees and native species, leading to harm to
                people and the planet.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:mt-10 md:mb-5">
            <div className="rounded-tr-[20%] md:rounded-tr-[25%] rounded-bl-[20%] md:rounded-bl-[25%] overflow-hidden pb-[63.7%] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  src="https://trees.org/wp-content/uploads/2022/04/DSC05011-1024x684.jpg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Solution Tab */}
        <div
          className={`items-center flex-wrap relative flex ${
            tab === "the-solution" ? "flex" : "hidden"
          }`}
        >
          <div
            className="transform -translate-x-10 rounded-br-[20%] rounded-tl-[20%] absolute top-0 left-0 w-[45%] h-[37%] md:w-[60%] md:h-[50%] bg-green-100 opacity-30 -z-10"
            aria-hidden="true"
          ></div>

          <div className="w-full md:w-1/2">
            <div className="md:mr-10 lg:mx-20">
              <p className="mb-2 text-green-600 text-base uppercase font-bold">
                The Forest Garden Solution
              </p>
              <h2 className="text-2xl lg:text-4xl">
                Equipping farmers with tools and knowledge
              </h2>
              <p className="mt-4">
                By training farmers in the Forest Garden Approach, we provide
                families with the tools and training they need to ensure they
                can thrive on their land long-term.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:mt-10 md:mb-5">
            <div className="rounded-tr-[20%] md:rounded-tr-[25%] rounded-bl-[20%] md:rounded-bl-[25%] overflow-hidden pb-[63.7%] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  src="https://trees.org/wp-content/uploads/2022/04/man-standing-in-forest-garden-smiling-1024x683.jpg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemCauseSolution;
