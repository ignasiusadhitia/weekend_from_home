import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import TestimonialSection from "../testimonial-section/testimonial-section.component";

import "./hero-section.styles.scss";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="background main"></div>
      <div className="heading-wrapper">
        <h1 className="p">WEEKEND FROM HOME</h1>
        <p className="p semi-bold-italic">Stay active with a little workout.</p>
      </div>
      <div className="background astronout-1"></div>
      <CustomButton buttonText="Let's Go" className="custom-button" />
      <div className="background light-red-1"></div>
      <div className="background astronout-2"></div>

      <div className="paragraph-wrapper quote-wrapper">
        <div className="max-width-3 medium">
          <p className="text-black">
            <span className="bold-1 text-blue">Deffinition;</span> a practice or
            exercise to test or improve one's fitness for athletic competition,
            ability, or performance to exhaust (something, such as a mine) by
            working to devise, arrange, or achieve by resolving difficulties.
            Merriam-Webster.com Dictionary.
          </p>
          <p className="semi-bold-italic quote-author">-weekend team</p>
        </div>
      </div>
      <div className="background oval"></div>
      <TestimonialSection />
    </div>
  );
};

export default HeroSection;
