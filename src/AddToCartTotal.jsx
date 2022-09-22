import React from "react";
import AddCartButton from "./AddCartButton";
function AddToCartTotal() {
  return (
    <div className="w-1/3">
      <div className="border">
        <div className="border p-4 text-2xl font-semibold">Cart Total</div>
        <div className="flex justify-between border-b p-4">
          <h1 className="text-xl font-semibold px-4">Subtotal</h1>
          <h1 className="text-xl font-semibold px-4">$:60.0</h1>
        </div>
        <div className="flex justify-between border-b p-4">
          <h1 className="text-xl font-semibold px-4">total</h1>
          <h1 className="text-xl font-semibold px-4">$:60.0</h1>
        </div>
        <div className="flex  justify-center border-b p-4">
          <AddCartButton them="highlight">PROCEED TO CHECKOUT</AddCartButton>
        </div>
      </div>
    </div>
  );
}
export default AddToCartTotal;
