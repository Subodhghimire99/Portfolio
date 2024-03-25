import React from "react";
import "./styles.css";

const MainNav = () => {
  return (
    <div className="w-[100%] flex items-center justify-around text-primary nav-parent">
      <div className="hover:scale-[1.3] duration-[200ms] hover:cursor-pointer px-[2rem] nav-section1">
        skills
      </div>
      <div className="hover:scale-[1.3] duration-[200ms] hover:cursor-pointer px-[2rem] nav-section2">
        projects
      </div>
      <div className="hover:scale-[1.3] duration-[200ms] hover:cursor-pointer px-[2rem] nav-section3">
        carrer
      </div>
      <div className="hover:scale-[1.3] duration-[200ms] hover:cursor-pointer px-[2rem] nav-section4">
        gallery
      </div>
      <div className="hover:scale-[1.3] duration-[200ms] hover:cursor-pointer px-[2rem] nav-section5">
        contact
      </div>
    </div>
  );
};

export default MainNav;
