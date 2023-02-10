import React, { useEffect, useState } from "react";

import ProductList from "./ProductList";

import NoMatchingFound from "./NoMatchingFound";
import { getProductList } from "./api";
import Loading from "./Loading";
import { range } from "lodash";
import { Link, useSearchParams } from "react-router-dom";
function ProductListPage() {
  // const [query, setQuery] = useState("");
  const [productList, setProductList] = useState();
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  let { sort, query, page } = params;

  sort = sort || "default";
  query = query || "";
  page = +page || 1;
  useEffect(() => {
    let sortBy;
    let sortType;

    if (sort == "title") {
      sortBy = "title";
    } else if (sort == "price") {
      sortBy = "price";
    } else if (sort == "priceH2L") {
      sortBy = "price";
      sortType = "desc";
    }
    getProductList(sortBy, query, page, sortType).then((response) => {
      setProductList(response);
      setLoading(false);
    });
  }, [sort, query, page]);

  // useEffect(() => {}, [sort, query]);
  // const allData = productList.filter(function (item) {
  //   const loverCaseItem = item.title.toLowerCase();
  //   const loverCaseQuery = query.toLowerCase();

  //   return loverCaseItem.indexOf(loverCaseQuery) != -1;
  // });

  // if (sort == "price") {
  //   allData.sort(function (x, y) {
  //     return y.price - x.price;
  //   });
  // } else if (sort == "priceH") {
  //   allData.sort(function (x, y) {
  //     return x.price - y.price;
  //   });
  // } else if (sort == "name") {
  //   allData.sort(function (x, y) {
  //     return x.title < y.title ? -1 : 1;
  //   });
  // }

  function handleQueryChange(event) {
    setSearchParams(
      { ...params, query: event.target.value, page: 1 },
      { replace: false }
    );
  }

  function handleSortChange(event) {
    setSearchParams(
      { ...params, sort: event.target.value },
      { replace: false }
    );
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-2 max-w-6xl mx-auto bg-white sm:px-9  px-3 py-12 my-16">
      <input
        placeholder="search"
        className="border border-gray-500 rounded-md mb-2
          p-2"
        onChange={handleQueryChange}
        vlaue={query}
      />
      <select
        className="border border-gray-500 rounded-lg p-2  mb-2 px-10"
        onChange={handleSortChange}
      >
        <option value="default"> default sort</option>
        <option value="title"> sort by name</option>
        <option value="price"> sort by price:low to high </option>

        <option value="priceH2L"> sort by price:high to low</option>
      </select>
      {productList.data.length > 0 && (
        <ProductList products={productList.data} />
      )}{" "}
      {productList.data.length == 0 && <NoMatchingFound />}
      {/* {productList.data.length == 0 && <No        MatchingFound />}
        {[...Array(productList.meta.last_page).keys()].map((item) => ( */}
      {range(1, productList.meta.last_page + 1).map((pageNo) => (
        <Link
          key={pageNo}
          to={"?" + new URLSearchParams({ ...params, page: pageNo })}
          className={
            "p-2  mr-1  " +
            (pageNo === page ? "bg-orange-600" : " border border-orange-500")
          }
        >
          {pageNo}
        </Link>
      ))}
      {/* {range(1, productList.meta.last_page + 1).map((pageNo) => (
        <Link
          key={pageNo}
          to={"?" + new URLSearchParams({ ...params, page: pageNo })}
          className={
            "p-2 m-1 " + (pageNo === page ? "bg-red-500" : "bg-indigo-700")
          }
        >
          {pageNo}
        </Link>
      ))} */}
    </div>
  );
}
export default ProductListPage;
