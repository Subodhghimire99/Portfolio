import React from "react";
import MainNav from "./mainNav";
import NameAndLogo from "./nameAndLogo";

const Navbar = () => {
  return (
    <div className="flex py-[1rem] w-[100%] px-[2rem]">
      <NameAndLogo />
      <MainNav />
    </div>
  );
};

export default Navbar;
