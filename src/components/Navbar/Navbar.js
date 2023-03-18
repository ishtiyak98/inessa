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
import { motion } from "framer-motion";

const Navbar = () => {
  const {
    state: { cartShow, myCart },
    dispatch,
  } = useContext(AllProductContext);
  return (
    <>
      <nav className="body-font sticky top-0 z-20 bg-white shadow-sm text-sm font-medium flex justify-between items-center px-4 lg:px-20 py-4 lg:py-8">
        <div className=" uppercase">
          <div className="hidden lg:block">
            <div className="flex space-x-6 ">
              <motion.div
                initial={{ y: "-100vw" }}
                animate={{
                  y: "0px",
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  delay: 0,
                }}
              >
                <Link to={"/shop"}>buy perfumes</Link>
              </motion.div>
              <motion.div
                initial={{ y: "-100vw" }}
                animate={{
                  y: "0px",
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <Link to={"/exclusive"}>exclusive</Link>
              </motion.div>
              <motion.div
                initial={{ y: "-100vw" }}
                animate={{
                  y: "0px",
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  delay: 0.4,
                }}
              >
                <Link to={"/women"}>women</Link>
              </motion.div>
              <motion.div
                initial={{ y: "-100vw" }}
                animate={{
                  y: "0px",
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  delay: 0.6,
                }}
              >
                <Link to={"/product-category/men"}>men</Link>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="hover:scale-110 transition-transform absolute lg:left-[50%] lg:translate-x-[-50%]"
          initial={{
            width: "40px",
          }}
          animate={{
            width: "110px",
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <Link to={"/"}>
            <img src={Logo} alt="" width={110} />
          </Link>
        </motion.div>
        <div className="hidden lg:flex items-center space-x-6 uppercase">
          <motion.div
            initial={{ y: "-100vw" }}
            animate={{
              y: "0px",
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: 0.6,
            }}
          >
            <Link to={"/about"}>about</Link>
          </motion.div>
          <motion.div
            initial={{ y: "-100vw" }}
            animate={{
              y: "0px",
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: 0.4,
            }}
          >
            <Link to={"/contact"}>contact</Link>
          </motion.div>

          <motion.div
            initial={{ y: "-100vw" }}
            animate={{
              y: "0px",
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: 0.2,
            }}
          >
            <div className="hover:cursor-pointer flex items-center">
              <div
                className="relative"
                onClick={() => dispatch({ type: actionTypes.CART_OPEN })}
              >
                <img src={CartImage} alt="" width={20} />
                <div className="absolute -top-4 -right-4 bg-black text-white w-[20px] h-[20px] rounded-full flex items-center justify-center text-xs shadow-md">
                  <span className="">{myCart.length}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: "-100vw" }}
            animate={{
              y: "0px",
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: 0,
            }}
          >
            <div className="hover:cursor-pointer">
              <img src={User} alt="" width={20} />
            </div>
          </motion.div>
        </div>
        <div className="lg:hidden flex items-center space-x-8">
          <div className="hover:cursor-pointer flex items-center pt-4">
            <div
              className="relative"
              onClick={() => dispatch({ type: actionTypes.CART_OPEN })}
            >
              <img src={CartImage} alt="" width={20} />
              <div className="absolute -top-4 -right-4 bg-black text-white w-[20px] h-[20px] rounded-full flex items-center justify-center text-xs shadow-md">
                <span className="">{myCart.length}</span>
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
