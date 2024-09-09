import React, { useState, useEffect } from "react";
import { addToCart } from "../actions";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import PopUp from "./PopUp";
function ProductContainer({ products, addProductToCart }) {
  const [productList, setProductList] = useState([]);
  const [addedProductToCart, setAddedProductToCart] = useState(false);
  useEffect(() => {
    if (products) {
      setProductList(products);
    }
  }, [products]);
  const AddthisProductToCart = (id, Quantity) => {
    const product = products.find((element) => element.id === id);
    if (product) {
      addProductToCart({ ...product, Quantity });
    }
    setAddedProductToCart(false);
    setTimeout(() => {
      setAddedProductToCart(true);
    }, 10);
  };
  return (
    <>
      {" "}
      <div className="w-full h-full ml-3 pr-5 pl-5 pt-1  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-9  sm:gap-4">
        {productList.length > 0 ? (
          productList.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              categories={product.categories}
              price={product.price}
              image={product.image}
              rating={product.rating}
              addProductToCart={AddthisProductToCart}
            />
          ))
        ) : (
          <div className="h-2/5 w-2/3 absolute flex items-center justify-center">
          <p className="text-bars font-bold text-3xl ">No products available :(</p> 
           </div>
        )}
      </div>
      {addedProductToCart ? (
        <PopUp Condition={setAddedProductToCart} Label={"Product added to Cart"}></PopUp>
      ) : null}
    </>
  );
}
const mapDispatchToprops = (dispatch) => ({
  addProductToCart: (prod) => dispatch(addToCart(prod)),
});
export default connect(null, mapDispatchToprops)(ProductContainer);
