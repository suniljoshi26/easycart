import React, { useEffect, useState } from "react";

import ProductList from "./ProductList";

import NoMatchingFound from "./NoMatchingFound";
import { getProductList } from "./api";
import Loading from "./Loading";
function ProductListPage() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    const xyz = getProductList();
    xyz.then(function (products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  const allData = productList.filter(function (item) {
    const loverCaseItem = item.title.toLowerCase();
    const loverCaseQuery = query.toLowerCase();

    return loverCaseItem.indexOf(loverCaseQuery) != -1;
  });

  if (sort == "price") {
    allData.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "priceH") {
    allData.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    allData.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
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
        <option value="name"> sort by name</option>
        <option value="price"> sort by price:high to low </option>

        <option value="priceH"> sort by price:low to high</option>
      </select>
      {allData.length > 0 && <ProductList products={allData} />}
      {allData.length == 0 && <NoMatchingFound />}
    </div>
  );
}
export default ProductListPage;
