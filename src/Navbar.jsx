import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";

function Navbar({ productCount }) {
  return (
    <div className="py-2 bg-white">
      <div className=" max-w-6xl flex justify-between mx-auto items-center ">
        <img
          className="h-16"
          src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
        />
        <div className="flex flex-col items-center ">
          <RiShoppingBagLine className="text-6xl text-orange-600" />
          <h1 className="text-orange-600 text-lg -mt-8">{productCount}</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
