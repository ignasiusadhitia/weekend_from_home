import axios from "axios";
import React, { useEffect, useState } from "react";
import HelpAndTipsItem from "../../components/help-and-tips-item/help-and-tips-item.component";

import "./help-and-tips-section.styles.scss";

const HelpAndTipsSection = () => {
  const [helpAndTipsData, setHelpAndTipsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHelpAndTipsData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://wknd-take-home-challenge-api.herokuapp.com/help-tips"
        );
        setHelpAndTipsData(response.data);

        setLoading(false);
      } catch (error) {
        console.error(error);

        setError(true);
        setLoading(false);
      }
    };
    fetchHelpAndTipsData();
  }, []);

  // console.log(helpAndTipsData);

  return (
    <div className="help-and-tips-container">
      <div className="max-width-2 help-and-tips-wrapper">
        <h2 className="help-and-tips-heading">Help & Tips</h2>
        <div className="help-and-tips-item-wrapper">
          {helpAndTipsData.map((helpAndTipsItem, index) => (
            <HelpAndTipsItem
              key={index}
              helpAndTipsItemImage={helpAndTipsItem.image}
              helpAndTipsItemTitle={helpAndTipsItem.title}
            />
          ))}
        </div>
      </div>
      <div className="background light-red-2"></div>
    </div>
  );
};

export default HelpAndTipsSection;
