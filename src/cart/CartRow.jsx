import React from "react";
import { ImCross } from "react-icons/im";
import Button from "../Login/Button";

function CartRow({ products, quantity, onQuantityChange, onRemove }) {
  console.log("product title ", products.title);

  const handleChange = (event) => {
    onQuantityChange(products.id, +event.target.value);
  };
  const handleCrossClick = () => {
    onRemove(products.id);
  };
  return (
    <div className="flex flex-row items-center space-x-4 px-4 py-2 border border-gray-300 bg-white  ">
      <span className="w-10  h-10 flex items-center">
        <button onClick={handleCrossClick}>
          <ImCross />
        </button>
      </span>
      <div className="w-10 h-10 object-cover">
        <img className="w-full h-full" src={products.thumbnail} />
      </div>

      <div className="grow">{products.title}</div>
      <h3 className="w-20 ">${products.price}</h3>
      <div className="w-32">
        <input
          type="number"
          className="w-12 h-10 border border-gray-600 mx-2  p-1  rounded-md"
          value={quantity}
          onChange={handleChange}
        />
      </div>
      <span className="w-20">{products.price * quantity}</span>
    </div>
  );
}
export default CartRow;
