import React from "react";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <HeaderLinks />
      <div className="heading">
        <h1>Pratyaksh Singh</h1>
      </div>
    </div>
  );
};

export default Header;
