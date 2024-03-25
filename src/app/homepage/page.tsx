import React from "react";
import "./styles.css";
import Navbar from "@/components/navbar";
import Carrer from "@/components/carrer";
import AboutMe from "@/components/aboutme";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Carrer />
    </div>
  );
};

export default HomePage;
