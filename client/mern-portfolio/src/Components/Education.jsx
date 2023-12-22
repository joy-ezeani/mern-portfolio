import React from "react";
import Resumecard from "./Resumecard";

const Education = () => {
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2">
      <div className="education">
        <h2 className="ml-1 lg:ml-4 text-xl lg:text-2xl">Education</h2>
        <Resumecard
          title=" BSc International Relations"
          year="2016- 2019"
          organisation="Ecole Technicien Superieur du Benin"
        />
        <Resumecard
          title=" SSCE"
          year="2014"
          organisation="Bukkris Adeola Comprehensive College"
        />
      </div>
      <div className="certification">
        <h2 className="text-xl lg:text-2xl ml-1 lg:ml-4">Certification</h2>
        <Resumecard
          title=" Diploma in Full-Stack Web Developement"
          year="2022"
          organisation="Sulphil Tech Hub"
        />
        <Resumecard
          title=" 2023 Web Development Bootcamp"
          year="2023"
          organisation="Udemy"
        />
        <Resumecard
          title=" 2023 Node Js Course"
          year="2023"
          organisation="Udemy"
        />
      </div>
    </div>
  );
};

export default Education;
