import React from "react";

{
  ScrollReveal({
    reset: true,
    distance: "600px",
    duration: 2500,
    delay: 400,
  });

  ScrollReveal().reveal(".hire-animate", { delay: 800, origin: "left" });
}

const Hire = () => {
  return (
    <section className=" mt-40 mb-10">
      <div className="w-[100%] h-[300px] items-center border-y-4 border-bgother  pt-20 pb-20">
        <p className="hire-animate flex flex-wrap text-xl lg:text-6xl lg:font-medium font-semibold justify-center mb-5">
          Let Me Get You An
          <span className="hire-animate text-bg2 m-2 "> Outstanding </span>
          Website!
        </p>
        <div className=" flex justify-center">
          <a
            href="mailto: royaltyint15@gmail.com"
            className=" bg-bg2 p-2 rounded-3xl shadow-[0_3px_7px_rgb(28,130,28)] items-center justify-center"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hire;
