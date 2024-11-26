import React from "react";

const ContentArea = () => {
  return (
    <div className="w-full md:w-8/12 lg:w-5.5/10 relative">
      <div className="relative lg:pr-15 lg:pb-23 bg-green rounded-br-80 lg:rounded-br-100">
        <div className="mx-auto md:mx-0 py-10 px-5 lg:py-0 lg:pl-8 lg:pr-0">
          <h1 className="text-white text-3xl lg:text-5xl mb-2.5 lg:mb-5">
            Let's Get Planting
          </h1>
          <div className="text-white text-base md:text-xl font-medium">
            <p>
              Break the cycle of hunger, poverty, and environmental destruction.
              With your help, Trees for the Future (TREES) restores landscapes
              in developing communities.
            </p>
          </div>
          <div className="mt-8 lg:mt-13.75">
            <a
              href="https://donate.trees.org/-/XVHKPSKR"
              target="_blank"
              rel="noreferrer"
              className="text-white inline-flex items-center group no-underline"
            >
              <span className="font-bold uppercase flex flex-col relative text-base">
                Give Today
              </span>
              <span className="flex items-center justify-center rounded-full border-current group-hover:bg-orange-600 ml-4">
                <svg
                  className="text-current w-full h-full"
                  width="17"
                  height="15"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
