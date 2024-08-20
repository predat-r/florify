import React, { useState, useEffect } from "react";

import ProductCard from "./ProductCard";

function ProductContainer({ products }) {

  
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    
    if (products.products[0]) {
      setProductList(products.products[0]);
    }
  }, [products.products]);

  return (
    <div className="w-full h-full ml-3 pr-5 pl-5 pt-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-9 sm:gap-4">
      {productList.length > 0 ? (
        productList.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            categories={product.categories}
            price={product.price}
            image = {product.image
            }
            rating={product.rating}
          />
        ))
      ) : (
        <p>No products available.</p> // Fallback message if productList is empty
      )}
    </div>
  );
}


export default ProductContainer;
