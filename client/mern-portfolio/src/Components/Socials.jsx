import React from "react";

{
  ScrollReveal({
    reset: true,
    distance: "600px",
    duration: 2500,
    delay: 400,
  });

  ScrollReveal().reveal(".socials-animate", {
    delay: 400,
    origin: "bottom",
  });
}

const Socials = () => {
  return (
    <div>
      <div className="text-xl flex gap-5 ml-10 text-bg1 cursor-pointer socials-animate">
        <a href="https://github.com/joy-ezeani">
          <i class="fa-brands fa-github fa-beat"></i>
        </a>
        <a href="https://web.facebook.com/profile.php?id=100006657407777">
          <i class=" fa-brands fa-facebook fa-beat"></i>
        </a>
        <a href="https://www.instagram.com/_royaltycodes/">
          <i class="fa-brands fa-instagram fa-beat"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
