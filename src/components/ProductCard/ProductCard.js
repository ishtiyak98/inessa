import React, { useContext, useState } from "react";
import Cart from "../../assets/cart.svg";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import { AllProductContext } from "../../context/ProductContext";
import { actionTypes } from "../../state/ProductState/actionTypes";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(AllProductContext);
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [clickCount, setClickCount] = useState(0);

  const addToCartHandler = (product) => {
    if (clickCount !== 5) {
      dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
      addToast("Product added in the cart!", { appearance: "success" });
      setClickCount((state) => state + 1);
    }
  };
  return (
    <div className="cursor-pointer">
      <div className="relative group cursor-pointer">
        <div
          className="overflow-hidden"
          onClick={() => navigate(`/product_${product.id}`)}
        >
          <img
            src={product.product_img}
            alt=""
            className="w-full hover:scale-110 transition-transform duration-300"
          />
        </div>
        {product.on_sale && (
          <div className="absolute top-4 left-4">
            <p className="font-medium bg-[#fcfcfc] inline-block px-4 py-1 rounded-full shadow-md ">
              sale!
            </p>
          </div>
        )}

        <div className="hidden group-hover:block">
          <button
            data-tip
            data-for="CartIcon"
            className="absolute top-4 right-4 shadow-md bg-[#fcfcfc] hover:bg-white inline-block p-2 rounded-full cursor-pointer"
            onClick={() => addToCartHandler(product)}
          >
            <img src={Cart} alt="" width={16} />
            <ReactTooltip place="left" type="dark" effect="solid" id="CartIcon">
              <span>Add to cart</span>
            </ReactTooltip>
          </button>
          <button
            data-tip
            data-for="sadFace"
            className="absolute top-16 right-4 shadow-md bg-[#fcfcfc] hover:bg-white inline-block p-2 rounded-full cursor-pointer"
          >
            <FaEye></FaEye>
            <ReactTooltip place="left" type="dark" effect="solid" id="sadFace">
              <span>Quick View</span>
            </ReactTooltip>
          </button>
        </div>
      </div>
      <div className="body-font py-4 px-2 space-y-1">
        {product.category.includes("exclusive") && (
          <p className="text-sm text-gray-400">Exclusive</p>
        )}
        {!product.category.includes("exclusive") &&
          (product.category.includes("men") ? (
            <p className="text-sm text-gray-400">Men</p>
          ) : (
            <p className="text-sm text-gray-400">Women</p>
          ))}
        <p className="uppercase font-medium">{product.name}</p>
        <div className="flex text-gray-600 text-sm space-x-[1px]">
          {Array(product.stars)
            .fill("star")
            .map((item, index) => (
              <BsStarFill key={index} className="text-amber-500"></BsStarFill>
            ))}
          {Array(5 - parseInt(product.stars))
            .fill("star")
            .map((item, index) => (
              <BsStar key={index}></BsStar>
            ))}
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

export default ProductCard;
