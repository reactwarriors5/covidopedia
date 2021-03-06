import React from "react";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url("https://medipoint.qodeinteractive.com/wp-content/uploads/2017/05/Main-Home-Slider-1-1.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "550px",
      }}
      className="text-coolGray-100"
    >
      <div className="container flex flex-col justify-center p-6 mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center justify-center p-6 mt-10 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h3 className="ml-12 text-4xl font-bold leading-none text-white lg:ml-0 sm:text-5xl">
            Welcome to
            <span className="font-extrabold text-indigo-200"> COVIDOPEDIA</span>
          </h3>
          <p className="mt-6 mb-8 ml-10 text-lg text-gray-300 lg:ml-0 sm:mb-12">
            Where Compassion and Healing Come Together.
            <br className="hidden md:inline lg:hidden" /> Uncompromising
            Excellence. Commitment to Care.
          </p>
          <div className="flex flex-col mr-0 space-y-4 lg:mr-24 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold text-white bg-indigo-500 rounded"
            >
              See a Doctor
            </a>
            <a
              href="/pharmacy"
              className="px-8 py-3 text-lg font-semibold text-indigo-200 border border-purple-300 rounded hover:border-indigo-500"
            >
              Our Partners
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
