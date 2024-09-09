import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import MenuBox from "../components/MenuBox";
import InputField from "../components/InputField";
import { createUser } from "../actions";
import { connect } from "react-redux";
import PopUp from "../components/PopUp";
function SignUp({createUser}) {
  const FName = useRef();
  const LName = useRef();
  const EmailOrPhone = useRef();
  const Password = useRef();
  const Password2 = useRef();
  const Address = useRef();
  const [ShowMenu, setShowMenu] = useState(false);
  const [Error, setError] = useState(false);
  const [showPopUp,setShowPopup] = useState(false);
  const displayMenuBox = () => {
    ShowMenu ? setShowMenu(false) : setShowMenu(true);

  };
  const SignUp = () => {
    if (Password.current.value === Password2.current.value) {
      setError(false);
        createUser({
            firstName : FName.current.value,
            lastName : LName.current.value,
            emailOrphone : EmailOrPhone.current.value,
            password : Password.current.value,
            address : Address.current.value,
        });
        setShowPopup(true);
    } else {
      alert("Passwords do not match");
      highlightField();
    }
  };
  const highlightField = () => {
    setError(true);
  };
  return (
    <div className=" h-screen w-screen flex flex-col pl-2 md:pl-5 pr-2 md:pr-5 pt-2 md:pt-5 bg-background">
      <Navbar displayMenu={displayMenuBox}></Navbar>
      {ShowMenu ? <MenuBox ></MenuBox> : null}
      {showPopUp?<PopUp Condition={setShowPopup} Label={"Sign Up Successful"} ></PopUp>:null}
      <div className="bg-bars h-full w-full md:mt-5 rounded-xl p-2 md:p-5 shadow-elevateLow">
        <div className="bg-background rounded-lg pt-2 h-full w-full flex flex-col items-center ">
          <InputField
            ref={FName}
            type={"text"}
            label={"First Name"}
          ></InputField>
          <InputField
            ref={LName}
            type={"text"}
            label={"Last Name"}
          ></InputField>
          <InputField
            ref={EmailOrPhone}
            type={"text"}
            label={"Email/PhoneNo"}
          ></InputField>
          <InputField
            ref={Password}
            type={"password"}
            label={"Password"}
          ></InputField>
          {Error ? (
            <InputField
              error={Error}
              ref={Password2}
              type={"password"}
              label={"Confirm Password"}
            ></InputField>
          ) : (
            <InputField
              ref={Password2}
              type={"password"}
              label={"Confirm Password"}
            ></InputField>
          )}
          <InputField
            ref={Address}
            type={"text"}
            label={"Full Address"}
          ></InputField>
          <div className="flex mt-6 sm:mt-3  lg:mt-10 flex-col justify-center items-center space-y-8">
            <button className=" w-44 h-8 sm:w-44 md:w-64 sm:h-9 text-sm md:text-lg rounded-lg text-bars shadow-lg  bg-green1">
              Add Billing Info
            </button>
            <button
              onClick={SignUp}
              className=" w-44 h-8 sm:w-44 md:w-64 sm:h-9 text-sm md:text-lg rounded-lg text-white bg-bars shadow-lg  "
            >
              Sign up
            </button>
            <button className=" flex flex-row  items-center justify-center  w-44 h-8 sm:w-44 md:w-72 sm:h-9 text-sm md:text-lg rounded-lg text-bars shadow-lg  bg-white">
              <img
                className="size-4 mr-1 md:mr-3"
                src="src/assets/googleIcon.png"
              ></img>{" "}
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapdispatchToprops = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
  };
};
export default connect(null,mapdispatchToprops)(SignUp);
