import React from "react";
function AddToCartHeader() {
  return (
    <div className="flex justify-between p-4 border  bg-gray-300">
      <div className="flex justify-end w-1/3">
        <h1 className="text-xl font-medium">Product</h1>
      </div>
      <div className="flex justify-around w-1/2">
        <h1 className="text-xl font-medium">Price</h1>
        <h1 className="text-xl font-medium">Quantity</h1>
        <h1 className="text-sxl font-medium">SubTotal</h1>
      </div>
    </div>
  );
}
export default AddToCartHeader;
