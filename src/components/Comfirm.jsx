import React from "react";
import { CartItems } from "./CartItems";

export const Comfirm = ({
  toggleModal,
  shoppingCart,
  removeItem,
  totalPrice,
}) => {
  // Destructure the props
  return (
    <div className="modal flex flex-col justify-center items-center w-dvw h-dvh fixed top-0 left-0 right-0 bottom-0 bg-[#313131cc] max-sm:items-end">
      <div className="bg-white rounded-lg flex flex-col p-10 w-[600px] max-sm:w-full max-sm:fixed max-sm:bottom-0">
        <img
          src="./assets/images/icon-order-confirmed.svg"
          alt="Order Confirmed"
          className="w-[42px]"
        />
        <p className="text-[40px] font-[700]">Order Confirmed</p>{" "}
        <p className="mb-6">We hope you enjoy your food!</p>
        <div className="bg-[#FCF8F5] rounded-lg px-4 w-full ">
          <div className="max-h-[300px] overflow-y-auto">
            {Object.keys(shoppingCart).map((itemName) => (
              <CartItems
                shoppingCart={shoppingCart}
                itemName={itemName}
                key={itemName}
                removeItem={removeItem}
                confirmed={true}
                thumbnail={shoppingCart[itemName].thumbnail}
              />
            ))}{" "}
          </div>
          <div className="flex justify-between items-center my-4 text-[#260f08]">
            <p className="text-[16px]">Order Total</p>
            <p className="font-[700] text-[24px]">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <div
          className="bg-[#C83B0E] flex justify-center items-center mt-8 p-4 rounded-full text-white font-[600] hover:bg-[#9e3c1c] hover:cursor-pointer"
          onClick={() => toggleModal()}
        >
          <p>Start New Order</p>
        </div>
      </div>
    </div>
  );
};
