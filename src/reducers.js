import { combineReducers } from "redux";

function cartReducer(state = { cart: [], error: "no" }, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      //DATABASE UPDATING FROM MIDDLEWARE ? THEN WHO UPDATES STORE ?
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "ADD_TO_CART_FAILURE":
      return {
        ...state,
        error: action.error,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((element) => element.id !== action.payload),
      };
      break;
    default:
      return state;
      break;
  }
}
function userReducer(state = { users: [], error: null }, action) {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "CREATE_USER_ERROR":
      return { ...state, error: action.error };
    case "UPDATE_USER":
      //user data updated then user object returned from backend
      return {
        ...state,
        users: state.users.map((element) =>
          element.id != action.payload.id ? element : action.payload
        ),
      };
      break;
    default:
      return state;
      break;
  }
}
function productReducer(state = { products: [], error: null }, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        products: [...state.products, action.payload],
      };
    case "SET_PRODUCTS_ERROR":
      return {
        ...state,
        error: action.error,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((element) =>
          element.id != action.payload.id ? element : action.payload
        ),
      };
      break;
    default:
      return state;
      break;
  }
}
const rootreducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products:productReducer,
});

export default rootreducer;
