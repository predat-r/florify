import React, { useEffect } from "react";
import { useState } from "react";
function CartCard({
  id,
  name,
  categories,
  price,
  image,
  Quantity,
  increaseQuantity,
  decreaseQuantity,
}) {
  const [totalprice, settotalPrice] = useState(price);

  useEffect(() => {
    settotalPrice(Quantity * price);
  }, [Quantity]);

  return (
    <div className="w-full h-32  justify-between flex flex-row mb-6 mt-2  font-inter">
      <div className="w-4/6 h-full flex flex-row bg-card rounded-xl shadow-elevateLow p-3">
        <img className="h-full w-1/6" src={image}></img>
        <div className="flex flex-row justify-between w-full h-full items-center pr-5 pl-5 pt-2 pb-2 ">
          <div className=" flex flex-col justify-between h-full w-1/4 ml-3">
            <h1 className=" text-2xl font-semibold">{name}</h1>
            <div className="flex flex-row space-x-2">
              {categories.map((categ, index) => (
                <h3 key={index}>{categ}</h3>
              ))}
            </div>
          </div>
          <div className="flex flex-row items-center justify-center ml-10">
            <button onClick={() => increaseQuantity(id)}>
              <img className="size-5" src="src/assets/icons8-add-30.png"></img>
            </button>
            <h1  className="text-lg font-inter ml-5 mr-5 ">{Quantity}</h1>
            <button onClick={() => decreaseQuantity(id)}>
              <img
                className="size-5"
                src="src/assets/icons8-minus-64.png"
              ></img>
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/5 h-full rounded-xl shadow-elevateLow mr-5 flex flex-co text-2xl font-semibold bg-card text-center items-center justify-center font-xl">
        $ {totalprice}
      </div>
    </div>
  );
}

export default CartCard;
