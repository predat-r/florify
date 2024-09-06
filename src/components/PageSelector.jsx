import React from "react";

function PageSelector({ numOfPages, setPage }) {
  return (
    <div className=" h-5 sm:h-7 md:h-8 lg:h-10 w-full flex flex-row justify-center text-sm md:text-lg items-center mb-5 text-center  ">
      {Array.from({ length: numOfPages }).map((_, index) => (
        <div 
        onClick={()=>{setPage(index+1)}}
          key={index}
          className="w-5 h-5 sm:w-8 sm:h-7  mt-10 bg-bars rounded-sm  sm:rounded-md flex items-center justify-center cursor-pointer m-1"
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default PageSelector;
