import React from "react";
import AddCartButton from "./AddCartButton";
function AddCartButtonRow() {
  return (
    <div className="flex justify-between   p-6 border border-gray-400  bg-white">
      <div className="flex justify-between items-center w-1/3">
        <AddCartButton>sdsdf</AddCartButton>
        <AddCartButton them="highlight">sdfsdf</AddCartButton>
      </div>
      <div className="flex justify-around items-center w-1/2">
        <AddCartButton them="secondary">vdsvsd</AddCartButton>
      </div>
    </div>
  );
}
export default AddCartButtonRow;
