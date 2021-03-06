import React from "react";
import arrowImage from "../../assets/images/arrow-active.svg";
import "./help-and-tips-item.styles.scss";

const HelpAndTipsItem = ({
  helpAndTipsItemImage,
  helpAndTipsItemTitle,
  helpAndTipsItemLink,
}) => {
  return (
    <div className="help-and-tips-item-container">
      <div className="help-and-tips-item-background-image-wrapper">
        <img
          className="help-and-tips-item-background-image-item"
          src={helpAndTipsItemImage}
          alt={helpAndTipsItemTitle}
        />
      </div>
      <div className="help-and-tips-item-title-and-link-wrapper">
        <div className="bold-2 help-and-tips-item-title-wrapper">
          {helpAndTipsItemTitle}
        </div>
        <div className="help-and-tips-item-link-wrapper">
          <img
            src={arrowImage}
            alt={helpAndTipsItemTitle}
            className="arrow-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpAndTipsItem;
