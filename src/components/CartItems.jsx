import React from "react";

export const CartItems = ({
  shoppingCart,
  itemName,
  removeItem,
  confirmed,
  thumbnail,
}) => {
  const { quantity, price } = shoppingCart[itemName];

  const handleClick = (itemName, quantity, price) => {
    removeItem(itemName, quantity, price);
  };

  // CloseButton component for removing an item from the cart
  const CloseButton = () => (
    <div
      className="group border-[2px] border-[#CAAFA7] p-[4px] rounded-full hover:cursor-pointer hover:border-[#260f08]"
      onClick={() => handleClick(itemName, quantity, price)}
    >
      <img
        src="./assets/images/icon-remove-item.svg"
        alt=""
        className="group-hover:filter group-hover:invert"
      />
    </div>
  );

  return (
    <div
      key={itemName}
      className="flex justify-between items-center py-4 border-b-[1px] text-[#260f08]"
    >
      <div className="flex items-center gap-4">
        {confirmed && (
          <img
            src={thumbnail}
            alt=""
            className="w-[50px] h-[50px] inline-block rounded-md"
          />
        )}
        <div className="flex flex-col mt-2">
          <p>{itemName}</p>
          <div className="flex gap-4 mt-2">
            <p className="text-[#C83B0E] font-[700]">{quantity}x</p>
            <p>@${price.toFixed(2)}</p>
            {!confirmed ? (
              <p className="font-[600] ">${(price * quantity).toFixed(2)}</p>
            ) : null}
          </div>
        </div>
      </div>
      {confirmed ? (
        <p className="font-[700]">${(price * quantity).toFixed(2)}</p>
      ) : (
        <CloseButton />
      )}
    </div>
  );
};
