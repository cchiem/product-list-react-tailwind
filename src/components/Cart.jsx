import React from "react";
import { AddedCart } from "./AddedCart";
import { DefaultCart } from "./DefaultCart";
export const Cart = ({
  count,
  totalPrice,
  shoppingCart,
  removeItem,
  toggleModal,
}) => {
  return (
    <div className="bg-white rounded-lg w-[380px] p-4 max-sm:w-full">
      <p className="text-[#C83B0E] font-[700] text-[24px]">
        Your Cart ({count})
      </p>
      {count === 0 ? (
        <DefaultCart />
      ) : (
        <AddedCart
          shoppingCart={shoppingCart}
          totalPrice={totalPrice}
          removeItem={removeItem}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};
