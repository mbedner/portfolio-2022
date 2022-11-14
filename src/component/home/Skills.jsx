import React from "react";

import { RiPenNibLine, RiLayout3Line, RiFlagLine } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="relative overflow-hidden md:py-20 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col text-left md:justify-start container m-auto">
          <div className="md:flex md:flex-1 flex-col md:pb-12 pb-8">
            <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-3xl max-w-3xl mb-4 capitalize">
              Some of what I'm known for
            </h2>
            <p className="max-w-3xl text-slate-500">
              Given the complexities of today's digital environment, you can't
              be a one trick pony. I've got a well-rounded skillset capable of
              meeting your business objectives.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mb-4">
            <div className="flex md:flex-col gap-4 flex-1">
              <div className="mt-1 h-14 w-14 shrink-0 bg-white border border-slate-300 shadow-sm md:mb-1 rounded-xl text-indigo-500 flex justify-center items-center text-3xl">
                <RiPenNibLine />
              </div>
              <div className="shrink">
                <h3 className="text-slate-800 text-xl font-extrabold md:mb-2 mb-1">
                  Design
                </h3>
                <p className="text-slate-500">
                  With a data-driven approach to product design, I create
                  intuitive apps that maximize visitor interaction.
                </p>
              </div>
            </div>
            <div className="flex md:flex-col gap-4 flex-1">
              <div className="mt-1 h-14 w-14 shrink-0 bg-white border border-slate-300 shadow-sm md:mb-1 rounded-xl text-indigo-500 flex justify-center items-center text-3xl">
                <RiLayout3Line />
              </div>
              <div className="shrink">
                <h3 className="text-slate-800 text-xl font-extrabold md:mb-2 mb-1">
                  Development
                </h3>
                <p className="text-slate-500">
                  Having an eye towards user friendly products, I take projects
                  from prototyping to live product.
                </p>
              </div>
            </div>
            <div className="flex md:flex-col gap-4 flex-1">
              <div className="mt-1 h-14 w-14 shrink-0 bg-white border border-slate-300 shadow-sm md:mb-1 rounded-xl text-indigo-500 flex justify-center items-center text-3xl">
                <RiFlagLine />
              </div>
              <div className="shrink">
                <h3 className="text-slate-800 text-xl font-extrabold md:mb-2 mb-1">
                  Leadership
                </h3>
                <p className="text-slate-500">
                  Pragmatic and hands-on, I take a servant leadership approach
                  to team member growth and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
