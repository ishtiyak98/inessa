import React, { useContext, useState } from "react";
import CartTotals from "../CartTotals/CartTotals";
import { AllProductContext } from "../../context/ProductContext";
import { actionTypes } from "../../state/ProductState/actionTypes";
import { HiOutlineTrash } from "react-icons/hi";

const CartDetailsSm = () => {
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
    <div className="block lg:hidden justify-center mt-12">
      <div className="space-y-8 mb-10">
        {myCart
          .sort((x, y) => x.cartPosition - y.cartPosition)
          .map((item) => (
            <div className="border ">
              <div className="text-end border-b p-4">
                <p
                  className="inline-block text-2xl text-gray-400  cursor-pointer hover:text-red-600"
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
              </div>
              <div className="text-center border-b p-4">
                <img
                  src={item.product_img}
                  className="inline-block"
                  alt=""
                  width={110}
                />
              </div>
              <div className="flex justify-between border-b p-4">
                <p>Product: </p>
                <p>{item.name}</p>
              </div>
              <div className="flex justify-between border-b p-4">
                <p>Price: </p>
                <p>${item.current_price}</p>
              </div>
              <div className="flex justify-between border-b p-4">
                <p>Quantity: </p>
                <div className="body-font text-md">
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
                      className="w-[50px] mb-0 px-2 py-1 text-center outline-none border-t border-b"
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
              <div className="flex justify-between p-4">
                <p>Subtotal: </p>
                <p>${item.buyingPrice}</p>
              </div>
            </div>
          ))}
      </div>
      <div>
        <CartTotals></CartTotals>
      </div>
    </div>
  );
};

export default CartDetailsSm;
