import React from "react";

const day = new Date();
const year = day.getFullYear();
const Footer = () => {
  return (
    <div className="h-[130px] bg-bgother relative">
      <footer className=" w-[100%]  p-2 leading-10 justify-center items-center">
        <a href="/" className="text-bg1">
          <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </a>

        <p className="text-sm lg:text-md block lg:inline ml-[15%] lg:ml-[45%] mt-2 text-[rgba(128,128,128,0.648)]">
          Copyright: Ezeani Joy &copy; {year}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
