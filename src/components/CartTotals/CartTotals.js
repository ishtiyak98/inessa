import React, { useContext, useState } from "react";
import { AllProductContext } from "../../context/ProductContext";

const CartTotals = () => {
  const {
    state: { myCart },
    dispatch,
  } = useContext(AllProductContext);

  const [isCoupon, setCoupon] = useState(false);

  return (
    <>
      <div className="w-[340px] border">
        <h4 className="text-xl heading-font py-2 bg-gray-200 px-4">
          Cart totals
        </h4>
        <div className="divide-y px-4 py-4">
          <div className="flex items-center justify-between space-x-16 py-2">
            <p>Subtotal</p>
            <p>${myCart.reduce((a, b) => a + b.buyingPrice, 0)}</p>
          </div>
          <div className="flex items-center justify-between space-x-16 py-2">
            <p>Total</p>
            <p>${myCart.reduce((a, b) => a + b.buyingPrice, 0)}</p>
          </div>
        </div>
        <div className="px-4 pt-2 pb-4">
          {!isCoupon && (
            <p className="body-font text-sm cursor-pointer hover:font-semibold inline-block" onClick={() => setCoupon(true)}>
              Have a coupon?
            </p>
          )}
          {isCoupon && (
            <form action="" className="space-x-4">
              <input
                type="text"
                name=""
                id=""
                className="px-2 py-2 outline-none border"
              />
              <input
                type="submit"
                value="APPLY"
                className="px-6 py-2 bg-black text-white cursor-pointer"
              />
            </form>
          )}
        </div>
        <div className="px-4 pb-4">
          <button className="uppercase block w-full text-center cursor-pointer bg-black text-white py-4 font-semibold tracking-widest text-sm">
            checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTotals;
