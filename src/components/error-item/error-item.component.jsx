import React from "react";
import "./error-item.styles.scss";

const ErrorItem = () => {
  return (
    <div className="error-item-container">
      <h4 className="error-item-heading">
        Something went wrong. Please try again later!
      </h4>
    </div>
  );
};

export default ErrorItem;
