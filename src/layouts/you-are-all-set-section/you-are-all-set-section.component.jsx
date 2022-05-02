import React from "react";
import ParagraphItem from "../../components/paragraph-item/paragraph-item.component";
import "./you-are-all-set-section.styles.scss";

const YouAreAllSetSection = () => {
  return (
    <div className="you-are-all-set-section-container">
      <div className="max-width-3 paragraph-item-container-2">
        <div className="paragraph-item-wrapper">
          <ParagraphItem
            paragraphTitle="You’re all set."
            paragraphContent="The wise man therefore always holds in these matters to this principle of selection."
          />
        </div>
      </div>
      <div className="background light-red-3"></div>
      <div className="background astronout-3"></div>
    </div>
  );
};

export default YouAreAllSetSection;
