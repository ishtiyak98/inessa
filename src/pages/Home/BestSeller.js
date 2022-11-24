import React from "react";
import Product1 from "../../assets/asset 5.jpeg";
import Product2 from "../../assets/asset 6.jpeg";
import Product3 from "../../assets/asset 7.jpeg";
import Product4 from "../../assets/asset 8.jpeg";
import Cart from "../../assets/cart.svg";
import { MdStarOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

const BestSeller = () => {
  return (
    <section className="py-[100px] px-28 g max-w-[1600px] w-full m-auto">
      <div className="space-y-5 text-center mb-12">
        <p className="uppercase heading-font text-lg font-bold tracking-[2px]">
          OUR ORIGINAL PERFUME
        </p>
        <h2 className="uppercase heading-font text-8xl leading-[82px]">
          best sellers
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 gap-x-4">
        <div>
          <div className="relative group cursor-pointer">
            <div>
              <img src={Product1} alt="" className="w-full" />
            </div>
            <div className="hidden group-hover:block">
              <div
                data-tip
                data-for="CartIcon"
                className=" absolute top-4 right-4 shadow-md bg-[#fcfcfc] hover:bg-white inline-block p-2 rounded-full cursor-pointer"
              >
                <img src={Cart} alt="" width={16} />
                <ReactTooltip
                  place="left"
                  type="dark"
                  effect="solid"
                  id="CartIcon"
                >
                  <span>Add to cart</span>
                </ReactTooltip>
              </div>
              <div
                data-tip
                data-for="sadFace"
                className="absolute top-16 right-4 shadow-md bg-[#fcfcfc] hover:bg-white inline-block p-2 rounded-full cursor-pointer"
              >
                <FaEye></FaEye>
                <ReactTooltip
                  place="left"
                  type="dark"
                  effect="solid"
                  id="sadFace"
                >
                  <span>Quick View</span>
                </ReactTooltip>
              </div>
            </div>
          </div>
          <div className="body-font py-4 px-2 space-y-1">
            <p className="text-sm text-gray-400">Exclusive</p>
            <p className="uppercase font-medium">cool blue perfume</p>
            <div className="flex text-gray-600 text-lg">
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
            </div>
            <p className="text-gray-600 font-bold">$255.00</p>
          </div>
        </div>
        <div>
          <div className="relative group cursor-pointer">
            <div>
              <img src={Product2} alt="" className="w-full" />
            </div>
            <div className="hidden group-hover:block">
              <div
                data-tip
                data-for="CartIcon"
                className=" absolute top-4 right-4 shadow-md bg-[#fcfcfc] hover:bg-white inline-block p-2 rounded-full cursor-pointer"
              >
                <img src={Cart} alt="" width={16} />
                <ReactTooltip
                  place="left"
                  type="dark"
                  effect="solid"
                  id="CartIcon"
                >
                  <span>Add to cart</span>
                </ReactTooltip>
              </div>
              <div
                data-tip
                data-for="sadFace"
                className="absolute top-16 right-4 shadow-md bg-[#fcfcfc] hover:bg-white inline-block p-2 rounded-full cursor-pointer"
              >
                <FaEye></FaEye>
                <ReactTooltip
                  place="left"
                  type="dark"
                  effect="solid"
                  id="sadFace"
                >
                  <span>Quick View</span>
                </ReactTooltip>
              </div>
            </div>
          </div>
          <div className="body-font py-4 px-2 space-y-1">
            <p className="text-sm text-gray-400">Women</p>
            <p className="uppercase font-medium">cool blue perfume</p>
            <div className="flex text-gray-600 text-lg">
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
            </div>
            <p className="text-gray-600 font-bold">$255.00</p>
          </div>
        </div>
        <div>
          <div className="relative group cursor-pointer">
            <div>
              <img src={Product3} alt="" className="w-full" />
            </div>
            <div className="absolute top-4 left-4">
              <p className="font-medium bg-[#fcfcfc] inline-block px-4 py-1 rounded-full shadow-md ">
                sale!
              </p>
            </div>
            <div className="hidden group-hover:block">
              <div
                data-tip
                data-for="CartIcon"
                className="absolute top-4 right-4 shadow-md bg-[#fcfcfc] hover:bg-white inline-block p-2 rounded-full cursor-pointer"
              >
                <img src={Cart} alt="" width={16} />
                <ReactTooltip
                  place="left"
                  type="dark"
                  effect="solid"
                  id="CartIcon"
                >
                  <span>Add to cart</span>
                </ReactTooltip>
              </div>
              <div
                data-tip
                data-for="sadFace"
                className="absolute top-16 right-4 shadow-md bg-[#fcfcfc] hover:bg-white inline-block p-2 rounded-full cursor-pointer"
              >
                <FaEye></FaEye>
                <ReactTooltip
                  place="left"
                  type="dark"
                  effect="solid"
                  id="sadFace"
                >
                  <span>Quick View</span>
                </ReactTooltip>
              </div>
            </div>
          </div>
          <div className="body-font py-4 px-2 space-y-1">
            <p className="text-sm text-gray-400">Women</p>
            <p className="uppercase font-medium">cool blue perfume</p>
            <div className="flex text-gray-600 text-lg">
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
            </div>
            <div className="flex space-x-2">
              <p className="text-gray-400 font-bold line-through">$185.00</p>
              <p className="text-gray-600 font-bold">$185.00</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative group cursor-pointer">
            <div>
              <img src={Product4} alt="" className="w-full" />
            </div>
            <div className="hidden group-hover:block">
              <div
                data-tip
                data-for="CartIcon"
                className=" absolute top-4 right-4 shadow-md bg-[#fcfcfc] hover:bg-white inline-block p-2 rounded-full cursor-pointer"
              >
                <img src={Cart} alt="" width={16} />
                <ReactTooltip
                  place="left"
                  type="dark"
                  effect="solid"
                  id="CartIcon"
                >
                  <span>Add to cart</span>
                </ReactTooltip>
              </div>
              <div
                data-tip
                data-for="sadFace"
                className="absolute top-16 right-4 shadow-md bg-[#fcfcfc] hover:bg-white inline-block p-2 rounded-full cursor-pointer"
              >
                <FaEye></FaEye>
                <ReactTooltip
                  place="left"
                  type="dark"
                  effect="solid"
                  id="sadFace"
                >
                  <span>Quick View</span>
                </ReactTooltip>
              </div>
            </div>
          </div>
          <div className="body-font py-4 px-2 space-y-1">
            <p className="text-sm text-gray-400">Exclusive</p>
            <p className="uppercase font-medium">cool blue perfume</p>
            <div className="flex text-gray-600 text-lg">
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
              <MdStarOutline></MdStarOutline>
            </div>
            <p className="text-gray-600 font-bold">$255.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
