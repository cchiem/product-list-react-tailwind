import React, { useState } from "react";
import { CartItems } from "./CartItems";

export const AddedCart = ({
  shoppingCart,
  totalPrice,
  removeItem,
  toggleModal,
}) => {
  return (
    <div>
      {Object.keys(shoppingCart).map((itemName) => (
        <CartItems
          shoppingCart={shoppingCart}
          itemName={itemName}
          key={itemName}
          removeItem={removeItem}
          confirmed={false}
          thumbnail={shoppingCart[itemName].thumbnail}
        />
      ))}
      <div className="flex justify-between items-center my-6 text-[#260f08]">
        <p className="text-[16px]">Order Total</p>
        <p className="font-[700] text-[24px]">${totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-center items-center p-4 bg-[#FCF8F5] rounded-lg gap-2 my-6">
        <img
          src="/assets/images/icon-carbon-neutral.svg"
          alt="Carbon Neutral"
        />
        <p>
          This is <b>carbon-neutral</b> delivery
        </p>
      </div>
      <div
        className="bg-[#C83B0E] flex justify-center items-center my-8 p-4 rounded-full text-white font-[600] hover:bg-[#9e3c1c] hover:cursor-pointer"
        onClick={() => toggleModal()}
      >
        <p>Confirm Order</p>
      </div>
    </div>
  );
};
