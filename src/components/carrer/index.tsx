import React, { useEffect, useState } from "react";
import "./styles.css";
import Image from "next/image";

const Carrer = async () => {
  //   const openWeatherAPI = "39dd1ad52b270b7f16b13dbe4d00f87e";
  //   const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=27.7172&lon=85.300140&appid=${openWeatherAPI}`;
  //   const weatherData = await fetch("https://www.google.com").then((response) =>
  //     console.log(response)
  //   );
  //   console.log(weatherData);

  const timeLineData = {
    work: [
      {
        title: "Wipro Limited",
        image: "/assets/wipro.svg",
        location: "Hyderabad,Telangana, India",
        start_date: "01/2022",
        end_date: "present",
        role: "Project Engineer",
        techUsed: "React Js, Next Js, JavaScript",
        achievements: [""],
        description:
          "I have been working with React js and also as QA Engineer",
      },
      {
        title: "Octagon Infotech",
        location: "Panipokhari, Kathmandu, Nepal",
        image: "/assets/naxa.jpeg",
        start_date: "07/2023",
        end_date: "01/2024",
        role: "Frontend Developer",
        techUsed: "React Js, Next Js, TypeScript",
        achievements: ["Web Development", "Data Visualization"],
        description:
          "Worked in two e-commerce websites of Nepal, brushed up my skills on Next Js and TypeScript",
      },
      {
        title: "Naxa Nepal",
        location: "Baluwatar, Kathmandu, Nepal",
        image: "/assets/naxa.jpeg",
        start_date: "01/2023",
        end_date: "06/2023",
        role: "Frontend Developer",
        techUsed: "React Js, Next Js, TypeScript",
        achievements: ["Web Development", "Data Visualization", "GIS Mapping"],
        description:
          "Worked in two government projects as junior developer, got to learn more about web devlopment and teamwork",
      },
    ],
  };
  return (
    <div className="mt-[2rem]">
      <div className="w-[100%] flex items-center justify-around">
        <p className="underline underline-offset-[10px] text-largeTitle font-semibold">
          My Career
        </p>
      </div>
      <div className="flex items-center justify-around mb-[6rem]">
        <div className="mt-[2rem] flex flex-col gap-[1rem] relative w-[80%]">
          {timeLineData.work.map((item, index) => {
            return (
              <div
                key={index}
                className={`timeLineCard rounded-lg bg-card w-[48%] flex flex-col gap-[0.5rem] px-[2rem] py-[1rem] ${
                  index % 2 === 0 ? "even" : "odd translate-x-[100%]"
                }`}
              >
                <div className="flex justify-between w-[100%]">
                  <div className="flex items-center gap-[1rem] w-[48%]">
                    <p className="text-title2 font-semibold ">{item.title}</p>
                    <div className="relative w-[24px] h-[24px]">
                      <Image
                        className="object-contain"
                        fill
                        src={item.image}
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <p>
                      {item.start_date}&nbsp;-&nbsp;{item.end_date}
                    </p>
                    <p className="text-[#5A5A5E]">{item.location}</p>
                  </div>
                </div>
                <div className="">
                  <p>{item.techUsed}</p>
                </div>
                <div className="">
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carrer;
