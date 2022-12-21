import React, { useContext } from "react";
import Logo from "../../assets/asset 0.png";
import CartImage from "../../assets/cart.svg";
import User from "../../assets/user.svg";
import { Link } from "react-router-dom";

import "./Navbar.css";
import Cart from "../Cart/Cart";
import { FiMenu } from "react-icons/fi";
import { AllProductContext } from "../../context/ProductContext";
import { actionTypes } from "../../state/ProductState/actionTypes";

const Navbar = () => {
  const {
    state: { cartShow },
    dispatch,
  } = useContext(AllProductContext);
  return (
    <>
      <nav className="body-font relative bg-white shadow-sm text-sm font-medium flex justify-between items-center px-4 lg:px-20 py-4 lg:py-8">
        <div className=" uppercase">
          <div className="space-x-6 hidden lg:block">
            <Link to={"/shop"}>buy perfumes</Link>
            <Link to={"/exclusive"}>exclusive</Link>
            <Link to={"/product-category/women"}>women</Link>
            <Link to={"/product-category/men"}>men</Link>
          </div>
        </div>
        <div className="hover:scale-110 transition-transform absolute lg:left-[50%] lg:translate-x-[-50%]">
          <Link to={"/"}>
            <img src={Logo} alt="" width={110} />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-6 uppercase">
          <Link to={"/about"}>about</Link>
          <Link to={"/contact"}>contact</Link>
          <div className="hover:cursor-pointer flex items-center">
            <div
              className="relative"
              onClick={() => dispatch({ type: actionTypes.CART_OPEN })}
            >
              <img src={CartImage} alt="" width={20} />
              <div className="absolute -top-4 -right-4 bg-black text-white w-[20px] h-[20px] rounded-full flex items-center justify-center text-xs shadow-md">
                <span className="">0</span>
              </div>
            </div>
          </div>
          <div className="hover:cursor-pointer">
            <img src={User} alt="" width={20} />
          </div>
        </div>
        <div className="lg:hidden flex items-center space-x-8">
          <div className="hover:cursor-pointer flex items-center pt-4">
            <div
              className="relative"
              onClick={() => dispatch({ type: actionTypes.CART_OPEN })}
            >
              <img src={CartImage} alt="" width={20} />
              <div className="absolute -top-4 -right-4 bg-black text-white w-[20px] h-[20px] rounded-full flex items-center justify-center text-xs shadow-md">
                <span className="">0</span>
              </div>
            </div>
          </div>
          <div className="block lg:hidden bg-black p-3 cursor-pointer">
            <FiMenu className="text-xl text-white"></FiMenu>
          </div>
        </div>
      </nav>

      {cartShow && <Cart></Cart>}
    </>
  );
};

export default Navbar;
