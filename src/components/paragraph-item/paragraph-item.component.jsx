import React from "react";
import "./paragraph-item.styles.scss";

const ParagraphItem = ({ paragraphTitle, paragraphContent }) => {
  return (
    <div className="paragraph-item regular-2">
      <h2>{paragraphTitle}</h2>
      <p className="paragraph-item-padding">{paragraphContent}</p>
    </div>
  );
};

export default ParagraphItem;
