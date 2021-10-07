import React from "react";

const Hero1 = () => {
  return (
    <section
      style={{
        backgroundImage: `url("https://medipoint.qodeinteractive.com/wp-content/uploads/2017/05/Main-Home-Slider-3-1.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "550px",
      }}
      className="text-coolGray-100 "
    >
      <div className="container flex flex-col justify-center p-6 mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-bold leading-none text-white sm:text-5xl">
            For a healthy life keep your
            <span className="text-indigo-400"> friends</span>, family, and
            doctor close.
          </h1>
          <p className="mt-6 mb-8 text-lg text-gray-300 sm:mb-12">
            Where Compassion and Healing Come Together.
            <br className="hidden md:inline lg:hidden" /> Uncompromising
            Excellence. Commitment to Care.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold text-white bg-indigo-500 rounded hover:bg-indigo-600"
            >
              See a Doctor
            </a>
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold text-indigo-200 border border-purple-300 rounded hover:border-indigo-500"
            >
              Vaccine Registration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
