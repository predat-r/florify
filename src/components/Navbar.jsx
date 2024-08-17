import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row bg-bars w-full h-16 rounded-lg justify-between p-5 shadow-elevate  mb-5 items-center ">
      <img className=" size-5 sm:size-9" src="src/assets/carticon-white.png"></img>
      <h1 className="text-lg sm:text-3xl font-bold text-white ml-9"> Florify 🌱</h1>
      <div className="flex flex-row justify-center sm:justify-between w-32  items-center">
        <img className="size-4 mr-2 sm:mr-0 sm:size-5 " src="src/assets/user.png"></img>
        <h1 className="text-white text-sm sm:text-md">Haris naeem</h1>
      </div>
    </div>
  );
}

export default Navbar;