import { combineReducers } from "redux";
const cartReducer = (state = { cart: [], error: null }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.cart.find(
        (element) => action.payload.id === element.id
      );
      if (existingProduct) {
        return {
          cart: state.cart.map((element) =>
            element.id === action.payload.id
              ? { ...element, Quantity: element.Quantity + 1 }
              : element
          ),
        };
      } else {
        return {
          cart: [...state.cart, action.payload],
        };
      }
    case "ADD_TO_CART_FAILURE":
      return {
        error: action.error,
      };
    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter((element) => element.id !== action.payload),
      };
      break;
    default:
      return state;
      break;
  }
};
const userReducer = (state = { users: [], error: null }, action) => {
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
};
const productReducer = (state = { products: [], error: null }, action) => {
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
};
const rootreducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productReducer,
});

export default rootreducer;
