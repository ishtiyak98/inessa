import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeBanner from "./HomeBanner";
import ProductHighlight from "./ProductHighlight";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      <div className="">
        <ProductHighlight></ProductHighlight>
      </div>
    </>
  );
};

export default Home;
