import React from "react";
import {
  RiMailOpenFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-5 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-2 leading-6 text-slate-500">
            <p className="font-bold">Mark Bedner</p>
            <span>—</span>
            <p className="text-sm">703.477.2608</p>
          </div>
          <div className="flex gap-1 md:ml-0 -ml-2">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
