import React, { useRef } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import MenuBox from "../components/MenuBox";
import PopUp from "../components/PopUp";
import InputField from "../components/InputField";

function BillingInfo() {
  const [ShowMenu, setShowMenu] = useState(false);
  const [showPopUp, setShowPopup] = useState(false);
  const NameOnCard = useRef();
  const CardNumber = useRef();
  const CVV = useRef();
  const ExpiryDate = useRef();
  const FullAddress = useRef();
  const displayMenuBox = () => {
    ShowMenu ? setShowMenu(false) : setShowMenu(true);
  };
  return (
    <div className=" h-screen w-screen flex flex-col pl-2 md:pl-5 pr-2 md:pr-5 pt-2 md:pt-5 bg-background">
      <Navbar displayMenu={displayMenuBox}></Navbar>
      {ShowMenu ? <MenuBox></MenuBox> : null}
      {showPopUp ? (
        <PopUp Condition={setShowPopup} Label={"Sign Up Successful"}></PopUp>
      ) : null}
      <div className="bg-bars h-full w-full md:mt-2 rounded-xl p-2 md:p-5 shadow-elevateLow">
        <div className="bg-background rounded-lg pt-5 h-full w-full flex flex-col items-center ">
          <InputField ref={NameOnCard} label={"Name On Card"}></InputField>
          <InputField ref={CardNumber} label={"Card Number"}></InputField>
          <InputField ref={CVV} label={"CVV"}></InputField>
          <InputField ref={ExpiryDate} label={"Expiry date"}></InputField>
          <InputField ref={FullAddress} label={"Full Address"}></InputField>
          <div className="flex mt-6 sm:mt-3  lg:mt-10 flex-col justify-center items-center space-y-8">
            <button className=" w-44 h-8 sm:w-44 md:w-64 sm:h-9 text-sm md:text-lg rounded-lg text-white shadow-lg  bg-bars">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingInfo;
