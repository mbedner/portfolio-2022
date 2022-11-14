import React from "react";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Overview = ({ singleProject }) => {
  console.log(singleProject);
  return (
    <>
      <div className="bg-white overflow-hidden md:py-20 py-14 relative">
        <div className="md:grid md:grid-cols-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative container md:gap-20 flex flex-col gap-8">
          <div className="col-span-2">
            <div className="border-b border-slate-200 text-slate-500 pb-3 capitalize">
              Tools used on this project
            </div>
            <div className="flex md:pt-6 gap-2 flex-wrap pt-4">
              {singleProject.toolImages?.map((item, _id) => (
                <div
                  className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center"
                  key={_id}
                >
                  <img src={urlFor(item)} className="h-6 w-auto" alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-4">
            <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-3xl mb-4 capitalize">
              Project Overview
            </h2>
            <p className="text-slate-500">{singleProject.overview}</p>
            <div className="w-full border border-slate-300 bg-slate-100 rounded-lg mt-12 overflow-hidden aspect-video">
              {singleProject.overviewImage && (
                <img
                  src={singleProject.overviewImage.asset.url}
                  alt={singleProject.overviewImage.alt}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
