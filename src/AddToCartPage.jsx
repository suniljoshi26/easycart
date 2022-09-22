import React from "react";
import AddCartRowButton from "./AddCartRowButton";
import AddToCartHeader from "./AddToCartHeader";
import AddToCartRow from "./AddToCartRow";

function AddToCartPage() {
  return (
    <div className="px-28 py-12 bg-gray-400 h-scroll">
      <div className=" bg-white  p-20  h-scroll">
        <AddToCartHeader />
        <AddToCartRow />
        <AddCartRowButton />
      </div>
    </div>
  );
}
export default AddToCartPage;
