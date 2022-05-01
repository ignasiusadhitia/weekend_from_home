import React from "react";
import BottomPageItem from "../../components/bottom-page-item/bottom-page-item";
import "./bottom-page-section.styles.scss";

const BottomPageSection = () => {
  return (
    <div className="bottom-page-container">
      <div className="max-width-2 bottom-page">
        <div className="bottom-page-item-pov">
          <BottomPageItem
            headingTitle="POV"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          />
        </div>

        <div className="bottom-page-item-resource">
          <BottomPageItem
            headingTitle="Resource"
            paragraph="These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best"
          />
        </div>

        <div className="bottom-page-item-help-and-tips">
          <BottomPageItem headingTitle="Help & Tips" />
          <div className="posts-wrapper"></div>
        </div>
        <div className="bottom-page-item-you-are-all-set">
          <BottomPageItem
            headingTitle="You're all set."
            paragraph="The wise man therefore always holds in these matters to this principle of selection."
          />
        </div>
      </div>
      <div className="background light-red-3"></div>
      <div className="background astronout-3"></div>
    </div>
  );
};

export default BottomPageSection;
