import React from "react";

const StatCard = ({ icon, number, label }) => {
  return (
    <div className="text-center">
      {/* Icon */}
      <div className="h-[50px] w-[50px] md:h-[66px] md:w-[66px] mx-auto mb-5 text-green-100">
        <span className="text-4xl">{icon}</span>
      </div>

      {/* Number */}
      <div className="transition-all transform duration-1000 opacity-100">
        <h4 className="text-green-100 text-4xl lg:text-5xl">{number}</h4>
      </div>

      {/* Label */}
      <div className="text-white font-bold mb-3">{label}</div>
      <div className="text-white text-opacity-80 max-w-xs mx-auto"></div>
    </div>
  );
};

export default StatCard;
