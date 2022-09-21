import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

function AddToCartRow() {
  return (
    <div className="flex justify-between   p-6 border border-gray-400  bg-white">
      <div className="flex justify-between items-center w-1/3">
        <TiDeleteOutline className="text-3xl" />
        <img
          className="w-14 h-14 object-cover"
          src="https://dummyjson.com/image/i/products/8/thumbnail.jpg "
          alt=""
        />
        <h1 className="text-2xl  text-red-600 font-medium">Laptop</h1>
      </div>
      <div className="flex justify-around items-center w-1/2">
        <h1 className="text-2xl font-medium">$:12</h1>
        <input className=" w-7 h-7 border border-gray-500 text-xl" value="3" />
        <h1 className="text-2xl font-medium">$:34</h1>
      </div>
    </div>
  );
}
export default AddToCartRow;
