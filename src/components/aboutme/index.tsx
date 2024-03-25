import React from "react";
import "./styles.css";

const AboutMe = () => {
  return (
    <div className="mt-[2rem] w-[100%] rounded-md bg-[#1a1a1aa9] relative py-[1rem] px-[2rem]">
      <p className="w-[100%] text-center text-title1 text-[#989899] greeting">
        Namaskar&nbsp;!
      </p>
      <div className="w-[100%] flex items-center justify-around mt-[1rem]">
        <p className="w-[70%] text-center text-title2 leading-relaxed text-[#989899] aboutMe">
          Born and raised in Nepal with a strong affinity for technology and a
          passion for overcoming challenges. I excel in group dynamics, where my
          love for problem-solving shines brightest. Together, let's embark on a
          journey of exploration and innovation.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
