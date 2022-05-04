import React, { useEffect, useState } from "react";
import CarouselItem from "../../components/carousel-item/carousel-item.component";
import leftArrow from "../../assets/images/arrow-inactive.svg";
import rightArrow from "../../assets/images/arrow-active.svg";
import "./carousel-section.styles.scss";
import ErrorItem from "../../components/error-item/error-item.component";
import { getTestimonials } from "../../services/getTestimonials";

const CarouselSection = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [currentCarouselItemIndex, setCurrentCarouselItemIndex] = useState(0);
  const [carouselItemsLength, setCarouselItemsLength] = useState(
    testimonialData.length
  );

  useEffect(() => {
    const fetchTestimonialData = async () => {
      setLoading(true);

      const response = await getTestimonials();

      if (!response) {
        setLoading(false);
        setError(true);

        return;
      }
      setLoading(false);
      setTestimonialData(response.data);
    };

    fetchTestimonialData();
  }, []);

  useEffect(() => {
    setCarouselItemsLength(testimonialData.length);
  }, [testimonialData]);

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
        {currentCarouselItemIndex === 0 ? (
          <img
            src={leftArrow}
            alt="to the previous carousel item"
            className="arrow"
            onClick={previousCarouselItem}
          />
        ) : (
          <img
            src={rightArrow}
            alt="to the previous carousel item"
            className="arrow rotate-arrow arrow-active"
            onClick={previousCarouselItem}
          />
        )}
      </div>
      <div
        className="carousel-item-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {error && <ErrorItem />}
        {!loading && testimonialData.length > 0 && (
          <div
            className="carousel-item-content"
            style={{
              transform: `translateX(-${currentCarouselItemIndex * 255}px)`,
            }}
          >
            {testimonialData.map((testimonialItem, index) => (
              <CarouselItem
                key={index}
                carouselItemTitle={testimonialItem.by}
                carouselItemParagraph={testimonialItem.testimony}
              />
            ))}
          </div>
        )}
      </div>

      <div className="arrow-wrapper">
        {currentCarouselItemIndex === carouselItemsLength - 1 ? (
          <img
            src={leftArrow}
            alt="to the next carousel item"
            className="arrow rotate-arrow"
            onClick={nextCarouselItem}
          />
        ) : (
          <img
            src={rightArrow}
            alt="to the next carousel item"
            className="arrow arrow-active"
            onClick={nextCarouselItem}
          />
        )}
      </div>
    </div>
  );
};

export default CarouselSection;
