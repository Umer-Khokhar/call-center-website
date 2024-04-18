import React from "react";
import { Features } from "./";
export const OurStory = ({ storyIMG }) => {
  return (
    <div className="story__wrapper">
      <div className="our__story__section">
        <div className="story__image">
          <img src={storyIMG} alt="This is my Story Image!" loading="lazy" />
        </div>
        <div className="story__info">
          <h2>Our Story</h2>
          <p>
            Manha Global Logistics Inc. has been serving trucking companies with
            top-notch dispatch services since 2020. We prioritize efficiency,
            reliability, and customer satisfaction.
          </p>
          <p>
            Founded in 2020 in Delaware, we have quickly become a trusted name
            in the transport industry.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>

      <Features />
      
    </div>
  );
};
