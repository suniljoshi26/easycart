import React from "react";
import AddCartButton from "./AddCartButton";
function AddCartButtonRow() {
  return (
    <div className="flex justify-between   p-6 border border-gray-400  bg-white">
      <div className="flex justify-between items-center w-1/3">
        <AddCartButton>Coupon code</AddCartButton>
        <AddCartButton them="highlight">APPLY COUPON</AddCartButton>
      </div>
      <div className="flex justify-end items-center w-1/2">
        <AddCartButton them="secondary">UPDATE CART</AddCartButton>
      </div>
    </div>
  );
}
export default AddCartButtonRow;
