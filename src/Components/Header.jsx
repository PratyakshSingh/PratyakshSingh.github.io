import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 mx-auto sm:flex items-center justify-between px-8 py-4 bg-base-100/50">
      <div className="max-w-12">
        <img src="./src/assests/logo.png" alt="Logo" />
      </div>
      <div>
        <ul className="hidden sm:flex gap-4 lg:gap-6">
          <li className="hover:text-blue-600">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#projects">Projects</a>
          </li>
          <div className="tooltip tooltip-bottom" data-tip="Coming Soon">
            <li className="hover:text-blue-600">
              <a href="#">Blog</a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
