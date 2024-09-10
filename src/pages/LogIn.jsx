import React, { useState } from "react";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import { useRef } from "react";
import MenuBox from "../components/MenuBox";
import { connect } from "react-redux";
import { useNavigate, useNavigationType } from "react-router-dom";
import { loginUser } from "../actions";
function LogIn({LoginUser}) {
  const EmailOrPhoneNo = useRef();
  const Password = useRef();
  const [ShowMenu,setShowMenu] = useState(false);
  const navigate = useNavigate();
  const displayMenu = () =>{ 
     ShowMenu?setShowMenu(false):setShowMenu(true);
  }
  const Login = ()=>{
      LoginUser({
        emailOrPhoneNo : EmailOrPhoneNo.current.value,
        password : Password.current.value,
      })
      navigate("/WelcomeBack");
      
  }
  return (
    <div className="w-screen h-screen flex flex-col bg-background p-2 box-border md:p-5 ">
      {ShowMenu ? <MenuBox ></MenuBox> : null}
      <Navbar displayMenu={displayMenu}></Navbar>
      <div className="bg-bars h-full  w-full mt-5 md:mt-5 rounded-xl p-2 md:p-5 shadow-elevateLow">
        <div className="bg-background rounded-lg pt-10 h-full w-full flex flex-col items-center  ">
          <InputField
            ref={EmailOrPhoneNo}
            type={"text"}
            label={"Email or Phone"}
          ></InputField>
          <InputField
            ref={Password}
            type={"password"}
            label={"Password"}
          ></InputField>
          <div className="flex mt-20 sm:mt-3  bg- lg:mt-10 flex-col justify-center items-center space-y-8">
            <button onClick={Login} className=" w-44 h-8 sm:w-44 md:w-64 sm:h-9 text-sm md:text-lg rounded-lg text-white bg-bars shadow-lg  ">
              Log In
            </button>
            <button className="   flex flex-row  items-center justify-center  w-44 h-8 sm:w-44 md:w-72 sm:h-9 text-sm md:text-lg rounded-lg text-bars shadow-lg  bg-white">
              <img
                className="size-4 mr-1 md:mr-3"
                src="src/assets/googleIcon.png"
              ></img>{" "}
              Sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) =>{
  return {
    LoginUser:(user)=>dispatch(loginUser(user)),
  }
}
export  default connect(null,mapDispatchToProps)(LogIn);
