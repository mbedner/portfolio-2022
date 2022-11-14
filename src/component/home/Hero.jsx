import React from "react";
import bgImage from "../../assets/home/hero-bg.png";
import shadow from "../../assets/home/shadow.png";

import {
  RiMailOpenFill,
  RiBriefcase4Fill,
  RiTwitterFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <>
      <header className="relative overflow-hidden bg-slate-50 pt-6">
        <img
          alt="light-rays"
          src={bgImage}
          width="2556"
          height="630"
          className="absolute bottom-0 left-1/2 ml-[-509px] w-[1200px] max-w-none opacity-90 animate-pulse pointer-events-none select-none"
        />
        <div className="absolute inset-0 shadow-[inset 0 -1px 0 rgba(22,27,59,0.04)]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <nav className="relative z-10 flex items-center justify-between container m-auto py-1">
            <a href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 bg-white border border-indigo-100 rounded-lg  bg-gradient-to-b from-white via-indigo-50 to-indigo-100"></div>
              <span className="font-bold leading-9 tracking-tight text-xl text-slate-800">
                Mark Bedner
              </span>
            </a>
            <div className="flex gap-1">
              <a
                className="border border-transparent rounded-lg text-slate-800 font-semibold transition flex items-center gap-2 text-sm leading-6 hover:bg-slate-50 hover:border-slate-400 py-1.5 px-1.5"
                href="https://twitter.com/bedner_mark"
              >
                <RiTwitterFill className="text-slate-400 text-xl" />
              </a>
              <a
                className="border border-transparent rounded-lg text-slate-800 font-semibold transition flex items-center gap-2 text-sm leading-6 hover:bg-slate-50 hover:border-slate-400 py-1.5 px-1.5"
                href="https://www.linkedin.com/in/mark-bedner-12413294/"
              >
                <RiLinkedinBoxFill className="text-slate-400 text-xl" />
              </a>
              <a
                className="border border-transparent rounded-lg text-slate-800 font-semibold transition flex items-center gap-2 text-sm leading-6 hover:bg-slate-50 hover:border-slate-400 py-1.5 px-1.5"
                href="mailto:bednermb3420@gmail.com"
              >
                <RiMailOpenFill className="text-slate-400 text-xl" />
              </a>
            </div>
          </nav>
          <div className="flex justify-center text-center lg:text-left lg:pt-5 lg:pb-8 md:text-left md:justify-start container m-auto">
            <div className="flex md:flex-1 flex-col py-16 lg:pt-10 lg:pb-16">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-4xl capitalize">
                Digital Product Designer helping to turn ideas into pixels and
                programs
              </h1>
              <div className="order-first flex lg:items-left items-center justify-center gap-2 leading-6 text-slate-500 md:justify-start mb-4">
                <p>Product Designer</p>
                <span>—</span>
                <p>Frontend Developer</p>
              </div>
              <div className="mt-12 flex justify-center gap-3 md:justify-start">
                <a
                  className="border border-indigo-500 bg-indigo-400 shadow-inset rounded-lg text-white font-semibold transition flex items-center gap-2 text-sm leading-6 hover:bg-indigo-500 hover:border-indigo-600 py-2 px-4"
                  href="mailto:bednermb3420@gmail.com"
                >
                  <RiMailOpenFill className="text-indigo-100 text-lg" />
                  Contact Me
                </a>
                <a
                  className="border border-slate-300 bg-white shadow-sm rounded-lg text-slate-800 font-semibold transition flex items-center gap-2 text-sm leading-6 hover:bg-slate-50 hover:border-slate-400 py-2 px-4"
                  href="#projects"
                >
                  <RiBriefcase4Fill className="text-slate-400 text-lg" />
                  See Work
                </a>
              </div>
            </div>
            <div className="md:flex-1 md:flex"></div>
          </div>
        </div>
      </header>
      <div className="bg-white py-4 border-t border-b border-r-0 border-l-0 border-slate-200 shadow-[0 1px 3px rgba(15,23,42,0.08)] relative">
        <img
          alt=""
          src={shadow}
          className="absolute bottom-[-20px] md:left-1/2 md:ml-[-570px] w-[1140px] -z-10 opacity-60 pointer-events-none select-none"
        />
        <div className="relative z-10 flex items-center justify-between container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left md:justify-start m-auto">
          <div className="relative flex items-center justify-between container m-auto text-slate-500 italic">
            <span className="w-40 leading-5 pr-4 border-r border-slate-300">
              A couple of stops in my career
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
