import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import NewsArticle from "../NewsArticle/NewsArticle";

const NewsBanner = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    var axios = require("axios").default;

    var articles = {
      method: "GET",
      url: "https://covid-19-news2.p.rapidapi.com/news/abcnews",
      headers: {
        "x-rapidapi-host": "covid-19-news2.p.rapidapi.com",
        "x-rapidapi-key": "b91d9f84a8msh2642ac41af9ea65p10f9e8jsne5282dd8860f",
      },
    };

    axios
      .request(articles)
      .then(function (response) {
        setNewsData(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [newsData]);

  return (
    <>
      <Carousel>
        {/* component mapping */}
        {newsData.map((newsArticle, idx) => (
          <NewsArticle newsArticle={newsArticle} key={idx} />
        ))}
      </Carousel>
    </>
  );
};

export default NewsBanner;
