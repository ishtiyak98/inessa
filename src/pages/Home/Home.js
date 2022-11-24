import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BestSeller from "./BestSeller";
import HomeBanner from "./HomeBanner";
import ProductHighlight from "./ProductHighlight";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      <ProductHighlight></ProductHighlight>
      <BestSeller></BestSeller>
    </>
  );
};

export default Home;
