import React, { useState } from "react";
import Button from "./Button";

const Header = () => {
  let Links = [
    { name: "About", link: "/" },
    { name: "Service", link: "/#service" },
    { name: "Resume", link: "/#resume" },
    { name: "Projects", link: "/#project" },
    { name: "Contact", link: "/#contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-bgmain py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer  flex items-center font-[ubuntu] 
      text-bg1-800"
        >
          <span className="text-3xl text-bg1 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Portfo
          <span className="text-bg1 text-5xl font-[Allura]">lio</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-bgmain md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
              <a
                href={link.link}
                className="text-white-600 hover:text-bg1 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>
            <a href="#contact">Get Started</a>
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
