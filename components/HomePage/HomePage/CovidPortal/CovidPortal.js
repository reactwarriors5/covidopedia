import React, { useState, useEffect } from "react";
import Link from "next/link";

const CovidPortal = () => {
  const [worldData, setWorldData] = useState([]);

  var axios = require("axios").default;

  useEffect(() => {
    var worldDataApi = {
      method: "GET",
      url: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "b91d9f84a8msh2642ac41af9ea65p10f9e8jsne5282dd8860f",
      },
    };
    axios
      .request(worldDataApi)
      .then(function (response) {
        setWorldData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <section className="my-16">
      <div className="container">
        {/* main contents */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-red-400 rounded-full text-red-50">
                What's new
              </p>
            </div>
            <h3 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-indigo-800 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-indigo-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="d9d7687a-355f-4502-8ec4-7945db034688"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">COVID-19</span>
              </span>{" "}
              PORTAL
            </h3>
            <p className="font-mono text-xl font-semibold text-gray-600">
              Get Real-time News & Stay Updated Daily
            </p>
          </div>
          <div className="grid gap-12 my-24 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-3 text-center duration-300 transform bg-indigo-800 rounded shadow-sm hover:-translate-y-2">
              <h6 className="my-6 text-2xl font-bold leading-5 text-indigo-100 uppercase">
                Total Cases
              </h6>
              <p className="text-lg font-semibold text-white">
                {worldData.total_cases}
              </p>
            </div>
            <div className="p-3 text-center duration-300 transform bg-indigo-800 rounded shadow-sm hover:-translate-y-2">
              <h6 className="my-6 text-2xl font-bold leading-5 text-indigo-100 uppercase">
                Active Cases
              </h6>
              <p className="text-lg font-semibold text-white">
                {worldData.active_cases}
              </p>
            </div>
            <div className="p-3 text-center duration-300 transform bg-indigo-800 rounded shadow-sm hover:-translate-y-2">
              <h6 className="my-6 text-2xl font-bold leading-5 text-indigo-100 uppercase">
                Total Deaths
              </h6>
              <p className="text-lg font-semibold text-white">
                {worldData.total_deaths}
              </p>
            </div>
            <div className="p-3 text-center duration-300 transform bg-indigo-800 rounded shadow-sm hover:-translate-y-2">
              <h6 className="my-6 text-2xl font-bold leading-5 text-indigo-100 uppercase">
                Total Recovered
              </h6>
              <p className="text-lg font-semibold text-white">
                {worldData.total_recovered}
              </p>
            </div>
          </div>

          {/* btn section */}
          <div className="text-center">
            <button className="btn-brand-alt">
              <Link href="/">
                <a className="text-indigo-100 hover:text-white">
                  {" "}
                  Explore more
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CovidPortal;
