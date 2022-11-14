import React from "react";
import { RiLinkedinBoxFill } from "react-icons/ri";
import profImg from "../../assets/home/headshot.png";
import figma from "../../assets/home/tools/figma.png";
import xd from "../../assets/home/tools/xd.png";
import ai from "../../assets/home/tools/ai.png";
import ps from "../../assets/home/tools/ps.png";
import wp from "../../assets/home/tools/wp.png";
import tw from "../../assets/home/tools/tw.png";
import react from "../../assets/home/tools/react.png";

const About = () => {
  return (
    <div className="bg-white overflow-hidden md:py-20 py-14" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="md:flex-row flex-col-reverse flex justify-center text-left lg:pt-5 lg:pb-8 items-center container m-auto gap-12">
          <div className="md:flex-1 md:flex md:mt-0 items-center justify-center pointer-events-none select-none">
            <img
              alt="profile pic"
              src={profImg}
              className="md:w-5/6 w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="flex md:flex-1 flex-col">
            <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-3xl mb-4 capitalize">
              Hi there, nice to meet you
            </h2>
            <p className="text-slate-500">
              I'm a Design Team Lead for WebstaurantStore, a multibillion dollar
              restaurant supply ecommerce company. Previously, I've worked in
              the agency space, helping clients reshape their digital presense.
              I've also been a Creative Marketer/Product Designer for a Big Data
              company. With a myriad of skills and expertise I've accummlated
              over those roles, I want to help take your design team to the next
              level.
            </p>
            <div className="flex md:pt-6 gap-2 flex-wrap pt-4">
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <img src={figma} alt="figma" className="h-6 w-auto" />
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <img src={xd} alt="figma" className="h-6 w-auto" />
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <img src={ai} alt="figma" className="h-6 w-auto" />
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <img src={ps} alt="figma" className="h-6 w-auto" />
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <img src={wp} alt="figma" className="h-6 w-auto" />
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <img src={tw} alt="figma" className="h-6 w-auto" />
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <img src={react} alt="figma" className="h-6 w-auto" />
              </div>
            </div>
            <div className="mt-10">
              <a
                className="border border-indigo-500 bg-indigo-400 shadow-inset rounded-lg text-white font-semibold transition inline-flex items-center gap-2 text-sm leading-6 hover:bg-indigo-500 hover:border-indigo-600 py-2 px-4"
                href="https://www.linkedin.com/in/mark-bedner-12413294/"
              >
                <RiLinkedinBoxFill className="text-indigo-100 text-lg" />
                My Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
