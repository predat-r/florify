import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CartCard from "../components/CartCard";
import { connect } from "react-redux";
import CheckoutBtn from "../components/CheckoutBtn";
import { removeFromCart } from "../actions";
import MenuBox from "../components/MenuBox";
function Cart({ productcart, removeFromCart }) {
  const [cart, setCart] = useState(productcart);
  const cartLength = cart.length;
  const [TotalAmount, setTotalAmount] = useState(0);
  const [ShowMenu, setShowMenu] = useState(false);
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
  const calculateTotalAmount = () => {
    let newTotal = 0;
    cart.forEach((element) => {
      newTotal = newTotal + element.Quantity * element.price;
    });
    newTotal = newTotal.toFixed(2);
    setTotalAmount(parseFloat(newTotal));
  };
  useEffect(() => {
    calculateTotalAmount();
  }, [cart]);
  const increaseQuantity = (id) => {
    updateQuantity(id, 1);
  };
  const decreaseQuantity = (id) => {
    const Product = cart.find((product) => product.id === id);
    if (Product.Quantity === 1) {
      removeFromCart(id);
    }
    updateQuantity(id, -1);
  };
  const displayMenuBox = () => {
    ShowMenu ? setShowMenu(false) : setShowMenu(true);
  };
  return (
    <div className="w-screen p-3 md:p-5 h-screen flex flex-col bg-background overflow-scroll">
      <Navbar displayMenu={displayMenuBox}></Navbar>
      {ShowMenu ? <MenuBox /> : null}
      <h1 className="font-inter text-xl md:text-3xl mt-5  text-bars font-bold mb-5 ">
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
      {cart.length > 0 ? (
        <div className=" flex justify-end flex-row">
          <div className=" w-3/4 sm:w-2/4 p-3 sm:p-5  h-full flex flex-row justify-between items-center">
            <h1 className=" text-md sm:ml-10 sm:text-xl text-bars font-bold ">
              Subtotal : ${TotalAmount}
            </h1>
            <CheckoutBtn></CheckoutBtn>
          </div>
        </div>
      ) : null}
    </div>
  );
}
const mapStateToprops = (state) => ({
  productcart: state.cart.cart,
});
const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
});
export default connect(mapStateToprops, mapDispatchToProps)(Cart);
