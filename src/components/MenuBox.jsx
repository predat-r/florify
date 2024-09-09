import React from "react";
import { Link } from "react-router-dom";

function MenuBox({ loggedIn }) {
  if (loggedIn) {
    return (
      <div className="bg-bars font-inter flex flex-col justify-evenly items-center p-5 text-center rounded-xl  shadow-elevate w-2/5 sm:w-1/6 h-2/5 absolute right-5 top-28 z-30">
        <button className=" w-20 h-8 sm:w-20 md:w-40 sm:h-9 text-sm md:text-lg rounded-lg text-black shadow-lg  bg-background">
          Profile
        </button>
        <button className=" w-20 h-8 sm:w-20 md:w-40 sm:h-9 text-sm md:text-lg rounded-lg text-black shadow-lg  bg-background">
          Log out
        </button>
        <button className=" w-20 h-8 sm:w-20 md:w-40 sm:h-9 text-sm md:text-lg rounded-lg text-black shadow-lg  bg-background">
          <Link to={"/Cart"}>View Cart</Link>
        </button>
        <button className=" w-20 h-8 sm:w-20 md:w-40 sm:h-9 text-sm md:text-lg rounded-lg text-black shadow-lg  bg-background">
          Settings
        </button>
      </div>
    );
  } else {
    return (
      <div className="bg-bars font-inter flex flex-col justify-evenly items-center p-5 text-center rounded-xl  shadow-elevate w-3/6 md:w-2/6 lg:w-1/6 h-2/5 absolute right-5 top-20 md:top-28 z-30">
        <h1 className="text-white font-normal">
          Create an account to avail exlusive discounts
        </h1>
        <button className=" w-20 h-8 sm:w-20 md:w-40 sm:h-9 text-sm md:text-lg rounded-lg text-black shadow-lg  bg-background">
          <Link to={"/SignUp"}>Sign up</Link>
        </button>
        <button className=" w-20 h-8 sm:w-20 md:w-40 sm:h-9 text-sm md:text-lg rounded-lg text-black shadow-lg  bg-background">
          Log in
        </button>
      </div>
    );
  }
}

export default MenuBox;