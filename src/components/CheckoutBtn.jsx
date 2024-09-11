import React from "react";
import { Link } from "react-router-dom";
function CheckoutBtn() {
  return (
    <button className=" w-20 h-8 sm:w-40 sm:h-9 text-sm md:text-xl rounded-lg text-white shadow-lg  bg-bars">
      <Link to="/Checkout">Checkout</Link>
    </button>
  );
}
export default CheckoutBtn;
