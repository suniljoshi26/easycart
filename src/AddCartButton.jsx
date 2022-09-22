import React from "react";

function AddCartButton(props) {
  let themclass;
  if (props.them == "highlight") {
    themclass = "text-white bg-red-500 hover:bg-red-300 rounded-md";
  }
  if (props.them === "secondary") {
    themclass = "bg-red-300 text-gray-400  hover:bg-red-500 rounded-md";
  }
  return (
    <div>
      <button
        className={
          "px-12 p-2 border text-xl font-samibold border-gray-400 " + themclass
        }
      >
        {props.children}
      </button>
    </div>
  );
}
export default AddCartButton;
