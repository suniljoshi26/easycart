import React, { useEffect, useState } from "react";
import AddCartRowButton from "./AddCartRowButton";
import AddToCartHeader from "./AddToCartHeader";
import AddToCartRow from "./AddToCartRow";
import AddToCartTotal from "./AddToCartTotal";
import { getProductId } from "./api";
import { TiDeleteOutline } from "react-icons/ti";
import Loading from "./Loading";

function AddToCartPage({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productId = Object.keys(cart);

  console.log("product is outside", products);

  useEffect(
    function () {
      // using for loop
      // const myProductPromises = [];
      // for (let i = 0; i < productId.length; i++) {
      //   myProductPromises.push(getProductId(productId[i]));
      // }
      //and map function
      const myProductPromises = productId.map(function (id) {
        return getProductId(id);
      });
      Promise.all(myProductPromises).then(function (product) {
        setProducts(product);
        setLoading(false);
      });
      // const myProduct = [...products];
      // const myProduct = [];
      // for (let i = 0; i < productId.length; i++) {
      //   getProductId(productId[i]).then(function (product) {
      //     myProduct.push(product);
      //     console.log("product is use effect", products);
      //     if (productId.length === myProduct.length) {
      //       setProducts(myProduct);
      //     } else {
      //       console.log(" api ka responce aana baki h abhi ");
      //     }
      //   });
      // }
    },
    [cart]
  );
  function handleRemove(event) {
    const productId = event.currentTarget.getAttribute("productId");
    console.log(
      "product to be removed",
      event.currentTarget.getAttribute("productId")
    );
    const newCart = { ...cart };
    console.log("before cart", cart);
    delete newCart[productId];

    console.log("after cart", cart);
    setCart(newCart);
    setLoading(true);
  }
  function handleChange() {}
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-28 py-12 bg-gray-400 h-scroll">
      <div className=" bg-white  p-20  h-scroll">
        <AddToCartHeader />
        {products.map(function (p) {
          return (
            <AddToCartRow
              key={p.id}
              value={cart[p.id]}
              icon={<TiDeleteOutline productId={p.id} onClick={handleRemove} />}
              {...p}
            />
          );
        })}

        <AddCartRowButton />

        <div className="mt-2 flex justify-end">
          <AddToCartTotal />
        </div>
      </div>
    </div>
  );
}
export default AddToCartPage;
