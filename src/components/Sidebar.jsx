import React, { useState } from "react";

function Sidebar({ filterResultsByCategory, filterResultsByPrice }) {
  const [active, setActive] = useState(0);

  const handleFilterByCategory = (event) => {
    // Set active ID based on button's id
    setActive(parseInt(event.target.id));
    const text = event.target.innerHTML.trim();
    filterResultsByCategory(text);
  };

  const handleFilterByPrice = (min, max) => {
    filterResultsByPrice(min, max);
  };

  return (
    <div className="w-3/12 sm:w-2/12 h-[80vh] flex flex-col items-center rounded-lg shadow-elevate p-2 sm:p-4 mb-10 bg-bars">
      <ul className="text-sm sm:text-2xl text-center font-bold mt-3">
        <li>
          Categories
          <ul className="text-center text-gray-300 font-extralight text-xs sm:text-lg">
            <li className="m-3 hover:text-gray-100">
              <button
                id="1"
                onClick={handleFilterByCategory}
                style={{
                  color: active === 1 ? "white" : "#e5e7eb", // gray-200 in hex
                  fontWeight: active === 1 ? "500" : "300",
                }}
              >
                Flowering
              </button>
            </li>
            <li className="m-3 hover:text-gray-100">
              <button
                id="2"
                onClick={handleFilterByCategory}
                style={{
                  color: active === 2 ? "white" : "#e5e7eb",
                  fontWeight: active === 2 ? "500" : "300",
                }}
              >
                Foliage
              </button>
            </li>
            <li className="m-3 hover:text-gray-100">
              <button
                id="3"
                onClick={handleFilterByCategory}
                style={{
                  color: active === 3 ? "white" : "#e5e7eb",
                  fontWeight: active === 3 ? "500" : "300",
                }}
              >
                Succulent
              </button>
            </li>
            <li className="m-3 hover:text-gray-100">
              <button
                id="4"
                onClick={handleFilterByCategory}
                style={{
                  color: active === 4 ? "white" : "#e5e7eb",
                  fontWeight: active === 4 ? "500" : "300",
                }}
              >
                Air-Purifying
              </button>
            </li>
            <li className="m-3 hover:text-gray-100">
              <button
                id="5"
                onClick={handleFilterByCategory}
                style={{
                  color: active === 5 ? "white" : "#e5e7eb",
                  fontWeight: active === 5 ? "500" : "300",
                }}
              >
                Ornamental
              </button>
            </li>
            <li className="m-3 hover:text-gray-100">
              <button
                id="6"
                onClick={handleFilterByCategory}
                style={{
                  color: active === 6 ? "white" : "#e5e7eb",
                  fontWeight: active === 6 ? "500" : "300",
                }}
              >
                Indoor
              </button>
            </li>
          </ul>
        </li>
        <li>
          Price
          <ul className="text-center text-gray-300 font-extralight text-xs sm:text-lg">
            <li className="m-3 hover:text-gray-100">
              <button
                id="7"
                style={{
                  color: active === 7 ? "white" : "#e5e7eb",
                  fontWeight: active === 7 ? "500" : "300",
                }}
                onClick={() => handleFilterByPrice(5, 10)}
              >
                $5-$10
              </button>
            </li>
            <li className="m-3 hover:text-gray-100">
              <button
                id="8"
                style={{
                  color: active === 8 ? "white" : "#e5e7eb",
                  fontWeight: active === 8 ? "500" : "300",
                }}
                onClick={() => handleFilterByPrice(10, 15)}
              >
                $10-$15
              </button>
            </li>
            <li className="m-3 hover:text-gray-100">
              <button
                id="9"
                style={{
                  color: active === 9 ? "white" : "#e5e7eb",
                  fontWeight: active === 9 ? "500" : "300",
                }}
                onClick={() => handleFilterByPrice(15, 25)}
              >
                $15-$25
              </button>
            </li>
            <li className="m-3 hover:text-gray-100">
              <button
                id="10"
                style={{
                  color: active === 10 ? "white" : "#e5e7eb",
                  fontWeight: active === 10 ? "500" : "300",
                }}
                onClick={() => handleFilterByPrice(25, 50)}
              >
                $25-$50
              </button>
            </li>
            <li className="m-3 hover:text-gray-100">
              <button
                id="11"
                style={{
                  color: active === 11 ? "white" : "#e5e7eb",
                  fontWeight: active === 11 ? "500" : "300",
                }}
                onClick={() => handleFilterByPrice(50, 1000)}
              >
                $50-
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
