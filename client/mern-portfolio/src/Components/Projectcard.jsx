import React, { useState } from "react";

const Projectcard = ({ imgSrc, projectTitle, description, Icon, link }) => {
  return (
    <div>
      <div className="project-card ">
        <img src={imgSrc} alt="" className=" " />
        <div className="project-description">
          <h4 className="">{projectTitle}</h4>
          <p className="">{description}</p>
          <a href={link} className="">
            <ion-icon name={Icon}></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
