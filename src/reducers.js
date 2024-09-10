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
const userInitialState = {
  firstName: "haris",
  lastName: "",
  emailOrphone: "",
  password: "",
  address: "",
  LoggedIn: false,
};
const userReducer = (
  state = { user: userInitialState, error: null },
  action
) => {
  switch (action.type) {

    case "CREATE_USER":
      return {
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          emailOrphone: action.payload.emailOrphone,
          password: action.payload.password,
          address: action.payload.address,
          LoggedIn: true,
        },
      };
    case "CREATE_USER_ERROR":
      return { ...state, error: action.error };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.user.map((element) =>
          element.id != action.payload.id ? element : action.payload
        ),
      };

    case "LOGIN_USER":
      return {
        user:{
          ...state.user,
          emailOrphone:action.payload.emailOrphone,
          password:action.payload.password,
          LoggedIn:true,
        },
      }
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
