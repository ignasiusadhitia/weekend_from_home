import React from "react";
import CarouselSection from "../carousel-section/carousel-section.component";

import "./testimonial-section.styles.scss";

const TestimonialSection = () => {
  return (
    <div className="testimonial-container">
      <div className="max-width-2 testimonial-wrapper">
        <h2 className="testimonial-heading">Testimonial</h2>
        <div className="testimonial-slider">
          <CarouselSection />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
