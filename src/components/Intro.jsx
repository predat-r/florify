import React from "react";
import ShopNowBtn from "./ShopNowBtn";
function Intro() {
  return (
    <>
      <div className="w-5/6 h-3/5  rounded-xl shadow-elevate backdrop-blur-s bg-black/40 absolute top-[31.3vh]  "></div>
      <div className="w-5/6 h-3/5  rounded-xl shadow-elevate backdrop-blur-sm  bg-box/30  absolute top-[31.3vh]"></div>
      <div className=" w-5/6 h-3/5  flex flex-col font-inter items-center rounded-xl text-white top-[31.3vh] absolute bg-transparent  backdrop-filter-none  p-8 box-border overflow-hidden">
        <h1 className=" font-semibold text-xl sm:text-5xl  text-white"> 
          Florify 🌱
        </h1>
        <p className="font-light opacity-70 text-md sm:text-xl  sm:mt-20 leading-6 sm:leading-10 [word-spacing:0.2vh] text-center mt-5">Discover the beauty of nature With florify. Our collection brings you vibrant greenery that’s as easy to care for as it is to admire. Whether you're a seasoned plant parent or just starting your journey, find the perfect touch of nature to elevate your home or workspace.</p>
     <ShopNowBtn></ShopNowBtn>
      </div>
    </>
  );
}

export default Intro;
