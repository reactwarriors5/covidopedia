import React from "react";

const Hero2 = () => {
  return (
    <section
      style={{
        backgroundImage: `url("https://medipoint.qodeinteractive.com/wp-content/uploads/2017/05/Main-Home-Slider-2-1.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "550px",
      }}
      className="bg-gray-800 text-coolGray-100 "
    >
      <div className="container flex flex-col justify-center p-6 mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-bold leading-none text-white sm:text-5xl">
            Doctor a designation where
            <span className="text-indigo-400"> passion</span> and profession.
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
              Subscribe
            </a>
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold border border-purple-300 rounded hover:border-indigo-500"
            >
              Be a Patreon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
