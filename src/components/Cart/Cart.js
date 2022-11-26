import React, { useContext, useState } from "react";
import { NavStateContext } from "../../App";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CartImageSample from "../../assets/asset 6.jpeg";
import "./Cart.css";

const Cart = () => {
  const { cartState, setCartState } = useContext(NavStateContext);
  const [quantity, setQuantity] = useState(0);

  const quantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" bg-white z-30 sidebar">
      <div className="sidebar-content w-[450px] h-[100%]">
        <div className="flex justify-between items-center py-5 px-5 body-font border-b-[2px] border-b-gray-400">
          <div>
            <p className="font-semibold">Shopping Cart</p>
          </div>
          <div
            className="text-2xl cursor-pointer"
            onClick={() => setCartState(false)}
          >
            <AiOutlineClose></AiOutlineClose>
          </div>
        </div>

        <div className=" p-5">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <img src={CartImageSample} alt="" width={70} />
              </div>
              <div className="space-y-4">
                <p className="font-medium">Bright Light by Yana</p>
                <div className="body-font text-sm">
                  <form onSubmit={handleForm}>
                    <button
                      name="plusButton"
                      className="w-[30px] text-center outline-none inline px-2 py-1 border hover:cursor-pointer"
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
                      className="w-[50px] mb-4 px-2 py-1 text-center outline-none border-t border-b"
                    />
                    <button
                      name="minusButton"
                      className="w-[30px] text-center outline-none inline px-2 py-1 border hover:cursor-pointer"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity === 5}
                    >
                      +
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-2xl text-gray-400 flex justify-end">
                <IoIosCloseCircleOutline></IoIosCloseCircleOutline>
              </p>
              <p>$2344</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
