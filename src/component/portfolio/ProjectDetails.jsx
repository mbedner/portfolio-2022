import React from "react";

const ProjectDetails = ({ singleProject }) => {
  return (
    <div className="bg-white overflow-hidden md:py-20 py-14 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="md:flex-row flex-col-reverse flex justify-center text-left items-center container mx-auto gap-12 md:pb-20 pb-12">
          <div className="md:flex-1 md:flex md:mt-0 items-center justify-center pointer-events-none select-none w-full">
            <div className="w-full border border-slate-300 bg-slate-100 rounded-lg overflow-hidden aspect-video">
              {singleProject.challengeImage && (
                <img
                  src={singleProject.challengeImage.asset.url}
                  alt={singleProject.challengeImage.alt}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
          <div className="flex md:flex-1 flex-col">
            <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-3xl mb-4 capitalize">
              The challenge
            </h2>
            <p className="text-slate-500">{singleProject.challenge}</p>
          </div>
        </div>
        <div className="md:flex-row flex-col flex justify-center text-left items-center container mx-auto gap-12 md:py-20 py-14 border-t border-slate-200">
          <div className="flex md:flex-1 flex-col">
            <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-3xl mb-4 capitalize">
              The approach
            </h2>
            <p className="text-slate-500">{singleProject.approach}</p>
          </div>
          <div className="md:flex-1 md:flex md:mt-0 items-center justify-center pointer-events-none select-none w-full">
            <div className="w-full border border-slate-300 bg-slate-100 rounded-lg overflow-hidden aspect-video">
              {singleProject.approachImage && (
                <img
                  src={singleProject.approachImage.asset.url}
                  alt={singleProject.approachImage.alt}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
        <div className="md:flex-row flex-col-reverse flex justify-center text-left items-center container mx-auto gap-12 md:pt-20 pt-12 border-t border-slate-200">
          <div className="md:flex-1 md:flex md:mt-0 items-center justify-center pointer-events-none select-none w-full">
            <div className="w-full border border-slate-300 bg-slate-100 rounded-lg overflow-hidden aspect-video">
              {singleProject.outcomeImage && (
                <img
                  src={singleProject.outcomeImage.asset.url}
                  alt={singleProject.outcomeImage.alt}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
          <div className="flex md:flex-1 flex-col">
            <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-3xl mb-4 capitalize">
              The outcome
            </h2>
            <p className="text-slate-500">{singleProject.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
