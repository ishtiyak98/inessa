import React from "react";
import LeftImage from "../../assets/asset 2.jpeg";
import UpperImage from "../../assets/asset 1.jpeg";
import RightImage from "../../assets/asset 3.jpeg";
import UpperImage2 from "../../assets/asset 4.jpeg";

const ProductHighlight = () => {
  return (
    <section className="py-[100px] px-5 lg:px-28 max-w-[1600px] w-full m-auto">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="relative w-full">
          <div className="absolute h-full flex items-center">
            <img src={UpperImage} className="w-[200px] lg:w-[280px]" alt="" />
          </div>
          <div className="ml-[140px]">
            <img src={LeftImage} className="w-full" alt="" />
          </div>
        </div>
        <div className="text-right space-y-10 mt-10 lg:mt-0 ml-4 ">
          <div className="space-y-5">
            <p className="uppercase heading-font text-lg font-bold tracking-[2px]">
              OUR ORIGINAL PERFUME
            </p>
            <h1 className="uppercase heading-font text-4xl lg:text-8xl lg:leading-[82px]">
              The <br /> new <br /> FRAGRANCE
            </h1>
            <p className="body-font">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="uppercase body-font font-medium px-6 py-3 bg-black text-white inline-block tracking-[2px] hover:cursor-pointer">
            shop now
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 items-center mt-14 lg:mt-0">
        <div className="relative order-first lg:order-last w-full">
          <div className="absolute right-0 h-full flex items-center">
            <img src={UpperImage2} className="w-[200px] lg:w-[280px]" alt="" />
          </div>
          <div className="mr-[140px]">
            <img src={RightImage} alt="" className="w-full"/>
          </div>
        </div>
        <div className="space-y-10 order-last mt-10 lg:mt-0 lg:order-first mr-4 w-full">
          <div className="space-y-5">
            <p className="uppercase heading-font text-lg font-bold tracking-[2px]">
              EAU DE TOILETTE
            </p>
            <h1 className="uppercase heading-font text-4xl lg:text-8xl lg:leading-[82px]">
              INSTINCTIVE <br /> AND <br /> ELECTRIC
            </h1>
            <p className="body-font">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="uppercase body-font font-medium px-6 py-3 bg-black text-white inline-block tracking-[2px] hover:cursor-pointer">
            Discover
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
