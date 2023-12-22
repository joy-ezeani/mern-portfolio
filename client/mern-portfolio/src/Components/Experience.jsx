import React from "react";
import Resumecard from "./Resumecard";

const Experience = () => {
  return (
    <div className="p-2 lg:p-7 border-2 border-bgother rounded m-5">
      <Resumecard
        title=" Web Developer & Social Media Manager"
        year="10th June- Present"
        organisation="Cotonou International School"
        description="Design, create, maintain websites and web applications and in charge
            of creating and executing social media strategies to enhance the
            organization's online presence. which includes content creation,
            scheduling, and posting on various social platforms, community
            engagement, and monitoring analytics to track the effectiveness of
            campaigns."
      />

      <Resumecard
        title=" Remote Intern Web Developer"
        year=" January- May 2023"
        organisation="Sulphil Tech Hub"
        description="Design, create, maintain websites and web applications and in charge
            of creating and executing social media strategies to enhance the
            organization's online presence. which includes content creation,
            scheduling, and posting on various social platforms, community
            engagement, and monitoring analytics to track the effectiveness of
            campaigns."
      />
    </div>
  );
};

export default Experience;
