
//product list actions
export const getProducts = (products) =>  {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
}
export function asyncGetProducts() {
  return async dispatch => {
    try {
      const url = "https://f31034629432850f201ef0a8321d47ff.serveo.net/plants/";
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      dispatch(getProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
}

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
