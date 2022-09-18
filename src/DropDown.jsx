import React, { useState } from "react";

function DropDown() {
  const [sort, setSort] = useState("");

  if (sort == "price") {
    allData.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "priceH") {
    allData.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "title") {
    allData.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }
  function handleSortChange(event) {
    setSort(event.target.value);
  }

  return (
    <div>
      <select
        className="border border-gray-500 rounded-lg p-2  mb-2 px-10"
        onChange={handleSortChange}
      >
        <option value="default"> default sort</option>
        <option value="name"> sort by name</option>
        <option value="price"> sort by price:high to low </option>

        <option value="priceH"> sort by price:low to high</option>
      </select>
    </div>
  );
}
export default DropDown;
