import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CartCard from "../components/CartCard";
import { connect } from "react-redux";
function Cart({ productcart }) {
  const [cart, setCart] = useState(productcart);
  const cartLength = cart.length;
  const updateQuantity = (id, amount) => {
    const newCart = cart
      .map((product) => {
        if (product.id === id) {
          return { ...product, Quantity: product.Quantity + amount };
        }
        return product;
      })
      .filter((product) => product.Quantity > 0);
    setCart(newCart);
  };

  const increaseQuantity = (id) => {
    updateQuantity(id, 1);
  };
  const decreaseQuantity = (id) => {
    const Product = cart.find((product) => product.id === id);
    updateQuantity(id, -1);
  };

  return (
    <div className="w-screen p-5 h-screen flex flex-col bg-background overflow-scroll">
      <Navbar></Navbar>
      <h1 className="font-inter text-3xl mt-5 text-bars font-bold mb-5 ">
        {cartLength > 0
          ? cartLength + ` item${cartLength > 1 ? "s" : ""} in cart`
          : "Cart is Empty :("}
      </h1>
      {cart.map((product) => (
        <CartCard
          key={product.id}
          id={product.id}
          name={product.name}
          categories={product.categories}
          price={product.price}
          image={product.image}
          Quantity={product.Quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        ></CartCard>
      ))}
    </div>
  );
}
const mapStateToprops = (state) => ({
  productcart: state.cart.cart,
});
export default connect(mapStateToprops, null)(Cart);
