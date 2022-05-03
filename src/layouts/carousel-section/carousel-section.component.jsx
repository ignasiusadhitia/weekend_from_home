import React, { useEffect, useState } from "react";
import CarouselItem from "../../components/carousel-item/carousel-item.component";
import leftArrow from "../../assets/images/arrow-inactive.svg";
import rightArrow from "../../assets/images/arrow-active.svg";
import "./carousel-section.styles.scss";

const CarouselSection = () => {
  const childrenArray = [0, 1, 2, 3];
  const [currentCarouselItemIndex, setCurrentCarouselItemIndex] = useState(0);
  const [carouselItemsLength, setCarouselItemsLength] = useState(
    childrenArray.length
  );

  useEffect(() => {
    setCarouselItemsLength(childrenArray.length);
  }, [childrenArray]);

  const nextCarouselItem = () => {
    if (currentCarouselItemIndex < carouselItemsLength - 1) {
      setCurrentCarouselItemIndex((prevState) => prevState + 1);
    }
  };

  const previousCarouselItem = () => {
    if (currentCarouselItemIndex > 0) {
      setCurrentCarouselItemIndex((prevState) => prevState - 1);
    }
  };

  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (event) => {
    const touchDown = event.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (event) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = event.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextCarouselItem();
    }

    if (diff < -5) {
      previousCarouselItem();
    }

    setTouchPosition(null);
  };

  return (
    <div className="carousel-section-container">
      <div className="arrow-wrapper">
        <img
          src={leftArrow}
          alt="to the previous carousel item"
          className="arrow"
          onClick={previousCarouselItem}
        />
      </div>
      <div
        className="carousel-item-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className="carousel-item-content"
          style={{
            transform: `translateX(-${currentCarouselItemIndex * 247}px)`,
          }}
        >
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </div>
      </div>

      <div className="arrow-wrapper">
        <img
          src={rightArrow}
          alt="to the next carousel item"
          className="arrow"
          onClick={nextCarouselItem}
        />
      </div>
    </div>
  );
};

export default CarouselSection;
