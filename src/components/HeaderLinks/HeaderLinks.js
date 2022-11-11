import React from "react";
import "./HeaderLinks.css";
import { Link } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <div className="links">
      <Link to="/">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default HeaderLinks;
