import React, { useState } from "react";
import Projectcard from "./Projectcard";
import schImg from "../assets/portofolio-img/school-app.png";
import resImg from "../assets/portofolio-img/restuarant-app.png";
import quizImg from "../assets/portofolio-img/quiz-app.png";
import dogImg from "../assets/portofolio-img/dog-site.png";
import todolistImg from "../assets/portofolio-img/to-do-list.png";
import calcImg from "../assets/portofolio-img/calculator-app.png";
import transImg from "../assets/portofolio-img/translator.png";
import bookAppImg from "../assets/portofolio-img/book-app.png";

{
  ScrollReveal({
    reset: true,
    distance: "600px",
    duration: 2500,
    delay: 400,
  });

  ScrollReveal().reveal(".project-animate", { delay: 600, origin: "left" });
}

const Project = () => {
  return (
    <section id="project " className="project-animate">
      <h2 class="title">
        My <span class="span2">Projects</span>
      </h2>
      <div className="project-container">
        <Projectcard
          imgSrc={bookAppImg}
          projectTitle="Book App"
          description="A MERN Stack project that is built on Mongo, Express,React, tailwind CSS and Node JS. It offers functionalities like adding a new book, editing a book, reading a book online and deleting a book from the database"
          link="https://joy-ezeani-book-app.netlify.app"
          Icon="arrow-forward-outline"
        />
        <Projectcard
          imgSrc={todolistImg}
          projectTitle="TO DO LIST"
          description="This is a full stack TO-DO-LIST App that runs on Javascript(Ejs), Node JS and Mongo DB"
          link="https://joy-ezeani-todo-list.onrender.com"
          Icon="arrow-forward-outline"
        />
        <Projectcard
          imgSrc={transImg}
          projectTitle="TRANSLATOR"
          description="This is a full stack TRANSLATION App that utilises APIS and it is built on HTML, CSS and  NODE JS. You can translate any language of choice."
          link="https://joy-ezeani.github.io/Language-Translator/"
          Icon="arrow-forward-outline"
        />
        <Projectcard
          imgSrc={schImg}
          projectTitle="Online Learning Platform"
          description="This is an Online Learning Platform front end project, showing a simple landing page and multiple pages. It is built on HTML, BOOTSTRAP and JavaScript."
          link="https://joy-ezeani.github.io/Great-Mind/"
          Icon="arrow-forward-outline"
        />
        <Projectcard
          imgSrc={resImg}
          projectTitle="Food Ordering Site"
          description="This a front end Food Ordering Landing Page Project built on HTML, CSS and JAVASCRIPT. Libraries like Bootstrap and JQuery were also utilised"
          link="https://joy-ezeani.github.io/foodie-restuarant/"
          Icon="arrow-forward-outline"
        />

        <Projectcard
          imgSrc={quizImg}
          projectTitle="Quiz Website"
          description="This is a Qui App built on HTML, CSS, Javascript. Libraries like BootStrap and Jquery were used as well"
          link="https://joy-ezeani.github.io/Quiz-site/"
          Icon="arrow-forward-outline"
        />

        <Projectcard
          imgSrc={dogImg}
          projectTitle="Dog Purcahse Website"
          description="This is a simple Dog Purchase website built on HTML and CSS."
          link="https://joy-ezeani.github.io/tess-dog/"
          Icon="arrow-forward-outline"
        />

        <Projectcard
          imgSrc={calcImg}
          projectTitle="Calculator"
          description="This is a simple Calculator App built on HTML, BOOTSTRAP and JQUERY"
          link="https://joy-ezeani.github.io/Calculator/"
          Icon="arrow-forward-outline"
        />
      </div>
    </section>
  );
};

export default Project;
