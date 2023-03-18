import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BestSeller from "./BestSeller";
import HomeBanner from "./HomeBanner";
import ProductHighlight from "./ProductHighlight";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Footer></Footer>
    </>
  );
};

export default Home;
