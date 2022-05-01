import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./hero-section.styles.scss";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="background-wrapper"></div>
      <div className="heading-wrapper">
        <h1>WEEKEND FROM HOME</h1>
        <h3>Stay active with a little workout.</h3>
      </div>
      <div className="astronout-wrapper"></div>
      <CustomButton buttonText="Let's Go" className="custom-button" />
      <div className="light-red-background-wrapper"></div>
      <div className="astronout-wrapper-2"></div>
      <div className="quote-wrapper"></div>
    </div>
  );
};

export default HeroSection;
