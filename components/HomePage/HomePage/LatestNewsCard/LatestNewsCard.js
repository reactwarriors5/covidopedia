import React from "react";

const LatestNewsCard = ({ newsArticle }) => {
  return (
    <div>
      <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
        <a href={newsArticle.url}>
          <div className="flex-shrink-0">
            <img
              className="object-cover w-full h-48 rounded-lg"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
        </a>
        <div className="flex flex-col justify-between flex-1">
          <div className="flex-1">
            <div className="flex pt-6 space-x-1 text-sm text-gray-400">
              <time datetime="2020-03-10"> Mar 10, 2020 </time>
              <span aria-hidden="true"> · </span>
              <span> 4 min read </span>
            </div>

            <div className="block mt-3">
              <h3 className="text-xl font-bold leading-8 tracking-wider text-red-700 uppercase line-clamp-2">
                {newsArticle.title}{" "}
              </h3>
              <span className="block my-2">
                {" "}
                <a
                  href={newsArticle.url}
                  className="text-lg font-semibold text-indigo-700"
                >
                  Read More..
                </a>{" "}
              </span>
              <p className="text-lg font-normal text-gray-400 ">
                Source : {newsArticle.source}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsCard;
