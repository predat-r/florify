import React from "react";
import MenuBox from "../components/MenuBox";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { connect } from "react-redux";
function Checkout({ cart }) {
  const [ShowMenu, setShowMenu] = useState(false);
  const displayMenuBox = () => {
    ShowMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col p-2 md:p-5 bg-background font-inter text-background ">
      <Navbar displayMenu={displayMenuBox}></Navbar>
      {ShowMenu ? <MenuBox></MenuBox> : null}
      <div className="bg-bars h-full w-full  flex flex-col justify-start items-center md:mt-5 rounded-xl p-2 md:p-5 shadow-elevateLow">
        <h1 className="text-3xl font-bold text-background">Checkout</h1>
        <div className="flex flex-row items-center justify-start w-full mt-2">
          <h1 className="text-2xl text-background font-semibold">
            Order Details
          </h1>
        </div>
        <div className="flex flex-row rounded-md text-bars items-center text-xl font-semibold justify-around bg-background w-full h-10 p-2 mt-3">
          <h1>Items</h1>
          <h1>Quantity</h1>
          <h1>Cost</h1>
        </div>
        <div className="flex flex-row rounded-md text-bars items-center text-xl font-semibold justify-center bg-background w-full h-auto p-2 mt-3">
          <div className="flex flex-row text-xl h-full w-full items-center  ">
            <div className="w-1/3 h-full">
              {cart.map((element,index) => {
                return <h1 key={index}>{element.name}</h1>;
              })}
            </div>
            <div className="w-1/3 h-full flex flex-col items-center justify-center ">
              {cart.map((element,index) => {
                return <h1 key={index}>{element.Quantity}</h1>;
              })}
            </div>
            <div className="w-1/3 h-full flex flex-col items-center justify-end">
              {cart.map((element,index) => {
                return <h1 key={index}>${element.price*element.Quantity}</h1>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};
export default connect(mapStateToProps, null)(Checkout);
