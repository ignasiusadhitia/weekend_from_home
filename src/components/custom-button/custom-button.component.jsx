import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ buttonText }) => {
  return (
    <div className="custom-button-container">
      <button className="custom-button">{buttonText}</button>
    </div>
  );
};

export default CustomButton;
