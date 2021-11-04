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
    <section className="p-4 my-20 text-gray-800 lg:p-8">
      {/* header */}
      <div className="max-w-xl text-center lg:mx-auto lg:max-w-2xl lg:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-red-400 rounded-full text-red-50">
            What's new
          </p>
        </div>
        <h3 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-indigo-800 sm:text-4xl lg:mx-auto">
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
        <p className="mt-12 text-lg text-gray-500 uppercase lg:text-2xl">
          Get Real-time News & Stay Updated Daily
        </p>
      </div>

      {/* main */}
      <section class="overflow-hidden">
        <div class="container p-5 mx-auto lg:p-8 max-w-7xl">
          <div class="flex flex-wrap mx-auto lg:flex-nowrap">
            <a href="">
              <div class="flex w-full">
                <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-xl rounded-xl -translate-x-8 lg:w-80 lg:hover:-translate-x-12 lg:hover:-translate-y-8">
                  <img
                    class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                    src="https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="blog"
                  />
                  <div class="px-6 py-8 mt-2">
                    <span class="text-xs font-semibold text-indigo-500 uppercase">
                      Total Cases
                    </span>
                    <h4 className="text-3xl font-bold">
                      {worldData.total_cases}
                    </h4>

                    <div className="mt-6">
                      <span className="text-xs font-semibold text-red-500 uppercase">
                        New Cases
                      </span>
                      <h4 className="text-3xl font-bold text-red-800">
                        {worldData.new_cases}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div class="flex w-full">
                <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-xl rounded-xl -translate-x-12 lg:w-80 lg:hover:-translate-x-20 lg:hover:-translate-y-8">
                  <img
                    class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                    src="https://images.unsplash.com/photo-1601841197690-6f0838bdb005?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  />
                  <div class="px-6 py-8 mt-2">
                    <span class="text-xs font-semibold text-indigo-500 uppercase">
                      Active Cases
                    </span>
                    <h4 className="text-3xl font-bold">
                      {worldData.active_cases}
                    </h4>

                    <div className="mt-6">
                      <span className="text-xs font-semibold text-red-500 uppercase">
                        Critical Cases
                      </span>
                      <h4 className="text-3xl font-bold text-red-800">
                        {worldData.serious_critical}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div class="flex w-full">
                <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-xl rounded-xl lg:w-80 -translate-x-20 lg:hover:-translate-x-28 lg:hover:-translate-y-8">
                  <img
                    class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                    src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
                  />
                  <div class="px-6 py-8 mt-2">
                    <span class="text-xs font-semibold text-indigo-500 uppercase">
                      Total Recovered
                    </span>
                    <h4 className="text-3xl font-bold">
                      {worldData.total_recovered}
                    </h4>

                    <div className="mt-6">
                      <span className="text-xs font-semibold text-red-500 uppercase">
                        Death Ratio (Per 1M)
                      </span>
                      <h4 className="text-3xl font-bold text-red-800">
                        {worldData.deaths_per_1m_population}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div class="flex w-full">
                <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-xl rounded-xl lg:w-80 -translate-x-24 lg:hover:-translate-x-32 lg:hover:-translate-y-8">
                  <img
                    class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                    src="https://images.unsplash.com/photo-1587351441779-330ae80d3340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
                  />
                  <div class="px-6 py-8 mt-2">
                    <span class="text-xs font-semibold text-indigo-500 uppercase">
                      Total Deaths
                    </span>
                    <h4 className="text-3xl font-bold">
                      {worldData.total_deaths}
                    </h4>

                    <div className="mt-6">
                      <span className="text-xs font-semibold text-red-500 uppercase">
                        New Deaths
                      </span>
                      <h4 className="text-3xl font-bold text-red-800">
                        {worldData.new_deaths}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <br />
      <p className="mt-8 text-xl font-light text-center text-gray-600 uppercase lg:text-2xl">
        Last Updated{"  :"}
        <span className="ml-5 font-normal text-red-700">
          {worldData.statistic_taken_at}
        </span>
      </p>

      {/* btn section */}
      <div className="pt-12 text-center">
        <button className="btn-home">
          <Link href="/covidPortalDetails">
            <a className="text-lg text-white">Explore more{" >>"}</a>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default CovidPortal;
