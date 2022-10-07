import React from "react";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  return (
    <div>
      <div className=" w-full h-screen overflow-scroll bg-gray-100 px-40 py-10">
        <form className=" rounded-md flex flex-col space-y-5 shadow-md bg-white  p-20 ">
          <h1
            className="text-3xl font-semibold
           mb-4"
          >
            Password Help
          </h1>
          <div>
            <label
              htmlFor="email-address "
              className="
                font-semibold"
            >
              Enter your email address. You will receive an email with a link to
              reset your password.
            </label>
            <input
              id="email-address"
              type="email"
              name="email"
              autoComplete="email"
              required
              className=" w-full border mt-2 border-gray-300 appearance-none rounded-t-md  focus:border-indigo-500
            focus:outline-none focus:ring-indigo-500 sm:text-sm focus:z-10 px-3 py-2 block placeholder-gray-500 text-gray-900 relative"
              placeholder="Email address"
            />
          </div>
          <Link to="/login/" className="text-indigo-500  text-end">
            Back To LogIn
          </Link>
          <div>
            <button className="px-6 py-2 bg-red-600 ">Login</button>
          </div>
        </form>
      </div>
      );
    </div>
  );
};
export default ForgetPass;
