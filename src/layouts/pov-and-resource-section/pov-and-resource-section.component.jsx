import React from "react";
import ParagraphItem from "../../components/paragraph-item/paragraph-item.component";
import "./pov-and-resource-section.styles.scss";

const POVAndResourceSection = () => {
  return (
    <div className="pov-and-resource-section-container">
      <div className="max-width-3 paragraph-item-container">
        <div className="paragraph-item-wrapper">
          <ParagraphItem
            paragraphTitle="POV"
            paragraphContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </div>
        <div className="paragraph-item-wrapper">
          <ParagraphItem
            paragraphTitle="Resource"
            paragraphContent="These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best"
          />
        </div>
      </div>
    </div>
  );
};

export default POVAndResourceSection;
