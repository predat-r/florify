import React from "react";

function SearchBar({searchItems}) {
  return (
    <div className="mt-5 w-3/4 sm:w-1/2 bg-[#C4FFC7] h-10 p-2 flex flex-row rounded-md shadow-elevateLow justify-between items-center">
      <input placeholder="search for all types of plants, equipment and much more" className=" bg-[#C4FFC7] rounded-md  w-10/12 h-full    p-2 active:outline-none focus:outline-none text-black "></input>{" "}
      <img className="size-5" src="src/assets/searchicon.png"></img>
    </div>
  );
}

export default SearchBar;
