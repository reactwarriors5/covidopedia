import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { Select } from "antd";

import LatestNewsCard from "../LatestNewsCard/LatestNewsCard";
import CountryCard from "../CountryCard/CountryCard";

const LatestNews = ({ newsArticle }) => {
  const [countryData, setCountryData] = useState([]); // state for country data//
  // fetch api for country card -- show dynamic country data
  useEffect(() => {
    var axios = require("axios").default;

    var countryStats = {
      method: "GET",
      url: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "b91d9f84a8msh2642ac41af9ea65p10f9e8jsne5282dd8860f",
      },
    };

    axios
      .request(countryStats)
      .then(function (response) {
        setCountryData(response.data.countries_stat);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [countryData]);
  // /////////////////////////////////////////////////////

  return (
    <section>
      <div className="relative px-5 py-12 items-left md:px-12 lg:px-24 max-w-7xl">
        <div className="lg:flex lg:justify-between">
          {/*country monitor section */}
          <article className="lg:w-2/3 lg:mr-8">
            <div className="pb-2 border-b border-gray-400">
              <h4 className="text-xl font-bold leading-6 tracking-widest text-left text-indigo-700 uppercase">
                {" "}
                Country Monitor
              </h4>
            </div>
            <div className="mx-auto lg:relative max-w-7xl">
              <div className="max-w-lg mx-auto lg:max-w-none">
                {/* country card component */}
                <Carousel autoplay dots={false}>
                  {countryData.map((country, idx) => (
                    <CountryCard country={country} key={idx} />
                  ))}
                </Carousel>
              </div>
            </div>
          </article>
          {/* latest news section */}
          <article className="lg:w-1/3">
            <div className="pb-2 border-b border-gray-400">
              <h4 className="text-xl font-bold leading-6 tracking-widest text-left text-indigo-700 uppercase">
                {" "}
                Latest Articles{" "}
              </h4>
            </div>
            <div className="">
              <div className="max-w-lg mx-auto mt-6 lg:max-w-none">
                {/* latest news card component */}
                <Carousel autoplay dots={false}>
                  {newsArticle.map((newsArticle, idx) => (
                    <LatestNewsCard newsArticle={newsArticle} key={idx} />
                  ))}
                </Carousel>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
