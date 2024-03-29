import React, { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { AllProductContext } from "../../context/ProductContext";
import { actionTypes } from "../../state/ProductState/actionTypes";
import "./FilterBar.css";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import ProductCardSmall from "../ProductCard/ProductCardSmall";

const FilterBar = () => {
  const {
    state: { products, rangeFilter },
    dispatch,
  } = useContext(AllProductContext);
  const [value, setValue] = useState([...rangeFilter]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("submitted", e.target.search.value);
    dispatch({
      type: actionTypes.SET_SEARCH_KEYWORDS,
      payload: e.target.search.value,
    });
    dispatch({ type: actionTypes.FILTER_CLOSE });
  };

  const handleChange = (event, newValue) => {
    console.log("sacascsac", newValue);
    setValue(newValue);
    dispatch({ type: actionTypes.SET_RANGE_FILTER, payload: newValue });
  };

  return (
    <div className=" bg-white z-30 filter-sidebar">
      <div className="filter-sidebar-content w-[100%] lg:w-[380px] min-h-[100%]">
        <div className="flex justify-between items-center py-5 px-5 body-font border-b-[2px] border-b-gray-400">
          <div>
            <p className="font-semibold">Filter Product</p>
          </div>
          <div
            className="text-2xl cursor-pointer"
            onClick={() => dispatch({ type: actionTypes.FILTER_CLOSE })}
          >
            <MdClose></MdClose>
          </div>
        </div>
        <div className="px-6 py-5 body-font space-y-8">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search products..."
              className="outline-none body-font border-[2px]  px-2 py-1"
            />
            <input
              type="submit"
              value=">"
              className="bg-black text-white py-1 px-2 mx-2 text-lg cursor-pointer"
            />
          </form>

          <div className="px-2 space-y-2">
            <h2 className="heading-font text-2xl">Filter By Price </h2>
            <Slider
              sx={{ color: "#000000" }}
              value={value}
              min={150}
              max={450}
              step={50}
              marks
              disableSwap={true}
              onChange={handleChange}
            />
            <div className="flex justify-end space-x-2">
              <input
                className="outline-none body-font border-[2px] px-2 py-1 w-[70px]"
                type="text"
                name=""
                id=""
                readOnly
                value={`$ ${value[0]}`}
              />
              <input
                className="outline-none body-font border-[2px] px-2 py-1 w-[70px]"
                type="text"
                name=""
                id=""
                readOnly
                value={`$ ${value[1]}`}
              />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="heading-font text-2xl">FILTER BY CATEGORY</h2>
            <div className="flex flex-col font-medium space-y-1">
              <Link to={"/exclusive"}>Exclusive</Link>
              <Link to={"/women"}>Women</Link>
              <Link to={"/men"}>Men</Link>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="heading-font text-2xl">On Sale</h2>
            <div className="space-y-4">
              {products
                .filter((item) => item.on_sale === true)
                .map((product) => (
                  <ProductCardSmall
                    key={product.id}
                    product={product}
                  ></ProductCardSmall>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
