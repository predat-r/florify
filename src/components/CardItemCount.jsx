import React from "react";
import { connect } from "react-redux";
function CardItemCount({ CartItemCount }) {
  return CartItemCount > 0 ? (
    <div className="size-3 md:size-5 rounded-full bg-[#9AE5C9] flex absolute left-[1.35vw]  md:left-[0.8vw] text-xs md:text-sm text-[#1A9E6F] bottom-8 md:bottom-6 text-center items-center justify-center">
      {CartItemCount}
    </div>
  ) : null;
}
const mapStateToProps = (state) => ({
  CartItemCount: state.cart.cart.length,
});
export default connect(mapStateToProps, null)(CardItemCount);
