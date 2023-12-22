import React, { useState } from "react";

const Resumecard = ({ title, year, organisation, description }) => {
  return (
    <div className="p-1 lg:p-4">
      <div>
        <div className="border-b-2 border-bg1">
          <div className="flex justify-between">
            <h1 className=" ml-1 lg:ml-3 text-md  lg:text-xl text-bg1 mb-1 lg:mb-5">
              {title}
            </h1>
            <h4 className="text-sm lg:text-l text-bg3">{year}</h4>
          </div>
          <h3 className="m-2 lg:m-6 text-bg2 text-sm lg:text-xl">
            {organisation}
          </h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Resumecard;
