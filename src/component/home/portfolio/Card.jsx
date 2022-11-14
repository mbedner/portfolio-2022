import React from "react";
import { Link } from "react-router-dom";

const Card = ({ proj }) => {
  return (
    <div className="w-full bg-white shadow-sm rounded-xl border border-slate-300 overflow-hidden">
      <div className="w-full bg-slate-100 aspect-video">
        {proj.screenshot && (
          <img
            src={proj.screenshot}
            alt={proj.name}
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div className="p-4 relative flex flex-col justify-between">
        <div className="w-12 h-12 shadow-lg rounded-full absolute -top-6 bg-white flex items-center justify-center overflow-hidden">
          <img src={proj.img} alt={proj.name} className="h-6 w-auto" />
        </div>
        <div>
          <h3 className="text-slate-800 text-xl font-extrabold md:mb-2 mb-1 mt-4 capitalize">
            {proj.name}
          </h3>
          <p className="text-slate-500 line-clamp-2">{proj.description}</p>
        </div>
        <div>
          <Link
            to={proj.link}
            className="border border-slate-300 bg-white shadow-sm rounded-lg text-slate-800 font-semibold transition items-center gap-2 text-sm leading-6 hover:bg-slate-50 hover:border-slate-400 py-2 px-4 inline-block mt-6"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
