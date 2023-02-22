import React, { useContext, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./Cart.css";
import { actionTypes } from "../../state/ProductState/actionTypes";
import { AllProductContext } from "../../context/ProductContext";
import { MdClose } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";

const Cart = () => {
  const {
    state: { myCart },
    dispatch,
  } = useContext(AllProductContext);
  const [quantity, setQuantity] = useState(0);

  const quantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sidebar bg-white z-30">
      <div className="sidebar-content w-[100%] lg:w-[450px] min-h-[100%]">
        <div className="flex justify-between items-center py-5 px-5 body-font border-b-[2px] border-b-gray-400">
          <div>
            <p className="font-semibold">Shopping Cart</p>
          </div>
          <div
            className="text-2xl cursor-pointer"
            onClick={() => dispatch({ type: actionTypes.CART_CLOSE })}
          >
            <MdClose></MdClose>
          </div>
        </div>

        {myCart.length ? (
          <div className="divide-y-2">
            {myCart.map((item, index) => (
              <div key={index} className="px-5 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div>
                      <img src={item.product_img} alt="" width={70} />
                    </div>
                    <div className="space-y-4">
                      <p className="font-medium">{item.name}</p>
                      <div className="body-font text-sm">
                        <form onSubmit={handleForm}>
                          <button
                            name="plusButton"
                            className="w-[30px] text-center outline-none inline px-2 py-1 border hover:cursor-pointer"
                            onClick={() =>
                              dispatch({
                                type: actionTypes.CART_ITEM_QTY_DECREASE,
                                payload: item,
                              })
                            }
                            disabled={item.quantity === 0}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={quantityChange}
                            min="0"
                            max="5"
                            disabled={item.quantity === 5}
                            className="w-[50px] mb-0 px-2 py-1  text-center outline-none border-t border-b"
                          />
                          <button
                            name="minusButton"
                            className="w-[30px] text-center outline-none inline px-2 py-1 border hover:cursor-pointer"
                            onClick={() =>
                              dispatch({
                                type: actionTypes.ADD_TO_CART,
                                payload: item,
                              })
                            }
                            disabled={quantity === 5}
                          >
                            +
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p
                      className="text-xl text-gray-400 flex justify-end cursor-pointer hover:text-red-600"
                      onClick={() =>
                        dispatch({
                          type: actionTypes.CART_ITEM_REMOVE,
                          payload: item,
                        })
                      }
                    >
                      {/* <IoIosCloseCircleOutline></IoIosCloseCircleOutline> */}
                      <HiOutlineTrash></HiOutlineTrash>
                    </p>
                    <p>${item.current_price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[500px] ">
            <h1 className="text-xl font-medium text-gray-500 flex justify-center items-center h-[100%]">
              Your Cart is Empty
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
