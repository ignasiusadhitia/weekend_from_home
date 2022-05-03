import React from "react";
import CarouselItem from "../../components/carousel-item/carousel-item.component";
import leftArrow from "../../assets/images/arrow-inactive.svg";
import rightArrow from "../../assets/images/arrow-active.svg";
import "./carousel-section.styles.scss";

const CarouselSection = () => {
  return (
    <div className="carousel-section-container">
      <div className="arrow-wrapper">
        <img
          src={leftArrow}
          alt="to the previous carousel item"
          className="arrow"
        />
      </div>
      <div className="carousel-item-wrapper">
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </div>

      <div className="arrow-wrapper">
        <img
          src={rightArrow}
          alt="to the next carousel item"
          className="arrow"
        />
      </div>
    </div>
  );
};

export default CarouselSection;
