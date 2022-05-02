import React from "react";
import "./help-and-tips-section.styles.scss";

const HelpAndTipsSection = () => {
  return (
    <div className="help-and-tips-container">
      <div className="max-width-2 help-and-tips-wrapper">
        <h2 className="help-and-tips-heading">Help & Tips</h2>
        <div className="help-and-tips-posts-list"></div>
      </div>
      <div className="background light-red-2"></div>
    </div>
  );
};

export default HelpAndTipsSection;
