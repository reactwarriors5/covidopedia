import React from "react";
import { Carousel } from "antd";
import Hero from "./Hero";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Map from "../Map/Map";

const BannerComp = () => {
  return (
    <Carousel effect="fade">
      <div>
        <Hero />
      </div>
      <div>
        <Map />
      </div>
      <div>
        <Hero1 />
      </div>
    </Carousel>
  );
};

export default BannerComp;
