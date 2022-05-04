import React from "react";

import "./loading-page.styles.scss";

const LoadingPage = () => {
  return (
    <div className="loading-page-container">
      <div className="loading-page-heading-wrapper">
        <h2>WKND.</h2>
      </div>
      <div className="background light-red-shape-wrapper"></div>
    </div>
  );
};

export default LoadingPage;
