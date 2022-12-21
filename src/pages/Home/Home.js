import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import BestSeller from "./BestSeller";
import HomeBanner from "./HomeBanner";
import ProductHighlight from "./ProductHighlight";

const Home = () => {
  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Inessa Perfumes </title>
      </Helmet> */}
      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      <ProductHighlight></ProductHighlight>
      <BestSeller></BestSeller>
    </>
  );
};

export default Home;
