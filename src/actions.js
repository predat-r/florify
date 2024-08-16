import store from "./store";

//add to cart actions
export function addToCart(prod) {
  return {
    type: "ADD_TO_CART",
    payload: prod,
  };
}
export function addToCartFailure(error) {
  return {
    type: "ADD_TO_CART_FAILURE",
    error: error,
  };
}
export function asyncAddtocart(prod) {
  return async (dispatch) => {
    (dispatch) => {
      try {
        const status = await.api.addToCart(prod);
        status == -1 ? dispatch(addToCartFailure("unable to add to cart")) : dispatch(addToCart(prod));

      } catch (error) {}
    };
  };
}
//create user actions
