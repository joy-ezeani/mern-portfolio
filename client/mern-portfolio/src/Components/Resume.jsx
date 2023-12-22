import React from "react";
import Tab from "./Tab.jsx";

const Resume = () => {
  {
    ScrollReveal({
      reset: true,
      distance: "600px",
      duration: 2500,
      delay: 400,
    });

    ScrollReveal().reveal(".resume-animate", { delay: 500, origin: "top" });
  }

  return (
    <section
      id="resume"
      className="resume-animate resume border-t-4 border-bgother"
    >
      <h2 className="title m-0">
        My <span className="span2">Resume</span>
      </h2>
      <Tab />
    </section>
  );
};

export default Resume;
