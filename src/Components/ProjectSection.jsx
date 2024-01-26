import React from "react";

const ProjectSection = () => {
  const projects = [
    {
      name: "Movies Popcorn App",
      img: "./src/assests/useMoviesPopcornApp.png",
      liveLink: "https://usemoviespopcorn.netlify.app/",
      videoLink: "",
      githubLink: "https://github.com/PratyakshSingh/useMoviesPopcorn",
      description:
        "This is Movie search app where you can search for your favourite movies and add/remove your favorite movies to the watch list and keep a track of your favourites.",
      technologies: ["HTML", "CSS", "Javascript", "Reactjs", "Context API"],
    },
    {
      name: "Chat Application - MERN",
      img: "./src/assests/ChatAppImage.png",
      liveLink: "",
      videoLink:
        "https://drive.google.com/file/d/1V74foIG4LDLYCBWt3jmgIIRgLW-6kGWT/view?usp=sharing",
      githubLink: "https://github.com/PratyakshSingh/mern-chat-app",
      description:
        "A MERN stack real-time chat application.With this application, users can create their accounts and they can start chatting with other users. It supports both individual and group chats.",
      technologies: [
        "Reactjs",
        "Context API",
        "Nodejs",
        "MongoDB",
        "Express.js",
        "Mongoose",
        "Socket.io",
      ],
    },
    {
      name: "Fitness Club",
      img: "./src/assests/fitnessClubImage.png",
      liveLink: "https://fitness-area.netlify.app/",
      videoLink: "",
      githubLink: "",
      description:
        "A React application that shows data for all the fitness workouts and exercises categorized for the different body parts.",
      technologies: ["HTML", "CSS", "Javascript", "ReactJS"],
    },
    {
      name: "Covid Tracker App",
      img: "./src/assests/covidTrackerImage.png",
      liveLink: "https://covid-19-tracker-8327a.web.app/",
      videoLink: "",
      githubLink: "https://github.com/PratyakshSingh/covid19Tracker1",
      description:
        "Developed a interactive Single page Application that shows real-time data of all the Covid-19 cases all around the world.",
      technologies: ["HTML", "CSS", "Javascript", "React", "Redux"],
    },
    {
      name: "Forkify Recipe App",
      img: "./src/assests/forkifyAppImage.png",
      liveLink: "https://forkify-recipes-pratyaksh.netlify.app/",
      videoLink: "",
      githubLink: "https://github.com/PratyakshSingh/forkify-Recipe-project",
      description:
        "A Vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data.",
      technologies: ["HTML", "CSS", "Javascript"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-[90vh] my-8 px-8 py-8 flex flex-col items-center justify-between"
    >
      <h1 className="my-10 text-2xl text-center underline underline-offset-4 md:text-3xl">
        My Projects
      </h1>
      <div className="max-w-[1000px] sm:flex flex-wrap items-start justify-around">
        {projects.map((project) => (
          <div
            key={project.name}
            className="my-8 sm:max-h-96 card w-96 bg-base-200/50 shadow-sm hover:shadow-xl"
          >
            <figure>
              <img
                className="object-cover h-48"
                src={project.img}
                alt={project.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-md underline underline-offset-3">
                {project.name}
              </h2>
              <p className="text-sm">{project.description}</p>
              <div className="card-actions justify-end ">
                {project.technologies.map((tech) => (
                  <div key={tech} className="text-xs badge badge-info">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 justify-start">
                <span>
                  {project.githubLink.length > 0 && (
                    <button className="mt-2 p-2 btn btn-sm btn-outline btn-info">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.githubLink}
                      >
                        GitHub
                      </a>
                    </button>
                  )}
                </span>
                <span>
                  {project.liveLink.length > 0 && (
                    <button className="mt-2 p-2 btn btn-sm btn-outline btn-info">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.liveLink}
                      >
                        Live
                      </a>
                    </button>
                  )}
                </span>
                <span>
                  {project.videoLink.length > 0 && (
                    <button className="mt-2 p-2 btn btn-sm btn-outline btn-info">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.videoLink}
                      >
                        Video
                      </a>
                    </button>
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
