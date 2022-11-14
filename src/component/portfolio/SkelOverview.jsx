import React from "react";

const Overview = () => {
  return (
    <>
      <div className="bg-white overflow-hidden md:py-20 py-14 relative">
        <div className="md:grid md:grid-cols-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative container md:gap-20 flex flex-col gap-8">
          <div className="col-span-2">
            <div className="border-b border-slate-200 text-slate-500 pb-3 capitalize">
              <div class="animate-pulse  h-4 bg-slate-200 rounded w-40"></div>
            </div>
            <div className="flex md:pt-6 gap-2 flex-wrap pt-4">
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <div className="animate-pulse h-6 w-6 bg-slate-300 rounded"></div>
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <div className="animate-pulse h-6 w-6 bg-slate-300 rounded"></div>
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <div className="animate-pulse h-6 w-6 bg-slate-300 rounded"></div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="text-2xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-3xl mb-4 capitalize">
              <div className="animate-pulse bg-slate-200 h-8 w-[300px] rounded"></div>
            </div>
            <div class="animate-pulse space-y-3">
              <div class="h-4 bg-slate-200 rounded"></div>
              <div class="h-4 bg-slate-200 rounded"></div>
              <div class="h-4 bg-slate-200 rounded"></div>
              <div class="h-4 bg-slate-200 rounded"></div>
              <div class="grid grid-cols-3 gap-4">
                <div class="h-4 bg-slate-200 rounded col-span-2"></div>
              </div>
            </div>
            <div className="w-full border border-slate-300 bg-slate-100 rounded-lg mt-12 overflow-hidden aspect-video"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
