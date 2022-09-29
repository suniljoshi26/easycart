import React, { useEffect, useState } from "react";
import { getProductId } from "./api";

function AddToCartRow({ title, thumbnail, price, value, icon }) {
  // const y = Object.keys(cart);
  // const [product, setProducts] = useState([]);
  // console.log("dasdasd", product);
  // useEffect(function () {
  //   const myProductPromises = y.map(function (id) {
  //     return getProductId(id);
  //   });
  //   Promise.all(myProductPromises).then(function (product) {
  //     setProducts(product);
  //   });
  // }, []);

  return (
    <div className="flex justify-around  p-6 border border-gray-400  bg-white">
      <div className="flex justify-between around items-center w-1/3">
        <button className="text-3xl">{icon}</button>
        <img className="w-14 h-14 object-cover" src={thumbnail} alt="" />
        <h1 className="text-2xl  text-red-600 font-medium">{title}</h1>
      </div>
      <div className="flex justify-around items-center w-1/2">
        <h1 className="text-2xl font-medium">{price}</h1>
        <input
          className=" w-7 h-7 border border-gray-500 text-xl"
          value={value}
        />
        <h1 className="text-2xl font-medium">$:34</h1>
      </div>
    </div>
  );
}
export default AddToCartRow;
