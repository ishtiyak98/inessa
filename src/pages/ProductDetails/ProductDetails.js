import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AllProductContext } from "../../context/ProductContext";
import ImageGallery from "react-image-gallery";
import ReactImageMagnify from "react-image-magnify";
import { FaCheckCircle } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";

const ProductDetails = () => {
  const {
    state: { products },
    dispatch,
  } = useContext(AllProductContext);
  const { id } = useParams();
  const [onImgHover, setOnImgHover] = useState(false);

  const productDetails = products?.find((item) => item.id === id);

  const images = productDetails?.more_img?.map((item) => {
    const obj = {
      original: item,
      thumbnail: item,
      thumbnailClass: " hover:border-none",
    };
    return obj;
  });

  const [quantity, setQuantity] = useState(0);

  console.log(quantity);
  const quantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="pt-[20px]  lg:pt-[50px] pb-[20px] lg:pb-[100px] px-4 lg:px-28 max-w-[1600px] w-full m-auto">
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-6 items-center">
          <div className="">
            {products.length > 0 && (
              <ImageGallery
                items={images}
                autoPlay={false}
                thumbnailPosition={"left"}
                showFullscreenButton={true}
                showPlayButton={false}
                showNav={false}
                onMouseOver={(e) => {
                  console.log(e.target.currentSrc);
                  setOnImgHover(true);
                  console.log(onImgHover);
                }}
              />
            )}
          </div>
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-[36px] heading-font font-semibold">
              {productDetails?.name}
            </h2>
            <h4 className="body-font text-[28px] text-gray-700 font-bold">
              ${productDetails?.current_price}.00
              <span className="text-[18px] font-medium mx-2 text-gray-500">
                +{" "}
                {productDetails?.shipping
                  ? productDetails?.shipping
                  : "Free Shipping"}
              </span>
            </h4>
            <p className="body-font text-[16px] text-gray-500">
              {productDetails?.desc}
            </p>
            <div className="body-font text-sm">
              <form onSubmit={handleForm}>
                <button
                  name="plusButton"
                  className="w-[30px] text-center outline-none inline px-2 py-2 border hover:cursor-pointer"
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 0}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={quantityChange}
                  min="0"
                  max="5"
                  disabled={quantity === 5}
                  className="w-[50px] px-2 py-2 mb-0 text-center outline-none border-t border-b"
                />
                <button
                  name="minusButton"
                  className="w-[30px] text-center outline-none inline px-2 py-2 border hover:cursor-pointer"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity === 5}
                >
                  +
                </button>
                <input
                  type="submit"
                  value={"ADD TO CART"}
                  className="px-8 py-2 mx-6 font-bold  text-white bg-gray-900 hover:cursor-pointer"
                ></input>
              </form>
              {quantity >= 5 && (
                <p className="text-red-500 text-sm mt-4">
                  <span className="font-semibold">Note:</span> You can't add
                  more than 5 items in a single order
                </p>
              )}
            </div>
            <div>
              <fieldset className="border-[1px]">
                <legend className="text-center body-font text-[16px] font-bold text-gray-500 px-3">
                  Guaranteed Safe Checkout
                </legend>
                <div className="text-[45px] flex justify-center space-x-4 py-4 text-gray-500">
                  <FaCcVisa></FaCcVisa>
                  <FaCcMastercard></FaCcMastercard>
                  <FaCcDiscover></FaCcDiscover>
                  <FaCcPaypal></FaCcPaypal>
                  <FaCcApplePay></FaCcApplePay>
                </div>
              </fieldset>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <FaCheckCircle></FaCheckCircle>
                <p>No-Risk Money Back Guarantee!</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle></FaCheckCircle>
                <p>No Hassle Refunds</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle></FaCheckCircle>
                <p>Secure Payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;

// <ReactImageZoom {...props} />
// console.log(e.target.currentSrc)
