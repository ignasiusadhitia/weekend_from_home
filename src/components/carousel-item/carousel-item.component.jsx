import React from "react";
import "./carousel-item.styles.scss";

const CarouselItem = ({ carouselItemTitle, carouselItemParagraph }) => {
  return (
    <div className="carousel-item-container">
      <div className="carousel-item-title-wrapper">
        <h2>{carouselItemTitle}</h2>
      </div>
      <div className="regular-1 carousel-item-paragraph-wrapper">
        {carouselItemParagraph}
      </div>
    </div>
  );
};

export default CarouselItem;
