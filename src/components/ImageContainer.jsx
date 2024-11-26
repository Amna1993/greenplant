import React from "react";

const ImageContainer = () => {
  return (
    <div className="hidden lg:block w-4.5/10 text-right">
      <div className="lg:absolute w-full lg:w-screen-65 h-82 lg:h-full z-0 right-0 top-0 overflow-hidden rounded-bl-80 lg:rounded-bl-100">
        <img
          src="https://trees.org/wp-content/uploads/2022/10/0N7A8255-PILI-scaled-e1707327214438.jpg"
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
