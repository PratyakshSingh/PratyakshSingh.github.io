import React from "react";

const HomeSection = () => {
  return (
    <main
      id="home"
      className="my-20 overflow-hiddden pb-10 min-h-screen flex flex-col items-center justify-evenly md:min-h-[80vh] pt-0 md:justify-center"
    >
      <div className="flex flex-col gap-8 justify-evenly">
        <h1 className="text-4xl text-center md:text-6xl lg:text-7xl ">
          Pratyaksh Singh
        </h1>
        <div className="flex justify-center mt-8 gap-x-4">
          {/* <button className="sm:text-xl inline-block rounded-lg px-4 py-2 ring-offset-2 ring-2"> */}

          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/174_RA-zQMcPviFmiHRiuOarQBqVsdM4l/view?usp=sharing"
          >
            <button className="btn btn-outline btn-info">Read the CV</button>
          </a>
        </div>
        <div className="flex justify-center gap-10 py-10">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/pratyaksh-singh-038662174/"
          >
            <i
              className="cursor-pointer text-4xl fa fa-linkedin hover:underline"
              aria-hidden="true"
            ></i>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/PratyakshSingh"
          >
            <i
              className="cursor-pointer text-4xl fa fa-github hover:underline"
              aria-hidden="true"
            ></i>
          </a>
          <div className="dropdown dropdown-hover">
            <i className="text-4xl fa fa-file-code hover:underline"></i>
            <ul
              tabIndex={0}
              className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://leetcode.com/pratyaksh_singh/"
                >
                  LeetCode
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeSection;
