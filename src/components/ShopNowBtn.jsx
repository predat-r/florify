import React from "react";
import { Link } from "react-router-dom";
import { asyncGetProducts } from "../actions";
import { connect } from "react-redux";
import store from "../store";
function ShopNowBtn({fetchProducts}) {
  return (
    <button onClick={fetchProducts} className="w-40 h-9  rounded-lg  mt-[5vh] sm:mt-12 md:mt-16 bg-bars">
      <Link to="/Home">Shop Now</Link>
    </button>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(asyncGetProducts()),
})
export default connect(null,mapDispatchToProps)(ShopNowBtn);
