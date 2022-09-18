import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { getProductId } from "./api";
import Loading from "./Loading";
import NotFound from "./NotFound";
function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductId(id);
      p.then(function (product) {
        console.log("api kaa response aa gya");
        setProduct(product);
        setLoading(false);
      }).catch(function () {
        setLoading(false);
        console.log("api ma kuch error aaya");
      });
    },
    [id]
  );

  function HandleCountChange(event) {
    setCount(+event.target.value);
  }
  function handleButtonClick() {
    onAddToCart(id, count);
  }
  // console.log("id ias ", id, params);
  // let product;
  // for (let i = 0; i <div data.length; i++) {
  //   const p = data[i];
  //   if (id == p.id) {
  //     product = p;
  //     break;
  //   }
  // }
  if (loading) {
    return <Loading />;
  }
  if (!product) {
    return <NotFound />;
  }
  return (
    <div className="  bg-gray-200 p-20">
      <Link to="/" className="text-5xl mb-2 ">
        <HiArrowSmLeft />
      </Link>
      <div className=" sm:flex gap-2 bg-white p-6 ">
        <div className="w-1/2">
          <img className=" w-full h-full" src={product.thumbnail} />
        </div>
        <div className="w-1/2">
          <h1 className=" text-2xl sm:text-3xl font-bold text-gray-600">
            {product.title}
          </h1>
          <h1 className="mt-8 text-3xl font-bold">$:{product.price}</h1>
          <p className="mt-8 sm:text-2xl text-gray-600">
            Neque porro quisquam est,qui dolore ipsum qula dolor sit amit,
            consectetur adipisci velit sed quia non incidunt lores to porro ame.
            numpuam eius modi temporo inciduntlores ta porroame.
          </p>
          <div className="mt-10  gap-3 flex flex-col  items-center sm:flex-row">
            <div>
              <input
                value={count}
                onChange={HandleCountChange}
                type="number"
                className="pt-3   sm:w-10 border border-black"
              />
            </div>
            <div className="mt-8 sm:mt-0">
              <button
                onClick={handleButtonClick}
                className="rounded-md bg-red-600 p-3  sm:px-6"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-3 mt-4">
        <div>
          <Link
            to={"/products/" + (id - 1)}
            className="text-4xl flex items-center  "
          >
            <HiArrowSmLeft />
            Previous
          </Link>
        </div>
        <div>
          <Link
            to={"/products/" + (id + 1)}
            className="text-4xl  flex items-center "
          >
            <HiArrowSmRight />
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
