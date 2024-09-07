import React from "react";

function Sidebar({ filterResults }) {
  const handleClick = (event) => {
    const text = event.target.innerHTML;

    filterResults(text);
  };
  return (
    <div className=" w-3/12 sm:w-2/12 h-[80vh] flex flex-col items-center rounded-lg shadow-elevate p-2 sm:p-4 mb-10 bg-bars">
      <ul className=" text-sm sm:text-2xl text-center font-bold mt-3">
        <li>
          categories
          <ul className=" text-center  text-gray-300  font-extralight text-xs sm:text-lg  ">
            <li onClick={handleClick} className="m-3 hover:text-gray-100">
              <button onClick={handleClick}>Flowering</button>
            </li>
            <li className="m-3  hover:text-gray-100">
              <button onClick={handleClick}>Foliage</button>
            </li>
            <li onClick={handleClick} className="m-3  hover:text-gray-100">
              <button onClick={handleClick}>Succulent</button>
            </li>
            <li onClick={handleClick} className="m-3  hover:text-gray-100">
              <button onClick={handleClick}>Air-Purifying</button>
            </li>
            <li onClick={handleClick} className="m-3  hover:text-gray-100">
              <button onClick={handleClick}>Ornamental</button>
            </li>
            <li onClick={handleClick} className="m-3  hover:text-gray-100">
              <button onClick={handleClick}>Indoor</button>
            </li>
          </ul>
        </li>
        <li>
          Price
          <ul className=" text-center text-gray-300 font-extralight text-xs sm:text-lg ">
            <li className="m-3  hover:text-gray-100">$5-$10</li>
            <li className="m-3  hover:text-gray-100">$10-$15</li>
            <li className="m-3  hover:text-gray-100">$15-$25</li>
            <li className="m-3  hover:text-gray-100">$25-$50</li>
            <li className="m-3  hover:text-gray-100">$50-</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
