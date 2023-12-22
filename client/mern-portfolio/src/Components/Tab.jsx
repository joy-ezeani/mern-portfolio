// TabComponent.js

import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center p-3 lg:p-10">
        <button
          className={`mx-1 lg:mx-2 px-2 lg:px-4 py-1 lg:py-2  rounded ${
            activeTab === 1 ? "bg-bg1 text-white" : "bg-bgother"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Education
        </button>
        <button
          className={`mx-2 px-2 lg:px-4 py-2 rounded ${
            activeTab === 2 ? "bg-bg1 text-white" : "bg-bgother"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Experience
        </button>
        <button
          className={`mx-2 px-4 py-2  rounded ${
            activeTab === 3 ? "bg-bg1 text-white" : "bg-bgother"
          }`}
          onClick={() => handleTabClick(3)}
        >
          Skiils
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 1 && <Education />}
        {activeTab === 2 && <Experience />}
        {activeTab === 3 && <Skills />}
      </div>
    </div>
  );
};

export default Tab;
