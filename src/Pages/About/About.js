import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <hr />
      <p>
        I am a <b>MERN stack developer</b>. I am a passionate, meticulous and
        hardworking individual and I love working in a collaborative
        environment. I am always ready and excited to have new experiences, meet
        new people and learn new things. I find the idea of creating value for
        people and for society through my work extremely gratifying.
      </p>
      <p>
        <b>Resume Link</b> :
        <a
          style={{ color: "black" }}
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1Q7OssskW9YU-VZ2sST6cTZ0LuNCvfGNm/view?usp=sharing"
        >
          Click Here
        </a>
      </p>
      <p>
        <b>LinkedIN Profile: </b>
        <a
          style={{ color: "black" }}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/pratyaksh-singh-038662174/"
        >
          Click Here
        </a>
      </p>
      <p>
        <b>GitHub Profile: </b>
        <a
          style={{ color: "black" }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/PratyakshSingh"
        >
          Click Here
        </a>
      </p>
    </div>
  );
};

export default About;
