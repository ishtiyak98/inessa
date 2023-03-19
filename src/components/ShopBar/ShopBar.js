import React, { useContext, useEffect, useState } from 'react';
import { AllProductContext } from '../../context/ProductContext';
import { actionTypes } from '../../state/ProductState/actionTypes';

const ShopBar = () => {
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
            
        </>
    );
};

export default ShopBar;