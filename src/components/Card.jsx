import React, { useState, useEffect } from "react";

export const Card = ({
  index,
  name,
  price,
  image,
  category,
  description,
  increment,
  decrement,
  quantity,
  imageMobile,
  thumbnail,
}) => {
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setCount(quantity); // Update count when quantity prop changes
  }, [quantity]);

  const handleClick = () => {
    setCount(count + 1);
    increment(price, name, thumbnail); // Call increment when the item is added to the cart
  };

  const decrementCount = () => {
    setCount(count - 1);
    decrement(price, name); // Call decrement when the item is added to the cart
  };

  const defaultCart = (
    <div className="relative flex flex-col justify-center items-center mb-10">
      <img
        src={image}
        alt=""
        className="md:w-[250px] md:h-[240px] rounded-lg max-sm:hidden"
      />
      <img
        src={imageMobile}
        alt=""
        className="hidden max-sm:block rounded-lg"
      />
      <div
        className="bg-white border-[1px] border-[#C83B0E] rounded-full flex items-center gap-2 justify-center text-center w-[160px] h-[45px] absolute bottom-[-22.5px] hover:cursor-pointer select-none"
        onClick={handleClick}
      >
        <img src="./assets/images/icon-add-to-cart.svg" alt="" />
        <p className="text-[14px] font-[600] text-[#130907]">Add to cart</p>
      </div>
    </div>
  );

  const addedCart = (
    <div className="relative flex flex-col justify-center items-center mb-10">
      <img
        src={image}
        alt=""
        className="md:w-[250px] md:h-[240px] max-sm:hidden rounded-lg border-[3px] border-[#C83B0E]"
      />
      <img
        src={imageMobile}
        alt=""
        className="hidden max-sm:block rounded-lg border-[3px] border-[#C83B0E]"
      />

      <img src="" alt="" />
      <div className="bg-[#C83B0E] border-[1px] border-[#C83B0E] rounded-full flex items-center justify-center gap-10 text-center w-[160px] h-[45px] absolute bottom-[-22.5px] hover:cursor-pointer">
        <div
          className="border-[1px] border-white p-1 py-2 rounded-full hover:bg-white hover:stroke-current hover:text-[#C83B0E]"
          onClick={decrementCount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="2"
            fill="none"
            viewBox="0 0 10 2"
          >
            <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
          </svg>
        </div>
        <p className="text-[14px] text-white select-none">{count}</p>
        <div
          className="border-[1px] border-white p-1 rounded-full hover:bg-white hover:stroke-current hover:text-[#C83B0E]"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#fff"
              d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
  return (
    <div className="p-4 rounded-lg flex flex-col justify-center" key={index}>
      {count == 0 ? defaultCart : addedCart}
      <div className="">
        <p className="text-[14px] font-[400]">{category}</p>
        <h2 className="text-[18px] font-[600]">{name}</h2>
        <p>{description}</p>
        <p className="text-sm text-[#C83B0E] font-bold mt-1">
          ${price?.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
