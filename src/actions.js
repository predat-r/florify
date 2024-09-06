//product list actions
export const getProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};
export function asyncGetProducts() {
  return async (dispatch) => {
    try {
      // Placeholder array of products
      const placeholderProducts = [
        {
          id: 1,
          name: "Plant A",
          price: 19.99,
          rating: 3,
          image: "src/assets/aloe.webp",
        },
        {
          id: 2,
          name: "Plant B",
          price: 29.99,
          rating: 4,
          image: "src/assets/aloe.webp",
        },
        {
          id: 3,
          name: "Plant C",
          price: 15.99,
          rating: 4,
          image: "src/assets/aloe.webp",
        },
        {
          id: 4,
          name: "Plant D",
          price: 25.99,
          rating: 4,
          image: "src/assets/aloe.webp",
        
        },
        {
          id: 5,
          name: "Plant E",
          price: 19.99,
          rating: 3,
          image: "src/assets/aloe.webp",
        },
        {
          id: 6,
          name: "Plant F",
          price: 29.99,
          rating: 4,
          image: "src/assets/aloe.webp",
        },
        {
          id: 7,
          name: "Plant G",
          price: 15.99,
          rating: 4,
          image: "src/assets/aloe.webp",
        },
        {
          id: 8,
          name: "Plant H",
          price: 25.99,
          rating: 4,
          image: "src/assets/aloe.webp",
        
        },
        
        {
          id: 9,
          name: "Plant I",
          price: 19.99,
          rating: 3,
          image: "src/assets/aloe.webp",
        },
        {
          id: 10,
          name: "Plant J",
          price: 29.99,
          rating: 4,
          image: "src/assets/aloe.webp",
        },
        {
          id: 11,
          name: "Plant K",
          price: 15.99,
          rating: 4,
          image: "src/assets/aloe.webp",
        },
        {
          id: 12,
          name: "Plant L",
          price: 25.99,
          rating: 4,
          image: "src/assets/aloe.webp",
        
        },
        

      ];

      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch(getProducts(placeholderProducts));
    } catch (error) {
      console.log(error);
    }
  };
}

// export function asyncGetProducts() {
//   return async dispatch => {
//     try {
//       const url = "https://f31034629432850f201ef0a8321d47ff.serveo.net/plants/";
//       const response = await fetch(url, { method: "GET" });
//       const data = await response.json();
//       dispatch(getProducts(data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// //add to cart actions
// export function addToCart(prod) {
//   return {
//     type: "ADD_TO_CART",
//     payload: prod,
//   };
// }
// export function addToCartFailure(error) {
//   return {
//     type: "ADD_TO_CART_FAILURE",
//     error: error,
//   };
// }
// export function asyncAddtocart(prod) {
//   return async (dispatch) => {
//     (dispatch) => {
//       try {
//         // const status = await.api.addToCart(prod);
//         status == -1
//           ? dispatch(addToCartFailure("unable to add to cart"))
//           : dispatch(addToCart(peod));
//       } catch (error) {}
//     };
//   };
// }
