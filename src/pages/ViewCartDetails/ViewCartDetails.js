import React from "react";
import CartDetailsLarge from "../../components/CartDetailsLarge/CartDetailsLarge";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import CartDetailsSm from "../../components/CartDetailsSm/CartDetailsSm";

const ViewCartDetails = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="pt-[20px]  lg:pt-[100px] pb-[20px] lg:pb-[150px] px-4 lg:px-28 max-w-[1600px] w-full m-auto">
        <h2 className="heading-font text-6xl lg:text-8xl text-center">Cart</h2>
        <CartDetailsLarge></CartDetailsLarge>
        <CartDetailsSm></CartDetailsSm>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ViewCartDetails;
