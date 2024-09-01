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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          fill="none"
          viewBox="0 0 21 20"
        >
          <path
            fill="#1EA575"
            d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
          />
          <path
            fill="#1EA575"
            d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
          />
        </svg>
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
