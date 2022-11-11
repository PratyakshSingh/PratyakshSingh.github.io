import React from "react";
import "./Skills.css";
import reactImage from "../../assests/images/react.png";
import htmlIcon from "../../assests/images/html.png";
import cssIcon from "../../assests/images/css.png";
import jsIcon from "../../assests/images/js.png";
import nodeIcon from "../../assests/images/nodejs.png";
import expressIcon from "../../assests/images/express.png";
import mongoIcon from "../../assests/images/mongodb.png";
import reduxIcon from "../../assests/images/redux.png";
import gitIcon from "../../assests/images/git.png";
import cplusIcon from "../../assests/images/cplus.png";

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <h1>My Skills</h1>
      <hr />
      <div className="skills_details">
        <img src={htmlIcon} alt="" loading="lazy" className="icon-card" />
        <img src={cssIcon} alt="" loading="lazy" className="icon-card" />
        <img src={jsIcon} alt="" loading="lazy" className="icon-card" />
        <img src={reactImage} alt="" loading="lazy" className="icon-card" />
        <img src={nodeIcon} alt="" loading="lazy" className="icon-card" />
        <img src={expressIcon} alt="" loading="lazy" className="icon-card" />
        <img src={mongoIcon} alt="" loading="lazy" className="icon-card" />
        <img src={reduxIcon} alt="" loading="lazy" className="icon-card" />
        <img src={gitIcon} alt="" loading="lazy" className="icon-card" />
        <img src={cplusIcon} alt="" loading="lazy" className="icon-card" />
      </div>
    </div>
  );
};

export default Skills;
