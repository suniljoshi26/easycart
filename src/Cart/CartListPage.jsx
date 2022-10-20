import React, { useEffect, useState } from "react";
import { WithCart } from "../Hoc/WithProvider.jsx";
import Button from "../Login/Button.jsx";
import Input from "../Login/Input.jsx";
import CartRow from "./CartRow.jsx";

const CartListPage = ({ cart, updateCart }) => {
  const [localCart, setLocalCart] = useState({});

  useEffect(() => {
    cart.map;
    setLocalCart(cart);
  }, [cart]);

  const handleQuantityChange = (productId, newValue) => {
    console.log("handleChange", newValue, productId);

    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
  };

  const handleUpdateCart = () => {
    updateCart(localCart);
  };
  const handleRemove = (productId) => {
    console.log("product to be removed", productId);
    const newCart = { ...cart };
    console.log("before cart", cart);
    delete newCart[productId];

    console.log("after cart", cart);
    updateCart(newCart);
  };
  return (
    <div>
      <div className=" flex  space-x-4 px-4 py-2 bg-gray-200 border border-gray-400">
        <span className="ml-28 flex grow">Product</span>
        <span className="w-20">price</span>
        <span className="w-32">Quantity</span>
        <span className="w-20">Subtotal</span>
      </div>
      {cart.map((cartItem) => {
        return (
          <CartRow
            key={cartItem.product.id}
            product={cartItem.product}
            quantity={cartItem.quantity}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        );
      })}
      <div className="flex justify-between border border-gray-300 px-4 py-2 bg-white ">
        <div className="space-x-1">
          {" "}
          <div className="flex space-x-2">
            <Input />
            <Button>APPLY COUPON</Button>
          </div>
        </div>
        <div>
          <Button onClick={handleUpdateCart}>update cart</Button>
        </div>
      </div>
    </div>
  );
};
export default WithCart(CartListPage);
