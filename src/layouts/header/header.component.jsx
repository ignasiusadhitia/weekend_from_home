import React from "react";
import avatar from "../../assets/images/avatar.svg";

import "./header.styles.scss";

const Header = ({ user }) => {
  return (
    <div className="header-container">
      <div className="max-width-1 header">
        <div className="header-avatar">
          <img src={avatar} alt="user-avatar" />
        </div>
        <div className="header-greeting">
          <h6 className="regular-1">Good Morning</h6>
          <h6 className="bold-2">{(user = "Fellas")}</h6>
        </div>
      </div>
    </div>
  );
};

export default Header;
