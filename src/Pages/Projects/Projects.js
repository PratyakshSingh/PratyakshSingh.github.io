import React from "react";
import "./Projects.css";
import socialAppImage from "../../assests/images/socialappimage.png";
import covidTrackerImage from "../../assests/images/covidTrackerImage.png";
import forkifyAppImage from "../../assests/images/forkifyAppImage.png";
import fitnessClubImage from "../../assests/images/fitnessClubImage.png";

const Projects = () => {
  return (
    <div className="projects_details_wrapper">
      <h1>Projects</h1>
      <hr />
      <div className="projects_wrapper">
        <div className="project_wrapper--card">
          <div className="project_icon">
            <img
              src={socialAppImage}
              loading="lazy"
              alt=""
              className="project-icon"
            />
          </div>
          <div className="project_text">
            <h3>Social Media App</h3>
            <ul>
              <li>
                Developed a user interactive website(Single Page Application)
                that lets the authorised user to upload images to their profile,
                update or delete their own posts, update or delete their own
                profiles, like/unlike other users’ images, follow/Unfollow other
                users and comprise of all the basic features such as
                Authentication and Authorization.
              </li>
              <li>
                Technologies Used: MongoDB, ExpressJS, ReactJS, NodeJS, Redux
              </li>
              <li>
                <b>Live link:</b>
                <a
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://social-aapp.herokuapp.com/"
                >
                  Click Here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="project_wrapper--card">
          <div className="project_icon">
            <img
              src={fitnessClubImage}
              loading="lazy"
              alt=""
              className="project-icon"
            />
          </div>
          <div className="project_text">
            <h3>Fitness Club</h3>
            <ul>
              <li>
                Developed a React application that shows data for all the
                fitness workouts and exercises categorized for the different
                body parts.
              </li>
              <li>
                The app shows exercises based on different body parts and
                contains video links to give a video tutorial to the user.
              </li>
              <li>Technologies Used: HTML, CSS, Javascript, ReactJS</li>
              <li>
                <b>Live link:</b>
                <a
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://fitness-area.netlify.app/"
                >
                  Click Here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="project_wrapper--card">
          <div className="project_icon">
            <img
              src={covidTrackerImage}
              loading="lazy"
              alt=""
              className="project-icon"
            />
          </div>
          <div className="project_text">
            <h3>Covid Tracker App</h3>
            <ul>
              <li>
                Developed a interactive Single page Application that shows
                real-time data of all the Covid-19 cases all around the world.
              </li>
              <li>Technologies Used: HTML, CSS, Javascript, React, Redux</li>
              <li>
                <b>Live link:</b>
                <a
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://covid-19-tracker-8327a.web.app/"
                >
                  Click Here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="project_wrapper--card">
          <div className="project_icon">
            <img
              src={forkifyAppImage}
              loading="lazy"
              alt=""
              className="project-icon"
            />
          </div>
          <div className="project_text">
            <h3>Forkify Recipe App</h3>
            <ul>
              <li>
                Developed a Vanilla JavaScript application that interacts with
                the Forkify API to fetch and display recipe food data.
              </li>
              <li>
                Used modern JavaScript tools, such as Webpack to bundle the
                modules, and Babel to convert ES6, ES7 and ES8 back to ES5
              </li>
              <li>
                The user can search for a specific recipe, and save it to
                favorites list via local storage. The user can easily increase
                or decrease servings as per his need and can view detailed
                directions.
              </li>
              <li>Technologies Used: HTML, CSS, Javascript</li>
              <li>
                <b>Live link:</b>
                <a
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://forkify-recipes-pratyaksh.netlify.app/"
                >
                  Click Here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
