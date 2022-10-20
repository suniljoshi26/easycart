import React, { useEffect, useState } from "react";
import { getData, getProductByIds, saveData } from "../api";
import { CartContext } from "../context/context";
import { WithUser } from "../Hoc/WithProvider";
const CartProvider = ({ isLoggedIn, user, children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      getData().then((cart) => {
        setCart(cart);
      });
    } else {
      const savedataString = localStorage.getItem("myCart");
      const saveData = JSON.parse(savedataString);
      getProductByIds(Object.keys(saveData)).then((products) => {
        const saveCart = products.map((p) => ({
          product: p,
          quantity: saveData[p.id],
        }));
        setCart(saveCart);
      });
    }
  }, [isLoggedIn]);

  //  console.log("cart  is ", cart);
  function addToCart(productId, count) {
    const quantityMap = cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );
    const oldCount = quantityMap[productId] || 0;
    const newCart = { ...quantityMap, [productId]: oldCount + count };
    updateCart(newCart);
  }
  function updateCart(quantityMap) {
    // setCart(newCart);

    if (!isLoggedIn) {
      const cartString = JSON.stringify(quantityMap);
      localStorage.setItem("myCart", cartString);
    } else {
      saveData(quantityMap).then((response) => {
        //setCart(response);
      });
    }
  }
  // const cartCount = Object.keys(cart).reduce(function (output, current) {
  //   return output + cart[current];
  // }, 0);

  const cartCount = cart.reduce(function (output, current) {
    return output + current.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, cartCount, updateCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default WithUser(CartProvider);
