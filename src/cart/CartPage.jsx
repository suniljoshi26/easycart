import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { getProductById } from "../api";

import Loading from "../Loading";
import CartList from "./CartList";

const CartPage = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);

  console.log("cart", cart);

  useEffect(() => {
    setloading(true);
    const productId = Object.keys(cart);
    const myProductPromises = productId.map((id) => {
      return getProductById(id);
    });
    Promise.all(myProductPromises).then((products) => {
      setProducts(products);
      setloading(false);
    });
  }, [cart]);

  if (loading) {
    return <Loading />;
  }
  {
    return (
      <div className="max-w-6xl px-20 py-16 mx-auto bg-white">
        <CartList products={products} cart={cart} updateCart={setCart} />
      </div>
    );
  }
};
export default CartPage;
