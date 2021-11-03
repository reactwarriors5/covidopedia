import React from "react";
import "antd/dist/antd.css";

const NewsArticle = ({ newsArticle }) => {
  const contentStyle = {
    height: "400px",
    lineHeight: "160px",
    textAlign: "center",
  };
  return (
    <section
      className="bg-center bg-no-repeat bg-cover bg-opacity-90 bg-newsBannerBg"
      style={contentStyle}
    >
      <div className="flex items-center justify-center mx-auto pt-28 lg:pt-36">
        <h3 className="text-xl font-bold tracking-widest text-center text-white uppercase lg:text-3xl">
          {newsArticle.title}
        </h3>
      </div>
      <a href={newsArticle.url}>
        <button
          type="button"
          class="py-3 px-6 animate-bounce bg-gradient-to-r from-green-500 to-blue-700 hover:from-green-700 hover:to-blue-900 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 uppercase tracking-wider rounded-lg "
        >
          Read Full News
        </button>
      </a>
    </section>
  );
};

export default NewsArticle;
