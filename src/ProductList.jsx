import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className=" grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 space-y-2 sm:space-y-0">
      {products.map(function (item) {
        return (
          <Product
            key={item.id}
            {...item}
            // id={item.id}
            // title={item.title}
            // photo={item.photo}
            // price={item.price}
            // category={item.category}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
