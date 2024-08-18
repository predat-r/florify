import React from "react";

function ProductCard() {
  return (
    <div className=" h-52 w-28 sm:h-96 sm:w-64  text-black flex flex-col justify-between mt-2 mb-2 sm:mt-4 hover:scale-105 transition-transform duration-300 sm:mb-4">
      <div className=" bg-card p-3 rounded-md shadow-elevate h-40 w-28 sm:h-80 sm:w-64 flex flex-col">
        <img
          className="rounded-md h-2/3 w-full"
          src="src/assets/chinese-evergreen.webp"
          alt=""
        />
        <div className="flex flex-col justify-between w-full h-full">
          <h1 className="font-medium mt-2 w-full text-xs sm:text-lg">Chinese Evergreen</h1>
          <div className="flex flex-row justify-between ">
            <p className="text-[1vh] sm:text-md">$25</p>
            <div className="reviews flex flex-row">
              <img className="size-2 sm:size-7" src="src/assets/star.png " alt="" />
              <img className="size-2 sm:size-7" src="src/assets/star.png " alt="" />
              <img className="size-2 sm:size-7" src="src/assets/star.png " alt="" />
              <img className="size-2 sm:size-7" src="src/assets/star.png " alt="" />
              <img className="size-2 sm:size-7" src="src/assets/star.png " alt="" />
             
            </div>
          </div>
        </div>
        </div>
        <div className="bg-card rounded-md  flex flex-row justify-evenly shadow-elevate h-7 sm:h-11 p-2 w-full">
          <button className="text-center w-1/2 h-full font-semibold text-[1.1vh] sm:text-lg">Buy Now</button>
          <div className="w-[0.1vw] h-full bg-black "></div>
          <button className="text-center w-1/2 h-full text-[1.01vh] pl-[0.21vh] pt-0 sm:p-0 sm:text-lg">Add to Cart</button>
        </div>
   
    </div>
  );
}

export default ProductCard;
