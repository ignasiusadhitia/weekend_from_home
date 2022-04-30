import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./hero-section.styles.scss";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="heading-container">
        <h1>WEEKEND FROM HOME</h1>
        <h3>Stay active with a little workout.</h3>
      </div>
      <div className="black-background-container"></div>
      <div className="blue-background-container"></div>
      <div className="oval-background-container"></div>
      <div className="light-red-background-container"></div>
      <div className="astronout-container"></div>
      <CustomButton buttonText="Let's Go" className="custom-button" />
    </div>
  );
};

export default HeroSection;
