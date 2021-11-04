import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NewsBanner from "../NewsBanner/NewsBanner";
import LatestNews from "../LatestNews/LatestNews";
import MaskInstructions from "../MaskInstructions/MaskInstructions";

const CovidPortalDetails = () => {
  const [newsArticle, setNewsArticle] = useState([]);
  const [instructions, setInstructions] = useState([]);
  var axios = require("axios").default;

  // latest news articles API //
  useEffect(() => {
    var articles = {
      method: "GET",
      url: "https://covid-19-news2.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "covid-19-news2.p.rapidapi.com",
        "x-rapidapi-key": "b91d9f84a8msh2642ac41af9ea65p10f9e8jsne5282dd8860f",
      },
    };

    axios
      .request(articles)
      .then(function (response) {
        setNewsArticle(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [newsArticle]);

  return (
    <>
      <Navbar />
      <NewsBanner />
      <LatestNews newsArticle={newsArticle} />
      <MaskInstructions />
      <Footer />
    </>
  );
};

export default CovidPortalDetails;
