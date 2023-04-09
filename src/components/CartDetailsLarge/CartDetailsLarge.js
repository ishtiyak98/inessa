import React, { useContext, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { AllProductContext } from "../../context/ProductContext";
import { actionTypes } from "../../state/ProductState/actionTypes";
import CartTotals from "../CartTotals/CartTotals";

const CartDetailsLarge = () => {
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
    <>
      <div className="hidden lg:flex justify-center mt-12 space-x-10">
        <div>
          <table
            className="w-[800px] border"
            style={{ borderCollapse: "collapse" }}
          >
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 font-medium px-4 text-left border">Img</th>
                <th className="py-2 font-medium text-left border">Product</th>
                <th className="py-2 font-medium text-left border">Price</th>
                <th className="py-2 font-medium text-left border">Quantity</th>
                <th className="py-2 font-medium text-left border">Subtotal</th>
                <th className="py-2 font-medium text-left border"></th>
              </tr>
            </thead>
            <tbody>
              {myCart.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="border-b text-lg text-center py-4 font-semibold"
                  >
                    Your Cart is empty!
                  </td>
                </tr>
              )}
              {myCart
                .sort((x, y) => x.cartPosition - y.cartPosition)
                .map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2 border-b">
                      <img src={item.product_img} alt="" width={90} />
                    </td>
                    <td className="border-b text-lg">{item.name}</td>
                    <td className="border-b text-lg">${item.current_price}</td>
                    <td className="border-b text-lg">
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
                    </td>
                    <td className="border-b text-lg">${item.buyingPrice}</td>
                    <td className="border-b px-4">
                      <p
                        className="text-2xl text-gray-400 flex justify-end cursor-pointer hover:text-red-600"
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
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <CartTotals></CartTotals>
        </div>
      </div>
    </>
  );
};

export default CartDetailsLarge;
