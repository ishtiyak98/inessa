import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProductCardSmall = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex lg:items-center space-x-5 cursor-pointer border-b-2 pb-4"
      onClick={() => navigate(`/product_${product.id}`)}
    >
      <div>
        <div className="relative group cursor-pointer w-[90px]">
          <div className="overflow-hidden">
            <img
              src={product.product_img}
              alt="product_img"
              className="w-full hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="uppercase font-medium">{product.name}</p>
        <div className="flex text-gray-600 text-sm space-x-[1px]">
          {product.stars === 5.0 && (
            <>
              <BsStarFill className="text-amber-500"></BsStarFill>
              <BsStarFill className="text-amber-500"></BsStarFill>
              <BsStarFill className="text-amber-500"></BsStarFill>
              <BsStarFill className="text-amber-500"></BsStarFill>
              <BsStarFill className="text-amber-500"></BsStarFill>
            </>
          )}
          {product.stars === 4.0 && (
            <>
              <BsStarFill className="text-amber-500"></BsStarFill>
              <BsStarFill className="text-amber-500"></BsStarFill>
              <BsStarFill className="text-amber-500"></BsStarFill>
              <BsStarFill className="text-amber-500"></BsStarFill>
              <BsStar></BsStar>
            </>
          )}
          {product.stars === 3.0 && (
            <>
              <BsStarFill className="text-amber-500"></BsStarFill>
              <BsStarFill className="text-amber-500"></BsStarFill>
              <BsStarFill className="text-amber-500"></BsStarFill>
              <BsStar></BsStar>
              <BsStar></BsStar>
            </>
          )}
        </div>
        {product.on_sale ? (
          <div className="flex space-x-2">
            <p className="text-gray-400 font-bold line-through">
              ${product.previous_price}.00
            </p>
            <p className="text-gray-600 font-bold">
              ${product.current_price}.00
            </p>
          </div>
        ) : (
          <p className="text-gray-600 font-bold">${product.current_price}.00</p>
        )}
      </div>
    </div>
  );
};

export default ProductCardSmall;
