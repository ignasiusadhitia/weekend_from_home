import React from "react";
import "./bottom-page-item.scss";

const BottomPageItem = ({ headingTitle, paragraph }) => {
  return (
    <div className="bottom-page-item regular-2">
      <h2>{headingTitle}</h2>
      <p className="bottom-page-item-paragraph-margin">{paragraph}</p>
    </div>
  );
};

export default BottomPageItem;
