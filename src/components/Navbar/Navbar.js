import React from "react";
import Logo from "../../assets/asset 0.png";
import { FaBeer } from "react-icons/fa";
import Cart from "../../assets/cart.svg";
import User from "../../assets/user.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="body-font bg-white font-medium flex justify-between items-center px-20 py-10">
      <div className="space-x-10 uppercase">
        <Link to={"/shop"}>buy perfumes</Link>
        <Link to={"/exclusive"}>exclusive</Link>
        <Link to={"/product-category/women"}>women</Link>
        <Link to={"/product-category/men"}>men</Link>
      </div>
      <div className="hover:scale-110 transition-transform">
        <Link to={"/"}>
          <img src={Logo} alt="" width={110} />
        </Link>
      </div>
      <div className="flex items-center space-x-10 uppercase">
        <Link to={"/about"}>about</Link>
        <Link to={"/contact"}>contact</Link>
        <div className="hover:cursor-pointer flex items-center">
          <div className="relative">
            <img src={Cart} alt="" width={25} />
            <div className="absolute -top-3 -right-4 bg-black text-white w-[20px] h-[20px] rounded-full flex items-center justify-center text-sm shadow-md">
              <span className="">0</span>
            </div>
          </div>
        </div>
        <div className="hover:cursor-pointer">
          <img src={User} alt="" width={25} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;