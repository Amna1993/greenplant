import React from "react";

const LearnMoreButton = ({ link }) => {
  return (
    <a
      className="py-5 px-11 lg:py-5 lg:px-[50px] bg-green-100 hover:bg-opacity-80 inline-block text-base font-bold rounded-full text-green uppercase transition-all"
      href={link}
      target="_self"
      title="Learn More"
    >
      Learn More
    </a>
  );
};

export default LearnMoreButton;
