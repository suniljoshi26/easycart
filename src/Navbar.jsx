import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { WithCart, WithUser } from "./Hoc/WithProvider";

function Navbar({ cartCount, user }) {
  console.log("product", cartCount);
  return (
    <div className="py-2 bg-white fixed w-full">
      <div className=" max-w-6xl flex justify-between mx-auto items-center ">
        <div>
          <img
            className="h-16"
            src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
          />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-orange-500 text-6xl">
            <Link to="/login/">
              {" "}
              <CgProfile />
            </Link>
          </div>
          <div className="flex flex-col items-center ">
            <Link to="/cart">
              <RiShoppingBagLine className="text-6xl text-orange-600" />

              <h1 className="text-orange-600 text-lg ml-6 -mt-8">
                {cartCount}
              </h1>
            </Link>
            {user && (
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                }}
              >
                logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithCart(WithUser(Navbar));
