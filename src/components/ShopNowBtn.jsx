import React from "react";
import { Link } from "react-router-dom";

function ShopNowBtn() {
  return (
    <button className="w-40 h-9  rounded-lg  mt-10 sm:mt-12 md:mt-24 bg-bars">
      <Link to="/Home">Shop Now</Link>
    </button>
  );
}

export default ShopNowBtn;
