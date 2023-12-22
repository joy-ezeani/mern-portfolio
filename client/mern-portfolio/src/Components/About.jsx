import React from "react";
import Socials from "./Socials";

{
  ScrollReveal({
    reset: true,
    distance: "600px",
    duration: 2500,
    delay: 400,
  });

  ScrollReveal().reveal(".about-animate", { delay: 500, origin: "left" });
  ScrollReveal().reveal(".about-head", { delay: 600, origin: "left" });
  ScrollReveal().reveal(".right-div", { delay: 700, origin: "right" });
}

const About = () => {
  return (
    <section
      id="about"
      className=" lg:h-[80vh] flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between items-center mt-10 lg:mt-36 mb-10 lg:mb-26"
    >
      <div className="about-animate flex flex-col gap-5 lg:w-[50%] ml-1 lg:ml-5 pl-1 lg:pl-5 pt-10 md:pt-13 lg:pt-8">
        <h3 className="text-base lg:text-xl about-head">Hello, my name is</h3>
        <h1 className="about-head text-4xl text-bg1 font-[ubuntu] lg:text-5xl ">
          Ezeani Joy N.
        </h1>
        <h2>A full Stack Web Developer</h2>
        <p className="text-sm lg:text-xl">
          I have a proficiency in {""}
          <span className="text-bg2">
            HTML, CSS, BootStrap, JavaScript, JQuery, Tailwind, React, Mongo DB
            and Express
          </span>
          . <br></br>I am able to write clean, well-organized code in these core
          front-end and back-end technologies. I'm conversant with the
          appropriate use of media queries, flexible grids,fluid images, APIs,
          Moongoose to create responsive and functional websites. My design
          works seemlessly accross all major browsers. I pay utmost attention to
          details, deliver swiftly and able to work collaboratively with
          designers, developers and other stakeholders to achieve success.
        </p>
        <Socials />
      </div>
      <div className="right-div">
        <div className="blob bg-cover bg-center-center m-6 w-[80vw] h-[40vh] md:w-[40vw] md:h-[50vh] mr-5 shadow-[0_5px_5px_5px_rgba(250,0,79,0.1)] lg:w-[40vw]"></div>
      </div>
    </section>
  );
};

export default About;
