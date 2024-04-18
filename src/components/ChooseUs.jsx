import React from "react";

export const ChooseUs = ({tImg, bigImg}) => {
  return (
    <div className="choose-us">
      <div className="choose__info">
        <h1>Why Choose Us?</h1>
        <div>
          <div className="headings">
            <img src={tImg} alt="Features image" width={21} loading="lazy"/>
            <h2>Customized Solutions</h2>
          </div>
          <p>
            Tailored dispatch services to suit your business requirements and
            optimize operations.
          </p>
        </div>
        <div>
          <div className="headings">
            <img src={tImg} alt="Features image" width={21} loading="lazy"/>
            <h2>24/7 Support</h2>
          </div>
          <p>
            We provide round-the-clock assistance to ensure seamless dispatch
            operations at all times.
          </p>
        </div>
        <div>
          <div className="headings">
            <img src={tImg} alt="Features image" width={21} loading="lazy"/>
            <h2>Customer-Centric Approach</h2>
          </div>
          <p>
            Our dedicated team ensures your satisfaction by putting your
            business needs first.
          </p>
        </div>
      </div>
      <div className="big__image">
        <img src={bigImg} alt="This is my choose us Imge."  loading="lazy"/>
      </div>
    </div>
  );
};
