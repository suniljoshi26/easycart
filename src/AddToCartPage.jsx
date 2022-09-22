import React from "react";
import AddCartRowButton from "./AddCartRowButton";
import AddToCartHeader from "./AddToCartHeader";
import AddToCartRow from "./AddToCartRow";
import AddToCartTotal from "./AddToCartTotal";

function AddToCartPage() {
  return (
    <div className="px-28 py-12 bg-gray-400 h-scroll">
      <div className=" bg-white  p-20  h-scroll">
        <AddToCartHeader />
        <AddToCartRow />
        <AddCartRowButton />

        <div className="mt-2 flex justify-end">
          <AddToCartTotal />
        </div>
      </div>
    </div>
  );
}
export default AddToCartPage;
