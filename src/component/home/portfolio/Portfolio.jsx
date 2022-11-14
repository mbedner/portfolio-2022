import React from "react";
import Card from "./Card";
import portImage from "../../../assets/home/port-bg.png";
import projectData from "../../../data/projectData.json";

const Portfolio = () => {
  const data = projectData;

  return (
    <div
      className="bg-slate-50 overflow-hidden md:py-20 py-14 relative"
      id="projects"
    >
      <img
        alt="light beams background"
        src={portImage}
        width="2556"
        height="630"
        className="absolute top-0 left-1/2 ml-[-509px] w-[1200px] max-w-none opacity-70 animate-pulse pointer-events-none select-none transtion duration-700"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-center text-center container m-auto">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-3xl max-w-3xl mb-4 capitalize">
            A bit of my Recent Work
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:pt-10 pt-6 gap-8 relative">
          {data.map((proj) => (
            <Card proj={proj} key={proj.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
