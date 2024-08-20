import React from "react";
import SearchBar from "../components/SearchBar";
import Intro from "../components/Intro";

function Landing({fetchProducts}) {

  return (
    <div className="w-screen h-screen flex flex-col items-center font-inter text-white box-border overflow-hidden">
      <h1 className="text-xl sm:text-2xl font-semibold mt-10">Nature you've always wanted</h1>
      <img
        className="object-cover absolute w-screen h-screen z-[-1]"
        src="src/assets/nahil-naseer-xljtGZ2-P3Y-unsplash.jpg"
      ></img>
      <SearchBar></SearchBar>
      <Intro fetchProducts={fetchProducts}></Intro>
    </div>
  );
}

export default Landing;
