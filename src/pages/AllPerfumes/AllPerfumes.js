import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { VscSettings } from "react-icons/vsc";
import { SlArrowDown } from "react-icons/sl";
import { IoGridSharp } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaList } from "react-icons/fa";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import ProductCard2 from "../../components/ProductCard/ProductCard2";
// import { Helmet } from "react-helmet";
import { useContext } from "react";
import { actionTypes } from "../../state/ProductState/actionTypes";
import { AllProductContext } from "../../context/ProductContext";
import FilterBar from "../../components/FilterBar/FilterBar";
import { Link } from "react-router-dom";

const AllPerfumes = () => {
  const [sortState, setSortState] = useState(false);
  const [dataGrid, setDataGrid] = useState(false);
  const [sortName, setSortName] = useState("Default sorting");
  const [activeDefaultSort, setActiveDefaultSort] = useState(true);
  const [activePopularity, setActivePopularity] = useState(false);
  const [priceLowSort, setPriceLowSort] = useState(false);
  const [priceHighSort, setPriceHighSort] = useState(false);
  const {
    state: { products, filterShow, rangeFilter, searchKeywords },
    dispatch,
  } = useContext(AllProductContext);

  const [allProducts, setAllProducts] = useState([...products]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
    window.scrollTo(0, 0);
  }, [dispatch]);

  const handleDefaultSorting = () => {
    setPriceHighSort(false);
    setActiveDefaultSort(false);
    setPriceLowSort(false);
    setSortState(false);
    setActivePopularity(false);
    setSortName("Default sorting");

    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
  };

  const handlePopularity = () => {
    setActivePopularity(true);
    setPriceHighSort(false);
    setActiveDefaultSort(false);
    setPriceLowSort(false);
    setSortState(false);
    setSortName("Sort by popularity");
    const allProductsClone = allProducts;
    const sortedProducts = allProductsClone
      .slice()
      .sort((a, b) => b.stars - a.stars);
    setAllProducts(sortedProducts);
    console.log(sortedProducts);
  };

  const handlePriceLowToHigh = () => {
    setPriceHighSort(false);
    setActiveDefaultSort(false);
    setPriceLowSort(true);
    setSortState(false);
    setActivePopularity(false);
    setSortName("Sort by price : low to high");
    const allProductsClone = allProducts;
    const sortedProducts = allProductsClone
      .slice()
      .sort((a, b) => a.current_price - b.current_price);
    setAllProducts(sortedProducts);
    console.log(sortedProducts);
  };

  const handlePriceHighToLow = () => {
    setPriceHighSort(true);
    setActiveDefaultSort(false);
    setPriceLowSort(false);
    setSortState(false);
    setActivePopularity(false);
    setSortName("Sort by price : high to low");
    const sortedProducts = allProducts
      .slice()
      .sort((a, b) => b.current_price - a.current_price);
    setAllProducts(sortedProducts);
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
        <div className="mb-4 space-y-2 lg:mb-10">
          <h4 className="body-font">
            <Link to="/">Home</Link> / <Link to="/shop">Shop</Link>
          </h4>
          <h2 className="heading-font text-4xl lg:text-8xl">
            <Link to="/shop">Shop</Link>
          </h2>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-10 space-y-2 lg:space-y-0">
          <div className=" flex space-x-8">
            <div
              className="flex items-center space-x-2 hover:cursor-pointer"
              onClick={() => dispatch({ type: actionTypes.FILTER_OPEN })}
            >
              <VscSettings className="rotate-90 text-xl"></VscSettings>
              <h4 className="body-font font-medium">Filter Products</h4>
            </div>
            {searchKeywords && (
              <div
                className="flex items-center space-x-1 group hover:cursor-pointer bg-gray-100 py-2 px-4 rounded-full "
                onClick={() =>
                  dispatch({ type: actionTypes.ClEAR_SEARCH_KEYWORDS })
                }
              >
                <IoIosCloseCircleOutline className="text-2xl cursor-pointer group-hover:text-red-600"></IoIosCloseCircleOutline>

                <h4 className="body-font text-sm">
                  Search result for :{" "}
                  <span className="text-black font-semibold">
                    {searchKeywords}
                  </span>
                </h4>
              </div>
            )}
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
                  <div className="" onClick={handlePopularity}>
                    <p
                      className={`body-font ${
                        !activePopularity && "text-slate-600"
                      } hover:text-white hover:bg-blue-600 ${
                        activePopularity && "bg-blue-600 text-white"
                      } px-3 py-1 prevent-select cursor-pointer`}
                    >
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
          className={`grid  ${
            dataGrid
              ? "grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-5"
              : "grid-cols-2 lg:grid-cols-4 gap-5"
          }`}
        >
          {allProducts
            .filter((item) =>
              item.name.toLowerCase().includes(searchKeywords.toLowerCase())
            )
            .filter(
              (item) =>
                item.current_price >= rangeFilter[0] &&
                item.current_price <= rangeFilter[1]
            )
            .map((product) =>
              dataGrid ? (
                <ProductCard2 key={product.id} product={product}></ProductCard2>
              ) : (
                <ProductCard key={product.id} product={product}></ProductCard>
              )
            )}

          {allProducts.filter((item) =>
            item.name.toLowerCase().includes(searchKeywords.toLowerCase())
          ).length === 0 &&
            searchKeywords && (
              <div className="py-16">
                <h2 className="text-4xl font-medium">No Products Found!</h2>
              </div>
            )}
        </div>
      </section>
      {filterShow && <FilterBar></FilterBar>}
      <Footer></Footer>
    </>
  );
};

export default AllPerfumes;
