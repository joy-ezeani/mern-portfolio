import React from "react";
import { skills } from "../constant";

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center z-1">
      <div className="flex ml-1 lg:ml-5 flex-col w-[100%] max-w-6xl gap-3 ">
        <div className="w-[100%] flex flex-wrap mt-3 gap-3 justify-center ">
          {skills.map((skill) => (
            <div className="w-[100%] max-w-sm md:max-w-md lg:max-w-lg border-1 border-bgother rounded-2xl py-1 px-2 lg:py-3.5 lg:px-8 shadow-[rgba(28,130,28,0.2)_0px_4px_24px]">
              <h2 className=" font-semibold mb-2 justify-center">
                {skill.title}
              </h2>
              <div className=" text-sm flex h-[100px] lg:h-fit w-fit text-xs justify-center gap-1 lg:gap-2 font-sm  py-1 px-px md:py-1.5 md:px-2.5 lg:py-2.5 lg:3.5">
                {skill.skills.map((item) => (
                  <div className="flex justify-center flex-wrap lg:gap-2 gap-1 mb-2">
                    <img src={item.image} className="w-[24px] h-[24px]" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
