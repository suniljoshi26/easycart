import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className=" w-full h-screen overflow-scroll bg-gray-100 px-40 py-10">
        <form className=" rounded-md flex flex-col space-y-5 shadow-md bg-white  p-20 ">
          <h1
            className="text-2xl font-bold 
           mb-4"
          >
            Sign-Up
          </h1>

          <div>
            <label
              htmlFor="name "
              className="
                font-semibold"
            >
              Name
            </label>
            <input
              id="name"
              type="name"
              name="name"
              autoComplete="email"
              required
              className=" w-full border border-gray-300 appearance-none rounded-t-md  focus:border-indigo-500
            focus:outline-none focus:ring-indigo-500 sm:text-sm focus:z-10 px-3 py-2 block placeholder-gray-500 text-gray-900 relative"
              placeholder="Email address"
            />
          </div>
          <div>
            <label
              htmlFor="email-address "
              className="
                font-semibold"
            >
              Email address or UserName*
            </label>
            <input
              id="email-address"
              type="email"
              name="email"
              autoComplete="email"
              required
              className=" w-full border border-gray-300 appearance-none rounded-t-md  focus:border-indigo-500
            focus:outline-none focus:ring-indigo-500 sm:text-sm focus:z-10 px-3 py-2 block placeholder-gray-500 text-gray-900 relative"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-semibold">
              Passward*
            </label>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete=" current-password"
              required
              placeholder="Passward"
              className="relative block w-full  appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-semibold">
              Confirm Passward*
            </label>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete=" current-password"
              required
              placeholder="Passward"
              className="relative block w-full  appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <Link to="/login/" className="text-indigo-500 text-end text-xl">
            Login
          </Link>
          <div>
            <button className="px-6 py-2 bg-red-600 ">Sign Up</button>
          </div>
        </form>
      </div>
      );
    </div>
  );
};
export default SignUp;
