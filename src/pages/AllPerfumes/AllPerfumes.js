import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { VscSettings } from "react-icons/vsc";
import { SlArrowDown } from "react-icons/sl";
import { IoGridSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import ProductCard2 from "../../components/ProductCard/ProductCard2";
// import { Helmet } from "react-helmet";
import { useContext } from "react";
import { actionTypes } from "../../state/ProductState/actionTypes";
import { AllProductContext } from "../../context/ProductContext";
import FilterBar from "../../components/FilterBar/FilterBar";

const AllPerfumes = () => {
  const [sortState, setSortState] = useState(false);
  const [dataGrid, setDataGrid] = useState(false);
  const [sortName, setSortName] = useState("Default sorting");
  const [activeDefaultSort, setActiveDefaultSort] = useState(true);
  const [priceLowSort, setPriceLowSort] = useState(false);
  const [priceHighSort, setPriceHighSort] = useState(false);
  const {
    state: { products, filterShow },
    dispatch,
  } = useContext(AllProductContext);

  const allProducts = products;
  console.log(filterShow);

  const handleDefaultSorting = () => {
    setPriceHighSort(false);
    setActiveDefaultSort(true);
    setPriceLowSort(false);
    setSortState(false);
    setSortName("Default sorting");

    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
  };

  const handlePriceLowToHigh = () => {
    setPriceHighSort(false);
    setActiveDefaultSort(false);
    setPriceLowSort(true);
    setSortState(false);
    setSortName("Sort by price : low to high");
    const allProductsClone = allProducts;
    const sortedProducts = allProductsClone.sort(
      (a, b) => a.current_price - b.current_price
    );
    // setAllProducts(sortedProducts);
    console.log(sortedProducts);
  };

  const handlePriceHighToLow = () => {
    setPriceHighSort(true);
    setActiveDefaultSort(false);
    setPriceLowSort(false);
    setSortState(false);
    setSortName("Sort by price : high to low");
    const sortedProducts = allProducts.sort(
      (a, b) => b.current_price - a.current_price
    );
    console.log(sortedProducts);
  };

  return (
    <>
      <Navbar></Navbar>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Shop - Inessa Perfumes </title>
      </Helmet> */}
      <section className="pt-[20px] lg:pt-[50px] pb-[20px] lg:pb-[100px] px-4 lg:px-28 max-w-[1600px] w-full m-auto">
        <div className="mb-4 lg:mb-10">
          <h4 className="body-font">Home / Shop</h4>
          <h2 className="heading-font text-4xl uppercase">Shop</h2>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-10 space-y-2 lg:space-y-0">
          <div
            className="flex items-center space-x-2 hover:cursor-pointer"
            onClick={() => dispatch({ type: actionTypes.FILTER_OPEN })}
          >
            <VscSettings className="rotate-90 text-xl"></VscSettings>
            <h4 className="body-font font-medium">Filter Products</h4>
          </div>
          <div className="w-full lg:w-auto flex justify-between items-center lg:space-x-10">
            <div className="relative">
              <div
                className="flex items-center space-x-6 cursor-pointer prevent-select"
                onClick={() => setSortState(!sortState)}
              >
                <h4 className="body-font font-medium">{sortName}</h4>
                <SlArrowDown className="text-sm "></SlArrowDown>
              </div>
              {sortState && (
                <div className="absolute left-0 top-8 z-20 bg-white shadow-lg  w-[260px] divide-y divide-gray-400">
                  <div className="" onClick={handleDefaultSorting}>
                    <p
                      className={`body-font ${
                        !activeDefaultSort && "text-slate-600"
                      } hover:text-white hover:bg-blue-600 ${
                        activeDefaultSort && "bg-blue-600 text-white"
                      } px-3 py-1 prevent-select cursor-pointer`}
                    >
                      Default sorting
                    </p>
                  </div>
                  <div className="">
                    <p className="body-font text-slate-600 hover:text-white hover:bg-blue-600 px-3 py-1 prevent-select cursor-pointer">
                      Sort by popularity
                    </p>
                  </div>
                  <div className="" onClick={handlePriceLowToHigh}>
                    <p
                      className={`body-font ${
                        !priceLowSort && "text-slate-600"
                      } hover:text-white hover:bg-blue-600 ${
                        priceLowSort && "bg-blue-600 text-white"
                      } px-3 py-1 prevent-select cursor-pointer`}
                    >
                      Sort by price : low to high
                    </p>
                  </div>
                  <div className="" onClick={handlePriceHighToLow}>
                    <p
                      className={`body-font ${
                        !priceHighSort && "text-slate-600"
                      } hover:text-white hover:bg-blue-600 ${
                        priceHighSort && "bg-blue-600 text-white"
                      } px-3 py-1 prevent-select cursor-pointer`}
                    >
                      Sort by price : high to low
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <IoGridSharp
                className={`text-xl cursor-pointer ${
                  dataGrid ? "text-gray-400" : "text-black"
                } `}
                onClick={() => setDataGrid(false)}
              ></IoGridSharp>
              <FaList
                className={`text-xl cursor-pointer ${
                  dataGrid ? "text-black" : "text-gray-400"
                } `}
                onClick={() => setDataGrid(true)}
              ></FaList>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 ${
            dataGrid
              ? "lg:grid-cols-2 gap-y-12 gap-x-5"
              : "lg:grid-cols-4 gap-5"
          }`}
        >
          {allProducts.map((product) =>
            dataGrid ? (
              <ProductCard2 key={product.id} product={product}></ProductCard2>
            ) : (
              <ProductCard key={product.id} product={product}></ProductCard>
            )
          )}
        </div>
      </section>
      {filterShow && <FilterBar></FilterBar>}
      <Footer></Footer>
    </>
  );
};

export default AllPerfumes;

//grid grid-cols-1 lg:grid-cols-4 gap-4
//<ProductCard key={product.id} product={product}></ProductCard>
