import React from "react";
import StatCard from "../../src/components/StatsCard";
import LearnMoreButton from "./LearnMoreButton";

const StatsSection = () => {
  return (
    <section className="mt-10 mb-10 bg-black rounded-tr-[80px] rounded-bl-[80px]">
      <div className="container mx-auto pt-10 pb-20 md:pt-19 md:pb-19">
        {/* Heading */}
        <div className="mb-[47px] text-center">
          <div className="text-green-100 uppercase font-bold mb-3">
            By the numbers
          </div>
          <h3 className="md:text-4xl text-white">Helping People &amp; Planet</h3>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-15 lg:gap-25 gap-y-[47px] md:grid-cols-3">
          <StatCard
            icon="🌳"
            number="370,000,000"
            label="Trees Planted"
          />
          <StatCard
            icon="🌍"
            number="41,000"
            label="Acres Restored"
          />
          <StatCard
            icon="👨‍👩‍👧‍👦"
            number="470,000"
            label="People"
          />
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-[60px]">
          <LearnMoreButton link="#" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
