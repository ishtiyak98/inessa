import React, { useEffect, useState } from "react";

import COCO from "../../assets/asset 17.jpeg";
import CHANEL from "../../assets/asset 9.jpeg";
import Girl from "../../assets/asset 10.jpeg";
import { useContext } from "react";
import { AllProductContext } from "../../context/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";

const BestSeller = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  const {
    state: { products },
  } = useContext(AllProductContext);

  useEffect(() => {
    const filterData = products.filter(
      (product) => product?.best_seller === true
    );
    setBestSellerProducts(filterData);
  }, [products]);

  return (
    <section className="lg:py-[100px] px-5 lg:px-28 max-w-[1600px] w-full m-auto">
      <div className="space-y-5 text-center mb-12">
        <p className="uppercase heading-font text-lg font-bold tracking-[2px]">
          OUR ORIGINAL PERFUME
        </p>
        <h2 className="uppercase heading-font text-4xl lg:text-8xl lg:leading-[82px]">
          best sellers
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4">
        {bestSellerProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-x-4 my-14 ">
        <div className="grid grid-cols-2 gap-x-4">
          <div className="bg-red-500 h-fit">
            <img src={CHANEL} alt="" />
          </div>
          <div className="bg-red-500 h-fit">
            <img src={Girl} alt="" />
          </div>
          <div className="col-span-2 gap-x-4">
            <h2 className="text-2xl lg:text-5xl text-center heading-font py-2 lg:py-6">
              THE NEW FRAGRANCE <br /> THAT WILL SURPRISE YOU <br /> EVERY DAY
            </h2>
            <div className="flex justify-center my-4">
              <div className="uppercase body-font font-medium px-6 py-3 bg-black text-white  inline-block tracking-[2px] hover:cursor-pointer">
                Discover
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <img src={COCO} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
