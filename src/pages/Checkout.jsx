import React, { useEffect } from "react";
import MenuBox from "../components/MenuBox";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { connect } from "react-redux";
function Checkout({ cart,user }) {
  const [ShowMenu, setShowMenu] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const displayMenuBox = () => {
    ShowMenu ? setShowMenu(false) : setShowMenu(true);
  };
  const calcSubtotal = () => {
    let newInt = 0;
    cart.forEach((element) => {
      newInt += element.price * element.Quantity;
    });
    setSubTotal(newInt);
  };
  useEffect(() => {
    calcSubtotal();
  }, [cart]);
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
        <div className="flex flex-row rounded-md shadow-elevateLow text-bars items-center text-xl font-semibold justify-around bg-background w-full h-10 p-2 mt-3">
          <h1>Items</h1>
          <h1>Quantity</h1>
          <h1>Cost</h1>
        </div>
        <div className="flex flex-row rounded-md text-bars shadow-elevateLow items-center text-xl font-semibold justify-center bg-background w-full h-auto p-2 mt-3">
          <div className="flex flex-row text-xl h-full w-full items-center  ">
            <div className="w-1/3 text-sm sm:text-lg h-full">
              {cart.map((element, index) => {
                return <h1 key={index}>{element.name}</h1>;
              })}
            </div>
            <div className="w-1/3 text-sm sm:text-lg mt-0 h-full flex flex-col items-center  ">
              {cart.map((element, index) => {
                return <h1 key={index}>{element.Quantity}</h1>;
              })}
            </div>
            <div className="w-1/3 text-sm sm:text-lg h-full flex flex-col items-center justify-end">
              {cart.map((element, index) => {
                return (
                  <h1 key={index}>
                    ${parseFloat((element.price * element.Quantity).toFixed(2))}
                  </h1>
                );
              })}
              <h1 className="text-black text-xs sm:text-lg">
                Subtotal : ${parseFloat(subTotal.toFixed(2))}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start w-full items-center mt-5 mb-5">
          <h1 className="text-2xl font-background font-semibold ">
            Personal Details
          </h1>
        </div>
        <div className="w-full h-60 flex flex-col bg-background shadow-elevateLow rounded-lg p-2">
          <textarea  readOnly defaultValue={user.firstName + " " + user.lastName} className="resize-none text-sm sm:text-md flex flex-row justify-center text-left p-2 items-center w-1/2 h-1/5 bg-background text-bars focus:outline-none"></textarea>
          <textarea readOnly defaultValue={user.emailOrphone} className="resize-none text-sm sm:text-md flex flex-row justify-center text-left p-2 items-center w-1/2 h-1/5 bg-background text-bars focus:outline-none"></textarea>
          <textarea readOnly defaultValue={user.address}  className="resize-none text-sm sm:text-md flex flex-row justify-center text-left p-2 items-center w-1/2 h-auto bg-background text-bars focus:outline-none"></textarea>
          <textarea readOnly defaultValue={"1233-342-24432-42242 ***"} className="resize-none text-sm sm:text-md flex flex-row justify-center text-left p-2 items-center w-1/2 h-1/5 bg-background text-bars focus:outline-none"></textarea>
        </div>
        <button className="w-1/6 h-12 rounded-md shadow-elevateLown font-inter bg-green1 text-bars font-bold text-xl mt-5 ">Confirm</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user:state.user.user,
    cart: state.cart.cart,
  };
};
export default connect(mapStateToProps, null)(Checkout);
