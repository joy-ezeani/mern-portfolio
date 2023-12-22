import React from "react";
import Card from "./Card";

{
  ScrollReveal({
    reset: true,
    distance: "600px",
    duration: 2500,
    delay: 400,
  });

  ScrollReveal().reveal(".service-animate", { delay: 800, origin: "left" });
}

const Services = () => {
  return (
    <section className="w-[100%] py-10" id="service">
      <h2 className="title service-animate">
        Our <span className="span2">Services</span>
      </h2>
      <div className=" grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
        <Card
          iconClass="fa-solid fa-code"
          title="Web Design & Development"
          description="We offer expertise in designing and developing websites that are visually appealing, user friendly and optimized for search engines."
        />
        <Card
          iconClass="fa-solid fa-file-shield"
          iconClass2="fa-solid fa-upload"
          title="Website Maintenance"
          description="Our service includes making sure that your website is up-to-date with crucial uploads. We also help to make your website secure and running smoothly."
        />
        <Card
          iconClass="fa-solid fa-desktop"
          iconClass2="fa-solid fa-laptop"
          iconClass3="fa-solid fa-mobile-screen-button"
          title="Responsive Design"
          description="We specialize in creating websites that are optimized for all devices, including desktops, laptops, tablets and mobile phones."
        />
        <Card
          iconClass="fa-solid fa-globe"
          title="Web Hosting"
          description="We offer expertise in hosting both Websites and web Applications at affordable prices."
        />

        <Card
          iconClass="fa-solid fa-server"
          title="Web Application"
          description="We build dynamic web applications with the use of latest frameworks and libraries."
        />
        <Card
          iconClass="fa-solid fa-server"
          title="Social Media Management"
          description="We handle and manage all kinds of social media handles for content creation, advertisement or any other purpose."
        />
      </div>
    </section>
  );
};

export default Services;
