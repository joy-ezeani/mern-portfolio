import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-bg1 text-white font-[ubuntu] py-2 px-4 rounded md:ml-6 hover:bg-bgmain hover:text-bg1 
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
