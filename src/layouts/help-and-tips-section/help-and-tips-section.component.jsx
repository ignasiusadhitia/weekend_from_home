import React, { useEffect, useState } from "react";
import HelpAndTipsItem from "../../components/help-and-tips-item/help-and-tips-item.component";
import "./help-and-tips-section.styles.scss";
import { getHelpAndTips } from "../../services/getHelpAndTips";
import ErrorItem from "../../components/error-item/error-item.component";

const HelpAndTipsSection = () => {
  const [helpAndTipsData, setHelpAndTipsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHelpAndTipsData = async () => {
      setLoading(true);

      const response = await getHelpAndTips();

      if (!response) {
        setLoading(false);
        setError(true);

        return;
      }

      setLoading(false);
      setHelpAndTipsData(response.data);
    };
    fetchHelpAndTipsData();
  }, []);

  return (
    <div className="help-and-tips-container">
      <div className="max-width-2 help-and-tips-wrapper">
        <h2 className="help-and-tips-heading">Help & Tips</h2>
        {error && <ErrorItem />}
        {!loading && helpAndTipsData.length > 0 && (
          <div className="help-and-tips-item-wrapper">
            {helpAndTipsData.map((helpAndTipsItem, index) => (
              <HelpAndTipsItem
                key={index}
                helpAndTipsItemImage={helpAndTipsItem.image}
                helpAndTipsItemTitle={helpAndTipsItem.title}
              />
            ))}
          </div>
        )}
      </div>
      <div className="background light-red-2"></div>
    </div>
  );
};

export default HelpAndTipsSection;
