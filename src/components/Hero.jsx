import React from "react";
import {
  Trucks,
  Trip,
  OurStory,
  ChooseUs,
  Optimize,
  Footer,
} from "../components";
import { images } from "../constants";

export const Hero = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="info main-txt pt-28">
          <h1 className="text-9xl w-10 -mt-16">
            Your Trusted Dispatch Service
          </h1>
        </div>
        <div className="plans-text flex justify-center items-center text-white font-bold">
          <h2 className="text-3xl w-72">Your plan, Our Commitment</h2>
        </div>
        <div className="plans mb-6 flex justify-between items-center border-b-2 border-gray-200 border-opacity-60 pb-10">
          <h1 className="rates text-3xl text-start">Our Rates</h1>
          <img
            src={images.arrowRight}
            alt="Right Arrow"
            width={40}
            loading="lazy"
          />
        </div>
      </div>
      <div className="trucks">
        <div className="content">
          <Trucks
            truck1={images.truck1}
            truck2={images.truck2}
            truck3={images.truck3}
          />
        </div>
      </div>
      <div className="trip__container">
        <Trip />
      </div>
      <div className="our__story">
        <OurStory storyIMG={images.storyIMG} />
      </div>
      <div className="choose__us">
        <ChooseUs tImg={images.tickIMG} bigImg={images.chooseUs} />
      </div>
      <div className="optimization">
        <Optimize />
      </div>
      <Footer />
    </div>
  );
};
