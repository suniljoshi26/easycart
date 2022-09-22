import React from "react";

function AddCartButton(props) {
  let themclass;
  if (props.them == "highlight") {
    themclass = "text-white bg-red-500 text-xl font-samibold rounded-md";
  }
  if (props.them === "secondary") {
    themclass = "bg-red-300 text-gray-400 text-xl font-samibold rounded-md";
  }
  return (
    <div>
      <button className={"px-24 p-3 border border-gray-400 " + themclass}>
        {props.children}
      </button>
    </div>
  );
}
export default AddCartButton;
