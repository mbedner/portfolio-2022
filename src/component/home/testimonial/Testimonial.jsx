import React from "react";
import {
  RiMailOpenFill,
  RiStarFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import SingleTestimonial from "./SingleTestimonial";

const Testimonial = () => {
  return (
    <div className="border-t border-slate-200">
      <div className="bg-white overflow-hidden md:py-20 py-14 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative container">
          <div className="flex lg:justify-between m-auto lg:flex-row flex-col">
            <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-3xl max-w-3xl mb-4 capitalize">
              What others say about working with me
            </h2>
            <div>
              <a
                className="border border-slate-300 bg-white shadow-sm rounded-lg text-slate-800 font-semibold transition inline-flex items-center gap-2 text-sm leading-6 hover:bg-slate-50 hover:border-slate-400 py-2 px-4"
                href="#portfolio"
              >
                <RiMailOpenFill className="text-slate-400 text-lg" />
                Contact Me
              </a>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-7 gap-12 mt-12">
            <div className="lg:col-span-4 flex items-left flex-col lg:justify-center justify-start lg:mb-0 mb-6 lg:p-0 p-5 bg-white lg:shadow-none shadow-sm lg:rounded-none rounded-xl lg:border-none border border-slate-300">
              <p className="lg:text-xl text-slate-500 lg:pt-0 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="lg:mt-6 lg:order-last order-first">
                <p className="font-bold text-slate-800">Person Name</p>
                <p className="text-slate-800 mb-1">Person title</p>
                <div className="flex gap-2 items-center">
                  <div className="flex text-yellow-500 text-lg">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                  </div>
                  <div className="bg-teal-100 px-2 pl-1 rounded-full text-teal-600 font-bold gap-1 inline-flex items-center justify-center">
                    <span className="text-sm">
                      <RiCheckboxCircleFill />
                    </span>
                    <span className="text-sm">Former Coworker</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-6">
              <SingleTestimonial />
              <SingleTestimonial />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
