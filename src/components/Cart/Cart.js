import React, { useContext, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./Cart.css";
import { actionTypes } from "../../state/ProductState/actionTypes";
import { AllProductContext } from "../../context/ProductContext";
import { MdClose } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    state: { myCart },
    dispatch,
  } = useContext(AllProductContext);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const quantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleViewCart = () => {
    dispatch({ type: actionTypes.CART_CLOSE });
    navigate("/cart");
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sidebar bg-white z-30 ">
      <div className="sidebar-content w-[100%] lg:w-[450px] min-h-[100%]">
        <div className="flex sticky top-0 right-0 bg-white justify-between items-center py-5 px-5 body-font border-b-[2px] border-b-gray-400">
          <div>
            <p className="font-semibold">Shopping Cart</p>
          </div>
          <div
            className="text-2xl cursor-pointer"
            onClick={() => dispatch({ type: actionTypes.CART_CLOSE })}
          >
            <IoIosCloseCircleOutline></IoIosCloseCircleOutline>
          </div>
        </div>

        {myCart.length ? (
          <div className="divide-y-2">
            {myCart
              .sort((x, y) => x.cartPosition - y.cartPosition)
              .map((item, index) => (
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
                              name="minusButton"
                              className="w-[30px] text-center outline-none inline px-2 py-1 border hover:cursor-pointer"
                              onClick={() =>
                                dispatch(
                                  item.quantity === 1
                                    ? {
                                        type: actionTypes.CART_ITEM_REMOVE,
                                        payload: item,
                                      }
                                    : {
                                        type: actionTypes.CART_ITEM_QTY_DECREASE,
                                        payload: item,
                                      }
                                )
                              }
                              // disabled={item.quantity === 0}
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
                              name="plusButton"
                              className="w-[30px] text-center outline-none inline px-2 py-1 border hover:cursor-pointer"
                              onClick={() =>
                                dispatch({
                                  type: actionTypes.ADD_TO_CART,
                                  payload: { ...item, trigger: false },
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
                      <p>${item.buyingPrice}</p>
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

        {myCart.length && (
          <div className="sticky bottom-0 right-0 bg-white body-font mt-8">
            <div className="flex justify-between items-center py-3 border-y-[2px] border-y-gray-400">
              <p className="font-semibold px-5">Subtotal: </p>
              <p className="font-semibold px-5">
                $
                {myCart
                  .map((item) => item.buyingPrice)
                  .reduce((x, y) => {
                    return x + y;
                  }, 0)}
              </p>
            </div>

            <div className="space-y-3 py-4 px-5">
              <div
                className="text-center cursor-pointer border-[2px] border-black text-black py-4 font-semibold tracking-widest text-sm"
                onClick={handleViewCart}
              >
                VIEW CART
              </div>
              <div className="text-center cursor-pointer bg-black text-white py-4 font-semibold tracking-widest text-sm">
                CHECKOUT
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
