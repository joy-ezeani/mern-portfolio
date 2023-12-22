import React, { useState } from "react";
{
  ScrollReveal({
    reset: true,
    distance: "600px",
    duration: 2500,
    delay: 400,
  });

  ScrollReveal().reveal(".card-animate", { delay: 900, origin: "right" });
}

//
const Card = ({ iconClass, iconClass2, iconClass3, title, description }) => {
  return (
    <div className="card-animate card  h-fit w-fit text-center p-8 rounded-2xl bg-bgother m-3 ">
      <i className={iconClass}></i>
      <i className={iconClass2}></i>
      <i className={iconClass3}></i>
      <h3 className="text-xl mb-3 card-title">{title}</h3>
      <div className="card-description">
        <p className="text-l mb-5">{description}</p>
      </div>
    </div>
  );
};

export default Card;
