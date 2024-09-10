import React from "react";
import Navbar from "../components/Navbar";
import MenuBox from "../components/MenuBox";
import { useState } from "react";
import InputField from "../components/InputField";
import { connect } from "react-redux";
function Profile({ user }) {
  const [ShowMenu, setShowMenu] = useState(false);
  const [editable, seteditable] = useState(false);
  const displayMenubox = () => {
    ShowMenu ? setShowMenu(false) : setShowMenu(true);
  };
  console.log(user);
  return (
    <div className="w-screen h-screen bg-background flex flex-col p-2 md:p-5">
      <Navbar displayMenu={displayMenubox}></Navbar>
      {ShowMenu ? <MenuBox></MenuBox> : null}
      <div className=" flex flex-col w-full h-full bg-bars p-5 rounded-lg">
        <div className="w-full h-full rounded-lg pt-5 bg-background">
          <InputField
            editable={editable}
            label={"First Name"}
            text={user.firstName}
          ></InputField>
          <InputField
            
            editable={editable}
            label={"Last Name"}
            text={user.lastName}
          ></InputField>
          <InputField
            editable={editable}
            label={"Email/PhoneNo."}
            text={user.emailOrphone}
          ></InputField>
          <div className="w-full font-inter h-56 flex flex-row pl-2 text-left  pt-5 md:p-5 items-center justify-end md:pr-5 ">
            <div className="w-full sm:mr-36 lg:mr-96 pr-3 sm:pr-4 md:pr-5 flex flex-row justify-end  h-full space-x-2 md:space-x-14">
              <h1 className="text-md  md:text-2xl text-bars font-semibold">
                Address :
              </h1>
              <textarea
                defaultValue={user.address}
                readOnly={!editable}
                className={`h-10 p-1 md:p-3  resize-none flex text-gray-400 flex-col text-start justify-start items-start focus:outline-none w-44 md:h-full md:w-2/4 rounded-md shadow-md bg-[#E5FFE6] align-top`}
              ></textarea>
            </div>
          </div>
          <InputField editable={editable} label={"Billing Info"}></InputField>
          <div className="flex flex-row mt-10  w-full h-20 justify-center items-center gap-x-10">
            <button className=" w-44 h-8 sm:w-44 bg-[#A6FBAC] md:w-64 sm:h-9 text-sm md:text-lg rounded-lg shadow-lg text-bars">
              View Order History
            </button>
            {editable ? (
              <button
                onClick={() => seteditable(false)}
                className=" w-44 h-8 sm:w-44 md:w-64 sm:h-9 text-sm md:text-lg rounded-lg text-bars shadow-lg  bg-green1"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => seteditable(true)}
                className="w-44 h-8 sm:w-44 md:w-64 sm:h-9 text-sm md:text-lg rounded-lg text-white shadow-lg bg-bars"
              >
                Edit Info
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
export default connect(mapStateToProps, null)(Profile);
