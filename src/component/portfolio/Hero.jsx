import React from "react";
import bgImage from "../../assets/home/hero-bg.png";
import { Link } from "react-router-dom";

import {
  RiMailOpenFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiArrowLeftLine,
} from "react-icons/ri";

const Hero = ({ singleProject }) => {
  return (
    <>
      <header className="relative overflow-hidden bg-slate-50 pt-6">
        <img
          alt="light-rays"
          id="hero-bg"
          src={bgImage}
          width="2556"
          height="630"
          className="absolute bottom-0 left-1/2 ml-[-509px] w-[1200px] max-w-none opacity-80 animate-pulse pointer-events-none select-none"
        />
        <div className="absolute inset-0 shadow-[inset 0 -1px 0 rgba(22,27,59,0.04)]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <nav className="relative z-10 flex items-center justify-between container m-auto py-1">
            <Link
              to="/"
              className="flex items-center gap-2 text-slate-500 border border-transparent rounded-lg transition leading-6 hover:bg-slate-900/[0.01] hover:border-slate-400 py-1.5 px-3 -mx-3"
            >
              <RiArrowLeftLine />
              <span className="text-sm tracking-tight">Back</span>
            </Link>
            <div className="flex gap-1">
              <a
                className="border border-transparent rounded-lg text-slate-800 font-semibold transition flex items-center gap-2 text-sm leading-6 hover:bg-slate-900/[0.01] hover:border-slate-400 py-1.5 px-1.5"
                href="https://twitter.com/bedner_mark"
              >
                <RiTwitterFill className="text-slate-400 text-xl" />
              </a>
              <a
                className="border border-transparent rounded-lg text-slate-800 font-semibold transition flex items-center gap-2 text-sm leading-6 hover:bg-slate-900/[0.01] hover:border-slate-400 py-1.5 px-1.5"
                href="https://www.linkedin.com/in/mark-bedner-12413294/"
              >
                <RiLinkedinBoxFill className="text-slate-400 text-xl" />
              </a>
              <a
                className="border border-transparent rounded-lg text-slate-800 font-semibold transition flex items-center gap-2 text-sm leading-6 hover:bg-slate-900/[0.01] hover:border-slate-400 py-1.5 px-1.5"
                href="mailto:bednermb3420@gmail.com"
              >
                <RiMailOpenFill className="text-slate-400 text-xl" />
              </a>
            </div>
          </nav>
          <div className="flex justify-center text-center lg:pt-5 lg:pb-8 container m-auto">
            <div className="flex flex-col py-16 lg:pt-10 lg:pb-16 items-center justify-center max-w-2xl">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-4xl capitalize">
                {/* Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS. */}
                {singleProject.title}
              </h1>
              <div className="order-first flex lg:items-left items-center justify-center gap-2 leading-6 text-slate-500 md:justify-start mb-4">
                {singleProject.projectType}
              </div>
              <div className="mt-12 flex justify-center gap-3 md:justify-start">
                <a
                  className="border border-indigo-500 bg-indigo-400 shadow-inset rounded-lg text-white font-semibold transition flex items-center gap-2 text-sm leading-6 hover:bg-indigo-500 hover:border-indigo-600 py-2 px-4"
                  href="mailto:bednermb3420@gmail.com"
                >
                  <RiMailOpenFill className="text-indigo-100 text-lg" />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
