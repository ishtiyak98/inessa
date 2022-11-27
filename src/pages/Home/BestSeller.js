import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard.js/ProductCard";
import COCO from "../../assets/asset 17.jpeg";
import CHANEL from "../../assets/asset 9.jpeg";
import Girl from "../../assets/asset 10.jpeg";

const BestSeller = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter(
          (product) => product?.best_seller === true
        );
        setBestSellerProducts(filterData);
      });
  }, []);

  return (
    <section className="py-[100px] px-28 max-w-[1600px] w-full m-auto">
      <div className="space-y-5 text-center mb-12">
        <p className="uppercase heading-font text-lg font-bold tracking-[2px]">
          OUR ORIGINAL PERFUME
        </p>
        <h2 className="uppercase heading-font text-8xl leading-[82px]">
          best sellers
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 gap-x-4">
        {bestSellerProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-4 mt-14">
        <div className="grid grid-cols-2 gap-x-4">
          <div className="bg-red-500 h-fit">
            <img src={CHANEL} alt="" />
          </div>
          <div className="bg-red-500 h-fit">
            <img src={Girl} alt="" />
          </div>
          <div className="col-span-2 gap-x-4">
            <h2 className="text-5xl text-center heading-font py-6">
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
