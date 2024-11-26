import React from "react";

const AboutSection = () => {
  return (
    <section className="mt-0 mb-5">
      <div className="flex flex-wrap">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 md:-mb-15">
          <div className="rounded-bl-[80px] md:rounded-bl-none md:rounded-br-[100px] overflow-hidden h-0 md:h-full xl:h-0 relative pb-[57.67%]">
            <img
              src="https://trees.org/wp-content/uploads/2022/03/EOS_1032-1024x683.jpg"
              alt="About us image"
              className="absolute top-0 left-0 h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 mt-5 md:mt-0">
          <div className="px-4 md:mx-[90px] md:my-[75px] relative">
            {/* Heading */}
            <h2 className="text-2xl md:text-4xl">About Us</h2>
            {/* Description */}
            <p className="text-lg mb-7">
              TREES confronts hunger, poverty, and environmental degradation by
              serving the people at the heart of our global food systems:
              farmers and their families.
            </p>
            {/* Learn More Button */}
            <a
              href="https://trees.org/about-us/"
              title="Learn More"
              className="text-purple inline-flex items-center group no-underline"
            >
              <span className="font-bold uppercase flex flex-col transition-all relative text-base">
                <span className="pb-0.25">Learn More</span>
                <span
                  className="w-0 transition-all rounded-full bg-orange h-1 absolute top-full left-0 group-hover:w-full"
                  aria-hidden="true"
                ></span>
              </span>
              <span className="flex items-center justify-center rounded-full border-current transition-all group-hover:border-orange group-hover:bg-orange group-hover:text-white w-[37px] h-[37px] p-2 border-2 transform group-hover:translate-x-1 ml-4">
                <svg
                  className="text-current w-full h-full"
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.81152 6.62195C1.25924 6.62195 0.811523 7.06966 0.811523 7.62195C0.811523 8.17423 1.25924 8.62195 1.81152 8.62195V6.62195ZM16.1403 8.32906C16.5308 7.93853 16.5308 7.30537 16.1403 6.91484L9.77629 0.55088C9.38577 0.160356 8.7526 0.160356 8.36208 0.55088C7.97155 0.941405 7.97155 1.57457 8.36208 1.96509L14.0189 7.62195L8.36208 13.2788C7.97155 13.6693 7.97155 14.3025 8.36208 14.693C8.7526 15.0835 9.38577 15.0835 9.77629 14.693L16.1403 8.32906ZM1.81152 8.62195H15.4331V6.62195H1.81152V8.62195Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </a>

            {/* Decorative Shape */}
            <div
              className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 bg-gray-100 rounded-br-[80px] md:rounded-br-[100px] w-[30px] md:w-[45.5%] md:h-[38%] -z-10"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
