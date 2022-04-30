import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ buttonText }) => {
  return (
    <div>
      <button className="custom-button">{buttonText}</button>
    </div>
  );
};

export default CustomButton;
