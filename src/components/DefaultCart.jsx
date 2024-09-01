import React from "react";

export const DefaultCart = () => {
  return (
    <div className="flex justify-center items-center flex-col select-none ">
      <img
        src="./assets/images/illustration-empty-cart.svg"
        alt="Empty Cart"
        className="justify-center m-8"
      />
      <p className="text-[#7E716B] mb-4 font-[400]">
        Your added items will appear here
      </p>
    </div>
  );
};
