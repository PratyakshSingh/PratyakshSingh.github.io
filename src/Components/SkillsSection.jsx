import React from "react";

const SkillsSection = () => {
  const skills = [
    {
      name: "C++",
      rating: 8,
    },
    {
      name: "Java",
      rating: 8,
    },
    {
      name: "Data Structures and Algorithms",
      rating: 7,
    },
    {
      name: "Html",
      rating: 8,
    },
    {
      name: "CSS",
      rating: 8,
    },
    {
      name: "Javascript",
      rating: 9,
    },
    {
      name: "TypeScript",
      rating: 8,
    },
    {
      name: "Reactjs",
      rating: 9,
    },
    {
      name: "Nodejs",
      rating: 8,
    },
    {
      name: "Databases & SQL",
      rating: 7,
    },
    {
      name: "MongoDB",
      rating: 8,
    },
    {
      name: "MySQL",
      rating: 8,
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-[90vh] my-4 px-8 py-8 flex flex-col items-center justify-between"
    >
      <h1 className="my-10 text-2xl text-center underline underline-offset-4 md:text-3xl">
        My Skills
      </h1>
      <div className="max-w-[600px] sm:flex flex-wrap items-center justify-start">
        {skills.map((skill) => (
          <div key={skill.name} className="pl-4 my-5 flex flex-col basis-1/2">
            <h1 className="my-2">{skill.name}</h1>
            <progress
              className="progress w-56"
              value={`${skill.rating * 10}`}
              max="100"
            ></progress>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
